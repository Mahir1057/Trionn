import React from "react";
import { motion } from "framer-motion";

export default function JoinOurJungleTrek() {
  return (
    <section className="w-full min-h-[60vh] bg-black text-white flex items-center justify-center px-6">
      <motion.h2
        initial={{ opacity: 0, y: 80, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 80,
        }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight text-cyan-100 text-center tracking-wide"
      >
        JOIN OUR <br /> JUNGLE <br /> TREK
      </motion.h2>
    </section>
  );
}
