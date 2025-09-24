import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import floralCard from "../assets/dribbble1.webp";
import foodCard from "../assets/dribbble2.webp";
import financeCard from "../assets/dribbble3.webp";

export default function DribbbleShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Shared transforms for scroll animation
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  // Array of cards
  const cards = [
    { src: floralCard, alt: "Floral Card" },
    { src: foodCard, alt: "Food Card" },
    { src: financeCard, alt: "Finance Card" },
  ];

  return (
    <section
      ref={ref}
      className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden px-6"
    >
      {/* Heading */}
      <motion.h2
        style={{ opacity }}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl md:text-4xl mb-6 text-gray-200"
      >
        Like a lion&apos;s roar echoing through the jungle, a hint of our
        creative minds emerges.
      </motion.h2>

      {/* Button */}
      <motion.button
        style={{ opacity }}
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-12 border border-cyan-200 text-cyan-200 px-8 py-3 rounded-full hover:bg-cyan-200 hover:text-black transition"
      >
        View Dribbble
      </motion.button>

      {/* Cards */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-center gap-8 perspective-1000">
        {cards.map((card, index) => (
          <motion.img
            key={index}
            src={card.src}
            alt={card.alt}
            style={{ rotate, scale, opacity }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              rotateX: -10,
              rotateY: 10,
              scale: 1.05,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 0.95 }}
            className="w-72 md:w-96 rounded-2xl shadow-lg cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}
