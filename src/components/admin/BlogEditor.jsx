import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllBlogPosts, addDocument, updateDocument, deleteDocument } from '../../firebase/firestore';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const emptyPost = {
  title: '',
  slug: '',
  content: '',
  excerpt: '',
  coverImageUrl: '',
  tags: [],
  category: 'Web Development',
  isPublished: false,
  readTimeMinutes: 5,
  viewCount: 0,
};

const categories = ['Web Development', 'Cybersecurity', 'UI/UX Design', 'Tutorial', 'General', 'Career'];

const BlogEditor = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [formData, setFormData] = useState(emptyPost);
  const [tagInput, setTagInput] = useState('');
  const [saving, setSaving] = useState(false);
  const [isHtmlMode, setIsHtmlMode] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    const data = await getAllBlogPosts();
    setPosts(data);
    setLoading(false);
  };

  useEffect(() => { fetchPosts(); }, []);

  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const openForm = (post = null) => {
    if (post) {
      setEditing(post);
      setFormData({ ...post });
    } else {
      setEditing('new');
      setFormData({ ...emptyPost });
    }
    setTagInput('');

  };

  const closeForm = () => {
    setEditing(null);
    setFormData(emptyPost);
    setTagInput('');
    setIsHtmlMode(false);
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
      const slug = formData.slug || generateSlug(formData.title);
      const data = { ...formData, slug };
      delete data.id;

      if (editing === 'new') {
        await addDocument('blog_posts', data);
      } else {
        await updateDocument('blog_posts', editing.id, data);
      }
      closeForm();
      await fetchPosts();
    } catch (err) {
      console.error('Error saving:', err);
      alert('Error saving blog post.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this blog post?')) return;
    try {
      await deleteDocument('blog_posts', id);
      await fetchPosts();
    } catch (err) {
      console.error('Error deleting:', err);
    }
  };

  const togglePublish = async (post) => {
    await updateDocument('blog_posts', post.id, { isPublished: !post.isPublished });
    await fetchPosts();
  };

  const inputClasses = "w-full px-4 py-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all text-sm";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Blog Manager</h2>
          <p className="text-sm text-gray-500">{posts.length} posts total</p>
        </div>
        <button onClick={() => openForm()} className="btn-neon text-sm">+ New Post</button>
      </div>

      {loading && <div className="text-center py-10 text-gray-500">Loading...</div>}

      {!loading && posts.length === 0 && (
        <div className="text-center py-16 glass-card rounded-2xl">
          <span className="text-5xl mb-4 block">📝</span>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">No Blog Posts Yet</h3>
          <p className="text-sm text-gray-500 mb-4">Create your first blog post to boost your SEO and showcase your expertise.</p>
          <button onClick={() => openForm()} className="btn-neon text-sm">Write Your First Post</button>
        </div>
      )}

      {!loading && posts.length > 0 && (
        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className={`glass-card p-5 rounded-xl flex items-center justify-between gap-4 ${!post.isPublished ? 'opacity-60' : ''}`}>
              <div className="flex items-center gap-4 flex-1 min-w-0">
                {post.coverImageUrl ? (
                  <img src={post.coverImageUrl} alt="" className="w-12 h-12 rounded-xl object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-xl">📝</div>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${post.isPublished ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-accent-amber/10 text-accent-amber'}`}>
                      {post.isPublished ? 'Published' : 'Draft'}
                    </span>
                    <span className="text-[10px] text-gray-500">{post.category}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">{post.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => togglePublish(post)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500" title={post.isPublished ? 'Unpublish' : 'Publish'}>
                  {post.isPublished ? '📤' : '📥'}
                </button>
                <button onClick={() => openForm(post)} className="p-2 rounded-lg hover:bg-primary/10 text-gray-500">✏️</button>
                <button onClick={() => handleDelete(post.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-gray-500">🗑️</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Editor Modal */}
      <AnimatePresence>
        {editing !== null && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="fixed inset-0 bg-gray-50 dark:bg-[#0A0A1A] z-50 flex flex-col pt-safe">
            
            {/* Top Navigation Bar */}
            <header className="flex-none h-16 bg-white dark:bg-[#12122A] border-b border-gray-200 dark:border-white/10 px-4 sm:px-6 flex items-center justify-between shadow-sm z-20 shrink-0">
              <div className="flex items-center gap-2 sm:gap-4 flex-1">
                <button onClick={closeForm} className="p-2 sm:-ml-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                </button>
                <div className="flex-1 max-w-3xl hidden sm:block">
                  <input 
                    value={formData.title} 
                    onChange={e => { setFormData({...formData, title: e.target.value, slug: generateSlug(e.target.value)}); }}
                    placeholder="Post Title..." 
                    className="w-full text-xl font-bold bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-700"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3 sm:gap-5 shrink-0">
                <div className="bg-gray-100 dark:bg-white/5 p-1 rounded-xl flex items-center mr-2">
                   <button 
                    onClick={() => setIsHtmlMode(false)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${!isHtmlMode ? 'bg-white dark:bg-primary text-gray-900 dark:text-white shadow-sm' : 'text-gray-500'}`}
                  >
                    Compose
                  </button>
                  <button 
                    onClick={() => setIsHtmlMode(true)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${isHtmlMode ? 'bg-white dark:bg-primary text-gray-900 dark:text-white shadow-sm' : 'text-gray-500'}`}
                  >
                    HTML View
                  </button>
                </div>
                <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider text-gray-400 hidden lg:block">
                  {saving ? 'Saving...' : (formData.isPublished ? 'Published' : 'Draft Mode')}
                </span>
                <label className="flex items-center gap-2 cursor-pointer hidden sm:flex">
                  <input type="checkbox" checked={formData.isPublished} onChange={e => setFormData({...formData, isPublished: e.target.checked})} className="w-4 h-4 rounded text-primary border-gray-300 dark:border-gray-600 bg-transparent focus:ring-primary focus:ring-offset-0" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Publish instantly</span>
                </label>
                <button onClick={handleSave} disabled={saving || !formData.title.trim()} className="btn-neon py-2 px-6 sm:px-8 text-sm disabled:opacity-50 shadow-md">
                  {saving ? 'Saving...' : formData.isPublished ? 'Publish' : 'Save Draft'}
                </button>
              </div>
            </header>

            {/* Mobile Title Input */}
            <div className="sm:hidden px-4 py-3 bg-white dark:bg-[#12122A] border-b border-gray-200 dark:border-white/10 shrink-0 shadow-sm z-10">
               <input 
                  value={formData.title} 
                  onChange={e => { setFormData({...formData, title: e.target.value, slug: generateSlug(e.target.value)}); }}
                  placeholder="Post Title..." 
                  className="w-full text-lg font-bold bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-gray-900 dark:text-white placeholder-gray-400"
                />
            </div>

            {/* Main Editor Layout */}
            <div className="flex-1 flex overflow-hidden">
              
              {/* Left: Editor Canvas */}
              <div id="editor-canvas" className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#0A0A1A] flex justify-center custom-scrollbar">
                <div className="w-full max-w-[1100px] px-2 sm:px-6 lg:px-10 py-6 sm:py-10 flex flex-col min-h-screen">
                  
                  {/* Editor Workspace: Split Toolbar and Scrollable Paper */}
                  <div id="main-editor-container" className="flex-1 flex flex-col bg-white text-gray-900 rounded-2xl shadow-card border border-gray-200 dark:border-white/10 overflow-hidden mb-12 sm:mb-20 min-h-[85vh]">
                    
                    {!isHtmlMode ? (
                      <>
                        {/* Static Toolbar Area (Independent of scroll) */}
                        <div id="quill-toolbar" className="flex-none sticky top-0 z-20 bg-white dark:bg-[#12122A] border-b border-gray-200 dark:border-white/10 px-4 py-2 flex flex-wrap gap-1">
                          <span className="ql-formats">
                            <select className="ql-font" />
                            <select className="ql-size" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-bold" />
                            <button className="ql-italic" />
                            <button className="ql-underline" />
                            <button className="ql-strike" />
                          </span>
                          <span className="ql-formats">
                            <select className="ql-color" />
                            <select className="ql-background" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-script" value="sub" />
                            <button className="ql-script" value="super" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-header" value="1" />
                            <button className="ql-header" value="2" />
                            <button className="ql-blockquote" />
                            <button className="ql-code-block" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-list" value="ordered" />
                            <button className="ql-list" value="bullet" />
                            <button className="ql-indent" value="-1" />
                            <button className="ql-indent" value="+1" />
                          </span>
                          <span className="ql-formats">
                            <select className="ql-align" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-link" />
                            <button className="ql-image" />
                            <button className="ql-video" />
                          </span>
                          <span className="ql-formats">
                            <button className="ql-clean" />
                          </span>
                        </div>
                        
                        {/* Scrollable Paper Area */}
                        <div className="flex-1 overflow-y-auto custom-scrollbar bg-gray-50/10 quill-fullscreen">
                          <ReactQuill 
                            theme="snow" 
                            modules={{
                              toolbar: '#quill-toolbar' 
                            }}
                            value={formData.content} 
                            onChange={content => setFormData({...formData, content})} 
                            placeholder="Start writing your story..." 
                          />
                        </div>
                      </>
                    ) : (
                      <div className="flex-1 flex flex-col h-full">
                        <div className="sticky top-0 z-10 p-4 bg-gray-50 border-b border-gray-200 font-bold text-xs uppercase tracking-widest text-gray-400 flex justify-between items-center shadow-sm">
                          <span>HTML Source Editor</span>
                          <span className="text-[10px] text-primary/60 lowercase italic">Supports standard HTML, Inline CSS, and Tailwind Classes</span>
                        </div>
                        <textarea 
                          value={formData.content} 
                          onChange={e => setFormData({...formData, content: e.target.value})} 
                          placeholder="<div class='text-primary p-4'>Type raw HTML here...</div>"
                          className="flex-1 w-full p-8 font-mono text-sm border-none outline-none focus:outline-none focus:ring-0 resize-none min-h-[80vh] custom-scrollbar"
                          spellCheck={false}
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Mobile Settings Panel (below editor on small screens) */}
                  <div className="lg:hidden block pb-16 bg-white dark:bg-[#12122A] rounded-2xl p-6 border border-gray-200 dark:border-white/10 shadow-sm">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-5 flex items-center gap-2">
                       <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                       Post Settings
                    </h3>
                    
                    <div className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Slug</label>
                        <input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} placeholder="auto-generated-slug" className={inputClasses} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Excerpt</label>
                        <textarea value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} placeholder="Brief summary" rows={3} className={`${inputClasses} resize-none`} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Category</label>
                        <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className={inputClasses}>
                          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Read Time (min)</label>
                        <input type="number" value={formData.readTimeMinutes} onChange={e => setFormData({...formData, readTimeMinutes: parseInt(e.target.value) || 5})} className={inputClasses} />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Tags</label>
                        <div className="flex gap-2 mb-3">
                          <input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTag())} placeholder="Add tag" className={`${inputClasses} flex-1`} />
                          <button onClick={addTag} className="btn-neon px-4 rounded-xl text-xs h-auto py-2">Add</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {formData.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 text-[11px] font-bold tracking-wide rounded-full bg-primary/10 text-primary flex items-center gap-1.5">
                              #{tag}
                              <button onClick={() => removeTag(tag)} className="hover:text-red-400 text-sm opacity-60 font-semibold">×</button>
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Cover Image URL</label>
                        <input value={formData.coverImageUrl} onChange={e => setFormData({...formData, coverImageUrl: e.target.value})} placeholder="https://example.com/cover.jpg" className={inputClasses} />
                        {formData.coverImageUrl && (
                          <img src={formData.coverImageUrl} alt="" className="mt-3 w-full h-32 object-cover rounded-xl border border-gray-200 dark:border-white/10 shadow-sm" />
                        )}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">

                       <label className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 dark:bg-black/20 rounded-xl border border-gray-200 dark:border-white/5">
                        <span className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">Publish instantly?</span>
                        <input type="checkbox" checked={formData.isPublished} onChange={e => setFormData({...formData, isPublished: e.target.checked})} className="w-5 h-5 rounded text-primary border-gray-300 dark:border-gray-600 bg-white" />
                      </label>
                    </div>
                  </div>

                </div>
              </div>

              {/* Right: Sidebar Settings (Desktop) */}
              <div className="w-[340px] xl:w-[380px] shrink-0 border-l border-gray-200 dark:border-white/10 bg-white dark:bg-[#12122A] overflow-y-auto hidden lg:block p-8 custom-scrollbar z-10 shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.1)] dark:shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.3)]">
                 <h3 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-6 pb-4 border-b border-gray-100 dark:border-white/5 flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    Post Settings
                 </h3>
                 
                 <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Slug</label>
                      <input value={formData.slug} onChange={e => setFormData({...formData, slug: e.target.value})} placeholder="auto-generated-slug" className={inputClasses} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Excerpt</label>
                      <textarea value={formData.excerpt} onChange={e => setFormData({...formData, excerpt: e.target.value})} placeholder="Brief summary" rows={3} className={`${inputClasses} resize-none`} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Category</label>
                      <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className={inputClasses}>
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Read Time (min)</label>
                      <input type="number" value={formData.readTimeMinutes} onChange={e => setFormData({...formData, readTimeMinutes: parseInt(e.target.value) || 5})} className={inputClasses} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Tags</label>
                      <div className="flex gap-2 mb-3">
                        <input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addTag())} placeholder="Add tag" className={`${inputClasses} flex-1`} />
                        <button onClick={addTag} className="btn-neon px-4 rounded-xl text-xs h-auto py-2">Add</button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {formData.tags.map((tag, i) => (
                          <span key={i} className="px-3 py-1 text-[11px] font-bold tracking-wide rounded-full bg-primary/10 text-primary flex items-center gap-1.5">
                            #{tag}
                            <button onClick={() => removeTag(tag)} className="hover:text-red-400 text-sm opacity-60 font-semibold">×</button>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Cover Image URL</label>
                      <input value={formData.coverImageUrl} onChange={e => setFormData({...formData, coverImageUrl: e.target.value})} placeholder="https://example.com/cover.jpg" className={inputClasses} />
                      {formData.coverImageUrl && (
                        <img src={formData.coverImageUrl} alt="" className="mt-3 w-full h-32 object-cover rounded-xl border border-gray-200 dark:border-white/10 shadow-sm" />
                      )}
                    </div>
                  </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlogEditor;
