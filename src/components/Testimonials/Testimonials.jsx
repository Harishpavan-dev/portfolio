import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { useTestimonials } from "../../hooks/useTestimonials";

const Testimonials = () => {
  const { testimonials, loading } = useTestimonials();

  // Don't render the section if there are no testimonials
  if (!loading && testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="relative bg-light-bg dark:bg-dark-bg py-24 overflow-hidden"
      aria-label="Client Testimonials and Reviews"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] bg-accent-amber/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-16">
        <SectionHeader
          title="Client"
          highlight="Testimonials"
          description="What my clients say about working with me on their projects."
        />

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-8 rounded-2xl animate-pulse">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10" />
                  <div>
                    <div className="h-4 bg-primary/10 rounded w-24 mb-2" />
                    <div className="h-3 bg-primary/5 rounded w-20" />
                  </div>
                </div>
                <div className="h-3 bg-primary/5 rounded mb-2" />
                <div className="h-3 bg-primary/5 rounded mb-2 w-5/6" />
                <div className="h-3 bg-primary/5 rounded w-4/6" />
              </div>
            ))}
          </div>
        )}

        {/* Testimonial Cards */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.id || index} delay={index * 0.1}>
                <motion.article
                  className="glass-card p-8 rounded-2xl group h-full flex flex-col border border-transparent hover:border-accent-amber/20 transition-all duration-500 relative"
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(255, 184, 108, 0.1)' }}
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-4xl opacity-10 text-primary">
                    "
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                      <span key={i} className="text-accent-amber text-sm">⭐</span>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1 italic">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    {testimonial.clientPhotoUrl ? (
                      <img
                        src={testimonial.clientPhotoUrl}
                        alt={testimonial.clientName}
                        className="w-11 h-11 rounded-full object-cover border-2 border-primary/20"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
                        {testimonial.clientName?.charAt(0) || '?'}
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white">
                        {testimonial.clientName}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {testimonial.clientRole}
                      </p>
                    </div>
                  </div>
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
