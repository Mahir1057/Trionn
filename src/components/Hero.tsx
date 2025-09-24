import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
import introVideo from "../assets/intro-video.mp4";

export default function Hero() {
  const navigate = useNavigate(); // ✅ navigation hook

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6 pt-20 md:pt-24"
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-extrabold mb-6"
      >
        ROAR IN THE <br /> DIGITAL WILDERNESS.
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl text-gray-300 mb-10"
      >
        WE ROAR WITH SUCCESS, DELIVERING THE TRIONN® THROUGH VERSATILE DESIGN,
        BRANDING AND THE LATEST TECH DEVELOPMENT TO COMPANIES.
      </motion.p>

      {/* Video */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="mt-12 w-full max-w-lg"
      >
        <video
          src={introVideo}
          autoPlay
          loop
          muted
          className="rounded-2xl shadow-lg cursor-pointer"
        />
      </motion.div>

      {/* Explore Work button → Navigate to /legacy */}
      <motion.button
        onClick={() => navigate("/legacy")} // ✅ redirect
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-6 left-6 border border-cyan-200 text-cyan-200 px-6 py-3 rounded-full hover:bg-cyan-200 hover:text-black transition"
      >
        Explore work
      </motion.button>

      {/* Get in Touch button → Navigate to /roar */}
      <motion.button
        onClick={() => navigate("/roar")} // ✅ redirect
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 right-6 border border-cyan-200 text-cyan-200 px-6 py-3 rounded-full hover:bg-cyan-200 hover:text-black transition"
      >
        Get in touch
      </motion.button>

      <motion.button
        onClick={() => navigate("/legacy")}
        className="magnetic-btn absolute bottom-6 left-6 border border-cyan-200 text-cyan-200 px-6 py-3 rounded-full hover:bg-cyan-200 hover:text-black transition"
>
         Explore work
         </motion.button>

        <motion.button
          onClick={() => navigate("/roar")}
          className="magnetic-btn absolute bottom-6 right-6 border border-cyan-200 text-cyan-200 px-6 py-3 rounded-full hover:bg-cyan-200 hover:text-black transition"
        >
          Get in touch
        </motion.button>

    </section>
  );
}
