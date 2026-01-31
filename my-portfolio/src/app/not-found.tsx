"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <h1 className="text-6xl font-bold text-cyan-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-stone-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button as="a" href="/" variant="primary">
          Go Home
        </Button>
      </motion.div>
    </div>
  );
}
