import { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

// Counter component
function Counter({ target, suffix }: { target: number; suffix?: string }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    // animate from 0 → target
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });

    // subscribe to value changes
    const unsubscribe = count.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [count, target]);

  return (
    <motion.span
      className="text-6xl md:text-7xl font-extrabold tracking-wider text-cyan-100"
      style={{ fontFamily: "'Inter Tight', sans-serif" }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}

// Data for achievements
const achievements = [
  { number: 50, suffix: "+", label: "Awards & Recognition", rotate: "-2deg" },
  { number: 900, suffix: "+", label: "Projects Completed", rotate: "2deg" },
  { number: 20, suffix: "+", label: "Creative Minds", rotate: "-3deg" },
  { number: 20, suffix: "+", label: "Years of Experience", rotate: "3deg" },
];

export default function Achievements() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-8 py-16">
      {/* Section Title */}
      <h2 className="text-5xl md:text-7xl font-extrabold text-cyan-100 mb-12 text-center">
        OUR ACHIEVEMENTS
      </h2>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{
              scale: 1.08,
              rotateX: 5,
              rotateY: -5,
              boxShadow: "0 0 40px rgba(0,255,200,0.5)",
              background:
                "radial-gradient(circle at top left, rgba(0,255,200,0.15), rgba(0,0,0,0.9))",
              borderColor: "rgba(0,255,200,0.6)",
            }}
            style={{ rotate: item.rotate }}
            className="p-12 rounded-3xl bg-gray-900 border border-gray-700 text-center cursor-pointer shadow-lg transform transition-all duration-500"
          >
            {/* Animated Number */}
            <Counter target={item.number} suffix={item.suffix} />

            {/* Label */}
            <p
              className="mt-5 text-xl font-semibold uppercase tracking-widest text-gray-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
