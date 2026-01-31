import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectSection from "./ProjectSection";
import Footer from "./Footer";
import LavaLamp from "./LavaLamp";


export default function Home() {
  const projects = [
    {
      title: "Personal Portfolio",
      imgPath: "/ss1.jpg",
      description:
        "Designed and built a responsive personal website focused on clarity, UX, and performance using Next.js and Tailwind CSS.",
      demoLink: "https://ahmedballal.com",
      sourceCodeLink: "https://github.com/aballal-source/portfolio",
    },
    {
      title: "AI Thumbnail Generator",
      category: "Web Experiment",
      imgPath: "/auraframe.jpg",
      description:
        "Built a frontend interface that generates custom thumbnail images from text input using OpenAI APIs, with a focus on usability and fast feedback.",
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
