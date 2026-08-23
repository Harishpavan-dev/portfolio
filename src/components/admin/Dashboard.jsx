import { useState, useEffect } from 'react';
import { collection, getCountFromServer } from 'firebase/firestore';
import { db } from '../../firebase/config';

const StatCard = ({ icon, label, count, gradient }) => (
  <div className="glass-card p-6 rounded-2xl border border-white/5">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl`}>
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold font-display text-gray-900 dark:text-white">{count}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{label}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    services: 0,
    education: 0,
    blog_posts: 0,
    testimonials: 0,
    skills: 0,
    messages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const collections = ['projects', 'services', 'education', 'skills', 'blog_posts', 'testimonials', 'messages'];
        const counts = {};

        for (const col of collections) {
          try {
            const snapshot = await getCountFromServer(collection(db, col));
            counts[col] = snapshot.data().count;
          } catch {
            counts[col] = 0;
          }
        }

        setStats(counts);
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { icon: '📁', label: 'Projects', count: stats.projects, gradient: 'from-primary to-primary-light' },
    { icon: '🛠️', label: 'Services', count: stats.services, gradient: 'from-accent-cyan to-teal-400' },
    { icon: '🎓', label: 'Education', count: stats.education, gradient: 'from-accent-pink to-pink-400' },
    { icon: '⚡', label: 'Skills', count: stats.skills, gradient: 'from-accent-amber to-yellow-400' },
    { icon: '📝', label: 'Blog Posts', count: stats.blog_posts, gradient: 'from-primary to-accent-cyan' },
    { icon: '⭐', label: 'Testimonials', count: stats.testimonials, gradient: 'from-accent-cyan to-primary' },
    { icon: '📬', label: 'Messages', count: stats.messages, gradient: 'from-accent-pink to-primary' },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div className="glass-card p-8 rounded-2xl border border-primary/10">
        <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white mb-2">
          Welcome Back, <span className="gradient-text-primary">Admin</span> 👋
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Manage your portfolio content, blog posts, testimonials, and more from this dashboard.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statCards.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="glass-card p-8 rounded-2xl border border-white/5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <QuickAction icon="📁" label="Add New Project" description="Add a project to your portfolio" />
          <QuickAction icon="📝" label="Write Blog Post" description="Create a new blog article" />
          <QuickAction icon="⭐" label="Add Testimonial" description="Add a client review" />
        </div>
      </div>

    </div>
  );
};

const QuickAction = ({ icon, label, description }) => (
  <div className="glass-card p-5 rounded-xl hover:border-primary/20 border border-transparent transition-all cursor-pointer group">
    <div className="flex items-start gap-3">
      <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
      <div>
        <p className="text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{label}</p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

export default Dashboard;
