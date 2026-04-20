import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";


export default function Home() {
  const projects = [
    {
      title: "BugHunt",
      imgPath: "/bughunt.png",
      description:
        "BugHunt is a full-stack web application where gamers can submit bug reports for their favorite games, upvote issues other players have found, and track whether developers have patched them. It features a public bug reporting dashboard, an admin triage panel, and an analytics dashboard (all reflecting real-time data from a PostgreSQL database). Built from a QA engineer's perspective: I wrote a formal test plan, executed 30 manual test cases, logged 2 defects in Linear with full defect lifecycle documentation, and built an automated regression suite using Playwright and pytest that runs 10 critical user flows in under 10 seconds.",
      sourceCodeLink: "https://github.com/aballal-source/bughunt",
      category: "Web App · QA",
    },
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
      imgPath: "/goodvibe.png",
      description:
        "Quick-commerce storefront built on Squarespace with custom layout, product flow, and checkout UX optimized for speed.",
      demoLink: "https://futurecorpdc.com/",
      category: "E-Commerce · Client Work",
    },
    {
      title: "BarberJon's",
      category: "Small Business · Client Work",
      imgPath: "/barberjons.png",
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
