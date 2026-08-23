// src/pages/BlogPost.jsx
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import DOMPurify from "dompurify";
import "react-quill/dist/quill.core.css";
import Header from "../Header";
import Footer from "../Footer";
import { useBlogPost } from "../../hooks/useBlog";

const BlogPost = () => {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug);

  // Loading state
  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg pt-24 pb-16">
          <div className="max-w-3xl mx-auto px-6">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-primary/10 rounded w-1/4" />
              <div className="h-12 bg-primary/10 rounded w-3/4" />
              <div className="h-4 bg-primary/5 rounded w-1/3" />
              <div className="h-64 bg-primary/5 rounded-2xl" />
              <div className="space-y-3">
                <div className="h-4 bg-primary/5 rounded" />
                <div className="h-4 bg-primary/5 rounded w-5/6" />
                <div className="h-4 bg-primary/5 rounded w-4/6" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Error or post not found
  if (error || !post) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
          <div className="text-center space-y-6">
            <span className="text-7xl">📭</span>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-display">
              Post Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              The blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/" className="btn-neon text-sm inline-flex">
              <svg
                className="w-4 h-4"
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
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const date = post.createdAt?.toDate
    ? post.createdAt.toDate().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Recent";

  return (
    <>
      <Header />
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors"
            >
              <svg
                className="w-4 h-4"
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
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-10"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 mb-4">
              {post.category || "General"}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-gray-900 dark:text-white mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
              <span>{date}</span>
              {post.readTimeMinutes && (
                <>
                  <span>•</span>
                  <span>{post.readTimeMinutes} min read</span>
                </>
              )}
              {post.viewCount > 0 && (
                <>
                  <span>•</span>
                  <span>{post.viewCount} views</span>
                </>
              )}
            </div>
          </motion.header>

          {/* Cover Image */}
          {post.coverImageUrl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-10"
            >
              <img
                src={post.coverImageUrl}
                alt={post.title}
                className="w-full rounded-2xl border border-white/10 shadow-xl"
              />
            </motion.div>
          )}

          {/* HTML Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none ql-editor p-0"
          >
            <div
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content, {
                  ADD_TAGS: ['iframe', 'style', 'div', 'span', 'section'],
                  ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling', 'target', 'style', 'class']
                }),
              }}
            />
          </motion.div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 pt-8 border-t border-white/10"
            >
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-full border text-primary bg-primary/10 border-primary/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to blog */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Link to="/" className="btn-ghost text-sm inline-flex">
              <svg
                className="w-4 h-4"
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
              <span>Back to Portfolio</span>
            </Link>
          </motion.div>
        </article>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;