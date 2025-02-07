"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { hero_content } from "@/constants";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 pt-32 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">Prem Kumar Joshi</span>
          </h1>
          <p className="pb-2 tracking-tighter bg-gradient-to-r from-stone-300 to-blue-600 bg-clip-text text-4xl font-bold  text-transparent  lg:text-5xl">
            Frontend Developer
          </p>
          <p className="text-lg md:text-md text-muted-foreground mb-8">
            {hero_content}
          </p>
          <div className="flex gap-4">
            <Link href="#contact">
              <Button variant="default" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </Link>

            <Link href="https://github.com/prem6266" target="_blank">
              <Button
                variant="outline"
                className="gap-2 border-white transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image src={"/profile.svg"} alt="hero" width={500} height={500} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
