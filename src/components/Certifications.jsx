import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";
import { useCertifications } from "../hooks/useCertifications";

const Certifications = () => {
  const { certifications, loading } = useCertifications();
  const [selectedCert, setSelectedCert] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopyId = (e, idKey, code) => {
    e.stopPropagation();
    navigator.clipboard.writeText(code);
    setCopiedId(idKey);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section
      id="certifications"
      className="relative min-h-[60vh] bg-light-bg dark:bg-dark-bg py-24 overflow-hidden"
      aria-label="My Certifications and Credentials"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[30%] left-[5%] w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 space-y-16">

        <SectionHeader
          title="My"
          highlight="Certifications"
          description="Professional certifications and credentials earned through dedicated learning and skill development."
        />

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 rounded-2xl animate-pulse">
                <div className="w-full h-36 bg-primary/10 rounded-xl mb-4" />
                <div className="h-5 bg-primary/10 rounded mb-2 w-3/4" />
                <div className="h-4 bg-primary/5 rounded mb-2 w-1/2" />
                <div className="h-3 bg-primary/5 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}

        {/* Dynamic JSON-LD Structured Data for Google Certifications indexing */}
        {!loading && certifications.length > 0 && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                certifications.map((cert) => ({
                  "@context": "https://schema.org",
                  "@type": "EducationalOccupationalCredential",
                  "name": cert.title,
                  "credentialCategory": "Professional Certification",
                  "recognizedBy": {
                    "@type": "EducationalOrganization",
                    "name": cert.issuer,
                  },
                  ...(cert.credentialId && { "identifier": cert.credentialId }),
                  ...(cert.verificationLink && { "url": cert.verificationLink }),
                  ...(cert.imageUrl && { "image": cert.imageUrl }),
                  "author": {
                    "@type": "Person",
                    "name": "Bavananthan Harishpavan",
                    "url": "https://harishpavan-dev.vercel.app/"
                  }
                }))
              ),
            }}
          />
        )}

        {/* Certifications Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal
                key={cert.id || index}
                direction="fadeUp"
                delay={index * 0.1}
              >
                <motion.article
                  itemScope
                  itemType="https://schema.org/EducationalOccupationalCredential"
                  className="glass-card p-5 sm:p-6 rounded-2xl group border border-transparent hover:border-primary/20 transition-all duration-500 h-full flex flex-col cursor-pointer"
                  whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(108, 99, 255, 0.12)' }}
                  onClick={() => cert.imageUrl && setSelectedCert(cert)}
                  aria-label={cert.title}
                >
                  {/* Certificate Image */}
                  {cert.imageUrl && (
                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-gray-100 dark:bg-white/5">
                      <img
                        src={cert.imageUrl}
                        alt={`${cert.title} Certificate by ${cert.issuer} - Bavananthan Harishpavan`}
                        itemProp="image"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold bg-black/40 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                          🔍 View Certificate
                        </span>
                      </div>
                    </div>
                  )}

                  {/* No image placeholder */}
                  {!cert.imageUrl && (
                    <div className="w-full h-40 mb-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent-cyan/10 flex items-center justify-center">
                      <span className="text-5xl">🏆</span>
                    </div>
                  )}

                  {/* Title */}
                  <h3 itemProp="name" className="text-base font-bold mb-1.5 text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p itemProp="recognizedBy" itemScope itemType="https://schema.org/EducationalOrganization" className="text-xs font-medium text-primary/80 mb-3 flex items-center gap-1.5">
                    <span className="text-xs">🏛️</span> <span itemProp="name">{cert.issuer}</span>
                  </p>

                  {/* Credential ID */}
                  {cert.credentialId && (
                    <div className="glass-card p-2.5 rounded-lg mb-4 border border-primary/10 mt-auto flex items-center justify-between gap-2">
                      <div>
                        <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-500 mb-0.5 uppercase tracking-wider">
                          Credential ID
                        </p>
                        <code itemProp="identifier" className="text-xs font-mono font-bold text-primary bg-primary/5 px-2 py-0.5 rounded">
                          {cert.credentialId}
                        </code>
                      </div>
                      <button
                        onClick={(e) => handleCopyId(e, cert.id || index, cert.credentialId)}
                        className="p-1.5 rounded-lg hover:bg-primary/10 text-gray-500 hover:text-primary transition-all flex items-center gap-1 text-xs shrink-0"
                        title="Copy Credential ID"
                        aria-label="Copy Credential ID"
                      >
                        {copiedId === (cert.id || index) ? (
                          <span className="text-emerald-500 font-semibold flex items-center gap-1 text-[11px]">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Copied!
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-gray-400 hover:text-primary">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </span>
                        )}
                      </button>
                    </div>
                  )}

                  {/* Verify Button */}
                  {cert.verificationLink && (
                    <a
                      href={cert.verificationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      itemProp="url"
                      className="btn-neon text-xs py-2.5 mt-auto text-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>Verify Certificate</span>
                    </a>
                  )}
                </motion.article>
              </ScrollReveal>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm font-medium flex items-center gap-1.5 transition-colors"
              >
                ✕ Close
              </button>

              {/* Image */}
              <img
                src={selectedCert.imageUrl}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Caption */}
              <div className="mt-4 text-center">
                <h4 className="text-white text-lg font-bold">{selectedCert.title}</h4>
                <p className="text-white/60 text-sm">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
