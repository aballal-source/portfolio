import Navbar from "./Navbar"
import ProjectSection from "./ProjectSection";

export default function Home() {
  const projects = [
    {
      title:"My Portfolio",
      imgPath:"/ss1.png",
      description:"Developed this portfolio website to showcase my skills. Utilized React, Next.js, TypeScript, Tailwind, and CSS.",
      demoLink:"#/",
      sourceCodeLink:"https://github.com/aballal-source/portfolio",
    },
    {
      title:"My Portfolio",
      imgPath:"/ss1.png",
      description:"Developed this portfolio website to showcase my skills. Utilized React, Next.js, TypeScript, Tailwind, and CSS.",
      demoLink:"#/",
      sourceCodeLink:"https://github.com/aballal-source/portfolio",
    },
    {
      title:"My Portfolio",
      imgPath:"/ss1.png",
      description:"Developed this portfolio website to showcase my skills. Utilized React, Next.js, TypeScript, Tailwind, and CSS.",
      demoLink:"#/",
      sourceCodeLink:"https://github.com/aballal-source/portfolio",
    },
    {
      title:"My Portfolio",
      imgPath:"/ss1.png",
      description:"Developed this portfolio website to showcase my skills. Utilized React, Next.js, TypeScript, Tailwind, and CSS.",
      demoLink:"#/",
      sourceCodeLink:"https://github.com/aballal-source/portfolio",
    },
    {
      title:"My Portfolio",
      imgPath:"/ss1.png",
      description:"Developed this portfolio website to showcase my skills. Utilized React, Next.js, TypeScript, Tailwind, and CSS.",
    },
    {
      title:"My Portfolio",
      imgPath:"/ss1.png",
      description:"Developed this portfolio website to showcase my skills. Utilized React, Next.js, TypeScript, Tailwind, and CSS.",
      demoLink:"#/",
      sourceCodeLink:"https://github.com/aballal-source/portfolio",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4">
        {/* About Me Section */}
        <section id="about-section" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-green-400"> Hello there! My name is<span className="name"> Ahmed Ballal</span> and I am a passionate software engineer with experience in...</p>
          {/* Separator */}
          <div className="border-b mb-4"></div>

          {/* Skills List */}
            <div className="text-cyan-200 list-disc list-inside mb-4">
              <div className="skill-wrapper">
                <div className="skill" data-not-last="true" style={{ animationDelay: `1s`}}>HTML, CSS (Tailwind CSS)</div>
                <div className="skill" data-not-last="true" style={{ animationDelay: `3s`}}>JavaScript (React, Node.js, Next.js)</div>
                <div className="skill" data-not-last="true" style={{ animationDelay: `5.5s`}}>Java</div>
                <div className="skill" data-not-last="true" style={{ animationDelay: `6s`}}>C++</div>
                <div className="skill last-skill" style={{ animationDelay: `6.5s`}}>Python</div>
              </div>
            </div>

          {/* Separator */}
          <div className="border-b mb-4"></div>

          {/* Call to Action */}
          <p className="text-green-400"> Check out my work!</p>
          {/* Separator */}
          <div className="border-b mb-4"></div>

          {/* Button Nav to Projects section */}
          <a 
            href="#projects-section" 
            className="animate-bounce mb-2 transition-all duration-300 ease-in-out hover:border-b hover:text-green-400 hover:brightness-125">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>

        </section>


        {/* Projects Section */}
        <section id="projects-section" className="mb-8">

          {/* Display projects here */}
          <ProjectSection projects={projects} />

          <p className="text-green-400"> Get in touch!</p>
          {/* Separator */}
          <div className="border-b mb-4"></div>

        {/* Button Nav to Contact section button */}
        <a 
          href="#contact-section" 
          className="animate-bounce mb-2 transition-all duration-300 ease-in-out hover:border-b hover:text-green-400 hover:brightness-125">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
        </section>


        {/* Contact Section */}
        <section id="contact-section" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          {/* Display contact info here */}
            <div className="text-green-200 list-none list-inside">
              <li>resume available upon request</li>
              <li>Send me an email or message me on LinkedIn</li>
            </div>
        </section>
      </main>

    </div>
  )
}
