import { useState, useEffect } from 'react';
import { getTestimonials } from '../firebase/firestore';

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials();
        setTestimonials(data);
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};
