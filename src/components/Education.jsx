const Education = () => {
  return (
    <div
      id="Education"
      className="bg-[#ffffff] min-h-screen flex items-center dark:bg-gray-900"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
            My Education
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
            Certificates & Academic Journey
          </p>
        </div>

        {/* Education List */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example 1 - In Progress */}
          <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              In Progress
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              I move in silence and I let my results speak louder than words.
              <br />
              <br />
            </p>
            
            <div className="flex justify-center gap-4 mt-4">
    {/* Course Details Button */}
    <button
      onClick={() => alert("Course not started.")}
      className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
    >
      Course Details
    </button>

    {/* Certificate Button */}
    <button
      onClick={() => alert("Course no completed yet. Ongoing! ")}
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      View Certificate
    </button>
  </div>
          </div>

          {/* Example 2 - Software Development */}
          <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
  <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
    Software Development (Not Completed)
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
    NVQ-04
    <br /> College of Technology, Jaffna
    <br /> Attended 7 months of 1-year program (2025)
  </p>
  
  <div className="flex justify-center gap-4 mt-4">
    {/* Course Details Button */}
    <a
      href="https://drive.google.com/file/d/1hU370vVnfMBx8IMmYtODmlwYDJMEosXb/view?usp=sharing" // 🔹 replace with your course details link
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
    >
      Course Details
    </a>

    {/* Certificate Button */}
    <button
      onClick={() => alert("Course not completed.")}
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      View Certificate
    </button>
  </div>
</div>


          {/* Example 3 - Trainee Full Stack Developer */}
          <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              Trainee - Full stack developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Online training programme
              <br /> University of Moratuwa
              <br /> Ongoing (2025 – Present)
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://open.uom.lk/fullstack-developer.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Course Details
              </a>
              <button
                onClick={() => alert("Course no completed yet. Ongoing!t")}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                View Certificate
              </button>
            </div>
          </div>
       


          {/* Example 4 - A/L Completed */}
          
          <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg ">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              G.C.E. Advanced Level
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Stream: Commerce (ICT, Business Studies, Accounting)
              <br /> J/Skandavarodaya College, Chunnakam
              <br /> Completed in 2024
            </p>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 shadow-sm w-full md:w-2/3 mx-auto mt-4">
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                Instructions:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-left">
                <li>
                  Copy your reference number:
                  <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded font-mono text-sm">
                    V7L87E
                  </span>
                </li>
                <li>Click the <b>View My Result</b> button below.</li>
                <li>Select <b>Verification of Results Online</b>.</li>
                <li>Click <b>Verification Issued Online</b>.</li>
                <li>Paste the reference number and check <b>my result</b>.</li>
              </ol>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://certificate.doenets.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                View My Result
              </a>
              
            </div>
          </div>

          {/* Example 5 - O/L Completed */}
          <div className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              G.C.E. Ordinary Level
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              J/Erlalai Sri Murugan Vidyalayam
              <br /> Completed in 2022
            </p>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 shadow-sm w-full md:w-2/3 mx-auto mt-4">
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                Instructions:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-left">
                <li>
                  Copy your reference number:
                  <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded font-mono text-sm">
                    VF454H
                  </span>
                </li>
                <li>Click the <b>View My Result</b> button below.</li>
                <li>Select <b>Verification of Results Online</b>.</li>
                <li>Click <b>Verification Issued Online</b>.</li>
                <li>Paste the reference number and check <b>my result</b>.</li>
              </ol>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://certificate.doenets.lk/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                View My Result
              </a>
              
            </div>
          </div><div/>
        </div>
      </div>
    </div>
  );
};

export default Education;
