import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import { useProjects } from "../hooks/useProjects";

const tagColors = [
  "text-primary bg-primary/10 border-primary/20",
  "text-accent-cyan bg-accent-cyan/10 border-accent-cyan/20",
  "text-accent-pink bg-accent-pink/10 border-accent-pink/20",
  "text-accent-amber bg-accent-amber/10 border-accent-amber/20",
];

const Projects = () => {
  const { projects, loading } = useProjects();

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-light-bg dark:bg-dark-bg py-24 overflow-hidden"
      aria-label="My Projects Portfolio including web apps, tools, and client projects"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-16">

        <SectionHeader
          title="My"
          highlight="Projects"
          description="Showcase of personal, academic, and client projects including web applications, tools, and interactive websites."
        />

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-7 rounded-2xl animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-primary/10 mb-5" />
                <div className="h-5 bg-primary/10 rounded mb-3 w-3/4" />
                <div className="h-3 bg-primary/5 rounded mb-2" />
                <div className="h-3 bg-primary/5 rounded mb-2 w-5/6" />
                <div className="h-3 bg-primary/5 rounded mb-5 w-4/6" />
                <div className="flex gap-2 mb-5">
                  <div className="h-5 w-16 bg-primary/5 rounded-full" />
                  <div className="h-5 w-16 bg-primary/5 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <>
            {/* Featured Project */}
            {featured && (
              <ScrollReveal>
                <motion.article
                  className="glass-card p-8 md:p-10 rounded-2xl border border-primary/20 relative overflow-hidden group"
                  whileHover={{ y: -4 }}
                  aria-label={featured.title}
                >
                  {/* Featured badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                      ⭐ Featured
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <div className="space-y-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        🚀
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {featured.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {featured.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {featured.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 text-xs font-semibold rounded-full border ${tagColors[i % tagColors.length]}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-3 pt-2">
                        <a href={featured.liveLink} target="_blank" rel="noopener noreferrer" className="btn-neon text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>View Live</span>
                        </a>
                        <a href={featured.codeLink} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          <span>View Code</span>
                        </a>
                      </div>
                    </div>

                    {/* Decorative Gradient or Thumbnail */}
                    <div className="hidden md:flex items-center justify-center">
                      {featured.thumbnailUrl ? (
                        <img
                          src={featured.thumbnailUrl}
                          alt={featured.title}
                          className="w-full h-64 rounded-2xl object-cover border border-primary/10"
                        />
                      ) : (
                        <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-primary/10 via-accent-cyan/5 to-accent-pink/10 border border-primary/10 flex items-center justify-center">
                          <span className="text-7xl group-hover:scale-110 transition-transform duration-300">🎯</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            )}

            {/* Other Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {others.map((project, index) => (
                <ScrollReveal key={project.id || index} delay={index * 0.08}>
                  <motion.article
                    className="glass-card p-7 rounded-2xl group h-full flex flex-col border border-transparent hover:border-primary/15 transition-all duration-500"
                    whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(108, 99, 255, 0.1)' }}
                    aria-label={project.title}
                  >
                    {/* Icon or Thumbnail */}
                    {project.thumbnailUrl ? (
                      <img
                        src={project.thumbnailUrl}
                        alt={project.title}
                        className="w-full h-40 rounded-xl object-cover mb-5"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent-cyan/20 flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform">
                        💼
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2.5 py-0.5 text-[10px] font-semibold rounded-full border ${tagColors[tagIndex % tagColors.length]}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neon text-xs flex-1 py-2.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span>Live</span>
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost text-xs flex-1 py-2.5"
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>Code</span>
                      </a>
                    </div>
                  </motion.article>
                </ScrollReveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
