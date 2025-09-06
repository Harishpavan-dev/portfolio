import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { BsSun, BsMoon } from "react-icons/bs";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Toggle dark/light theme
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header
      className="bg-[#FFFFFF] dark:bg-[#1a1a1a] transition-colors duration-300 shadow-md"
      aria-label="Main navigation header"
    >
      <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter text-[#000] dark:text-white">
        
        {/* Logo with keywords */}
       <div>
  <h1 className="flex items-center gap-3 text-[2.5rem] font-bold hover:text-[#fe5617]">
    <img
      className="w-[45px] h-[50px] rounded-full"
      src="Harishpavan-profile.jpg"
      alt="Bavananthan Harishpavan - Developer & Cybersecurity Enthusiast"
      loading="lazy"
    />
    Harish
  </h1>
</div>


        {/* Theme toggle & Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark/light theme"
            className="text-[#fe5617]"
          >
            {theme === "light" ? <BsMoon size={22} /> : <BsSun size={22} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="transition-all duration-500 ease-in text-[#fe5617]"
          >
            {isMenuOpen ? <HiX size={29} /> : <HiMenuAlt3 size={29} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-[70px] left-0 w-full bg-[#F2EFE5] dark:bg-[#2d2d2d] p-5 lg:p-0 lg:relative lg:block lg:w-auto lg:px-5 lg:py-3 lg:rounded-2xl lg:top-0`}
          aria-label="Primary site navigation"
        >
          <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
            {[
              { to: "home", label: "Home" },
              { to: "about", label: "About Me" },
              { to: "services", label: "Services" },
              { to: "Education", label: "Education" },
              { to: "projects", label: "Projects" },
              { to: "contact", label: "Contact" },
            ].map((item) => (
              <Link key={item.to} to={item.to} smooth={true} duration={1000}>
                <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          {/* Social Links for Mobile */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } mt-3 justify-center gap-5`}
          >
            <a
              href="https://github.com/Harishpavan-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Harishpavan"
              className="hover:text-[#fe5617]"
            >
              <FaGithub size={29} />
            </a>
            <a
              href="https://www.linkedin.com/in/harishpavan-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Harishpavan"
              className="hover:text-[#fe5617]"
            >
              <FaLinkedin size={29} />
            </a>
            <a
              href="https://www.instagram.com/harishpavan_dev/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile of Harishpavan"
              className="hover:text-[#fe5617]"
            >
              <FaInstagram size={29} />
            </a>
            <a
              href="https://wa.me/94764328867?text=Hi%20Harish!"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp contact for Harishpavan"
              className="hover:text-[#fe5617]"
            >
              <FaWhatsapp size={29} />
            </a>
          </div>
        </nav>

        {/* Social Media + Theme Toggle for Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="https://github.com/Harishpavan-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile of Harishpavan"
            className="hover:text-[#fe5617]"
          >
            <FaGithub size={29} />
          </a>
          <a
            href="https://www.linkedin.com/in/harishpavan-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile of Harishpavan"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin size={29} />
          </a>
          <a
            href="https://www.instagram.com/harishpavan_dev/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram profile of Harishpavan"
            className="hover:text-[#fe5617]"
          >
            <FaInstagram size={29} />
          </a>
          <a
            href="https://wa.me/94764328867?text=Hi%20Harish!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp contact for Harishpavan"
            className="hover:text-[#fe5617]"
          >
            <FaWhatsapp size={29} />
          </a>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
