
import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";

export default function WhoWeAre() {
  return (
    <section id="who-we-are"className="relative w-full bg-black text-white flex flex-col justify-center px-8 py-16 md:py-24 overflow-hidden">
      {/* Animated Gradient Background */}
      <BackgroundGlow />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(0,255,255,0.15), transparent 70%)",
              "radial-gradient(circle at 80% 70%, rgba(0,200,255,0.15), transparent 70%)",
              "radial-gradient(circle at 50% 50%, rgba(0,255,200,0.15), transparent 70%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="absolute inset-0"
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
        className="relative text-6xl md:text-8xl font-extrabold leading-tight text-cyan-100 z-10"
      >
        WHO <br /> WE ARE
      </motion.h2>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="relative text-gray-300 mt-6 max-w-2xl text-lg z-10"
      >
        As an award-winning agency within the digital jungle, TRIONN® transcends
        aesthetics, crafting your vision into a legacy that endures.
      </motion.p>
    </section>
  );
}
