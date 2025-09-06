import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <header id="home" className="bg-[#FFFFFF]">
      <div className="max-w-[92%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center md:grid-cols-[2fr_2fr]">
        
        <section
          className="order-1 lg:order-1 flex justify-end lg:items-center"
          aria-label="Profile Picture"
        >
          <img
            className="w-[80%] rounded-[50px]"
            src="BavananthanHarishpavanProfile2.jpg"
            alt="Bavananthan Harishpavan - Developer & Cybersecurity Enthusiast"
            loading="lazy"
          />
        </section>
        {/* Left Section */}
        <section
          className="order-2 lg:order-2 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left"
          aria-label="Introduction"
        >
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            I’m <span className="text-[#fe5617]">Bavananthan Harishpavan</span>
          </h1>

          {/* Sub Heading */}
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Developer",
                  "Cybersecurity Enthusiast",
                  "Designer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>

          {/* About Me (SEO keyword rich) */}
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
            I am an <strong>enthusiastic student</strong> passionate about{" "}
            <strong>technology, IT, and cybersecurity</strong>. 
            Although I don’t have professional experience yet, I am 
            consistently practicing and improving my skills in{" "}
            <span className="font-bold text-[#fe5617]">
              web development, security fundamentals, and IT solutions
            </span>. 
            My career goal is to grow into a professional <strong>developer</strong> 
            and <strong>cybersecurity specialist</strong> creating secure and 
            modern digital solutions.
          </p>

          {/* Contact Information */}
          <address className="not-italic flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Jaffna, SriLanka</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <a href="tel:+94764328867" className="hover:underline">
                +94764328867
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <a
                href="mailto:harishpavan.dev@gmail.com"
                className="hover:underline"
              >
                harishpavan.dev@gmail.com
              </a>
            </div>
          </address>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1iEqBnTpom4nB9xplMhfHIRbmf6l8npzA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold text-white hover:opacity-90"
            >
              Download CV
            </a>
            <Link to="services" smooth={true} duration={500}>
              <button className="bg-[#1f2937] px-5 py-2 rounded-2xl font-bold text-white cursor-pointer hover:opacity-90">
                Hire Me
              </button>
            </Link>
          </div>
        </section>

        {/* Right Section */}
        
      </div>
    </header>
  );
};

export default Home;
