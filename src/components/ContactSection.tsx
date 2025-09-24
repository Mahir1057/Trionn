import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="w-full bg-black text-cyan-100 px-8 md:px-16 py-20 relative">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-6xl md:text-8xl font-extrabold leading-tight mb-12"
      >
        TIME TO <br /> ROAR!
      </motion.h2>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-20 right-12 md:right-20 bg-cyan-200 text-black font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-cyan-300 transition"
      >
        Get Started →
      </motion.button>

      {/* Divider */}
      <div className="border-t border-gray-500 my-12" />

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">Email</p>
          <a href="mailto:hello@trionn.com" className="text-cyan-200 hover:underline">
            hello@trionn.com
          </a>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">Call</p>
          <a href="tel:+919824182099" className="text-cyan-200 hover:underline">
            +91 98241 82099
          </a>
        </motion.div>

        {/* Teams */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400">Teams</p>
          <span className="text-cyan-200">Talk to Trionn</span>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 mt-12" />
    </section>
  );
}
