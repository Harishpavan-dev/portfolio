import { useState, useEffect } from 'react';
import { getSkills } from '../firebase/firestore';

export const fallbackSkills = [
  { name: "HTML5", category: "Frontend", level: 90, color: "#e34c26", iconUrl: "https://cdn.simpleicons.org/html5/e34c26", order: 1 },
  { name: "CSS3", category: "Frontend", level: 85, color: "#1572B6", iconUrl: "https://cdn.simpleicons.org/css3/1572B6", order: 2 },
  { name: "JavaScript", category: "Frontend", level: 40, color: "#f7df1e", iconUrl: "https://cdn.simpleicons.org/javascript/f7df1e", order: 3 },
  { name: "Tailwind CSS", category: "Frontend", level: 70, color: "#38bdf8", iconUrl: "https://cdn.simpleicons.org/tailwindcss/38bdf8", order: 4 },
  { name: "React.js", category: "Frontend", level: 60, color: "#61dbfb", iconUrl: "https://cdn.simpleicons.org/react/61dbfb", order: 5 },
  
  { name: "PHP", category: "Backend", level: 70, color: "#777bb4", iconUrl: "https://cdn.simpleicons.org/php/777bb4", order: 6 },
  { name: "Java", category: "Backend", level: 40, color: "#f89820", iconUrl: "https://cdn.simpleicons.org/openjdk/f89820", order: 7 },
  { name: "Spring Boot", category: "Backend", level: 25, color: "#6DB33F", iconUrl: "https://cdn.simpleicons.org/springboot/6DB33F", order: 8 },
  { name: "Node.js", category: "Backend", level: 35, color: "#68A063", iconUrl: "https://cdn.simpleicons.org/nodedotjs/68A063", order: 9 },
  { name: "Python", category: "Backend", level: 20, color: "#3776AB", iconUrl: "https://cdn.simpleicons.org/python/3776AB", order: 10 },
  { name: "MySQL", category: "Backend", level: 65, color: "#4479A1", iconUrl: "https://cdn.simpleicons.org/mysql/4479A1", order: 11 },
  { name: "MongoDB", category: "Backend", level: 45, color: "#47a248", iconUrl: "https://cdn.simpleicons.org/mongodb/47a248", order: 12 },
  
  { name: "WordPress", category: "CMS & Platforms", level: 40, color: "#21759b", iconUrl: "https://cdn.simpleicons.org/wordpress/21759b", order: 13 },
  
  { name: "GitHub", category: "Tools", level: 70, color: "#6C63FF", iconUrl: "https://cdn.simpleicons.org/github/6C63FF", order: 14 },
  { name: "VS Code", category: "Tools", level: 85, color: "#0078d7", iconUrl: "https://cdn.simpleicons.org/visualstudiocode/0078d7", order: 15 },
  { name: "Postman", category: "Tools", level: 80, color: "#ef5b25", iconUrl: "https://cdn.simpleicons.org/postman/ef5b25", order: 16 },
  
  { name: "Vercel", category: "Deployment", level: 70, color: "#6C63FF", iconUrl: "https://cdn.simpleicons.org/vercel/6C63FF", order: 17 },
  { name: "Netlify", category: "Deployment", level: 65, color: "#00d1b2", iconUrl: "https://cdn.simpleicons.org/netlify/00d1b2", order: 18 },
  { name: "Render", category: "Deployment", level: 60, color: "#6C63FF", iconUrl: "https://cdn.simpleicons.org/render/6C63FF", order: 19 },
  
  { name: "Figma", category: "Design", level: 40, color: "#F24E1E", iconUrl: "https://cdn.simpleicons.org/figma/F24E1E", order: 20 },
  
  { name: "Ethical Hacking", category: "Cybersecurity", level: 50, color: "#00D4AA", iconEmoji: "🛡️", order: 21 },
  { name: "Networking Basics", category: "Cybersecurity", level: 35, color: "#00D4AA", iconEmoji: "🌐", order: 22 },
  { name: "Security Fundamentals", category: "Cybersecurity", level: 25, color: "#00D4AA", iconEmoji: "🔒", order: 23 },
  { name: "Web Security", category: "Cybersecurity", level: 35, color: "#00D4AA", iconEmoji: "🕸️", order: 24 },
  { name: "Linux Basics", category: "Cybersecurity", level: 60, color: "#00D4AA", iconEmoji: "🐧", order: 25 },
  { name: "Cloud Security", category: "Cybersecurity", level: 5, color: "#00D4AA", iconEmoji: "☁️", order: 26 },
  { name: "Pen Testing", category: "Cybersecurity", level: 10, color: "#00D4AA", iconEmoji: "🕵️‍♂️", order: 27 },
  { name: "Network Forensics", category: "Cybersecurity", level: 15, color: "#00D4AA", iconEmoji: "🔍", order: 28 },
  { name: "Social Engineering", category: "Cybersecurity", level: 60, color: "#00D4AA", iconEmoji: "🗣️", order: 29 },
];

export const useSkills = () => {
  const [flatSkills, setFlatSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await getSkills();
        if (data && data.length > 0) {
          setFlatSkills(data);
        } else {
          setFlatSkills(fallbackSkills);
        }
      } catch (err) {
        console.error('Error fetching skills:', err);
        setFlatSkills(fallbackSkills);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Group by category and create 'All'
  const groupedSkills = { All: [] };
  flatSkills.forEach(skill => {
    groupedSkills.All.push(skill);
    if (!groupedSkills[skill.category]) {
      groupedSkills[skill.category] = [];
    }
    groupedSkills[skill.category].push(skill);
  });
  
  Object.keys(groupedSkills).forEach(cat => {
    groupedSkills[cat] = groupedSkills[cat].sort((a,b) => a.order - b.order);
  });

  const orderedCats = ["All", "Frontend", "Backend", "CMS & Platforms", "Tools", "Deployment", "Design", "Cybersecurity"];
  const categories = Object.keys(groupedSkills).sort((a, b) => {
    const ai = orderedCats.indexOf(a);
    const bi = orderedCats.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return 0;
  });

  return { skills: groupedSkills, categories, loading, error };
};
