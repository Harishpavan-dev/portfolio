import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <header id="home" className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-[92%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Section */}
        <section
          className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6"
          aria-label="Introduction"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
            I’m <span className="text-[#fe5617]">Bavananthan Harishpavan</span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: ["Developer", "Cybersecurity Enthusiast", "Designer"],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          {/* About Me Paragraph */}
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl font-medium leading-relaxed">
            I am an <strong>enthusiastic HNDIT student at SLIATE - ATI</strong>, passionate about <strong>technology, IT, and cybersecurity</strong>. I am continuously improving my skills in <span className="font-bold text-[#fe5617]">web development, security fundamentals, and IT solutions</span>. My career goal is to grow into a professional <strong>developer</strong> and <strong>cybersecurity specialist</strong>, creating secure and modern digital solutions.
          </p>

          {/* Contact Info */}
          <address className="not-italic flex flex-col sm:flex-row sm:gap-6 gap-3 text-lg font-semibold">
            <div className="flex items-center gap-2">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Jaffna, SriLanka</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <a href="tel:+94764328867" className="hover:underline">
                +94764328867
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <a href="mailto:harishpavan.dev@gmail.com" className="hover:underline">
                harishpavan.dev@gmail.com
              </a>
            </div>
          </address>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1iEqBnTpom4nB9xplMhfHIRbmf6l8npzA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fe5617] px-6 py-3 rounded-2xl font-bold text-white hover:opacity-90 transition-all duration-300"
            >
              Download CV
            </a>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="bg-gray-800 dark:bg-gray-700 px-6 py-3 rounded-2xl font-bold text-white cursor-pointer hover:opacity-90 transition-all duration-300 text-center"
            >
              Hire Me
            </Link>
          </div>
        </section>

        {/* Right Section - Profile Picture */}
        <section
          className="order-1 md:order-2 flex justify-center md:justify-end"
          aria-label="Profile Picture"
        >
          <img
            className="w-72 sm:w-80 md:w-full max-w-md rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500"
            src="BavananthanHarishpavanProfile1.jpeg"
            alt="Bavananthan Harishpavan - Developer & Cybersecurity Enthusiast"
            loading="lazy"
          />
        </section>
      </div>
    </header>
  );
};

export default Home;
