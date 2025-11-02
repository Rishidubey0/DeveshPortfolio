import { motion } from "framer-motion";
import {
  BsBriefcase,
  BsBuilding,
  BsCalendar3,
  BsLightning,
} from "react-icons/bs";
import { FiCheckCircle, FiAward, FiTrendingUp } from "react-icons/fi";
import { experiences } from "../data/mockData";

export function Experience() {
  // Calculate total years of experience
  const totalYears = experiences.length > 0 ? "3+" : "0";
  const totalProjects = experiences.reduce(
    (acc, exp) => acc + (exp.responsibilities?.length || 0),
    0
  );

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 " />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]"
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
          <h2 className="mb-4 text-white text-4xl font-bold">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto"></div>
          <p className="mt-4 text-slate-300 max-w-2xl mx-auto text-base">
            My professional journey and contributions to different organizations
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar - Sticky */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Stats Card */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-xl">
                  <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                    <FiAward className="text-indigo-400" />
                    Career Highlights
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
                      <div className="p-3 bg-indigo-600 rounded-lg">
                        <BsCalendar3 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">
                          {totalYears}
                        </p>
                        <p className="text-slate-400 text-sm">
                          Years Experience
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                      <div className="p-3 bg-purple-600 rounded-lg">
                        <BsBuilding className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">
                          {experiences.length}
                        </p>
                        <p className="text-slate-400 text-sm">Companies</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg border border-emerald-500/20">
                      <div className="p-3 bg-emerald-600 rounded-lg">
                        <FiTrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white">12+</p>
                        <p className="text-slate-400 text-sm">Key Projects</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freelance Availability Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-xl border border-emerald-500/30 rounded-xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                    />
                    <h3 className="text-white text-lg font-semibold">
                      Available for Freelance
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Open to exciting freelance opportunities and project
                    collaborations. Let's build something amazing together!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <BsLightning className="w-4 h-4" />{" "}
                    <a href="#contact"> Hire Me</a>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Experience Timeline */}
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500"></div>

                <div className="space-y-8">
                  {/* Full-Time Experiences */}
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-8"
                    >
                      {/* Timeline dot */}
                      <motion.div
                        className="absolute left-0 top-8 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg shadow-indigo-500/50 transform -translate-x-1/2"
                        whileHover={{ scale: 1.5 }}
                      />

                      {/* Experience Card */}
                      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-xl overflow-hidden">
                        {/* Card Header */}
                        <div className="p-6 border-b border-white/10">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4 flex-grow">
                              <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg shadow-indigo-500/50">
                                <BsBriefcase className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-grow">
                                <h3 className="text-white text-xl font-semibold">
                                  {exp.title}
                                </h3>
                                <p className="text-indigo-400 mt-1 font-medium">
                                  {exp.company}
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="inline-flex items-center gap-1 px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-medium rounded-full border border-indigo-500/30">
                                <BsCalendar3 className="w-3 h-3" />
                                {exp.duration}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <ul className="space-y-3">
                            {exp.responsibilities.map(
                              (responsibility, respIndex) => (
                                <li
                                  key={respIndex}
                                  className="flex items-start gap-3"
                                >
                                  <FiCheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-300 text-sm leading-relaxed">
                                    {responsibility}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
