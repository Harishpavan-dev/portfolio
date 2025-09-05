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
</div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  