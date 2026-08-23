import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllEducation, addDocument, updateDocument, deleteDocument } from '../../firebase/firestore';

const emptyEducation = {
  title: '',
  institution: '',
  description: '',
  courseLink: '',
  verificationCode: '',
  verificationLink: '',
  status: 'ongoing',
  order: 0,
  isVisible: true,
};

const statusOptions = [
  { value: 'ongoing', label: 'Ongoing', icon: '🎓' },
  { value: 'completed', label: 'Completed', icon: '✅' },
  { value: 'partial', label: 'Course Attended', icon: '📘' },
];

const EducationManager = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyEducation);
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getAllEducation();
    setEducation(data);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const openForm = (item = null) => {
    if (item) {
      setEditing(item);
      setFormData({ ...item });
    } else {
      setEditing('new');
      setFormData({ ...emptyEducation, order: education.length + 1 });
    }
  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptyEducation);
  };

  const handleSave = async () => {
    if (!formData.title.trim()) return;
    setSaving(true);
    try {
      const data = { ...formData };
      delete data.id;

      if (editing === 'new') {
        await addDocument('education', data);
      } else {
        await updateDocument('education', editing.id, data);
      }
      closeForm();
      await fetchData();
    } catch (err) {
      console.error('Error saving:', err);
      alert('Error saving education entry.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this education entry?')) return;
    try {
      await deleteDocument('education', id);
      await fetchData();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const toggleVisibility = async (item) => {
    await updateDocument('education', item.id, { isVisible: !item.isVisible });
    await fetchData();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm";

  const getStatusIcon = (status) => statusOptions.find(s => s.value === status)?.icon || '🎓';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Manage Education</h2>
          <p className="text-sm text-gray-500">{education.length} entries total</p>
        </div>
        <button onClick={() => openForm()} className="btn-neon text-sm">+ Add Education</button>
      </div>

      {loading && <div className="text-center py-10 text-gray-500">Loading...</div>}

      {!loading && (
        <div className="space-y-3">
          {education.map((item) => (
            <div key={item.id} className={`glass-card p-5 rounded-xl flex items-center justify-between gap-4 ${!item.isVisible ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="text-2xl">{getStatusIcon(item.status)}</span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">{item.title}</h3>
                  <p className="text-xs text-gray-500 truncate">{item.institution}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => toggleVisibility(item)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500">{item.isVisible ? '👁️' : '🙈'}</button>
                <button onClick={() => openForm(item)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500">✏️</button>
                <button onClick={() => handleDelete(item.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-gray-500">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {editing !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeForm}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white dark:bg-dark-bg border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                {editing === 'new' ? '🎓 Add Education' : '✏️ Edit Education'}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Title *</label>
                  <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Degree / Course title" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Institution</label>
                  <input value={formData.institution} onChange={e => setFormData({...formData, institution: e.target.value})} placeholder="University / College name" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Description</label>
                  <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Details about this education" rows={3} className={`${inputClasses} resize-none`} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Status</label>
                  <div className="flex gap-2">
                    {statusOptions.map((opt) => (
                      <button key={opt.value} onClick={() => setFormData({...formData, status: opt.value})} className={`flex-1 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${formData.status === opt.value ? 'bg-primary text-white' : 'glass-card text-gray-600 dark:text-gray-400 hover:bg-primary/5'}`}>
                        {opt.icon} {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Course Link</label>
                    <input value={formData.courseLink} onChange={e => setFormData({...formData, courseLink: e.target.value})} placeholder="https://..." className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Verification Link</label>
                    <input value={formData.verificationLink} onChange={e => setFormData({...formData, verificationLink: e.target.value})} placeholder="https://..." className={inputClasses} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Verification Code</label>
                    <input value={formData.verificationCode} onChange={e => setFormData({...formData, verificationCode: e.target.value})} placeholder="e.g. V7L87E" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Order</label>
                    <input type="number" value={formData.order} onChange={e => setFormData({...formData, order: parseInt(e.target.value) || 0})} className={inputClasses} />
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={formData.isVisible} onChange={e => setFormData({...formData, isVisible: e.target.checked})} className="w-4 h-4 rounded text-primary" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Visible on portfolio</span>
                </label>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={closeForm} className="btn-ghost text-sm flex-1">Cancel</button>
                <button onClick={handleSave} disabled={saving || !formData.title.trim()} className="btn-neon text-sm flex-1 disabled:opacity-50">
                  {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EducationManager;
