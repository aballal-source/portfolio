"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card";

interface FormData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission (replace with actual API call)
    try {
      // In production, replace this with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // For now, we'll use mailto as fallback
      const subject = encodeURIComponent(
        `Contact from ${formData.name}${formData.company ? ` - ${formData.company}` : ""}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:dev@ahmedballal.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto"
    >
      <Card className="border-cyan-500/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/3 via-transparent to-green-500/3 pointer-events-none" />
        <CardHeader className="relative z-10 pb-4">
          <CardTitle className="text-2xl mb-2">Send a Message</CardTitle>
          <CardDescription className="text-stone-400 text-sm leading-relaxed">
            Have a project in mind? Let&apos;s discuss how I can help bring your vision to life.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-stone-300 mb-2"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium text-stone-300 mb-2"
              >
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-stone-800/50 border border-stone-700 rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-stone-300 mb-2"
              >
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 glass-effect rounded-lg text-white placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/30 transition-all resize-none text-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400"
              >
                Message sent successfully! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400"
              >
                Something went wrong. Please try again or email me directly.
              </motion.div>
            )}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={!isFormValid || isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ContactForm;
