import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";


export default function Home() {
  const projects = [
    {
      title: "FUTURECORPDC",
      imgPath: "/futurecorp.jpg",
      description:
        "Marketing website for an emerging design-build studio. Built with WordPress. Custom theme development with JavaScript and CSS to meet client branding needs.",
      demoLink: "https://futurecorpdc.com/",
      category: "Marketing Site · Client Work",
    },
    {
      title: "GoodVibe Outdoor Living",
      imgPath: "/goodvibe.jpg",
      description:
        "Quick-commerce storefront built on Squarespace with custom layout, product flow, and checkout UX optimized for speed.",
      demoLink: "https://www.goodvibeoutdoorliving.com/",
      category: "E-Commerce · Client Work",
    },
    {
      title: "BarberJon's",
      category: "Small Business · Client Work",
      imgPath: "/BarberJons.jpg",
      description:
        "Clean, responsive website for a local barbershop. Booking and inventory management system integrated via SQUIRE API, UI built with Next.js and TypeScript, with client handoff via Squarespace.",
      demoLink: "https://barberjons.com/",
      sourceCodeLink: "https://github.com/aballal-source/worldfamous",
    },
    {
      title: "AuraFrame",
      category: "Web App · AI",
      imgPath: "/auraframe.jpg",
      description:
        "AI-powered web app that generates custom thumbnails from text prompts using OpenAI APIs, designed with a fast, feedback-driven UX.",
      demoLink: "https://auraframe.netlify.app/",
      sourceCodeLink: "https://github.com/aballal-source/AI-Thumbnail-Generator",
    },
  ];

  return (
    <div>
      <Navbar />

      <Hero />
      <main className="container mx-auto py-10 px-4">
        {/* Projects Section */}
        <section id="projects-section" className="mb-8">

          {/* Display projects here */}
          <ProjectSection projects={projects} />
        </section>

        
        {/* Contact Section */}
        <section id="contact">
          <Footer />
        </section>
      </main>

    </div>
  )
}
