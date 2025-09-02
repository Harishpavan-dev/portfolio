import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNode,
  FaGithub,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiNetlify,
  SiMongodb,
  SiPostman,
  SiRender,
  SiMysql,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

// 🟠 Skills Data
const skills = {
  frontend: [
    { name: "HTML5", icon: <FaHtml5 size={40} className="text-[#e34c26]" />, level: 90 },
    { name: "CSS3", icon: <FaCss3Alt size={40} className="text-[#264de4]" />, level: 85 },
    { name: "JavaScript", icon: <FaJsSquare size={40} className="text-[#f7df1e]" />, level: 40 },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} className="text-[#38bdf8]" />, level: 70 },
    { name: "React.js", icon: <FaReact size={40} className="text-[#61dbfb]" />, level: 60 },
    
  ],
  backend: [
   
    { name: "MySQL", icon: <SiMysql size={40} className="text-[#4479A1]" />, level: 65 },
    { name: "MongoDB", icon: <SiMongodb size={40} className="text-[#47a248]" />, level: 45 },
  ],
  tools: [
    
    { name: "GitHub", icon: <FaGithub size={40} />, level: 70 },
    { name: "VS Code", icon: <DiVisualstudio size={40} className="text-[#0078d7]" />, level: 85 },
    { name: "Postman", icon: <SiPostman size={40} className="text-[#ef5b25]" />, level: 60 },
    
  ],
  deployment: [
    { name: "Vercel", icon: <IoLogoVercel size={40} />, level: 70 },
    { name: "Netlify", icon: <SiNetlify size={40} className="text-[#00d1b2]" />, level: 65 },
    { name: "Render", icon: <SiRender size={40} />, level: 60 },
  ],
  design: [
    { name: "Figma", icon: <FaFigma size={40} className="text-[#F24E1E]" />, level: 40 },
  ],
  cybersecurity: [
    { name: "Ethical Hacking", icon: <span>🛡️</span>, level: 30 },
    { name: "Networking Basics", icon: <span>🌐</span>, level: 20 },
  ],
};

// 🟠 Skill Section Component
const SkillSection = ({ title, skillList }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold text-[#fe5617]">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillList.map((skill, index) => (
        <div key={index} className="flex items-center space-x-4">
          {/* Icon */}
          <div className="flex flex-col items-center w-16">{skill.icon}</div>
          {/* Skill + Progress */}
          <div className="flex-1">
            <div className="flex justify-between text-sm font-bold">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-[#fe5617] h-2 rounded-full transition-all duration-700"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// 🟠 About Component
const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Text */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Bavananthan Harishpavan</span>, an
          enthusiastic student passionate about technology and cybersecurity. I’m
          continuously learning and improving my skills in{" "}
          <span className="font-bold text-[#fe5617]">
            web development, IT, and cybersecurity
          </span>
          . While I don’t have professional experience yet, I’m eager to work on creative
          projects, grow as a{" "}
          <span className="font-bold text-[#fe5617]">
            developer and cybersecurity professional
          </span>
          , and share knowledge with others.
        </p>

        {/* Skills */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold text-center text-[#fe5617]">My Skills</h2>
          <SkillSection title="Frontend" skillList={skills.frontend} />
          <SkillSection title="Backend" skillList={skills.backend} />
          <SkillSection title="Tools & Utilities" skillList={skills.tools} />
          <SkillSection title="Deployment" skillList={skills.deployment} />
          <SkillSection title="Design" skillList={skills.design} />
          <SkillSection title="Cybersecurity" skillList={skills.cybersecurity} />
        </div>
      </div>
    </div>
  );
};

export default About;
