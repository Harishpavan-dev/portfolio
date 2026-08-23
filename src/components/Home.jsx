import Typewriter from "typewriter-effect";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import ScrollReveal from "./ui/ScrollReveal";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-light-bg dark:bg-dark-bg pt-24 md:pt-32"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-15" />
        <div className="absolute top-[15%] left-[5%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-accent-cyan/10 rounded-full blur-[120px] animate-float-medium" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] right-[30%] w-[300px] h-[300px] bg-accent-pink/8 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: '3s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1 space-y-8 text-center lg:text-left">

            {/* Status Badge */}
            <ScrollReveal direction="fadeDown" delay={0}>
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card neon-border">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-cyan" />
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Available for Freelance
                </span>
              </div>
            </ScrollReveal>

            {/* Main Heading */}
            <ScrollReveal direction="fadeUp" delay={0.1}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight text-gray-900 dark:text-white">
                  Hi, I'm{" "}
                  <span className="gradient-text-primary text-glow">
                    Harishpavan
                  </span>
                </h1>

                {/* Typewriter Effect */}
                <div className="flex items-center gap-3 text-xl sm:text-2xl lg:text-3xl font-bold justify-center lg:justify-start">
                  <span className="text-gray-600 dark:text-gray-400">I'm a</span>
                  <span className="gradient-text">
                    <Typewriter
                      options={{
                        strings: [
                          "Full Stack Developer",
                          "Cybersecurity Enthusiast",
                          "UI/UX Designer",
                          "Problem Solver",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal direction="fadeUp" delay={0.2}>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                I'm an <strong className="text-primary">enthusiastic HNDIT student at SLIATE - ATI</strong>,
                passionate about <strong className="text-gray-900 dark:text-white">technology, web development, and cybersecurity</strong>.
                I create secure, modern, and scalable digital solutions.
              </p>
            </ScrollReveal>

            {/* Contact Info Cards */}
            <ScrollReveal direction="fadeUp" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <div className="glass-card-hover px-4 py-3 rounded-xl flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-primary-light text-white group-hover:scale-110 transition-transform">
                    <FaLocationDot size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Jaffna, Sri Lanka</span>
                </div>

                <a href="tel:+94764328867" className="glass-card-hover px-4 py-3 rounded-xl flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent-pink to-pink-400 text-white group-hover:scale-110 transition-transform">
                    <FaPhoneAlt size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">+94 764 328 867</span>
                </a>

                <a href="mailto:harishpavan.dev@gmail.com" className="glass-card-hover px-4 py-3 rounded-xl flex items-center gap-3 group">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-accent-cyan to-teal-400 text-white group-hover:scale-110 transition-transform">
                    <FaEnvelope size={14} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 hidden xl:block">harishpavan.dev@gmail.com</span>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 xl:hidden">Email Me</span>
                </a>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="fadeUp" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="https://projectthumbnailimage.free.nf/uploads/70646aaddc708968.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon text-base"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span>Download CV</span>
                </a>

                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="btn-ghost text-base cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Hire Me</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT IMAGE */}
          <ScrollReveal direction="fadeRight" delay={0.2} className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Orbiting ring */}
              <div className="absolute inset-[-20px] rounded-full border border-primary/20 animate-spin-slow" aria-hidden="true">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50" />
              </div>

              {/* Glow behind image */}
              <div className="absolute inset-[-10px] rounded-3xl bg-gradient-to-br from-primary/30 via-accent-cyan/20 to-accent-pink/20 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" aria-hidden="true" />

              {/* Image Container */}
              <div className="relative">
                <img
                  className="relative w-64 sm:w-72 lg:w-80 xl:w-[380px] rounded-3xl border-2 border-primary/20 shadow-2xl object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  src="BavananthanHarishpavanProfile1.jpeg"
                  alt="Bavananthan Harishpavan - Full Stack Developer & Cybersecurity Enthusiast"
                  loading="eager"
                  width={380}
                  height={450}
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-dark-bg/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Experience Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 glass-card px-5 py-3.5 rounded-2xl shadow-xl border border-primary/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-bold text-lg">
                    2+
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-500">Years of</p>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Projects Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-3 -left-12 sm:-top-4 sm:-left-6 glass-card px-4 py-3 rounded-2xl shadow-xl border border-accent-cyan/20"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-teal-400 flex items-center justify-center text-white font-bold text-base">
                    7+
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-500 dark:text-gray-500">Completed</p>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">Projects</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
