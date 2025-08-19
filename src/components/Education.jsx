const Education = () => {
  return (
    <div id="Education" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          My Education
        </h1>

        {/* Education List */}
        <div className="flex flex-col gap-10">
          {/* Example 1 */}
          <div className="w-full bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
            In Progress
            </h2>
            <p className="text-lg text-gray-700 text-center">
            
              <br /> 
              <br /> 
            </p>
          </div>
          <div className="w-full bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
            Software Development (Not Completed)
            </h2>
            <p className="text-lg text-gray-700 text-center">
              NVQ-04
              <br /> College of Technology, Jaffna  
              <br /> Attended 7 months of 1-year program
            </p>
          </div>
          <div className="w-full bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
            Trainee - Full stack developer
            </h2>
            <p className="text-lg text-gray-700 text-center">
            Online training programme
              <br /> University of Moratuwa
              <br /> Ongoing (2025 – Present)
            </p>
          </div>

          {/* Example 2 */}
          <div className="w-full bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              G.C.E. Advanced Level
            </h2>
            <p className="text-lg text-gray-700 text-center">
              Stream: Commerce (ICT, Business Studies, Accounting)  
              <br /> J/Skandavarodaya College, Chunnakam
 
              <br /> Completed in 2024
            </p>
          </div>

          {/* Example 3 */}
          <div className="w-full bg-[#F2EFE5] p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              G.C.E. Ordinary Level
            </h2>
            <p className="text-lg text-gray-700 text-center">
            J/Erlalai Sri Murugan Vidyalayam 
              <br /> Completed in 2022
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
