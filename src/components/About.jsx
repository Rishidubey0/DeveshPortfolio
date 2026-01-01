import { motion } from "framer-motion";
import { FiDownload, FiCheckCircle } from "react-icons/fi";

export function About() {
  const highlights = [
    "3+ years of development experience",
    "Full-stack MERN expertise",
    "Clean code & best practices",
    "UI/UX focused development",
  ];

  return (
    <section id="about" className="relative py-32 lg:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white text-4xl font-bold">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Professional Image with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-2xl">
              <img
                src="/aiimg1.png"
                alt="Mohammad Shoaib Khan - Full Stack Developer"
                className="w-full h-auto rounded-3xl transform transition-transform duration-700 group-hover:scale-105"
              />

              {/* Multi-layer gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

              {/* Bottom Info Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-lg"
              >
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm font-bold text-white">
                      Full Stack Developer
                    </p>
                    <p className="text-[11px] text-indigo-100 mt-0.5 tracking-wide">
                      MERN Stack Specialist
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <FiCheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative glassmorphism elements - enhanced */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl backdrop-blur-2xl border border-white/10 -z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3"></div>

            <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-cyan-500/15 to-blue-600/15 rounded-full backdrop-blur-2xl border border-white/10 -z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"></div>

            {/* Animated glow effect */}
            <div className="absolute inset-0 -z-20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-3xl rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h3 className="mb-6 text-white text-3xl font-semibold">
              Passionate Developer, Creative Problem Solver
            </h3>
            <p className="mb-6 text-slate-300 text-base leading-relaxed">
              I'm a passionate MERN Stack Developer with experience building
              responsive web applications using MongoDB, Express, React, and
              Node.js. I focus on clean code, UI/UX, and seamless backend
              integration.
            </p>
            <p className="mb-8 text-slate-300 text-base leading-relaxed">
              My journey in web development has equipped me with the skills to
              transform ideas into functional, scalable applications. I believe
              in continuous learning and staying updated with the latest
              technologies.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <FiCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button - Fixed */}
            <a href="/MohdShoaib_CV.pdf" download className="inline-block">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
