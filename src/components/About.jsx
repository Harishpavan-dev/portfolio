import { useState } from "react";
import { useSkills } from "../hooks/useSkills";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Circular progress for skill level
const CircularProgress = ({ level, color, size = 80 }) => {
  const radius = (size - 6) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (level / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        className="text-gray-200 dark:text-white/10"
        strokeWidth={4}
        fill="none"
      />
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={4}
        fill="none"
        strokeLinecap="round"
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        strokeDasharray={circumference}
      />
    </svg>
  );
};

const About = () => {
  const { skills, categories, loading } = useSkills();
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref: skillsRef, isInView } = useScrollReveal();

  return (
    <section
      id="about"
      className="relative min-h-screen bg-light-bg dark:bg-dark-bg py-24 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-20">

        {/* Section Header */}
        <SectionHeader
          title="About"
          highlight="Me"
          description="A comprehensive overview of who I am and my technical expertise"
        />

        {/* About Content — Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Bio Text — 3 columns */}
          <ScrollReveal direction="fadeLeft" className="lg:col-span-3">
            <div className="glass-card-hover p-8 md:p-10 rounded-2xl">
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm <strong className="text-primary">Bavananthan Harishpavan</strong>, an enthusiastic student, aspiring
                <strong className="text-gray-900 dark:text-white"> web developer</strong>, and <strong className="text-gray-900 dark:text-white">cybersecurity professional</strong> passionate about
                <strong className="text-gray-900 dark:text-white"> technology, IT solutions, and digital security</strong>. I continuously enhance my skills in
                <strong className="text-primary"> web development, cybersecurity, ethical hacking, IT administration, and software design</strong>.
                Although I am still building professional experience, I am eager to contribute to innovative technology projects,
                solve complex problems, and grow as a <strong className="text-primary">developer and cybersecurity expert</strong>.
                I also aim to share knowledge with others through my <strong className="text-gray-900 dark:text-white">portfolio, online tutorials, and collaborative projects</strong>,
                showcasing my skills in <strong className="text-gray-900 dark:text-white">programming, IT management, and cybersecurity solutions</strong>.
                My ultimate goal is to become a recognized <strong className="text-primary">full-stack developer and cybersecurity specialist</strong>,
                delivering secure, modern, and scalable digital solutions.
              </p>
            </div>
          </ScrollReveal>

          {/* Stats — 2 columns */}
          <ScrollReveal direction="fadeRight" delay={0.2} className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2+", label: "Years Experience", gradient: "from-primary to-primary-light" },
                { value: "7+", label: "Projects Built", gradient: "from-accent-cyan to-teal-400" },
                { value: "6+", label: "Services Offered", gradient: "from-accent-pink to-pink-400" },
                { value: "5+", label: "Certifications", gradient: "from-accent-amber to-yellow-400" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card-hover p-6 rounded-2xl text-center"
                  whileHover={{ scale: 1.03 }}
                >
                  <p className={`text-3xl font-bold font-display bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Skills Section */}
        <div className="space-y-10" ref={skillsRef}>
          <ScrollReveal>
            <div className="text-center space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold font-display text-gray-900 dark:text-white">
                My <span className="gradient-text-primary">Skills</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                A comprehensive overview of my technical expertise and proficiency levels
              </p>
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 focus-neon ${activeCategory === cat
                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                    : "glass-card text-gray-600 dark:text-gray-400 hover:text-primary hover:border-primary/30"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Skill Cards */}
          {!loading && skills[activeCategory] && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-5"
              >
                {skills[activeCategory].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    className="glass-card-hover p-6 rounded-2xl flex flex-col items-center gap-4 group"
                  >
                    {/* Circular Progress with Icon */}
                    <div className="relative">
                      <CircularProgress level={skill.level} color={skill.color} size={80} />
                      <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                        {skill.iconUrl ? (
                          <img src={skill.iconUrl} alt={skill.name} className="w-8 h-8 object-contain" style={{ filter: `drop-shadow(0 0 8px ${skill.color}80)` }} />
                        ) : (
                          <span className="text-3xl">{skill.iconEmoji || '⚡'}</span>
                        )}
                      </div>
                    </div>

                    {/* Name and Level */}
                    <div className="text-center">
                      <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight">
                        {skill.name}
                      </p>
                      <p className="text-xs font-mono font-semibold text-primary mt-1">
                        {skill.level}%
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
