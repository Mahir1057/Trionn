import React from "react";
import { motion } from "framer-motion";

export default function LegacyStatement() {
  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="legacy-statement"
      className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center px-6 relative"
    >
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight"
      >
        OUR CREATIVE <br /> ROAR DEFINES OUR <br /> LEGACY.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 mt-6 max-w-2xl text-center text-lg"
      >
        OUR CREATIVE LEGACY ROARS WITH PRIDE AS WE SHOWCASE THE VALUE WE BRING
        TO OUR CLIENTS.
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        onClick={() => scrollToSection("roar-together")} // 👈 link to RoarTogether
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-cyan-200 text-3xl cursor-pointer hover:scale-125 transition-transform"
      >
        ⌄
      </motion.div>
    </section>
  );
}
