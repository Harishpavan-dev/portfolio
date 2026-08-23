import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import useTheme from "../hooks/useTheme";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/admin' || location.pathname === '/admin/login';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navItems = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
    { to: "blog", label: "Blog" },
  ];

  const socialLinks = [
    { href: "https://github.com/Harishpavan-dev", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/harishpavan-dev", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/harishpavan_dev/?__pwa=1", icon: FaInstagram, label: "Instagram" },
    { href: "https://wa.me/94764328867?text=Hi%20Harish!", icon: FaWhatsapp, label: "WhatsApp" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-card shadow-lg border-b border-primary/10 py-3"
          : "bg-transparent py-5"
        }`}
      aria-label="Main navigation header"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* LOGO */}
          {isHome ? (
            <Link to="home" smooth={true} duration={500}>
              <div className="cursor-pointer group">
                <h1 className="text-2xl md:text-3xl font-bold font-display gradient-text-primary hover:text-glow transition-all duration-300 group-hover:scale-105">
                  Harish<span className="text-accent-cyan">.</span>
                </h1>
              </div>
            </Link>
          ) : (
            <a href="/#home" className="cursor-pointer group">
              <h1 className="text-2xl md:text-3xl font-bold font-display gradient-text-primary hover:text-glow transition-all duration-300 group-hover:scale-105">
                Harish<span className="text-accent-cyan">.</span>
              </h1>
            </a>
          )}

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:block" aria-label="Primary site navigation">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.to}>
                  {isHome ? (
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      spy={true}
                      activeClass="!text-primary"
                      className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors duration-300 group rounded-lg hover:bg-primary/5"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-cyan group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </Link>
                  ) : (
                    <a
                      href={`/#${item.to}`}
                      className="relative px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary cursor-pointer transition-colors duration-300 group rounded-lg hover:bg-primary/5"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent-cyan group-hover:w-3/4 transition-all duration-300 rounded-full" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT SECTION - DESKTOP */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-primary hover:bg-primary hover:text-white transition-all duration-300 neon-border focus-neon"
              whileTap={{ scale: 0.9, rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
            </motion.button>

            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 neon-border focus-neon"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="lg:hidden flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-primary transition-all duration-300 focus-neon"
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              {theme === "dark" ? <BsSun size={18} /> : <BsMoon size={18} />}
            </motion.button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-primary transition-all duration-300 focus-neon"
            >
              {isMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAVIGATION — FULL SCREEN OVERLAY */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white dark:bg-dark-surface border-l border-primary/10 p-8 flex flex-col"
            >
              {/* Close button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-xl bg-gray-100 dark:bg-white/5 text-primary focus-neon"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Nav Links */}
              <ul className="space-y-2 flex-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.to}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    {isHome ? (
                      <Link
                        to={item.to}
                        smooth={true}
                        duration={500}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-5 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-300 cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={`/#${item.to}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-5 py-3.5 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary font-semibold transition-all duration-300 cursor-pointer"
                      >
                        {item.label}
                      </a>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Social Links */}
              <div className="pt-6 border-t border-gray-200 dark:border-white/10">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider">
                  Connect
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-all duration-300 neon-border"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
