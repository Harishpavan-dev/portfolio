import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import { useEducation } from "../hooks/useEducation";

const statusConfig = {
  ongoing: {
    label: "Ongoing",
    icon: "🎓",
    classes: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/30",
    dot: "bg-accent-cyan",
  },
  completed: {
    label: "Completed",
    icon: "✅",
    classes: "bg-primary/10 text-primary border-primary/30",
    dot: "bg-primary",
  },
  partial: {
    label: "Course Attended",
    icon: "📘",
    classes: "bg-accent-amber/10 text-accent-amber border-accent-amber/30",
    dot: "bg-accent-amber",
  },
};

const Education = () => {
  const { education: educationData, loading } = useEducation();
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopyCode = (e, idKey, code) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedCode(idKey);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section
      id="education"
      className="relative min-h-screen bg-light-bg dark:bg-dark-bg py-24 overflow-hidden"
      aria-label="My Education and Academic Certificates"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[15%] left-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 space-y-16">

        <SectionHeader
          title="My"
          highlight="Education"
          description="Explore my academic journey, training programs, certifications, and professional courses."
        />

        {/* Loading Skeleton */}
        {loading && (
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 rounded-2xl animate-pulse ml-16 md:ml-0 md:w-[calc(50%-2rem)]">
                <div className="h-6 w-24 bg-primary/10 rounded-full mb-4" />
                <div className="h-5 bg-primary/10 rounded mb-2 w-3/4" />
                <div className="h-4 bg-primary/5 rounded mb-2 w-1/2" />
                <div className="h-3 bg-primary/5 rounded mb-2" />
                <div className="h-3 bg-primary/5 rounded w-5/6" />
              </div>
            ))}
          </div>
        )}

        {/* Timeline */}
        {!loading && (
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent-cyan to-primary/20" aria-hidden="true" />

            <div className="space-y-12">
              {educationData.map((edu, index) => {
                const status = statusConfig[edu.status] || statusConfig.completed;
                const isLeft = index % 2 === 0;

                return (
                  <ScrollReveal
                    key={edu.id || index}
                    direction={isLeft ? "fadeLeft" : "fadeRight"}
                    delay={index * 0.1}
                  >
                    <div className={`relative flex items-start gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      }`}>

                      {/* Timeline Dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
                        <div className={`w-4 h-4 rounded-full ${status.dot} ring-4 ring-light-bg dark:ring-dark-bg shadow-lg`}>
                          <div className={`absolute inset-0 rounded-full ${status.dot} animate-ping opacity-30`} />
                        </div>
                      </div>

                      {/* Content Card */}
                      <motion.article
                        className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] glass-card p-6 sm:p-7 rounded-2xl group border border-transparent hover:border-primary/20 transition-all duration-500`}
                        whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(108, 99, 255, 0.1)' }}
                        aria-label={edu.title}
                      >
                        {/* Status Badge */}
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${status.classes} mb-4`}>
                          {status.icon} {status.label}
                        </span>

                        {/* Title */}
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                          {edu.title}
                        </h3>

                        {/* Institution */}
                        <p className="text-sm font-medium text-primary/80 mb-3 flex items-center gap-1.5">
                          <span className="text-xs">📍</span> {edu.institution}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                          {edu.description}
                        </p>

                        {/* Verification Code */}
                        {edu.verificationCode && (
                          <div className="glass-card p-3 rounded-xl mb-5 border border-primary/10 flex items-center justify-between gap-2">
                            <div>
                              <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-500 mb-1">
                                Verification Code
                              </p>
                              <code className="text-sm font-mono font-bold text-primary bg-primary/5 px-2.5 py-1 rounded-lg">
                                {edu.verificationCode}
                              </code>
                            </div>
                            <button
                              onClick={(e) => handleCopyCode(e, edu.id || index, edu.verificationCode)}
                              className="p-1.5 rounded-lg hover:bg-primary/10 text-gray-500 hover:text-primary transition-all flex items-center gap-1 text-xs shrink-0"
                              title="Copy Verification Code"
                              aria-label="Copy Verification Code"
                            >
                              {copiedCode === (edu.id || index) ? (
                                <span className="text-emerald-500 font-semibold flex items-center gap-1 text-xs">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                  Copied!
                                </span>
                              ) : (
                                <span className="flex items-center gap-1 text-gray-400 hover:text-primary">
                                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                  </svg>
                                </span>
                              )}
                            </button>
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          {edu.courseLink && (
                            <a
                              href={edu.courseLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-neon text-xs flex-1 py-2.5"
                            >
                              <span>{edu.status === "ongoing" ? "Course Details" : "View Details"}</span>
                            </a>
                          )}
                          {edu.verificationLink && (
                            <a
                              href={edu.verificationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-ghost text-xs flex-1 py-2.5"
                            >
                              <span>Verify Result</span>
                            </a>
                          )}
                          {edu.status === "ongoing" && !edu.verificationLink && (
                            <button
                              onClick={() => alert("Course ongoing, certificate not available yet.")}
                              className="btn-ghost text-xs flex-1 py-2.5 opacity-60 cursor-default"
                            >
                              <span>Certificate</span>
                            </button>
                          )}
                        </div>
                      </motion.article>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
