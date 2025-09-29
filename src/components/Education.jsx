const Education = () => {
  return (
    <section
      id="Education"
      className="bg-[#ffffff] min-h-screen flex items-center dark:bg-gray-900"
      aria-label="My Education and Academic Certificates"
    >
      <div className="max-w-[90%] md:max-w-[90%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
            My Education & Certificates
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
            Explore my academic journey, training programs, certifications, and professional courses.
          </p>
        </header>

        {/* Education List */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* In Progress Courses */}
         {/* HNDIT Software Development */}
<article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="HNDIT Software Development Course">
  <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
    HNDIT
  </h2>
  <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
    Currently studying HNDIT at Advanced Technological Institute, Jaffna.<br />
    Focus on software development, practical IT projects, and advanced coding skills. Expected completion in 2028.
  </p>
  <div className="flex justify-center gap-4 mt-4">
    <a
      href="http://www.sliate.ac.lk/course/hndit#subjects-and-credits" // Replace with actual course link if available
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
    >
      Course Details
    </a>
    <button
      onClick={() => alert("Course ongoing, certificate not available yet.")}
      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      View Certificate
    </button>
  </div>
</article>


          {/* Software Development NVQ-04 */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="Software Development NVQ-04 Course">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              Software Development (NVQ-04)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              NVQ-04 Program at College of Technology, Jaffna.<br />
              7 months of 1-year software development training completed (2025). Focus on practical coding, IT solutions, and development skills.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://drive.google.com/file/d/1hU370vVnfMBx8IMmYtODmlwYDJMEosXb/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fe5617] text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-[#e14c12] transition"
              >
                Course Details
              </a>
              <button
                onClick={() => alert("Course not completed yet.")}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                View Certificate
              </button>
            </div>
          </article>

          {/* Trainee Full Stack Developer */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="Trainee Full Stack Developer Course">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              Trainee - Full Stack Developer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Online full stack development training program at University of Moratuwa.<br />
              Ongoing (2025 – Present). Focus on building professional web applications, backend, frontend, and cybersecurity best practices.
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
                onClick={() => alert("Course ongoing. Certificate not available yet.")}
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-5 py-2 rounded-xl font-semibold shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                View Certificate
              </button>
            </div>
          </article>

          {/* G.C.E Advanced Level */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="GCE Advanced Level Education">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              G.C.E. Advanced Level (A/L)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              Stream: Commerce (ICT, Business Studies, Accounting).<br />
              J/Skandavarodaya College, Chunnakam.<br />
              Completed in 2024. Focused on IT, business, and accounting skills relevant for professional growth.
            </p>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 shadow-sm w-full md:w-2/3 mx-auto mt-4">
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Instructions:</p>
              <ol className="list-decimal list-inside space-y-2 text-left">
                <li>Copy your reference number: <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded font-mono text-sm">V7L87E</span></li>
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
          </article>

          {/* G.C.E Ordinary Level */}
          <article className="w-full bg-[#F2EFE5] dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300" aria-label="GCE Ordinary Level Education">
            <h2 className="text-center text-[#fe5617] font-extrabold text-[28px] mb-2">
              G.C.E. Ordinary Level (O/L)
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 text-center">
              J/Erlalai Sri Murugan Vidyalayam.<br />
              Completed in 2022. Acquired fundamental knowledge in IT, mathematics, and commerce subjects.
            </p>
            <div className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 text-sm text-gray-700 dark:text-gray-300 shadow-sm w-full md:w-2/3 mx-auto mt-4">
              <p className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">Instructions:</p>
              <ol className="list-decimal list-inside space-y-2 text-left">
                <li>Copy your reference number: <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-600 rounded font-mono text-sm">VF454H</span></li>
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
          </article>

        </div>
      </div>
    </section>
  );
};

export default Education;
