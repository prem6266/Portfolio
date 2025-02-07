"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h2>
          <p className="text-sm text-muted-foreground mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be a part of your visions.
          </p>
          <div className="flex gap-4 mb-8">
            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="hover:scale-110 transition-transform duration-200 hover:border-primary"
            >
              <a
                href="mailto:premjoshi6266@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mail"
              >
                <Mail className="w-4 h-4 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="hover:scale-110 transition-transform duration-200 hover:border-primary"
            >
              <a
                href="https://github.com/prem6266"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:scale-110 transition-transform duration-200 hover:border-primary"
              >
                <Github className="w-4 h-4 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="hover:scale-110 transition-transform duration-200 hover:border-primary"
            >
              <a
                href="https://www.linkedin.com/in/prem-kumar-joshi-63b258246/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 hover:text-primary transition-colors" />
              </a>
            </Button>
            <Button
              variant={"outline"}
              size={"icon"}
              asChild
              className="hover:scale-110 transition-transform duration-200 hover:border-primary"
            >
              <a
                href="https://leetcode.com/u/prem6266/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
              >
                <Code className="w-4 h-4 hover:text-primary transition-colors" />
              </a>
            </Button>
          </div>
          <Card className="px-4 py-4">
            <ContactForm />
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center mt-20"
        >
          <Image src="/contact.svg" alt="Contact" width={700} height={700} />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
