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
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
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
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-lg bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1737575655055-e3967cbefd03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjE5NDc4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mohammad Shoaib Khan"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent rounded-2xl"></div>
            </div>

            {/* Decorative glassmorphism element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 rounded-2xl backdrop-blur-xl border border-white/10 -z-10"></div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h3 className="mb-6 text-white text-2xl font-semibold">
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300"
            >
              <FiDownload className="w-4 h-4" />
              Download CV
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
