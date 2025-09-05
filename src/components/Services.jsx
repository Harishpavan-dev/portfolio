const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center bg-cover bg-center dark:bg-gray-900"
      aria-label="My Services and Expertise"
    >
      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-inter space-y-8 py-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
            My Services
          </h1>
          <p className="text-lg md:text-xl dark:text-gray-300 mt-2">
            Explore my professional services: expert solutions in web development, e-commerce websites, UI/UX design, IT projects, and digital solutions.
          </p>
        </header>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Web Development */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="Web Development Services">
            <div className="text-5xl mb-4 text-[#fe5617]">💻</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              Web Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I build responsive, modern, and SEO-friendly websites with professional web development skills. Using HTML, CSS, JavaScript, Tailwind, and modern tools, I create user-friendly, fast-loading, and secure websites optimized for performance and search engines.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20Web%20Development%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

          {/* E-Commerce Website */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="E-Commerce Website Services">
            <div className="text-5xl mb-4 text-[#fe5617]">🛒</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              E-Commerce Website
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I develop fully functional online stores and e-commerce platforms using WordPress and WooCommerce. My services include responsive design, secure payment integration, product management, and SEO optimization for e-commerce websites to increase sales and online visibility.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20E-Commerce%20Website%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

          {/* UI/UX Design */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="UI and UX Design Services">
            <div className="text-5xl mb-4 text-[#fe5617]">🎨</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              UI/UX Design
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I design modern and clean interfaces for web and mobile applications. My UI/UX services focus on user experience, accessibility, responsive layouts, and visually appealing design. I create intuitive digital products optimized for engagement and user satisfaction.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20UI/UX%20Design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Services;
