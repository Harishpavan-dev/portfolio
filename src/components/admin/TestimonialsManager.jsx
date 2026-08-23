import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllTestimonials, addDocument, updateDocument, deleteDocument } from '../../firebase/firestore';

const emptyTestimonial = {
  clientName: '',
  clientRole: '',
  clientPhotoUrl: '',
  testimonial: '',
  rating: 5,
  projectLink: '',
  isVisible: true,
  order: 0,
};

const TestimonialsManager = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyTestimonial);
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getAllTestimonials();
    setTestimonials(data);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const openForm = (item = null) => {
    if (item) {
      setEditing(item);
      setFormData({ ...item });
    } else {
      setEditing('new');
      setFormData({ ...emptyTestimonial, order: testimonials.length + 1 });
    }

  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptyTestimonial);

  };

  const handleSave = async () => {
    if (!formData.clientName.trim() || !formData.testimonial.trim()) return;
    setSaving(true);
    try {
      const data = { ...formData };
      delete data.id;

      if (editing === 'new') {
        await addDocument('testimonials', data);
      } else {
        await updateDocument('testimonials', editing.id, data);
      }
      closeForm();
      await fetchData();
    } catch (err) {
      console.error('Error saving:', err);
      alert('Error saving testimonial.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this testimonial?')) return;
    try {
      await deleteDocument('testimonials', id);
      await fetchData();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const toggleVisibility = async (item) => {
    await updateDocument('testimonials', item.id, { isVisible: !item.isVisible });
    await fetchData();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Manage Testimonials</h2>
          <p className="text-sm text-gray-500">{testimonials.length} testimonials total</p>
        </div>
        <button onClick={() => openForm()} className="btn-neon text-sm">+ Add Testimonial</button>
      </div>

      {loading && <div className="text-center py-10 text-gray-500">Loading...</div>}

      {!loading && testimonials.length === 0 && (
        <div className="text-center py-16 glass-card rounded-2xl">
          <span className="text-5xl mb-4 block">⭐</span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No Testimonials Yet</h3>
          <p className="text-sm text-gray-500 mb-4">Add client reviews to boost credibility and social proof.</p>
          <button onClick={() => openForm()} className="btn-neon text-sm">Add First Testimonial</button>
        </div>
      )}

      {!loading && testimonials.length > 0 && (
        <div className="space-y-3">
          {testimonials.map((item) => (
            <div key={item.id} className={`glass-card p-5 rounded-xl flex items-center justify-between gap-4 ${!item.isVisible ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {item.clientPhotoUrl ? (
                  <img src={item.clientPhotoUrl} alt="" className="w-10 h-10 rounded-full object-cover" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-cyan flex items-center justify-center text-white font-bold text-sm">
                    {item.clientName?.charAt(0)}
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">{item.clientName}</h3>
                  <p className="text-xs text-gray-500 truncate">{item.clientRole} • {'⭐'.repeat(item.rating)}</p>
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
                {editing === 'new' ? '⭐ Add Testimonial' : '✏️ Edit Testimonial'}
              </h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Client Name *</label>
                    <input value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} placeholder="John Doe" className={inputClasses} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Client Role</label>
                    <input value={formData.clientRole} onChange={e => setFormData({...formData, clientRole: e.target.value})} placeholder="CEO, TechCorp" className={inputClasses} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Testimonial *</label>
                  <textarea value={formData.testimonial} onChange={e => setFormData({...formData, testimonial: e.target.value})} placeholder="What the client said about your work..." rows={4} className={`${inputClasses} resize-none`} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => setFormData({...formData, rating: star})} className={`text-2xl transition-all ${star <= formData.rating ? 'scale-110' : 'opacity-30 grayscale'}`}>
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Client Photo URL</label>
                  <input value={formData.clientPhotoUrl} onChange={e => setFormData({...formData, clientPhotoUrl: e.target.value})} placeholder="https://example.com/photo.jpg (optional)" className={inputClasses} />
                  {formData.clientPhotoUrl && (
                    <img src={formData.clientPhotoUrl} alt="" className="mt-2 w-12 h-12 rounded-full object-cover" />
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Project Link (optional)</label>
                  <input value={formData.projectLink} onChange={e => setFormData({...formData, projectLink: e.target.value})} placeholder="https://..." className={inputClasses} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Order</label>
                    <input type="number" value={formData.order} onChange={e => setFormData({...formData, order: parseInt(e.target.value) || 0})} className={inputClasses} />
                  </div>
                  <div className="flex items-end pb-1">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={formData.isVisible} onChange={e => setFormData({...formData, isVisible: e.target.checked})} className="w-4 h-4 rounded text-primary" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">Visible</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button onClick={closeForm} className="btn-ghost text-sm flex-1">Cancel</button>
                <button onClick={handleSave} disabled={saving || !formData.clientName.trim() || !formData.testimonial.trim()} className="btn-neon text-sm flex-1 disabled:opacity-50">
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

export default TestimonialsManager;
