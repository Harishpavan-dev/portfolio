const Services = () => {
  return (
    <div
  id="services"
  className="min-h-screen flex items-center bg-cover bg-center dark:bg-gray-900"
 
>
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
            My Services
          </h1>
          <p className="text-lg md:text-xl dark:text-gray-300 mt-2">
            What I can do for you — skills, expertise, and solutions I offer
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="text-5xl mb-4 text-[#fe5617]">💻</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              Web Development
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Building responsive and modern websites using React, Tailwind, and more.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20Web%20Development%20services
"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Service 2 */}
           <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="text-5xl mb-4 text-[#fe5617]">🛒</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              E-Commerce Website
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A fully functional online store built with WordPress and WooCommerce.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://wa.me/94764328867?text=Hi%20I%20am%20interested%20in%20your%20E-Commerce%20Website%20services"
  
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Hire Me              </a>
              
            </div>
          </div>

          {/* Service 3 */}
          <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
            <div className="text-5xl mb-4 text-[#fe5617]">🎨</div>
            <h2 className="text-2xl font-bold mb-2 text-[#fe5617]">
              UI/UX Design
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Designing clean and modern interfaces for web and mobile applications.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
