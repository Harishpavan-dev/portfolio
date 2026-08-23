import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllServices, addDocument, updateDocument, deleteDocument } from '../../firebase/firestore';

const emptyService = {
  icon: '💻',
  title: '',
  description: '',
  whatsappText: '',
  order: 0,
  isVisible: true,
};

const emojiOptions = ['💻', '🎨', '📈', '🗂️', '⚙️', '🔒', '🌐', '📱', '🛡️', '🚀'];

const ServicesManager = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyService);
  const [saving, setSaving] = useState(false);

  const fetchServices = async () => {
    setLoading(true);
    const data = await getAllServices();
    setServices(data);
    setLoading(false);
  };

  useEffect(() => { fetchServices(); }, []);

  const openForm = (service = null) => {
    if (service) {
      setEditing(service);
      setFormData({ ...service });
    } else {
      setEditing('new');
      setFormData({ ...emptyService, order: services.length + 1 });
    }
  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptyService);
  };

  const handleSave = async () => {
    if (!formData.title.trim()) return;
    setSaving(true);
    try {
      const data = { ...formData };
      delete data.id;

      if (editing === 'new') {
        await addDocument('services', data);
      } else {
        await updateDocument('services', editing.id, data);
      }
      closeForm();
      await fetchServices();
    } catch (err) {
      console.error('Error saving service:', err);
      alert('Error saving service.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this service?')) return;
    try {
      await deleteDocument('services', id);
      await fetchServices();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const toggleVisibility = async (service) => {
    await updateDocument('services', service.id, { isVisible: !service.isVisible });
    await fetchServices();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Manage Services</h2>
          <p className="text-sm text-gray-500 dark:text-gray-500">{services.length} services total</p>
        </div>
        <button onClick={() => openForm()} className="btn-neon text-sm">
          <span>+ Add Service</span>
        </button>
      </div>

      {loading && <div className="text-center py-10 text-gray-500">Loading...</div>}

      {!loading && (
        <div className="space-y-3">
          {services.map((service) => (
            <div key={service.id} className={`glass-card p-5 rounded-xl flex items-center justify-between gap-4 ${!service.isVisible ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <span className="text-2xl">{service.icon}</span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">{service.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-500 truncate">{service.description?.substring(0, 60)}...</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => toggleVisibility(service)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500 transition-colors">
                  {service.isVisible ? '👁️' : '🙈'}
                </button>
                <button onClick={() => openForm(service)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500 transition-colors">✏️</button>
                <button onClick={() => handleDelete(service.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-gray-500 transition-colors">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Form Modal */}
      <AnimatePresence>
        {editing !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={closeForm}>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-white dark:bg-dark-bg border border-white/10 rounded-2xl p-6 sm:p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
                {editing === 'new' ? '🛠️ Add Service' : '✏️ Edit Service'}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Icon</label>
                  <div className="flex flex-wrap gap-2">
                    {emojiOptions.map((emoji) => (
                      <button key={emoji} onClick={() => setFormData({...formData, icon: emoji})} className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all ${formData.icon === emoji ? 'bg-primary/20 border-2 border-primary scale-110' : 'glass-card hover:scale-105'}`}>
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Title *</label>
                  <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Service title" className={inputClasses} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Description</label>
                  <textarea value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Service description" rows={4} className={`${inputClasses} resize-none`} />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">WhatsApp Text</label>
                  <input value={formData.whatsappText} onChange={e => setFormData({...formData, whatsappText: e.target.value})} placeholder="Hi I am interested in..." className={inputClasses} />
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
                <button onClick={handleSave} disabled={saving || !formData.title.trim()} className="btn-neon text-sm flex-1 disabled:opacity-50">
                  {saving ? 'Saving...' : 'Save Service'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesManager;
