import Navbar from "./Navbar"
import ProjectSection from "./ProjectSection";
import Head from "next/head";

export default function Home() {
  const projects = [
    {
      title:"My Portfolio",
      imgPath:"/ss1.jpg",
      description:"Developed this portfolio website to showcase my skills. Utilized Next.js, TypeScript, Tailwind, and CSS.",
      demoLink:"#/",
      sourceCodeLink:"https://github.com/aballal-source/portfolio",
    },
    {
      title:"AI IMG Generator",
      imgPath:"/auraframe.jpg",
      description:"Utilized OpenAI's Chat Gpt-3.5-Turbo and DALL-E APIs to produce a thumbnail image based on a video title. Built with React.js, Deployed with netlify.",
      demoLink:"https://auraframe.netlify.app/",
      sourceCodeLink:"https://github.com/aballal-source/AI-Thumbnail-Generator",
    },
    {
      title:"Study Partner",
      imgPath:"/sfsuSP.jpg",
      description:"Encouraged students to conduct online study sessions and schedule study meetings. Designed with react-bootstrap, 100ms APIs, and deployed using vercel",
      demoLink:"https://sfsu-study-partner.vercel.app/#about",
      sourceCodeLink:"https://github.com/GurinderS120/sfsu-study-partner",
    },
    {
      title:"FraGrant",
      imgPath:"/fragrant.jpg",
      description:"Collaborated in a 6-member Agile Development team building an e-commerce web app for my software engineering class at SFSU. Utilized the MERN stack and deployed via AWS.",
      sourceCodeLink:"https://github.com/CSC-648-SFSU/csc-648-project-csc648-04-fa22-team03",
    },
    {
      title:"Sudo Store",
      imgPath:"/sudo.jpg",
      description:"Collaborated in a 4-member team to build an online storefront for my web development class at SFSU. We built the skeleton with basic HTML, then incorporated CSS, JavaScript, and PHP.",
      sourceCodeLink:"https://github.com/jbeyer28/teamsudo",
    },
    {
      title:"Ninja Runner",
      imgPath:"/ninja.jpg",
      description:"An 'endless' web-browser game I built for my web development class at SFSU. using HTML, CSS, and JavaScript",
      sourceCodeLink:"https://github.com/aballal-source/NinjaRunner/tree/main",
    },
  ];

  return (
    <div>
      <Navbar />

      <Head>
        <title>Ahmed Ballal</title>
        <meta name="description" content="Ahmed Ballal Software Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
                <div className="skill" data-not-last="true" style={{ animationDelay: `1s`, fontSize: '1.5em'}}>HTML, CSS (Tailwind CSS)</div>
                <div className="skill" data-not-last="true" style={{ animationDelay: `3s`, fontSize: '1.5em'}}>JavaScript (React, Node.js, Next.js)</div>
                <div className="skill" data-not-last="true" style={{ animationDelay: `5.5s`, fontSize: '1.5em'}}>Java</div>
                <div className="skill" data-not-last="true" style={{ animationDelay: `6s`, fontSize: '1.5em'}}>C++</div>
                <div className="skill last-skill" style={{ animationDelay: `6.5s`, fontSize: '1.5em'}}>Python</div>
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
          <p className="mb-4 text-stone-400">Note: Projects labled &apos;Local&apos; are production-ready school projects that have not been made public. You can download the source code via the GitHub link to run a project locally.</p>

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
        <section id="contact-section" className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          {/* Display contact info here */}
            <div>
              <p className="mb-4 text-stone-400">resume available upon request</p>
              <p className="text-green-200">Feel free to connect with me:</p>
              
              {/* Separator */}
              <div className="mb-4"></div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mb-4">
                <a href="https://www.linkedin.com/in/aballal" target="_blank" rel="noopener noreferrer" className="text-white transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-500 hover:text-green-400 hover:brightness-125"
                >
                  LinkedIn
                </a>
                <a href="mailto:dev@ahmedballal.com" className="text-white transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-500 hover:text-green-400 hover:brightness-125"
                >
                  Email
                </a>
                <a href="https://github.com/aballal-source" className="text-white transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-500 hover:text-green-400 hover:brightness-125"
                >
                  GitHub
                </a>
              </div>
            </div>
        </section>
      </main>

    </div>
  )
}
