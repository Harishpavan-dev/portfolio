import { useState, useEffect } from 'react';
import { getServices } from '../firebase/firestore';

// Fallback data (your current hardcoded services)
const fallbackServices = [
  {
    id: 'fallback-1',
    icon: "💻",
    title: "Web Development Services",
    description: "End-to-end professional web development using React, Node.js, REST APIs, and modern frontend frameworks. Includes performance optimization, SEO architecture, accessibility (WCAG), security best practices, scalable database design, and deployment on cloud platforms (Vercel, etc..). Ideal for startups, businesses, and SaaS products that require speed, reliability, and scalability.",
    whatsappText: "Hi%20I%20am%20interested%20in%20your%20Web%20Development%20services",
  },
  {
    id: 'fallback-2',
    icon: "🎨",
    title: "UI/UX Design Services with Figma",
    description: "Data-driven UI/UX design using Figma with complete user research, wireframing, prototyping, usability testing, and design systems. Focus on conversion optimization, accessibility, micro-interactions, and seamless user journeys for web and mobile applications.",
    whatsappText: "Hi%20I%20am%20interested%20in%20your%20UI/UX%20Design%20services",
  },
  {
    id: 'fallback-3',
    icon: "📈",
    title: "SEO & Digital Marketing Services",
    description: "Advanced SEO strategy including technical SEO audits, site architecture optimization, Core Web Vitals improvement, schema markup, keyword clustering, content strategy, backlink acquisition, and conversion tracking. Designed to increase organic traffic, rankings, and revenue.",
    whatsappText: "Hi%20I%20am%20interested%20in%20your%20SEO%20services",
  },
  {
    id: 'fallback-4',
    icon: "🗂️",
    title: "WordPress Development Services",
    description: "Custom WordPress website development including theme and plugin development, WooCommerce integration, SEO optimization, performance tuning, security hardening, and easy content management. Perfect for business websites, blogs, and e-commerce stores.",
    whatsappText: "Hi%20I%20am%20interested%20in%20your%20WordPress%20Development%20services",
  },
  {
    id: 'fallback-5',
    icon: "⚙️",
    title: "Web Hosting & Maintenance",
    description: "Managed web hosting with server setup, cloud deployment, automated backups, uptime monitoring, CDN integration, performance optimization, security updates, and continuous website maintenance to ensure reliability and speed.",
    whatsappText: "Hi%20I%20am%20interested%20in%20your%20Web%20Hosting%20%26%20Maintenance%20services",
  },
  {
    id: 'fallback-6',
    icon: "🔒",
    title: "Cybersecurity Services",
    description: "Enterprise-grade cybersecurity services including vulnerability assessments, penetration testing, malware removal, firewall setup, server hardening, secure authentication systems, and ongoing security monitoring to protect websites and digital assets.",
    whatsappText: "Hi%20I%20am%20interested%20in%20your%20Cybersecurity%20services",
  },
];

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await getServices();
        if (data.length > 0) {
          setServices(data);
        } else {
          setServices(fallbackServices);
        }
      } catch (err) {
        console.error('Error fetching services:', err);
        setError(err.message);
        setServices(fallbackServices);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};
