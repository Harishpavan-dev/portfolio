import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div id="home" className="bg-[#FFFFFF]"
    
    >
      <div className="max-w-[85%] mx-auto font-inter grid grid-cols-1 md:grid-cols-2 gap-8 items-center  min-h-screen"
       
      >
        {/* Left Section */}
        <div className="order-2 lg:order-1 flex flex-col items-center md:items-start justify-start space-y-5 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">
            I’m <span className="text-[#fe5617]">Bavananthan Harishpavan</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold flex gap-2">
            <span className="text-[#fe5617]">I’m a</span>
            <Typewriter
              options={{
                strings: [
                  "Developer ",
                  "Cybersecurity Enthusiast,",
                  "Designer.",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h2>
          {/* About Me */}
          <p className="text-lg md:text-xl text-gray-700 font-medium">
                 I am an enthusiastic student passionate about technology and cybersecurity. While I don’t have professional experience yet, but I keep practicing and improving my skills in <span className="font-bold text-[#fe5617]">web development, IT, and cybersecurity</span>. My goal is to grow as a developer and cybersecurity professional.
          </p>

          {/* Contact Information */}
          <div className=" flex flex-col space-y-3 md:space-y-0 md:flex-row md:gap-6 text-lg md:text-xl font-semibold ">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={20} />
              <span>Jaffna Srilanka</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={20} />
              <span>94764328867</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={20} />
              <span>harishpavan.dev@gmail.com</span>
            </div>
          </div>
          {/* Button */}
          <div className="flex gap-4">
  <div className="bg-[#fe5617] px-5 py-2 rounded-2xl font-bold">
    <a href="https://drive.google.com/file/d/1iEqBnTpom4nB9xplMhfHIRbmf6l8npzA/view?usp=drive_link">Download CV</a>
  </div>
  <Link to="services" smooth={true} duration={500}>
  <div className="bg-[#1f2937] px-5 py-2 rounded-2xl font-bold text-white text-center cursor-pointer">
    Hire Me
  </div>
</Link>
</div>

        </div>

        {/* Right Section */}
        <div className="order-1 lg:order-2 flex justify-end items-center">
          <img
            className="w-[85%] rounded-[50px]"
            src="/profile.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
