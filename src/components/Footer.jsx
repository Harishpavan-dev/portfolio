import { FaGithub, FaLinkedin, FaInstagram, FaHeart,FaWhatsapp} from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "services", label: "Services" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://github.com/Harishpavan-dev", icon: FaGithub, label: "GitHub" },
    { href: "https://www.linkedin.com/in/harishpavan-dev", icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://www.instagram.com/harishpavan_dev/?__pwa=1", icon: FaInstagram, label: "Instagram" },
    { href: "https://wa.me/94764328867?text=Hi%20Harish!", icon: FaWhatsapp, label: "WhatsApp" },
  ];

  return (
    <footer
      className="relative bg-white dark:bg-dark-surface border-t border-gray-200 dark:border-white/5"
      aria-label="Footer"
    >
      {/* Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo + Description */}
          <div className="text-center md:text-left">
            <Link to="home" smooth={true} duration={500} className="cursor-pointer">
              <h3 className="text-xl font-bold font-display gradient-text-primary mb-2">
                Harish<span className="text-accent-cyan">.</span>
              </h3>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-500 max-w-xs">
              Full Stack Developer & Cybersecurity Enthusiast based in Jaffna, Sri Lanka.
            </p>

            {/* Hidden SEO Keywords */}
            <span className="sr-only">
  Harishpavan, React developer Harishpavan, Node.js developer Harishpavan, PHP developer Harishpavan, MySQL expert Harishpavan, Tailwind CSS Harishpavan, UI/UX designer Harishpavan, full stack developer Harishpavan, web developer Harishpavan, frontend developer Harishpavan, backend developer Harishpavan, software engineer Harishpavan, ethical hacking Harishpavan, cybersecurity services Harishpavan, web security Harishpavan, penetration testing Harishpavan, cloud computing Harishpavan, API development Harishpavan, responsive web design Harishpavan, student portal development Harishpavan, learning management system Harishpavan, HNDIT projects Harishpavan, web applications Harishpavan, software projects Harishpavan, portfolio projects Harishpavan, React projects Harishpavan, Node.js projects Harishpavan, PHP web apps Harishpavan, Jaffna developer Harishpavan, Northern Province Sri Lanka Harishpavan, freelance web development Harishpavan, modern web apps Harishpavan, secure web applications Harishpavan, DevOps Harishpavan, software architecture Harishpavan, project management Harishpavan, technical consulting Harishpavan, website design Harishpavan, online portals Harishpavan, educational portals Harishpavan, VS Code extension Harishpavan, productivity tools Harishpavan, HNDIT LMS Harishpavan, HNDIT Portal Harishpavan, coding projects Harishpavan
</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-500 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 neon-border focus-neon"
              >
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-100 dark:border-white/5" aria-hidden="true" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-400 dark:text-gray-600">
          <p>
            © {currentYear} <strong className="text-gray-700 dark:text-gray-400">Harishpavan</strong>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Made with <FaHeart className="text-accent-pink text-[10px] animate-pulse" /> by Harishpavan
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
      >
        <Link
          to="home"
          smooth={true}
          duration={800}
          className="block p-3 rounded-xl bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-110 transition-all duration-300 cursor-pointer focus-neon"
          aria-label="Back to top"
        >
          <FaArrowUp size={16} />
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;