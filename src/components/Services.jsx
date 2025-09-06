const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen flex items-center bg-cover bg-center dark:bg-gray-900"
      aria-label="Professional Web Development and Digital Services"
    >
      <div className="max-w-[90%] md:max-w-[85%] mx-auto font-inter space-y-8 py-10">
        
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
            Professional Web Development & Digital Services
          </h1>
          <p className="text-lg md:text-xl dark:text-gray-300 mt-2">
            Explore my expert services including Web Development Services, E-Commerce Website Development, UI/UX Design with Figma, SEO & Digital Marketing Services, IT Support Solutions, CMS Development WordPress, Web Hosting & Maintenance, Graphic Design Services, and Cybersecurity Services for businesses and individuals.
          </p>
        </header>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Web Development */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="Web Development Services for SEO-friendly websites">
            <div className="text-5xl mb-4 text-[#fe5617]">💻</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              Web Development Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I provide professional Web Development Services using HTML, CSS, JavaScript, and Tailwind CSS to build responsive, modern, and SEO-friendly websites. Perfect for businesses looking to increase online visibility, performance, and user engagement.
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
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="E-Commerce Website Development Services">
            <div className="text-5xl mb-4 text-[#fe5617]">🛒</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              E-Commerce Website Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I create fully functional WordPress E-Commerce websites. Services include responsive online store design, secure payment gateway integration, product management, and SEO optimization to boost online sales and visibility.
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
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="UI and UX Design Services using Figma">
            <div className="text-5xl mb-4 text-[#fe5617]">🎨</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              UI/UX Design Services with Figma
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I design modern, clean, and responsive user interfaces using Figma for web and mobile applications. My UI/UX Design Services focus on accessibility, engagement, and user satisfaction, enhancing overall user experience.
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

          {/* SEO & Digital Marketing */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="SEO and Digital Marketing Services">
            <div className="text-5xl mb-4 text-[#fe5617]">📈</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              SEO & Digital Marketing Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Boost your website’s Google ranking with my SEO & Digital Marketing Services. Includes keyword research, on-page and off-page SEO, backlink building, and content optimization for higher search engine visibility.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20SEO%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

          {/* IT Support & Solutions */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="IT Support and Solutions Services">
            <div className="text-5xl mb-4 text-[#fe5617]">🖥️</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              IT Support & Solutions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Get reliable IT Support and Solutions for your business including network setup, troubleshooting, cloud services, and cybersecurity support to maintain smooth operations.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20IT%20Support%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

          {/* Graphic Design */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="Graphic Design Services for Web and Branding">
            <div className="text-5xl mb-4 text-[#fe5617]">🖌️</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              Graphic Design Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional Graphic Design Services including digital illustrations, branding materials, banners, and social media graphics to enhance your online presence.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20Graphic%20Design%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

          {/* CMS Development */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="CMS Development Services WordPress Joomla Drupal">
            <div className="text-5xl mb-4 text-[#fe5617]">🗂️</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              CMS Development Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Build websites using WordPress, Joomla, or Drupal for scalable CMS solutions. Optimized for SEO, fast loading, and easy content management.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20CMS%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

          {/* Web Hosting & Maintenance */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="Web Hosting and Maintenance Services">
            <div className="text-5xl mb-4 text-[#fe5617]">⚙️</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              Web Hosting & Maintenance
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Provide reliable Web Hosting & Maintenance Services including server setup, website updates, backups, and performance monitoring. Optimized for speed, security, and SEO-friendly hosting.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20Web%20Hosting%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </article>

          {/* Cybersecurity Services */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transform hover:-translate-y-3 transition-all duration-300" aria-label="Cybersecurity Services for Website and Network Protection">
            <div className="text-5xl mb-4 text-[#fe5617]">🔒</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              Cybersecurity Services
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional Cybersecurity Services including website and network security audits, penetration testing, and security consulting to protect digital assets, sensitive information, and maintain business continuity.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20Cybersecurity%20services"
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
