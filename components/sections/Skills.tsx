"use client";
import React from "react";
import { motion } from "framer-motion";
import { technologies } from "@/constants";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="flex items-center justify-center text-3xl md:text-4xl font-bold mb-8 gap-2">  

         <span className="text-primary">Skills </span> & Technologies  
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8  "
      >
        {technologies.map((tech, index) => (
          <Card
            key={index}
            className="flex flex-col items-center justify-center hover:border-primary transition-colors px-4 py-2 cursor-pointer"
          >
            <Image
              src={tech.logo}
              alt={tech.name}
              width={50}
              height={50}
              className="mb-2"
            />
            <span className="text-sm font-medium">{tech.name}</span>
          </Card>
        ))}
      </motion.div>
    </>
  );
};

export default Skills;
