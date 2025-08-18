const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Projects
        </h1>

        {/* Project 1 and 2 in one row */}
        <div className="flex flex-col md:flex-col gap-10">
          {/* PetPals Project */}
         

          {/* Biosta AI Project */}
         {/* <div className="w-full md:w-1/2 flex flex-col place-self-end bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h1 className="text-center text-[#fe5617] font-extrabold text-[32px] mb-4">
              Biosta AI
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              An AI-based platform that optimizes user bio data using the Gemini
              API. Developed with React.js, this app helps users to improve
              their biological data using advanced AI algorithms.
            </p>
            <a
              href="https://biosta.netlify.app/"
              className="text-[#fe5617] text-center font-bold text-lg hover:underline"
            >
              Live Demo
            </a>
          </div> */}
        </div> 
        <div className="flex flex-col md:flex-col gap-10">
          
        </div>  

        {/* Project 3 and 4 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* CoderLobby Project */}
         

          {/* Cinerate Project */}
          
        </div>

        {/* Project 5 and 6 in one row */}
        <div className="flex flex-col md:flex-col gap-10 mt-10">
          {/* React Weather Pro Project */}
          

          {/* Landing Pages Bundle */}
          
        </div>
      </div>
    </div>
  );
};

export default Project;
