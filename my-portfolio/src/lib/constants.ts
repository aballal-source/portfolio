import { Project, Skill, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "My Portfolio",
    imgPath: "/ss1.jpg",
    description: "Developed this portfolio website to showcase my skills. Utilized Next.js, TypeScript, Tailwind, and CSS.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    demoLink: "#/",
    sourceCodeLink: "https://github.com/aballal-source/portfolio",
    featured: true,
  },
  {
    id: "ai-img-generator",
    title: "AI IMG Generator",
    imgPath: "/auraframe.jpg",
    description: "Utilized OpenAI's Chat GPT-3.5-Turbo and DALL-E APIs to produce a thumbnail image based on a video title. Built with React.js, Deployed with Netlify.",
    technologies: ["React", "OpenAI API", "DALL-E", "Netlify"],
    demoLink: "https://auraframe.netlify.app/",
    sourceCodeLink: "https://github.com/aballal-source/AI-Thumbnail-Generator",
    featured: true,
  },
  {
    id: "study-partner",
    title: "Study Partner",
    imgPath: "/sfsuSP.jpg",
    description: "Encouraged students to conduct online study sessions and schedule study meetings. Designed with react-bootstrap, 100ms APIs, and deployed using Vercel",
    technologies: ["React", "Bootstrap", "100ms API", "Vercel"],
    demoLink: "https://sfsu-study-partner.vercel.app/#about",
    sourceCodeLink: "https://github.com/GurinderS120/sfsu-study-partner",
    featured: true,
  },
  {
    id: "fragrant",
    title: "FraGrant",
    imgPath: "/fragrant.jpg",
    description: "Collaborated in a 6-member Agile Development team building an e-commerce web app for my software engineering class at SFSU. Utilized the MERN stack and deployed via AWS.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "AWS"],
    sourceCodeLink: "https://github.com/CSC-648-SFSU/csc-648-project-csc648-04-fa22-team03",
  },
  {
    id: "sudo-store",
    title: "Sudo Store",
    imgPath: "/sudo.jpg",
    description: "Collaborated in a 4-member team to build an online storefront for my web development class at SFSU. We built the skeleton with basic HTML, then incorporated CSS, JavaScript, and PHP.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    sourceCodeLink: "https://github.com/jbeyer28/teamsudo",
  },
  {
    id: "ninja-runner",
    title: "Ninja Runner",
    imgPath: "/ninja.jpg",
    description: "An 'endless' web-browser game I built for my web development class at SFSU. using HTML, CSS, and JavaScript",
    technologies: ["HTML", "CSS", "JavaScript"],
    sourceCodeLink: "https://github.com/aballal-source/NinjaRunner/tree/main",
  },
];

export const skills: Skill[] = [
  { name: "HTML, CSS (Tailwind CSS)", category: "frontend", proficiency: "expert" },
  { name: "JavaScript (React, Node.js, Next.js)", category: "frontend", proficiency: "expert" },
  { name: "TypeScript", category: "language", proficiency: "advanced" },
  { name: "Java", category: "language", proficiency: "advanced" },
  { name: "C++", category: "language", proficiency: "intermediate" },
  { name: "Python", category: "language", proficiency: "advanced" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aballal",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:dev@ahmedballal.com",
    icon: "email",
  },
  {
    name: "GitHub",
    url: "https://github.com/aballal-source",
    icon: "github",
  },
];

export const siteConfig = {
  name: "Ahmed Ballal",
  title: "Ahmed Ballal | Frontend Web Developer for Small Businesses",
  description: "Frontend-leaning web developer specializing in modern, high-performance websites for small businesses. Expert in React, Next.js, TypeScript, and creating exceptional digital experiences.",
  url: "https://ahmedballal.com",
  ogImage: "/og-image.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/aballal",
    github: "https://github.com/aballal-source",
    email: "dev@ahmedballal.com",
  },
};

export const services = [
  {
    id: "web-development",
    title: "Custom Web Development",
    description: "Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript. Tailored solutions that scale with your business.",
    icon: "💻",
  },
  {
    id: "frontend-optimization",
    title: "Frontend Optimization",
    description: "Performance-focused development ensuring fast load times, smooth animations, and exceptional user experiences that convert visitors into customers.",
    icon: "⚡",
  },
  {
    id: "responsive-design",
    title: "Responsive Design",
    description: "Mobile-first designs that look stunning on all devices. Your website will provide an excellent experience whether viewed on desktop, tablet, or mobile.",
    icon: "📱",
  },
  {
    id: "seo-optimization",
    title: "SEO & Performance",
    description: "Built-in SEO optimization and performance monitoring. Your site will rank better and load faster, improving both user experience and search visibility.",
    icon: "🔍",
  },
  {
    id: "maintenance",
    title: "Ongoing Support",
    description: "Continuous maintenance, updates, and improvements to keep your website secure, fast, and aligned with the latest web standards and best practices.",
    icon: "🛠️",
  },
  {
    id: "consultation",
    title: "Technical Consultation",
    description: "Expert advice on web technologies, architecture decisions, and best practices to help your business make informed digital strategy choices.",
    icon: "💡",
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    name: "Client Name",
    role: "Business Owner",
    company: "Company Name",
    content: "Ahmed delivered an exceptional website that perfectly captured our brand. The site is fast, beautiful, and has significantly improved our online presence.",
    rating: 5,
  },
  {
    id: "testimonial-2",
    name: "Client Name",
    role: "Founder",
    company: "Startup Name",
    content: "Working with Ahmed was a pleasure. He understood our vision and translated it into a modern, user-friendly website that our customers love.",
    rating: 5,
  },
  {
    id: "testimonial-3",
    name: "Client Name",
    role: "Marketing Director",
    company: "Small Business",
    content: "The attention to detail and performance optimization exceeded our expectations. Our website loads instantly and provides an excellent user experience.",
    rating: 5,
  },
];
