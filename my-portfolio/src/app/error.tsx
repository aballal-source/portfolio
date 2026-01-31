"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full text-center"
      >
        <h1 className="text-4xl font-bold text-red-400 mb-4">
          Something went wrong
        </h1>
        <p className="text-stone-400 mb-2">
          {error.message || "An unexpected error occurred."}
        </p>
        {error.digest && (
          <p className="text-stone-500 text-sm mb-6">Error ID: {error.digest}</p>
        )}
        <div className="flex gap-4 justify-center">
          <Button onClick={reset} variant="primary">
            Try Again
          </Button>
          <Button
            onClick={() => (window.location.href = "/")}
            variant="outline"
          >
            Go Home
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
