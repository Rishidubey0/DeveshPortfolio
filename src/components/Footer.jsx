import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: FaGithub,
      label: "GitHub",
      link: "https://github.com/mohdshoaibkhan72",
      color: "hover:bg-gray-700",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/shoaibkhan72/",
      color: "hover:bg-blue-600",
    },

    {
      icon: HiMail,
      label: "Email",
      link: "mailto:contact@mohammadshoaibkhan.com",
      color: "hover:bg-red-500",
    },
  ];

  const quickLinks = [
    { label: "Home", link: "#home" },
    { label: "About", link: "#about" },
    { label: "Skills", link: "#skills" },
    { label: "Projects", link: "#projects" },
    { label: "Experience", link: "#experience" },
    { label: "Contact", link: "#contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 overflow-hidden border-t border-white/5">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] will-change-transform" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] will-change-transform" />

      {/* Top Border with Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-lg shadow-indigo-500/30 ring-1 ring-white/20">
                <span className="text-white font-bold text-xl font-outfit tracking-tight">MK</span>
              </div>
              <div>
                <span className="block text-white font-bold text-xl font-outfit tracking-wide">
                  Mohammad Khan
                </span>
                <span className="text-indigo-400 text-xs font-semibold tracking-wider uppercase">
                  Portfolio
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm font-inter">
              Full-stack MERN developer passionate about building exceptional
              web experiences and turning ideas into reality.
            </p>
            <div className="flex items-center gap-3 text-emerald-300 text-xs font-semibold bg-emerald-900/20 px-4 py-2 rounded-full w-fit border border-emerald-500/20 shadow-sm shadow-emerald-500/10">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </div>
              <span>Open to Freelance Opportunities</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:pl-12"
          >
            <h4 className="text-white font-bold text-lg mb-6 font-outfit relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => scrollToSection(link.link)}
                    className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2 group text-sm font-inter"
                  >
                    <MdKeyboardArrowRight className="text-indigo-500 text-lg group-hover:text-purple-400 transition-colors" />
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-bold text-lg mb-6 font-outfit relative inline-block">
              Connect With Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
            </h4>
            <p className="text-slate-400 text-sm mb-6 font-inter">
              Let's connect and create something amazing together!
            </p>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3.5 bg-slate-800/50 backdrop-blur-lg rounded-xl border border-white/10 ${social.color} hover:border-white/20 transition-all shadow-lg group`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-inter"
        >
          <p className="text-slate-400 text-center md:text-left">
            © {currentYear} Mohammad Shoaib Khan. <span className="hidden sm:inline">|</span> All Rights Reserved.
          </p>
          <p className="text-slate-500 flex items-center gap-1.5">
            Built with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="w-3.5 h-3.5 text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
            </motion.span>
            via React & Tailwind
          </p>
        </motion.div>

        {/* Updated Back to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          onClick={() => scrollToSection("#home")}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 p-3.5 bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-xl text-white shadow-xl hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 z-50 group"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 text-indigo-400 group-hover:text-white group-hover:-translate-y-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
