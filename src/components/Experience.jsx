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
  const totalYears = experiences.length > 0 ? "2+" : "0";
  const totalProjects = experiences.reduce(
    (acc, exp) => acc + (exp.responsibilities?.length || 0),
    0
  );

  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-slate-950/50" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-20 right-10 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] will-change-transform"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="mb-4 text-4xl md:text-5xl font-bold font-outfit text-white">
            Work Experience
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-inter">
            My professional journey and contributions to different organizations
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Sidebar - Sticky */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-32 space-y-8">
              {/* Stats Card */}
              <div className="bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <h3 className="text-white text-xl font-bold font-outfit mb-8 flex items-center gap-3 relative z-10">
                  <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                    <FiAward className="w-5 h-5" />
                  </div>
                  Career Highlights
                </h3>

                <div className="space-y-5 relative z-10">
                  <div className="flex items-center gap-5 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-indigo-500/20 transition-all duration-300">
                    <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                      <BsCalendar3 className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white font-outfit">
                        {totalYears}
                      </p>
                      <p className="text-slate-400 text-sm font-inter">
                        Years Experience
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-all duration-300">
                    <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                      <BsBuilding className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white font-outfit">
                        {experiences.length}
                      </p>
                      <p className="text-slate-400 text-sm font-inter">
                        Companies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/20 transition-all duration-300">
                    <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                      <FiTrendingUp className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white font-outfit">
                        20+
                      </p>
                      <p className="text-slate-400 text-sm font-inter">
                        Key Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Freelance Availability Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-emerald-500/5 pulse-animation"></div>

                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <h3 className="text-white text-lg font-semibold font-outfit">
                    Available for Work
                  </h3>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed font-inter relative z-10 mb-6">
                  Open to exciting freelance opportunities and project
                  collaborations. Let's build something amazing together!
                </p>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 relative z-10 font-outfit"
                >
                  <BsLightning className="w-4 h-4" />
                  Hire Me Now
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Experience Timeline */}
          <div className="lg:col-span-8">
            <div className="relative pl-6 lg:pl-8">
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-50"></div>

              <div className="space-y-12">
                {/* Full-Time Experiences */}
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Timeline dot with Link Popup */}
                    <div className="absolute -left-[33px] lg:-left-[41px] top-6 z-20 group/dot">
                      {/* Wave Effect Container */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-visible">
                        <div className="absolute w-8 h-8 bg-indigo-500/30 rounded-full animate-ping"></div>
                        <div className="absolute w-12 h-12 bg-indigo-500/10 rounded-full animate-pulse"></div>
                      </div>

                      <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)] cursor-pointer hover:scale-110 transition-transform duration-300">
                        <div className="absolute inset-0 rounded-full bg-indigo-400/50"></div>
                      </div>

                      {/* Popup Link */}
                      <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 invisible group-hover/dot:opacity-100 group-hover/dot:visible transition-all duration-300 transform translate-x-2 group-hover/dot:translate-x-0">
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 backdrop-blur-md rounded-lg shadow-lg shadow-emerald-500/20 whitespace-nowrap hover:from-emerald-500 hover:to-teal-500 transition-all duration-300"
                        >
                          <span className="text-white text-sm font-medium font-outfit">
                            Visit {exp.company}
                          </span>
                          <BsLightning className="w-3 h-3 text-white" />
                        </a>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className="group relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-indigo-500/30 hover:bg-slate-900/80 transition-all duration-500 overflow-hidden">
                      {/* Hover subtle glow */}
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-lg"></div>

                      <div className="relative z-10 p-6 sm:p-8">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 border-b border-white/5 pb-6">
                          <div className="flex items-start gap-4">
                            <a
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3.5 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl border border-white/5 group-hover:scale-110 transition-transform duration-300 cursor-pointer hover:border-indigo-500/30"
                            >
                              <BsBriefcase className="w-6 h-6 text-white" />
                            </a>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold font-outfit text-white group-hover:text-indigo-300 transition-colors">
                                {exp.title}
                              </h3>
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/link relative inline-flex items-center gap-2 mt-1 text-lg font-medium font-inter text-indigo-400 transition-colors hover:text-indigo-300"
                              >
                                <span>{exp.company}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover/link:w-full box-border shadow-[0_0_8px_rgba(99,102,241,0.6)]"></span>
                                <BsLightning className="w-3.5 h-3.5 transition-transform duration-300 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 text-indigo-300" />
                              </a>
                            </div>
                          </div>

                          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/5 text-slate-300 text-sm font-medium rounded-full border border-white/10 self-start shrink-0">
                            <BsCalendar3 className="w-3.5 h-3.5" />
                            {exp.duration}
                          </span>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-4">
                          {exp.responsibilities.map(
                            (responsibility, respIndex) => (
                              <li
                                key={respIndex}
                                className="flex items-start gap-3.5 group/item"
                              >
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/item:scale-150 transition-transform duration-300 shadow-[0_0_5px_rgba(99,102,241,0.5)] shrink-0"></div>
                                <span className="text-slate-300 text-base leading-relaxed font-inter group-hover/item:text-slate-200 transition-colors">
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
    </section>
  );
}
