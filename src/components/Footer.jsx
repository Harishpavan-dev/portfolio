import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      className="bg-[#fe5617] text-white py-10"
      aria-label="Footer section with copyright, SEO keywords, social media and additional links"
    >
      <div className="max-w-[90%] md:max-w-[80%] mx-auto text-center space-y-6">
        
        {/* SEO Keyword Text */}
        <p className="text-sm md:text-base font-medium">
          © {new Date().getFullYear()} <strong>Harishpavan</strong>. All rights reserved.  
          Professional services in <strong>web development, full stack development, responsive websites, IT solutions, UI/UX design, software projects, and cybersecurity consulting</strong>.  
          Available worldwide for freelance projects, remote work, and client collaborations.
        </p>

        {/* Internal Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-2">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="underline hover:text-white cursor-pointer"
            aria-label="Go to Home Section"
          >
            Home
          </Link>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="underline hover:text-white cursor-pointer"
            aria-label="Go to Services Section"
          >
            Services
          </Link>
          <Link
            to="education"
            smooth={true}
            duration={500}
            className="underline hover:text-white cursor-pointer"
            aria-label="Go to Education Section"
          >
            Education
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="underline hover:text-white cursor-pointer"
            aria-label="Go to Projects Section"
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="underline hover:text-white cursor-pointer"
            aria-label="Go to Contact Section"
          >
            Contact
          </Link>
        </div>

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
          <a
            href="https://harishpavan-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Harishpavan Portfolio Website"
            className="hover:text-white transition-colors"
          >
            <FaGlobe size={30} />
          </a>
        </div>

        {/* Additional SEO & Authority Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs md:text-sm text-gray-100">
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
            aria-label="JavaScript Documentation MDN"
          >
            JavaScript Docs
          </a>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
            aria-label="Tailwind CSS Official Documentation"
          >
            Tailwind CSS
          </a>
          <a
            href="https://reactjs.org/docs/getting-started.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
            aria-label="React Official Documentation"
          >
            React Docs
          </a>
          <a
            href="https://www.w3schools.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
            aria-label="W3Schools Web Development Tutorials"
          >
            W3Schools
          </a>
        </div>

        {/* Additional SEO Footer Keywords */}
        <p className="text-xs md:text-sm text-gray-100 mt-4">
          <strong>Keywords:</strong> Harishpavan, Bavananthan, web developer, freelance developer Sri Lanka, React developer, Tailwind CSS, UI/UX designer, software developer, IT solutions, cybersecurity expert, responsive websites, professional portfolio, coding projects, full stack development, online portfolio, professional services, digital solutions.
        </p>

        {/* Contact Link */}
        <p className="text-sm md:text-base mt-2">
          Contact me via{" "}
          <a
            href="https://wa.me/94764328867?text=Hi%20Harish!"
            className="underline hover:text-white"
            aria-label="Contact Harishpavan via WhatsApp"
          >
            WhatsApp
          </a>{" "}
          or email for professional inquiries, collaborations, and freelance opportunities worldwide.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
