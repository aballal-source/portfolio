// components/Footer.tsx

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 flex flex-col items-center gap-4 text-zinc-500">
      <div className="flex gap-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="mailto:youremail@example.com"
          className="hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      <span className="text-xs tracking-wide">
        © {new Date().getFullYear()} Ahmed Ballal
      </span>
    </footer>
  );
}