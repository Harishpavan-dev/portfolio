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
            <p className="text-lg text-gray-700 text-center">I move in silence and I let my results speak louder than words.
            
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
              <br /> Attended 7 months of 1-year program(2025)
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
  <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700 shadow-sm w-full md:w-2/3 mx-auto mt-4">
    <p className="font-semibold text-gray-800 mb-2 text-center">Instructions:</p>
    <ol className="list-decimal list-inside space-y-2 text-left">
      <li>
        Copy your reference number: 
        <span className="ml-2 px-2 py-1 bg-gray-100 rounded font-mono text-sm">
          V7L87E
        </span>
      </li>
      <li>Click the <b>View My Result</b> button below.</li>
      <li>Select <b>Verification of Results Online</b>.</li>
      <li>Click <b>Verification Issued Online</b>.</li>
      <li>Paste the reference number and check <b>my result</b>.</li>
    </ol>
  </div>
  <div className="flex justify-center mt-4">
    <a
      href="https://certificate.doenets.lk/" // 🔹 change this to your result page or PDF link
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
    >
      View My Result
    </a>
  </div>
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
            <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700 shadow-sm w-full md:w-2/3 mx-auto mt-4">
    <p className="font-semibold text-gray-800 mb-2 text-center">Instructions:</p>
    <ol className="list-decimal list-inside space-y-2 text-left">
      <li>
        Copy your reference number: 
        <span className="ml-2 px-2 py-1 bg-gray-100 rounded font-mono text-sm">
          VF454H
        </span>
      </li>
      <li>Click the <b>View My Result</b> button below.</li>
      <li>Select <b>Verification of Results Online</b>.</li>
      <li>Click <b>Verification Issued Online</b>.</li>
      <li>Paste the reference number and check <b>my result</b>.</li>
    </ol>
  </div>
            <div className="flex justify-center mt-4">
    <a
      href="https://certificate.doenets.lk/" // 🔹 change this to your result page or PDF link
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
    >
      View My Result
    </a>
  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
