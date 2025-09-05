import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-[#fe5617] text-white py-8"
      aria-label="Footer section with copyright and social media links"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto text-center space-y-4">
        
        {/* SEO Keyword Text */}
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} <strong>Harishpavan</strong>. All rights reserved.  
          Professional services in <strong>web development, IT solutions, UI/UX design, software projects, and cybersecurity consulting</strong>.
        </p>

        <p className="text-sm md:text-base font-medium">
          Designed and developed with ❤️ by{" "}
          <a
            href="https://wa.me/94764328867?text=Hi%20Harish!"
            className="underline hover:text-white"
            aria-label="Contact Harishpavan via WhatsApp"
          >
            Harishpavan
          </a>
          . Available for freelance projects, remote work, and client collaborations worldwide.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-3">
          <a
            href="https://github.com/Harishpavan-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Harishpavan GitHub Profile"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/harishpavan-dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Harishpavan LinkedIn Profile"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://www.instagram.com/harishpavan_dev/?__pwa=1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Harishpavan Instagram Profile"
            className="hover:text-white transition-colors"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Additional SEO Footer Keywords */}
        <p className="text-xs md:text-sm text-gray-100 mt-4">
          <strong>Keywords:</strong> Bavananthan Harishpavan, web developer, IT solutions, cybersecurity expert, UI/UX designer, portfolio projects, freelance developer Sri Lanka, React developer, Tailwind CSS, software development.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
