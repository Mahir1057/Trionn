import React from "react";
import { motion } from "framer-motion";

export default function LetsTalkButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      className="fixed top-1/2 right-6 -translate-y-1/2 z-50 cursor-pointer"
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-32 h-32"
      >
        {/* Outer Circle */}
        <circle
          cx="100"
          cy="100"
          r="95"
          fill="black"
          stroke="#e5e7eb"
          strokeWidth="2"
        />

        {/* Rotating Curved Text */}
        <defs>
          <path
            id="textcircle"
            d="M100,100 m-85,0 a85,85 0 1,1 170,0 a85,85 0 1,1 -170,0"
          />
        </defs>

        <motion.g
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          whileHover={{ rotate: 0 }} // pause rotation on hover
          style={{ transformOrigin: "100px 100px" }}
        >
          <text
            fill="#e5e7eb"
            fontSize="12"
            letterSpacing="4"
            fontFamily="sans-serif"
          >
            <textPath href="#textcircle" startOffset="0%">
              LET’S TALK NOW! • LET’S TALK NOW!
            </textPath>
          </text>
        </motion.g>

        {/* Inner Circle */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="black"
          stroke="#e5e7eb"
          strokeWidth="1.5"
        />

        {/* Geometric Lion Face */}
        <g
          transform="translate(100,100) scale(0.4)"
          stroke="#67e8f9"
          strokeWidth="3"
          fill="none"
        >
          <polygon points="0,-80 70,-40 50,60 -50,60 -70,-40" />
          <polygon points="-25,-10 -10,-20 -10,0 -25,10" fill="#67e8f9" />
          <polygon points="25,-10 10,-20 10,0 25,10" fill="#67e8f9" />
          <polygon points="0,10 12,25 -12,25" fill="#67e8f9" />
          <polygon points="-25,40 25,40 0,60" fill="#67e8f9" />
        </g>
      </svg>
    </motion.div>
  );
}
