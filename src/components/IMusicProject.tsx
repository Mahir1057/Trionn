import { motion } from "framer-motion";
import imusicImage from "../assets/imusic-main-landscape.webp";

export default function IMusicProject() {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 py-16">
      {/* Left Side - Image */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center mt-10 md:mt-0"
      >
        <img
          src={imusicImage}
          alt="IMusic Project"
          className="w-[90%] md:w-[80%] rounded-2xl shadow-lg"
        />
      </motion.div>

      {/* Right Side - Text */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-1 flex flex-col justify-center items-start space-y-6 md:pl-12"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-cyan-100">
          IMUSIC
        </h2>
        <p className="text-gray-400 text-lg">Research, UX, UI Design</p>
        <button className="border border-cyan-200 text-cyan-200 px-8 py-3 rounded-full hover:bg-cyan-200 hover:text-black transition">
          View project
        </button>
      </motion.div>
    </section>
  );
}
