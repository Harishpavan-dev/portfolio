import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../context/AuthContext';
import Dashboard from './Dashboard';
import ProjectsManager from './ProjectsManager';
import ServicesManager from './ServicesManager';
import EducationManager from './EducationManager';
import BlogEditor from './BlogEditor';
import TestimonialsManager from './TestimonialsManager';
import SkillsManager from './SkillsManager';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'projects', label: 'Projects', icon: '📁' },
  { id: 'services', label: 'Services', icon: '🛠️' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'skills', label: 'Skills', icon: '🛠️' },
  { id: 'blog', label: 'Blog', icon: '📝' },
  { id: 'testimonials', label: 'Testimonials', icon: '⭐' },
];

const AdminLayout = () => {
  const { user, loading, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex items-center justify-center">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 animate-spin text-primary" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <span className="text-gray-500 dark:text-gray-400">Loading...</span>
        </div>
      </div>
    );
  }

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'projects': return <ProjectsManager />;
      case 'services': return <ServicesManager />;
      case 'education': return <EducationManager />;
      case 'skills': return <SkillsManager />;
      case 'blog': return <BlogEditor />;
      case 'testimonials': return <TestimonialsManager />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 
        bg-white/80 dark:bg-dark-bg/95 backdrop-blur-xl border-r border-gray-200 dark:border-white/5 
        transform transition-transform duration-300 lg:translate-x-0 
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 border-b border-gray-200 dark:border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white font-bold shadow-lg shadow-primary/20">
              HP
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900 dark:text-white font-display">Admin Panel</h2>
              <p className="text-[10px] text-gray-500 dark:text-gray-500">Portfolio CMS</p>
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-primary/5 hover:text-primary'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-white/5">
          <a
            href="/"
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-primary/5 hover:text-primary transition-all mb-2"
          >
            <span>🏠</span>
            <span>View Site</span>
          </a>
          <button
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-h-screen">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 px-6 py-4 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-primary/5"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <h1 className="text-lg font-bold font-display text-gray-900 dark:text-white capitalize">
            {activeTab === 'dashboard' ? '📊 Dashboard' : navItems.find(n => n.id === activeTab)?.icon + ' ' + activeTab}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-500 dark:text-gray-500 hidden sm:block">
              {user.email}
            </span>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white text-xs font-bold">
              {user.email?.charAt(0)?.toUpperCase() || 'A'}
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
