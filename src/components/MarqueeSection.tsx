import { motion } from "framer-motion";

export default function MarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-cyan-100 py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-[700px] h-[700px] bg-cyan-500/20 blur-[180px] rounded-full" />
      </div>

      {/* Top Line */}
      <div className="flex overflow-hidden whitespace-nowrap text-6xl md:text-8xl font-extrabold tracking-tight">
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }} // left scroll
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {Array(6)
            .fill("WILD IDEAS! — ")
            .map((text, i) => (
              <span key={i} className="mx-6">
                {text}
              </span>
            ))}
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="flex overflow-hidden whitespace-nowrap text-6xl md:text-8xl font-extrabold tracking-tight mt-10">
        <motion.div
          className="flex"
          animate={{ x: ["-100%", "0%"] }} // right scroll
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {Array(6)
            .fill("LET’S DIVE IN! — ")
            .map((text, i) => (
              <span key={i} className="mx-6">
                {text}
              </span>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
