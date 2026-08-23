import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllCertifications, addDocument, updateDocument, deleteDocument } from '../../firebase/firestore';

const emptyCertification = {
  title: '',
  issuer: '',
  credentialId: '',
  imageUrl: '',
  verificationLink: '',
  order: 0,
  isVisible: true,
};

const CertificationsManager = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyCertification);
  const [saving, setSaving] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const data = await getAllCertifications();
    setCertifications(data);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const openForm = (item = null) => {
    if (item) {
      setEditing(item);
      setFormData({ ...item });
    } else {
      setEditing('new');
      setFormData({ ...emptyCertification, order: certifications.length + 1 });
    }
  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptyCertification);
  };

  const handleSave = async () => {
    if (!formData.title.trim()) return;
    setSaving(true);
    try {
      const data = { ...formData };
      delete data.id;

      if (editing === 'new') {
        await addDocument('certifications', data);
      } else {
        await updateDocument('certifications', editing.id, data);
      }
      closeForm();
      await fetchData();
    } catch (err) {
      console.error('Error saving:', err);
      alert('Error saving certification.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this certification?')) return;
    try {
      await deleteDocument('certifications', id);
      await fetchData();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const toggleVisibility = async (item) => {
    await updateDocument('certifications', item.id, { isVisible: !item.isVisible });
    await fetchData();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Manage Certifications</h2>
          <p className="text-sm text-gray-500">{certifications.length} certificates total</p>
        </div>
        <button onClick={() => openForm()} className="btn-neon text-sm">+ Add Certificate</button>
      </div>

      {loading && <div className="text-center py-10 text-gray-500">Loading...</div>}

      {!loading && (
        <div className="space-y-3">
          {certifications.map((item) => (
            <div key={item.id} className={`glass-card p-5 rounded-xl flex items-center justify-between gap-4 ${!item.isVisible ? 'opacity-50' : ''}`}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="w-12 h-12 rounded-lg object-cover shrink-0" />
                ) : (
                  <span className="text-2xl shrink-0">🏆</span>
                )}
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">{item.title}</h3>
                  <p className="text-xs text-gray-500 truncate">{item.issuer}</p>
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
                {editing === 'new' ? '🏆 Add Certificate' : '✏️ Edit Certificate'}
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Title *</label>
                  <input value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="Certificate title" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Issuer</label>
                  <input value={formData.issuer} onChange={e => setFormData({...formData, issuer: e.target.value})} placeholder="Issuing organization" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Credential ID</label>
                  <input value={formData.credentialId} onChange={e => setFormData({...formData, credentialId: e.target.value})} placeholder="e.g. PBmw4Bhuxn" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Image URL</label>
                  <input value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} placeholder="https://..." className={inputClasses} />
                  {formData.imageUrl && (
                    <div className="mt-2 rounded-lg overflow-hidden border border-white/10">
                      <img src={formData.imageUrl} alt="Preview" className="w-full h-32 object-cover" />
                    </div>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Verification Link</label>
                  <input value={formData.verificationLink} onChange={e => setFormData({...formData, verificationLink: e.target.value})} placeholder="https://..." className={inputClasses} />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Order</label>
                  <input type="number" value={formData.order} onChange={e => setFormData({...formData, order: parseInt(e.target.value) || 0})} className={inputClasses} />
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

export default CertificationsManager;
