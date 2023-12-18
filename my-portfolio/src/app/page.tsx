import Head from "next/head"
import Navbar from "./Navbar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ahmed Ballal</title>
        <meta name="description" content="Personal Software Engineering Portfolio" />
      </Head>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="container mx-auto py-10 px-4">
        {/* About Me Section */}
        <section id="about-section" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="text-green-500">
          Welcome to my portfolio! I am a passionate software engineer with experience in...
          </p>
          <ul className="text-cyan-200 list-disc list-inside">
            <li>HTML, CSS (Tailwind CSS)</li>
            <li>JavaScript (React, Node.js, Next.js)</li>
            <li>Java</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </section>


        {/* Projects Section */}
        <section id="projects-section" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          {/* Display projects here */}
            <ul className="text-green-200 list-disc list-inside">
              <li>Project image</li>
              <li>Project description</li>
              <li>Project link, Project source code</li>
            </ul>
        </section>


        {/* Contact Section */}
        <section id="contact-section" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          {/* Display contact info here */}
            <ul className="text-green-200 list-disc list-inside">
              <li>link to all relevant socials</li>
              <li>include a contact form</li>
            </ul>
        </section>
      </main>

    </div>
  )
}
