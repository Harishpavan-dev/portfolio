import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllSkills, addDocument, updateDocument, deleteDocument } from '../../firebase/firestore';

const emptySkill = {
  name: '',
  category: 'Frontend',
  level: 50,
  color: '#6C63FF',
  iconUrl: '',
  iconEmoji: '',
  order: 1,
  isVisible: true
};

const predefinedCategories = ["Frontend", "Backend", "CMS & Platforms", "Tools", "Deployment", "Design", "Cybersecurity"];

const SkillsManager = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptySkill);
  const [saving, setSaving] = useState(false);

  const fetchSkills = async () => {
    setLoading(true);
    const data = await getAllSkills();
    setSkills(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const openForm = (skill = null) => {
    if (skill) {
      setEditing(skill.id);
      setFormData(skill);
    } else {
      setEditing('new');
      setFormData({ ...emptySkill, order: skills.length + 1 });
    }
  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptySkill);
  };

  const handleSave = async () => {
    if (!formData.name.trim()) return;
    setSaving(true);
    try {
      const data = { ...formData };
      delete data.id;

      if (editing === 'new') {
        await addDocument('skills', data);
      } else {
        await updateDocument('skills', editing, data);
      }
      await fetchSkills();
      closeForm();
    } catch (err) {
      console.error('Error saving skill:', err);
      alert('Failed to save skill');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    try {
      await deleteDocument('skills', id);
      fetchSkills();
    } catch (err) {
      console.error('Error deleting skill:', err);
    }
  };

  const toggleVisibility = async (skill) => {
    try {
      await updateDocument('skills', skill.id, { isVisible: !skill.isVisible });
      setSkills(skills.map(s => s.id === skill.id ? { ...s, isVisible: !s.isVisible } : s));
    } catch (err) {
      console.error('Error toggling visibility:', err);
    }
  };

  const inputClasses = "w-full bg-dark-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold font-display text-white">Manage Skills</h2>
          <p className="text-sm text-gray-400">Add, edit, or reorder your skills.</p>
        </div>
        <button onClick={() => openForm()} className="btn-solid py-2.5 px-6 text-sm">
          + Add Skill
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Loading skills...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.id} className="glass-card p-6 rounded-2xl border border-white/5 relative group">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {skill.iconUrl ? (
                      <img src={skill.iconUrl} alt={skill.name} className="w-6 h-6 object-contain" />
                    ) : (
                      <span className="text-xl">{skill.iconEmoji || '⚡'}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-white leading-tight">{skill.name}</h3>
                    <p className="text-xs text-primary">{skill.category}</p>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => toggleVisibility(skill)} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title={skill.isVisible ? "Hide" : "Show"}>
                    {skill.isVisible ? '👁️' : '🙈'}
                  </button>
                  <button onClick={() => openForm(skill)} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors" title="Edit">
                    ✏️
                  </button>
                  <button onClick={() => handleDelete(skill.id)} className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-500 transition-colors" title="Delete">
                    🗑️
                  </button>
                </div>
              </div>
              
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mt-4">
                <div className="h-full rounded-full" style={{ width: `${skill.level}%`, backgroundColor: skill.color }}></div>
              </div>
              <div className="mt-2 text-xs flex justify-between text-gray-500">
                <span>Order: {skill.order}</span>
                <span>{skill.level}% Proficiency</span>
              </div>
              
              {!skill.isVisible && (
                <div className="absolute inset-0 bg-dark-bg/80 backdrop-blur-[1px] rounded-2xl flex items-center justify-center border border-yellow-500/20 z-10">
                  <span className="text-yellow-500 font-bold flex items-center gap-2">
                    <span className="text-xl">🙈</span> Hidden
                  </span>
                  
                  {/* Actions need to be reachable when hidden */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button onClick={() => toggleVisibility(skill)} className="p-2 rounded-lg bg-dark-surface border border-white/10 hover:bg-white/10 text-white transition-colors shadow-lg">
                      👁️ Show
                    </button>
                    <button onClick={() => handleDelete(skill.id)} className="p-2 rounded-lg bg-dark-surface border border-red-500/20 hover:bg-red-500/20 text-red-500 transition-colors shadow-lg">
                      🗑️
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
          {skills.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500 glass-card rounded-2xl border border-dashed border-white/10">
              <span className="text-4xl block mb-3">🛠️</span>
              <p>No skills found. Click "Add Skill" to create one.</p>
            </div>
          )}
        </div>
      )}

      {/* Modal Form */}
      <AnimatePresence>
        {editing && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeForm}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card border border-white/10 rounded-2xl p-6 lg:p-8"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {editing === 'new' ? 'Add New Skill' : 'Edit Skill'}
              </h3>

              <div className="space-y-5">
                {/* Basic Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Skill Name*</label>
                    <input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. React.js" className={inputClasses} autoFocus />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Category</label>
                    <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className={inputClasses}>
                      {predefinedCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      {!predefinedCategories.includes(formData.category) && <option value={formData.category}>{formData.category}</option>}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Proficiency Level ({formData.level}%)</label>
                    <input type="range" min="0" max="100" step="5" value={formData.level} onChange={e => setFormData({...formData, level: Number(e.target.value)})} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer mt-4" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Brand Color (Hex)</label>
                    <div className="flex gap-3">
                      <input type="color" value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} className="h-10 w-12 rounded bg-transparent cursor-pointer" />
                      <input value={formData.color} onChange={e => setFormData({...formData, color: e.target.value})} placeholder="#6C63FF" className={inputClasses} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Icon URL (SimpleIcons.org)</label>
                    <input value={formData.iconUrl} onChange={e => setFormData({...formData, iconUrl: e.target.value})} placeholder="https://cdn.simpleicons.org/react/61dbfb" className={inputClasses} />
                    <p className="text-xs text-gray-500 mt-2">Example: https://cdn.simpleicons.org/html5/e34c26</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Or Icon Emoji</label>
                    <input value={formData.iconEmoji} onChange={e => setFormData({...formData, iconEmoji: e.target.value})} placeholder="🛡️" className={inputClasses} />
                    <p className="text-xs text-gray-500 mt-2">Used if Icon URL is empty</p>
                  </div>
                </div>

                <div className="flex items-center gap-5 pt-2">
                  <div className="w-32">
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Order</label>
                    <input type="number" value={formData.order} onChange={e => setFormData({...formData, order: Number(e.target.value)})} className={inputClasses} />
                  </div>
                  
                  <label className="flex items-center gap-3 cursor-pointer mt-5 group">
                    <div className="relative">
                      <input type="checkbox" checked={formData.isVisible} onChange={e => setFormData({...formData, isVisible: e.target.checked})} className="sr-only" />
                      <div className={`block w-10 h-6 rounded-full transition-colors ${formData.isVisible ? 'bg-primary' : 'bg-gray-600'}`}></div>
                      <div className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${formData.isVisible ? 'translate-x-4' : ''}`}></div>
                    </div>
                    <span className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors">Visible on Website</span>
                  </label>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-6 border-t border-white/10 mt-6">
                  <button onClick={closeForm} className="px-5 py-2.5 rounded-xl font-semibold text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    Cancel
                  </button>
                  <button onClick={handleSave} disabled={saving} className="btn-solid py-2.5 px-6 text-sm flex items-center gap-2">
                    {saving ? <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span> : null}
                    {saving ? 'Saving...' : 'Save Skill'}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillsManager;
