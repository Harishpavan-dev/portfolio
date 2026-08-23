import { useState, useEffect } from 'react';
import { getProjects } from '../firebase/firestore';

// Fallback data (your current hardcoded projects)
const fallbackProjects = [
  {
    id: 'fallback-1',
    title: "Fahhhhhh – VS Code Error Sound Notifier",
    description: "A fun and efficient VS Code extension that plays a 'fahhhhhh' sound whenever terminal commands fail. Built with JavaScript and Node.js, it enhances developer productivity by providing immediate audio alerts for compilation errors, script failures, and build issues, with cross-platform support and offline functionality.",
    liveLink: "https://marketplace.visualstudio.com/items?itemName=harishpavan.fahhhhh",
    codeLink: "https://github.com/Harishpavan-dev/fahhhhh",
    tags: ["VS Code", "JavaScript", "Node.js", "Developer Productivity", "Audio Alerts"],
    featured: true,
  },
  {
    id: 'fallback-2',
    title: "HNDIT LMS – SLIATE ATI Learning Management System",
    description: "A web-based Learning Management System developed for SLIATE ATI HNDIT students to access course materials and manage academic resources online. Built using PHP, MySQL, JavaScript, and Tailwind CSS with features like course modules, structured learning resources, and an organized interface for HNDIT students.",
    liveLink: "https://hnditlms.free.nf/",
    codeLink: "#",
    tags: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 'fallback-3',
    title: "Student Management System with Attendance Tracking",
    description: "A dynamic web-based system for managing student records, including attendance tracking. Built with PHP, MySQL, JavaScript, and enhanced with features like registration, attendance marking, and report generation.",
    liveLink: "https://hnditportal.free.nf/",
    codeLink: "#",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    id: 'fallback-4',
    title: "Student Attendance System",
    description: "A web-based student attendance system for managing and tracking daily attendance. Built with PHP, MySQL, and JavaScript, featuring login system, attendance marking, and analytics dashboard.",
    liveLink: "https://atijaffna-harish.free.nf/login.php",
    codeLink: "https://github.com/Harishpavan-dev/Student-Attendance-System.git",
    tags: ["PHP", "MySQL", "Dashboard"],
  },
  {
    id: 'fallback-5',
    title: "Personal Portfolio Website",
    description: "A responsive personal portfolio website showcasing skills, projects, and education. Built with React, Tailwind CSS, and optimized for performance and SEO.",
    liveLink: "https://harishpavan-dev.vercel.app/",
    codeLink: "https://github.com/Harishpavan-dev/portfolio",
    tags: ["React", "Tailwind", "SEO"],
  },
  {
    id: 'fallback-6',
    title: "Text-to-Speech App",
    description: "Browser-based Text-to-Speech (TTS) web app. Converts typed text into realistic voice using JavaScript, HTML, and CSS. Ideal for accessibility and productivity.",
    liveLink: "https://ttsharishpavan-dev.vercel.app/",
    codeLink: "https://github.com/Harishpavan-dev/text-to-speech-TTS-.git",
    tags: ["JavaScript", "Web API", "Accessibility"],
  },
  {
    id: 'fallback-7',
    title: "World Clock Web App",
    description: "A real-time world clock with city autocomplete search. Built using HTML, CSS, and JavaScript. Perfect for global users to track multiple timezones easily.",
    liveLink: "https://world-clock-harishpavan-dev.vercel.app/",
    codeLink: "https://github.com/Harishpavan-dev/World-Clock-project.git",
    tags: ["JavaScript", "API", "Real-time"],
  },
];

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        if (data.length > 0) {
          setProjects(data);
        } else {
          // Use fallback if Firestore is empty
          setProjects(fallbackProjects);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError(err.message);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};
