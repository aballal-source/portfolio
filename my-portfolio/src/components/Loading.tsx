"use client";

import React from "react";
import { motion } from "framer-motion";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black">
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="relative w-16 h-16"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 rounded-full" />
        </motion.div>
        <motion.p
          className="text-cyan-400 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
};

export default Loading;
