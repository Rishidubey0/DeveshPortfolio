import React from "react";
import { motion } from "framer-motion";
import FixedBackgroundAnimation from "./FixedBackgroundAnimation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const float = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" },
  },
});

const skillsColors = [
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-blue-500",
  "from-emerald-500 to-teal-500",
  "from-amber-500 to-orange-500",
  "from-fuchsia-500 to-purple-500",
  "from-cyan-500 to-sky-500",
  "from-lime-500 to-green-500",
  "from-red-500 to-orange-500",
  "from-violet-500 to-indigo-500",
];

const coder = {
  name: "Devesh Kumar Dubey",
  skills: [
    "React",
    "Angular",
    "Node.js",
    "MySql",
    "MongoDB",
    "Figma",
    "Adobe Photoshop",
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable: function () {
    return this.hardWorker && this.problemSolver && this.skills.length >= 5;
  },
};

const LandingPage = () => {
  return (
    <>
      <FixedBackgroundAnimation />

      <motion.section
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative w-full min-h-screen text-white"
        id="home"
      >
        <div className="relative z-10 mx-auto max-w-[1300px] px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT: content */}
            <div className="text-left">
              <motion.div variants={fadeUp} className="mb-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-indigo-300 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-sm shadow-sm shadow-indigo-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  Empowering Digital Growth
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white font-outfit leading-[1.1]"
              >
                {/* I’m Devesh Dubey */}
                <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Front-End Developer & Ui/UX Designer
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-xl text-lg text-slate-300 leading-relaxed font-inter"
              >
                Building responsive and user-centric interfaces using React and
                Angular—combining clean frontend development with thoughtful
                UI/UX design for seamless digital experiences.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mb-8 flex flex-wrap items-center gap-4"
              >
                <a href="#contact" aria-label="Book a call">
                  <button className="rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring ring-indigo-500 shadow-lg shadow-indigo-500/20">
                    Book a call
                  </button>
                </a>
                <a href="#projects" aria-label="View projects">
                  <button className="rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:border-slate-400 focus:outline-none focus-visible:ring ring-indigo-500 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-500">
                    View projects
                  </button>
                </a>
                <a
                  href="/deveshDubey_software_developer.pdf"
                  download
                  aria-label="Download resume PDF"
                  className="rounded-md px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Download Resume
                </a>
              </motion.div>

              <div className="flex items-center gap-4 pt-2">
                {[
                  {
                    icon: FaGithub,
                    href: "https://github.com/rishidubey0",
                    label: "GitHub",
                    color: "group-hover:text-white",
                    bg: "group-hover:bg-white/10",
                    border: "group-hover:border-white/20",
                  },
                  {
                    icon: FaLinkedin,
                    href: "https://www.linkedin.com/in/devesh0//",
                    label: "LinkedIn",
                    color: "group-hover:text-blue-400",
                    bg: "group-hover:bg-blue-500/10",
                    border: "group-hover:border-blue-500/20",
                  },
                  {
                    icon: FaEnvelope,
                    href: "mailto:rishidubey5676@gmail.com",
                    label: "Email",
                    color: "group-hover:text-rose-400",
                    bg: "group-hover:bg-rose-500/10",
                    border: "group-hover:border-rose-500/20",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className={`group p-3.5 bg-white/5 border border-white/10 rounded-xl text-slate-400 transition-all duration-300 ${social.color} ${social.bg} ${social.border}`}
                  >
                    <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: colorful developer code card */}
            <div className="relative h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px]">
              {/* glow backdrop */}
              <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30 blur-2xl" />

              {/* main card */}
              <motion.div
                variants={fadeUp}
                className="relative h-max rounded-2xl border border-white/15 bg-[#0B1020]/80 backdrop-blur-md shadow-2xl overflow-hidden will-change-transform"
                {...float(0.2)}
              >
                {/* Header bar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-3 text-[12px] text-slate-300/80">
                      coder.js
                    </span>
                  </div>
                  <span className="text-[12px] text-slate-400">
                    live • colorful
                  </span>
                </div>

                {/* Code area */}
                <div className="p-5 md:p-6 h-full overflow-auto">
                  <pre className="text-[12.5px] md:text-[13px] leading-6 font-mono">
                    <code>
                      <span className="text-fuchsia-400">const</span>{" "}
                      <span className="text-emerald-300">coder</span>
                      <span className="text-slate-300"> = </span>
                      <span className="text-cyan-300">{"{"}</span>
                      {"\n"}
                      <span className="text-slate-400"> name</span>
                      <span className="text-slate-300">: </span>
                      <span className="text-amber-300">'{coder.name}'</span>
                      <span className="text-cyan-300">,</span>
                      {"\n"}
                      <span className="text-slate-400"> skills</span>
                      <span className="text-slate-300">: </span>
                      <span className="text-cyan-300">[</span>
                    </code>
                  </pre>

                  {/* colorful skill chips */}
                  <div className="flex flex-wrap gap-2 mt-2 mb-3 pl-4">
                    {coder.skills.map((s, i) => (
                      <span
                        key={s}
                        className={`inline-flex items-center rounded-md bg-gradient-to-r ${
                          skillsColors[i % skillsColors.length]
                        } px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <pre className="text-[12.5px] md:text-[13px] leading-6 font-mono">
                    <code>
                      <span className="text-cyan-300"> ]</span>
                      <span className="text-cyan-300">,</span>
                      {"\n"}
                      <span className="text-slate-400"> hardWorker</span>
                      <span className="text-slate-300">: </span>
                      <span className="text-emerald-400">
                        {String(coder.hardWorker)}
                      </span>
                      <span className="text-cyan-300">,</span>
                      {"\n"}
                      <span className="text-slate-400"> quickLearner</span>
                      <span className="text-slate-300">: </span>
                      <span className="text-emerald-400">
                        {String(coder.quickLearner)}
                      </span>
                      <span className="text-cyan-300">,</span>
                      {"\n"}
                      <span className="text-slate-400"> problemSolver</span>
                      <span className="text-slate-300">: </span>
                      <span className="text-emerald-400">
                        {String(coder.problemSolver)}
                      </span>
                      <span className="text-cyan-300">,</span>
                      {"\n"}
                      <span className="text-slate-400"> hireable</span>
                      <span className="text-slate-300">: </span>
                      <span className="text-fuchsia-400">function</span>
                      <span className="text-slate-300">() </span>
                      <span className="text-cyan-300">{"{"}</span>
                      {"\n"}
                      <span className="text-slate-400"> return</span>
                      <span className="text-slate-300"> (</span>
                      {"\n"}
                      <span className="text-slate-400"> this</span>
                      <span className="text-slate-300">.</span>
                      <span className="text-rose-300">hardWorker</span>
                      <span className="text-slate-300"> && </span>
                      {"\n"}
                      <span className="text-slate-400"> this</span>
                      <span className="text-slate-300">.</span>
                      <span className="text-rose-300">problemSolver</span>
                      <span className="text-slate-300"> && </span>
                      {"\n"}
                      <span className="text-slate-400"> this</span>
                      <span className="text-slate-300">.</span>
                      <span className="text-rose-300">skills</span>
                      <span className="text-slate-300">.</span>
                      <span className="text-rose-300">length</span>
                      <span className="text-slate-300"> &gt;= </span>
                      <span className="text-amber-300">5</span>
                      {"\n"}
                      <span className="text-slate-300"> )</span>
                      {"\n"}
                      <span className="text-cyan-300"> {"}"}</span>
                      <span className="text-cyan-300">,</span>
                      {"\n"}
                      <span className="text-cyan-300">{"}"}</span>
                      <span className="text-slate-300">;</span>
                    </code>
                  </pre>

                  {/* hireable status pill */}
                  <div className="mt-4">
                    <span
                      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-semibold ${
                        coder.hireable()
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-rose-500/20 text-rose-300"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          coder.hireable() ? "bg-emerald-400" : "bg-rose-400"
                        }`}
                      />
                      {coder.hireable() ? "Hireable: true" : "Hireable: false"}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* extra floating badge for depth */}
              <motion.div
                className="absolute -right-2 -top-6 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-2 text-[11px] font-semibold text-white shadow-xl"
                {...float(0.6)}
              >
                Developer Mode
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default LandingPage;
