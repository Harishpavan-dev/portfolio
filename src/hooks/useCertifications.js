import { useState, useEffect } from 'react';
import { getCertifications } from '../firebase/firestore';

// Fallback data in case Firestore is unreachable
const fallbackCertifications = [
  {
    id: 'fallback-1',
    title: 'Server-side Web Programming',
    issuer: 'Faculty of Information Technology | University of Moratuwa',
    credentialId: 'PBmw4Bhuxn',
    imageUrl: '',
    verificationLink: 'https://open.uom.lk/lms/mod/customcert/verify_certificate.php',
    order: 5,
  },
];

export const useCertifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        const data = await getCertifications();
        if (data.length > 0) {
          setCertifications(data);
        } else {
          setCertifications(fallbackCertifications);
        }
      } catch (err) {
        console.error('Error fetching certifications:', err);
        setError(err.message);
        setCertifications(fallbackCertifications);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return { certifications, loading, error };
};
