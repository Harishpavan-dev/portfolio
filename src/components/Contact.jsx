import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import ScrollReveal from "./ui/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(null), 5000);
      } else {
        setSuccess(false);
        setTimeout(() => setSuccess(null), 5000);
      }
    } catch (error) {
      setSuccess(false);
      setTimeout(() => setSuccess(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaLocationDot,
      label: "Location",
      value: "Jaffna, Sri Lanka",
      href: null,
      gradient: "from-primary to-primary-light",
    },
    {
      icon: FaPhoneAlt,
      label: "Phone",
      value: "+94 764 328 867",
      href: "tel:+94764328867",
      gradient: "from-accent-pink to-pink-400",
    },
    {
      icon: FaEnvelope,
      label: "Email",
      value: "harishpavan.dev@gmail.com",
      href: "mailto:harishpavan.dev@gmail.com",
      gradient: "from-accent-cyan to-teal-400",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Harishpavan-dev", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/harishpavan-dev", label: "LinkedIn" },
    { icon: FaInstagram, href: "https://www.instagram.com/harishpavan_dev/?__pwa=1", label: "Instagram" },
    { icon: FaWhatsapp, href: "https://wa.me/94764328867?text=Hi%20Harish!", label: "WhatsApp" },
  ];

  const inputClasses = "w-full px-5 py-3.5 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all duration-300 font-inter text-sm";

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-light-bg dark:bg-dark-bg py-24 overflow-hidden"
      aria-label="Contact Bavananthan Harishpavan"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[15%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[15%] left-[5%] w-[350px] h-[350px] bg-accent-cyan/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 space-y-16">

        <SectionHeader
          title="Get In"
          highlight="Touch"
          description="Reach out for web development, IT solutions, cybersecurity, UI/UX design, and freelance projects."
        />

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT — Contact Info */}
          <ScrollReveal direction="fadeLeft" className="h-full">
            <div className="glass-card p-8 rounded-2xl space-y-6 h-full flex flex-col border border-transparent hover:border-primary/10 transition-colors">

              {/* Contact Cards */}
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="glass-card p-5 rounded-xl group hover:border-primary/20 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${info.gradient} text-white group-hover:scale-110 transition-transform`}>
                        <info.icon size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold text-gray-500 dark:text-gray-600 uppercase tracking-wider mb-0.5">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="font-semibold text-sm text-gray-800 dark:text-gray-200 hover:text-primary transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="glass-card p-6 rounded-xl mt-auto">
                <h3 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
                  Follow Me Online
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="p-3.5 rounded-xl glass-card hover:bg-primary hover:text-white text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 neon-border focus-neon"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* RIGHT — Form */}
          <ScrollReveal direction="fadeRight" delay={0.15} className="h-full">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-2xl space-y-5 h-full flex flex-col border border-transparent hover:border-primary/10 transition-colors"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Send a <span className="gradient-text-primary">Message</span>
              </h3>

              <div className="space-y-4 flex-1">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-gray-500 dark:text-gray-500 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-gray-500 dark:text-gray-500 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-gray-500 dark:text-gray-500 mb-1.5 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="5"
                    placeholder="Write your message or project inquiry here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className={`${inputClasses} resize-none`}
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-neon w-full text-sm py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Sending...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </span>
                )}
              </motion.button>

              {/* Success/Error Toast */}
              <AnimatePresence>
                {success === true && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-sm font-semibold text-center"
                  >
                    ✅ Message sent successfully!
                  </motion.div>
                )}
                {success === false && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold text-center"
                  >
                    ❌ Failed to send message. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;
