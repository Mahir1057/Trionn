// src/components/BackgroundGlow.tsx
import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
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
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        className="absolute inset-0"
      />
    </motion.div>
  );
}
