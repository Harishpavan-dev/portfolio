import { useState, useEffect } from 'react';
import { getEducation } from '../firebase/firestore';

// Fallback data (your current hardcoded education)
const fallbackEducation = [
  {
    id: 'fallback-1',
    title: "HNDIT",
    institution: "Advanced Technological Institute, Jaffna",
    description: "Currently studying HNDIT. Focus on software development, practical IT projects, and advanced coding skills. Expected completion in 2028.",
    courseLink: "http://www.sliate.ac.lk/course/hndit#subjects-and-credits",
    status: "ongoing",
    order: 1,
  },
  {
    id: 'fallback-2',
    title: "Software Development (NVQ-04)",
    institution: "College of Technology, Jaffna",
    description: "NVQ-04 Program. 7 months of 1-year software development training completed (2025). Focus on practical coding, IT solutions, and development skills.",
    courseLink: "https://drive.google.com/file/d/1hU370vVnfMBx8IMmYtODmlwYDJMEosXb/view?usp=sharing",
    status: "partial",
    order: 2,
  },
  {
    id: 'fallback-3',
    title: "Trainee - Full Stack Developer",
    institution: "University of Moratuwa",
    description: "Online full stack development training program. Ongoing (2025 – Present). Focus on building professional web applications, backend, frontend, and cybersecurity best practices.",
    courseLink: "https://open.uom.lk/fullstack-developer.html",
    status: "ongoing",
    order: 3,
  },
  {
    id: 'fallback-4',
    title: "G.C.E. Advanced Level (A/L)",
    institution: "J/Skandavarodaya College, Chunnakam",
    description: "Stream: Commerce (ICT, Business Studies, Accounting). Completed in 2024. Focused on IT, business, and accounting skills relevant for professional growth.",
    verificationCode: "V7L87E",
    verificationLink: "https://certificate.doenets.lk/",
    status: "completed",
    order: 4,
  },
  {
    id: 'fallback-5',
    title: "G.C.E. Ordinary Level (O/L)",
    institution: "J/Erlalai Sri Murugan Vidyalayam",
    description: "Completed in 2022. Acquired fundamental knowledge in IT, mathematics, and commerce subjects.",
    verificationCode: "VF454H",
    verificationLink: "https://certificate.doenets.lk/",
    status: "completed",
    order: 5,
  },
];

export const useEducation = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const data = await getEducation();
        if (data.length > 0) {
          setEducation(data);
        } else {
          setEducation(fallbackEducation);
        }
      } catch (err) {
        console.error('Error fetching education:', err);
        setError(err.message);
        setEducation(fallbackEducation);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  return { education, loading, error };
};
