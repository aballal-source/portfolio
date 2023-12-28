//Navbar.tsx

const Navbar: React.FC = () => {
    return (
        <nav className="bg-zinc-900 p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Portfolio Title */}
                <a href="#about-section">
                    <span className="md:block text-stone-400 text-lg transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-500 hover:text-green-400 hover:brightness-125">
                        AhmedBallal.com
                    </span>
                </a>

                {/* Navigation Links */}
                <div className="items-end flex flex-col mx-0 md:flex-row space-x-8 md:space-x-8">
                    <a href="#about-section" className="text-white transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-500 hover:text-cyan-200 hover:brightness-125">
                        About
                    </a>
                    <a href="#projects-section" className="text-white transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-500 hover:text-cyan-200 hover:brightness-125">
                        Projects
                    </a>
                    <a href="#contact-section" className="text-white transition-all duration-300 ease-in-out hover:border-b hover:border-zinc-500 hover:text-cyan-200 hover:brightness-125">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
