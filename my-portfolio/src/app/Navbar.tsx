//Navbar.tsx
const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-10 bg-black/70 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="#about">
          <span className="font-semibold tracking-wide text-stone-200 hover:text-green-400 transition">
            Ahmed Ballal
          </span>
        </a>

        <div className="flex gap-6 text-sm">
          <a href="#projects" className="hover:text-green-400 transition">Projects</a>
          <a href="#contact" className="hover:text-green-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar