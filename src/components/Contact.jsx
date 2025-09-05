import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";

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
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#ffffff] min-h-screen flex items-center justify-center dark:bg-gray-900"
      aria-label="Contact Bavananthan Harishpavan for web development, cybersecurity, IT, and freelance services"
    >
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#fe5617]">
            Contact Me
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mt-2">
            Reach out to <strong>Bavananthan Harishpavan</strong> for inquiries about web development, IT solutions, cybersecurity consulting, UI/UX design, freelance projects, and portfolio collaborations.
          </p>
        </header>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

          {/* Contact Info */}
          <aside className="flex flex-col space-y-5 text-lg md:text-xl font-semibold w-full md:w-1/2">
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#fe5617]" size={24} />
              <span>Jaffna, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fe5617]" size={24} />
              <a href="tel:+94764328867" className="hover:underline">+94 764 328 867</a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#fe5617]" size={24} />
              <a href="mailto:harishpavan.dev@gmail.com" className="hover:underline">
                harishpavan.dev@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-xl font-bold">Follow Me Online</h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Harishpavan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="hover:text-[#fe5617]"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/harishpavan-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="hover:text-[#fe5617]"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  href="https://www.instagram.com/harishpavan_dev/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="hover:text-[#fe5617]"
                >
                  <FaInstagram size={30} />
                </a>
              </div>
            </div>
          </aside>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full md:w-1/2"
            aria-label="Contact form for inquiries and project requests"
          >
            <h2 className="text-2xl font-bold text-[#fe5617] text-center">
              Send a Message
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              aria-label="Your Name"
              className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#fe5617]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              aria-label="Your Email"
              className="border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-[#fe5617]"
            />
            <textarea
              name="message"
              placeholder="Write your message or project inquiry here"
              value={formData.message}
              onChange={handleChange}
              required
              aria-label="Your Message"
              className="border border-gray-300 rounded-md p-3 h-32 focus:ring-2 focus:ring-[#fe5617]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#fe5617] text-white py-3 rounded-md font-semibold hover:bg-[#d44810] disabled:opacity-50 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success === true && (
              <p className="text-green-500 text-center font-medium">
                ✅ Your message has been sent successfully. I will respond soon!
              </p>
            )}
            {success === false && (
              <p className="text-red-500 text-center font-medium">
                ⚠️ Failed to send the message. Please try again or contact directly via email.
              </p>
            )}
          </form>
        </div>

        {/* SEO Keyword Footer */}
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-10">
          Contact <strong>Bavananthan Harishpavan</strong> for professional services in web development, IT solutions, cybersecurity consulting, UI/UX design, software projects, and freelance work. Available for remote and local projects in Sri Lanka and worldwide.
        </p>
      </div>
    </section>
  );
};

export default Contact;
