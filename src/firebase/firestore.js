import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { db } from './config';

// ==================== GENERIC CRUD ====================

/**
 * Get all documents from a collection (with optional filtering)
 */
export const getCollection = async (collectionName, conditions = [], sortBy = null) => {
  try {
    let q = collection(db, collectionName);
    const constraints = [];

    conditions.forEach(({ field, operator, value }) => {
      constraints.push(where(field, operator, value));
    });

    if (sortBy) {
      constraints.push(orderBy(sortBy.field, sortBy.direction || 'asc'));
    }

    if (constraints.length > 0) {
      q = query(q, ...constraints);
    }

    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error getting ${collectionName}:`, error);
    return [];
  }
};

/**
 * Get a single document by ID
 */
export const getDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error(`Error getting document ${docId}:`, error);
    return null;
  }
};

/**
 * Add a new document
 */
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(`Error adding to ${collectionName}:`, error);
    throw error;
  }
};

/**
 * Update a document
 */
export const updateDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { id: docId, ...data };
  } catch (error) {
    console.error(`Error updating ${collectionName}/${docId}:`, error);
    throw error;
  }
};

/**
 * Delete a document
 */
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error(`Error deleting ${collectionName}/${docId}:`, error);
    throw error;
  }
};

/**
 * Set a document with a specific ID (for site_config etc.)
 */
export const setDocument = async (collectionName, docId, data) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await setDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    }, { merge: true });
    return { id: docId, ...data };
  } catch (error) {
    console.error(`Error setting ${collectionName}/${docId}:`, error);
    throw error;
  }
};

/**
 * Subscribe to real-time updates for a collection
 */
export const subscribeToCollection = (collectionName, callback, conditions = [], sortBy = null) => {
  let q = collection(db, collectionName);
  const constraints = [];

  conditions.forEach(({ field, operator, value }) => {
    constraints.push(where(field, operator, value));
  });

  if (sortBy) {
    constraints.push(orderBy(sortBy.field, sortBy.direction || 'asc'));
  }

  if (constraints.length > 0) {
    q = query(q, ...constraints);
  }

  return onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    callback(data);
  });
};

// ==================== SPECIFIC HELPERS ====================

// --- Projects ---
export const getProjects = async () => {
  const all = await getCollection('projects', [], { field: 'order', direction: 'asc' });
  return all.filter(p => p.isVisible !== false);
};

// --- Skills ---
export const getSkills = async () => {
  const all = await getCollection('skills', [], { field: 'order', direction: 'asc' });
  return all.filter(s => s.isVisible !== false);
};

// --- Services ---
export const getServices = async () => {
  const all = await getCollection('services', [], { field: 'order', direction: 'asc' });
  return all.filter(s => s.isVisible !== false);
};

// --- Education ---
export const getEducation = async () => {
  const all = await getCollection('education', [], { field: 'order', direction: 'asc' });
  return all.filter(e => e.isVisible !== false);
};

// --- Blog Posts ---
export const getBlogPosts = async () => {
  const all = await getCollection('blog_posts');
  return all
    .filter(p => p.isPublished === true)
    .sort((a, b) => {
      const dateA = a.createdAt?.seconds || 0;
      const dateB = b.createdAt?.seconds || 0;
      return dateB - dateA;
    });
};

export const getBlogPostBySlug = async (slug) => {
  const all = await getCollection('blog_posts');
  return all.find(p => p.slug === slug && p.isPublished === true) || null;
};

// --- Testimonials ---
export const getTestimonials = async () => {
  const all = await getCollection('testimonials', [], { field: 'order', direction: 'asc' });
  return all.filter(t => t.isVisible !== false);
};

// --- Site Config ---
export const getSiteConfig = (docId) => getDocument('site_config', docId);

// --- Admin: Get ALL docs (including hidden) ---
export const getAllProjects = () => getCollection('projects', [], { field: 'order', direction: 'asc' });
export const getAllSkills = () => getCollection('skills', [], { field: 'order', direction: 'asc' });
export const getAllServices = () => getCollection('services', [], { field: 'order', direction: 'asc' });
export const getAllEducation = () => getCollection('education', [], { field: 'order', direction: 'asc' });
export const getAllBlogPosts = () => getCollection('blog_posts');
export const getAllTestimonials = () => getCollection('testimonials', [], { field: 'order', direction: 'asc' });
