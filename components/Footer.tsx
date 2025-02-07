"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, LocateIcon, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-primary mb-4">
              Prem Kumar Joshi
            </h3>
            <p className="text-muted-foreground mb-4">
              Frontend Developer crafting modern web experiences with a focus on
              user experience and performance.
            </p>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform duration-200 hover:border-primary"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 hover:text-primary transition-colors" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform duration-200 hover:border-primary"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 hover:text-primary transition-colors" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:scale-110 transition-transform duration-200 hover:border-primary"
              >
                <a
                  href="mailto:premjoshi6266@gmail.com"
                  aria-label="Email Contact"
                >
                  <Mail className="w-4 h-4 hover:text-primary transition-colors" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block transform duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground flex items-center gap-2 hover:text-primary transition-colors">
                <LocateIcon className="w-4 h-4" />
                <p className="text-sm font-medium">
                  Sector - 15, Rohini, New Delhi, india
                </p>
              </li>
              <li>
                <a
                  href="mailto:premjoshi6266@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <p className="text-sm font-medium">premjoshi6266@gmail.com</p>
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-muted-foreground  hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <p className="text-sm font-medium">+91 8750726679</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prem Kumar Joshi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1 group">
            Made with{" "}
            <Heart className="w-4 h-4 text-red-500 group-hover:scale-125 transition-transform duration-200" />{" "}
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
