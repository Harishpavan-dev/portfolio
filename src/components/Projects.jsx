const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#ffffff] min-h-screen flex items-center dark:bg-gray-900"
      style={{ backgroundImage: "url('/Project.png')" }}
      aria-label="My Projects Portfolio including web apps, tools, and client projects"
    >
      <div className="max-w-[90%] md:max-w-[90%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
            My Projects Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
            Showcase of personal, academic, and client projects including web applications, tools, and interactive websites.
          </p>
        </header>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Project 1 - Portfolio Website */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="Portfolio Website Project">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              Personal Portfolio Website
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              A responsive personal portfolio website showcasing skills, projects, and education. Built with React, Tailwind CSS, and optimized for performance and SEO.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://harishpavan-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                View Live
              </a>
              <a
                href="https://github.com/Harishpavan-dev/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                View Code
              </a>
            </div>
          </article>

          {/* Project 2 - Text-to-Speech App */}
          <article className="w-full max-w-md mx-auto bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="Text-to-Speech Application Project">
            <h2 className="text-center text-[#fe5617] font-extrabold text-2xl md:text-3xl mb-3">
              Text-to-Speech App
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-4">
              Browser-based Text-to-Speech (TTS) web app. Converts typed text into realistic voice using JavaScript, HTML, and CSS. Ideal for accessibility and productivity.
            </p>
            <div className="flex justify-center gap-4 mt-2">
              <a
                href="https://ttsharishpavan-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition transform hover:scale-105"
              >
                View Live
              </a>
              <a
                href="https://github.com/Harishpavan-dev/text-to-speech-TTS-.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition transform hover:scale-105"
              >
                View Code
              </a>
            </div>
          </article>

          {/* Project 3 - World Clock */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="World Clock Web Application Project">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              World Clock Web App
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              A real-time world clock with city autocomplete search. Built using HTML, CSS, and JavaScript. Perfect for global users to track multiple timezones easily.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://world-clock-harishpavan-dev.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                View Live
              </a>
              <a
                href="https://github.com/Harishpavan-dev/World-Clock-project.git"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                View Code
              </a>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
};

export default Projects;
