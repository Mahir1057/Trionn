import { motion } from "framer-motion";

export default function RoarTogether() {
  return (
    <section
      id="roar-together"
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
        LET&apos;S ROAR <br /> INTO THE WILD <br /> TOGETHER.
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-gray-300 mt-6 max-w-2xl text-center text-lg"
      >
        IN THE WILDERNESS OF CHANGE, OUR WORLD&apos;S VIEW WILL ROAR INTO A NEW
        TOMORROW AND BEYOND.
      </motion.p>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-cyan-200 text-2xl"
      >
        ⌄
      </motion.div>
    </section>
  );
}
