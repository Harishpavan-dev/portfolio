// src/components/blog/BlogList.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";
import { useBlogPosts } from "../../hooks/useBlog";

const BlogCard = ({ post, index }) => {
  const date = post.createdAt?.toDate
    ? post.createdAt.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "Recent";

  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        className="glass-card rounded-2xl group h-full flex flex-col border border-transparent hover:border-primary/15 transition-all duration-500 overflow-hidden"
        whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(108, 99, 255, 0.1)" }}
      >
        {/* Cover Image */}
        {post.coverImageUrl ? (
          <img
            src={post.coverImageUrl}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-48 bg-gradient-to-br from-primary/10 via-accent-cyan/5 to-accent-pink/10 flex items-center justify-center">
            <span className="text-5xl">📝</span>
          </div>
        )}

        <div className="p-7 flex flex-col flex-1">
          {/* Meta */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs text-primary font-semibold">
              {post.category || "General"}
            </span>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">{date}</span>
            {post.readTimeMinutes && (
              <>
                <span className="text-gray-400 dark:text-gray-600">•</span>
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {post.readTimeMinutes} min read
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed flex-1">
            {post.excerpt || post.content?.substring(0, 120) + "..."}
          </p>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-5">
              {post.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 text-[10px] font-semibold rounded-full border text-primary bg-primary/10 border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More */}
          <Link
            to={`/blog/${post.slug}`}
            className="btn-neon text-xs py-2.5 mt-auto"
          >
            <span>Read More</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </motion.article>
    </ScrollReveal>
  );
};

const BlogList = ({ isHomePage = true }) => {
  const { posts, loading } = useBlogPosts();

  if (!loading && posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="relative bg-light-bg dark:bg-dark-bg py-24 overflow-hidden"
      aria-label="Blog Posts and Articles"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 space-y-16">
        <SectionHeader
          title="My"
          highlight="Blog"
          description="Technical articles, tutorials, and insights on web development, cybersecurity, and technology."
        />

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-2xl animate-pulse overflow-hidden">
                <div className="w-full h-48 bg-primary/5" />
                <div className="p-7">
                  <div className="h-3 bg-primary/5 rounded w-1/3 mb-3" />
                  <div className="h-5 bg-primary/10 rounded w-3/4 mb-3" />
                  <div className="h-3 bg-primary/5 rounded mb-2" />
                  <div className="h-3 bg-primary/5 rounded w-5/6" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Cards */}
        {!loading && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(isHomePage ? posts.slice(0, 3) : posts).map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>

            {/* View All Button */}
            {isHomePage && posts.length > 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 flex justify-center"
              >
                <Link
                  to="/blog"
                  className="btn-solid inline-flex items-center gap-2 group"
                >
                  <span>View All Posts</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>
              </motion.div>
            )}

            {/* Back Button (for /blog page) */}
            {!isHomePage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 flex justify-center"
              >
                <Link to="/" className="btn-ghost inline-flex items-center gap-2 group">
                  <svg
                    className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  <span>Back to Home</span>
                </Link>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default BlogList;