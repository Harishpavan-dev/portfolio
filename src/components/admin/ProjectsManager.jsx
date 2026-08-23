import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllProjects, addDocument, updateDocument, deleteDocument } from '../../firebase/firestore';

const emptyProject = {
  title: '',
  description: '',
  tags: [],
  liveLink: '',
  codeLink: '',
  thumbnailUrl: '',
  featured: false,
  order: 0,
  isVisible: true,
};

const ProjectsManager = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // null or project object
  const [formData, setFormData] = useState(emptyProject);
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    const data = await getAllProjects();
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => { fetchProjects(); }, []);

  const openForm = (project = null) => {
    if (project) {
      setEditing(project);
      setFormData({ ...project });
      setTagInput('');
    } else {
      setEditing('new');
      setFormData({ ...emptyProject, order: projects.length + 1 });
      setTagInput('');
    }

  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptyProject);
    setTagInput('');

  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      setTagInput('');
    }
  };

  const removeTag = (tag) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tag) });
  };

  const handleSave = async () => {
    if (!formData.title.trim()) return;
    setSaving(true);

    try {
      const data = { ...formData };
      // Remove 'id' from data before saving
      delete data.id;

      if (editing === 'new') {
        await addDocument('projects', data);
      } else {
        await updateDocument('projects', editing.id, data);
      }

      closeForm();
      await fetchProjects();
    } catch (err) {
      console.error('Error saving project:', err);
      alert('Error saving project. Check console.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this project?')) return;
    try {
      await deleteDocument('projects', id);
      await fetchProjects();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const toggleVisibility = async (project) => {
    await updateDocument('projects', project.id, { isVisible: !project.isVisible });
    await fetchProjects();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Manage Projects</h2>
          <p className="text-sm text-gray-500 dark:text-gray-500">{projects.length} projects total</p>
        </div>
        <button onClick={() => openForm()} className="btn-neon text-sm">
          <span>+ Add Project</span>
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-center py-10 text-gray-500">Loading projects...</div>
      )}

      {/* Projects List */}
      {!loading && (
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.id} className={`glass-card p-5 rounded-xl flex items-center justify-between gap-4 ${!project.isVisible ? 'opacity-50' : ''}`}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {project.featured && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">⭐ Featured</span>}
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">{project.title}</h3>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500 truncate">{project.description?.substring(0, 80)}...</p>
                <div className="flex gap-1.5 mt-2">
                  {project.tags?.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] font-semibold rounded-full bg-primary/10 text-primary">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => toggleVisibility(project)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500 transition-colors" title={project.isVisible ? 'Hide' : 'Show'}>
                  {project.isVisible ? '👁️' : '🙈'}
                </button>
                <button onClick={() => openForm(project)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500 transition-colors" title="Edit">
                  ✏️
                </button>
                <button onClick={() => handleDelete(project.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-gray-500 transition-colors" title="Delete">
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Modal */}
      <AnimatePresence>
        {editing !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={closeForm}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white dark:bg-dark-bg border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                {editing === 'new' ? '📁 Add New Project' : '✏️ Edit Project'}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Title *</label>
                  <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Project title" className={inputClasses} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Description</label>
                  <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Project description" rows={3} className={`${inputClasses} resize-none`} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Tags</label>
                  <div className="flex gap-2 mb-2">
                    <input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTag())} placeholder="Add tag & press Enter" className={`${inputClasses} flex-1`} />
                    <button onClick={addTag} className="btn-ghost text-xs px-4">Add</button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.tags.map((tag, i) => (
                      <span key={i} className="px-2.5 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary flex items-center gap-1">
                        {tag}
                        <button onClick={() => removeTag(tag)} className="ml-1 hover:text-red-400">×</button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Live Link</label>
                    <input value={formData.liveLink} onChange={e => setFormData({...formData, liveLink: e.target.value})} placeholder="https://..." className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Code Link</label>
                    <input value={formData.codeLink} onChange={e => setFormData({...formData, codeLink: e.target.value})} placeholder="https://github.com/..." className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Thumbnail Image URL</label>
                  <input value={formData.thumbnailUrl} onChange={e => setFormData({...formData, thumbnailUrl: e.target.value})} placeholder="https://example.com/image.jpg (optional)" className={inputClasses} />
                  {formData.thumbnailUrl && (
                    <img src={formData.thumbnailUrl} alt="Preview" className="mt-2 w-20 h-20 object-cover rounded-xl border border-white/10" />
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Order</label>
                    <input type="number" value={formData.order} onChange={e => setFormData({...formData, order: parseInt(e.target.value) || 0})} className={inputClasses} />
                  </div>
                  <div className="flex items-end gap-4 pb-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={formData.featured} onChange={e => setFormData({...formData, featured: e.target.checked})} className="w-4 h-4 rounded text-primary" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Featured</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={formData.isVisible} onChange={e => setFormData({...formData, isVisible: e.target.checked})} className="w-4 h-4 rounded text-primary" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Visible</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-8">
                <button onClick={closeForm} className="btn-ghost text-sm flex-1">Cancel</button>
                <button onClick={handleSave} disabled={saving || !formData.title.trim()} className="btn-neon text-sm flex-1 disabled:opacity-50">
                  {saving ? 'Saving...' : 'Save Project'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectsManager;
