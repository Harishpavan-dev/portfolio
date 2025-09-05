const Projects = () => {
    return (
      <div
        id="projects"
        className="bg-[#ffffff] min-h-screen flex items-center dark:bg-gray-900"
          style={{
    backgroundImage: "url('/public/Project.png')",
  }}
      >
        <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
              My Projects
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
              Some of my personal and client projects
            </p>
          </div>
  
          {/* Project Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
                My Portfolio Website
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
                A responsive portfolio built with React and Tailwind CSS.
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
            </div>
            {/* Project 2 */}
            <div className="w-full max-w-md mx-auto bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
  <h2 className="text-center text-[#fe5617] font-extrabold text-2xl md:text-3xl mb-3 animate-fadeIn">
    Text-to-Speech App
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-4 animate-fadeIn delay-100">
    A browser-based Text-to-Speech application built with HTML, CSS, and JavaScript. Convert typed text into natural voice instantly.
  </p>
  <div className="flex justify-center gap-4 mt-2 animate-fadeIn delay-200">
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
</div>
{/* Project 2 */}
<div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
  <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
    World Clock Project
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
    A live world clock with autocomplete search for cities. Built with HTML, CSS, and JavaScript.
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
</div>


</div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  