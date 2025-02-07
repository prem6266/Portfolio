import { NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

const schema = z.object({
  name: z.string().min(2).max(50).trim(),
  email: z.string().email().max(100).trim().toLowerCase(),
  message: z.string().min(10).max(1000).trim(),
  // Removed subject field since it's not in the form
});

export async function POST(request: Request) {
  try {
    // Validate request content-type
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { message: 'Invalid content type. Expected JSON' },
        { status: 400 }
      );
    }

    const json = await request.json();
    
    // Parse and validate the request body
    const result = schema.safeParse(json);
    if (!result.success) {
      return NextResponse.json(
        { 
          message: 'Invalid form data',
          errors: result.error.errors 
        },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    if (!process.env.RESEND_API_KEY) {
      throw new Error('Missing Resend API key');
    }

    const emailTemplate = `
      New Contact Form Submission

      From: ${name}
      Email: ${email}

      Message:${message}
    `;

    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['premjoshi6266@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      text: emailTemplate,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { message: 'Failed to send email', error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in contact form:', error);
    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
