import React from "react";
import { motion } from "framer-motion";

// Links Data
const links = [
  { name: "Dribbble", url: "https://dribbble.com", icon: "https://cdn-icons-png.flaticon.com/512/2111/2111402.png" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
  { name: "Instagram", url: "https://instagram.com", icon: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png" },
  { name: "Behance", url: "https://behance.net", icon: "https://cdn-icons-png.flaticon.com/512/145/145799.png" },
  { name: "Facebook", url: "https://facebook.com", icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png" },
];

export default function SocialLinks() {
  return (
    <section
      id="social-links"
      className="w-full bg-black text-white px-6 md:px-16 py-12"
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {links.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group flex justify-between items-center py-4 px-6 border-b border-gray-700 rounded-lg transition-all duration-500 hover:bg-gradient-to-r hover:from-gray-800 hover:via-gray-900 hover:to-black"
          >
            {/* Name */}
            <span className="text-xl font-medium">{link.name}</span>

            {/* Right side with Arrow + Icon */}
            <div className="flex items-center gap-4">
              {/* Arrow Animation */}
              <motion.span
                className="text-gray-400 text-lg"
                animate={{ x: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                →
              </motion.span>

              {/* Icon */}
              <img
                src={link.icon}
                alt={link.name}
                className="w-8 h-8 rounded-full"
              />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
