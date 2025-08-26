import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { BsSun, BsMoon } from "react-icons/bs"; // Theme toggle icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Toggle dark/light theme by adding/removing class to <html>
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="bg-[#FFFFFF] dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-[90%] mx-auto py-3 flex items-center justify-between font-inter text-[#000] dark:text-white">
        {/* Logo */}
        <div>
          <h1 className="text-[2.5rem] font-bold hover:text-[#fe5617]">
            Harish.
          </h1>
        </div>

        {/* Theme Toggle & Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center gap-3">
          <button onClick={toggleTheme} className="text-[#fe5617]">
            {theme === "light" ? <BsMoon size={22} /> : <BsSun size={22} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        >
          <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5 text-[14px] font-semibold">
            <Link to="home" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Home
              </li>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                About
              </li>
            </Link>
            <Link to="Education" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Education
              </li>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Projects
              </li>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <li className="hover:text-[#fe5617] cursor-pointer transition-transform duration-300 ease-in transform hover:translate-y-[-7px]">
                Contact
              </li>
            </Link>
          </ul>

          {/* Social Links for Mobile */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } mt-3 justify-center gap-5`}
          >
            <a href="https://github.com/Harishpavan-dev" className="hover:text-[#fe5617]">
              <FaGithub size={29} />
            </a>
            <a href="#" className="hover:text-[#fe5617]">
              <FaLinkedin size={29} />
            </a>
            <a href="https://www.instagram.com/harishpavan_dev/?__pwa=1" className="hover:text-[#fe5617]">
              <FaInstagram size={29} />
            </a>
            <a href="https://wa.me/94764328867?text=Hi%20Harish!" className="hover:text-[#fe5617]">
              <FaWhatsapp size={29} />
            </a>
          </div>
        </nav>

        {/* Social Media + Theme Toggle for Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          <a href="https://github.com/Harishpavan-dev" className="hover:text-[#fe5617]">
            <FaGithub size={29} />
          </a>
          <a href="#" className="hover:text-[#fe5617]">
            <FaLinkedin size={29} />
          </a>
          <a href="https://www.instagram.com/harishpavan_dev/?__pwa=1" className="hover:text-[#fe5617]">
            <FaInstagram size={29} />
          </a>
          <a href="https://wa.me/94764328867?text=Hi%20Harish!" className="hover:text-[#fe5617]">
            <FaWhatsapp size={29} />
          </a>
          <button onClick={toggleTheme} className="text-[#fe5617]">
            {theme === "light" ? <BsMoon size={22} /> : <BsSun size={22} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
