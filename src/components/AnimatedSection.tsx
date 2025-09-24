import React from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}

export default function AnimatedSection({ children, delay = 0, direction = "up" }: AnimatedSectionProps) {
  // Define animation offset based on direction
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      variants={variants}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
