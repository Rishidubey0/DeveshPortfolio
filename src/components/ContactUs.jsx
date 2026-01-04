import { motion } from "framer-motion";
import {
  HiMail,
  HiLocationMarker,
  HiPhone,
  HiPaperAirplane,
  HiSparkles,
  HiCheckCircle,
  HiXCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null); // null | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "106cb255-0c95-4601-ba99-667b50445398");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);
    // Optional: Add subject line
    formDataToSend.append("subject", `Portfolio Contact from ${formData.name}`);
    // Optional: Add redirect after success
    formDataToSend.append("redirect", "false");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitResult("success");
        setFormData({ name: "", email: "", message: "" });

        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitResult(null);
        }, 5000);
      } else {
        console.error("Form submission error:", data);
        setSubmitResult("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitResult("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "rishidubey5676@gmail.com",
      link: "mailto:rishidubey5676@gmail.com",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+91 8840981098",
      link: "tel:+918840981098",
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/Rishidubey0",
      color: "hover:bg-gray-700",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/devesh0/",
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-slate-950/50" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-40 left-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 rounded-full mb-6"
          >
            <HiSparkles className="text-indigo-400 w-4 h-4" />
            <span className="text-indigo-300 text-xs font-semibold tracking-wide uppercase">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="mb-4 text-4xl md:text-5xl font-bold font-outfit text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-inter">
            Have a project in mind or want to collaborate? I'm always excited to
            discuss new opportunities and turning ideas into reality!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 lg:sticky lg:top-32"
          >
            <div>
              <h3 className="mb-4 text-white text-3xl font-bold font-outfit">
                Contact Information
              </h3>
              <p className="text-slate-400 text-lg font-inter leading-relaxed">
                Feel free to reach out through any of the following channels. I
                typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="group"
                >
                  <div className="flex items-center gap-5 p-5 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-slate-900/80 hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
                    <div className="p-3.5 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-grow">
                      <p className="text-slate-400 text-sm font-medium font-inter mb-0.5">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-indigo-400 transition-colors text-base font-semibold font-outfit tracking-wide"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white text-base font-semibold font-outfit tracking-wide">
                          {info.value}
                        </p>
                      )}
                    </div>
                    {info.link && (
                      <HiPaperAirplane className="w-5 h-5 text-slate-600 group-hover:text-indigo-400 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-white/5">
              <p className="text-slate-300 mb-6 font-semibold font-outfit text-lg">
                Connect with me on social:
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 bg-slate-900/60 backdrop-blur-lg rounded-xl border border-white/10 ${social.color} hover:border-white/20 text-slate-300 hover:text-white transition-all shadow-lg group`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-5 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-2xl border border-indigo-500/10">
                <p className="text-3xl font-bold text-white mb-1 font-outfit">
                  24h
                </p>
                <p className="text-indigo-400 text-sm font-medium font-inter">
                  Response Time
                </p>
              </div>
              <div className="p-5 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl border border-emerald-500/10">
                <p className="text-3xl font-bold text-white mb-1 font-outfit">
                  100%
                </p>
                <p className="text-emerald-400 text-sm font-medium font-inter">
                  Commitment
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Custom Card */}
            <div className="p-8 md:p-10 bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden">
              {/* Decorative form glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-slate-300 text-sm font-medium mb-2 font-inter ml-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="w-full px-5 py-4 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-inter"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-slate-300 text-sm font-medium mb-2 font-inter ml-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="w-full px-5 py-4 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all font-inter"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-slate-300 text-sm font-medium mb-2 font-inter ml-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="w-full px-5 py-4 bg-slate-950/50 border border-white/10 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-none font-inter"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 ${
                    submitResult === "success"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600"
                      : submitResult === "error"
                      ? "bg-gradient-to-r from-red-600 to-rose-600"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                  } disabled:from-slate-700 disabled:to-slate-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2 font-outfit mt-4`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : submitResult === "success" ? (
                    <>
                      <HiCheckCircle className="w-6 h-6" />
                      Message Sent!
                    </>
                  ) : submitResult === "error" ? (
                    <>
                      <HiXCircle className="w-6 h-6" />
                      Failed - Try Again
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {/* Status Message */}
                {submitResult === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl"
                  >
                    <p className="text-emerald-400 text-sm text-center font-medium font-inter">
                      Thank you! I'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                )}
                {submitResult === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl"
                  >
                    <p className="text-red-400 text-sm text-center font-medium font-inter">
                      Oops! Something went wrong. Please try again or email me
                      directly.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
