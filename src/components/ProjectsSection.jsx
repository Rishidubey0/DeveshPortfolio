import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionTemplate, useMotionValue } from "framer-motion";

// --- Motion Helpers ---
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

// --- Spotlight Card Component ---
const SpotlightCard = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative border border-white/10 bg-slate-900/50 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

// --- Project Card Component ---
const ProjectCard = ({ project, onImageClick }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <SpotlightCard className="rounded-2xl h-full flex flex-col hover:border-white/20 transition-colors shadow-2xl">
        {/* Window Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80 shadow-sm shadow-rose-500/20" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80 shadow-sm shadow-amber-400/20" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80 shadow-sm shadow-emerald-400/20" />
            <span className="ml-3 text-xs font-medium tracking-wide text-slate-400 font-mono">
              {project.codePanel.title}
            </span>
          </div>

          <div className="flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center gap-1.5 text-[11px] font-semibold text-indigo-300 hover:text-white transition-colors uppercase tracking-wider"
                onClick={(e) => e.stopPropagation()}
              >
                Live
                <svg className="w-3 h-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="group/link flex items-center gap-1.5 text-[11px] font-semibold text-slate-400 hover:text-white transition-colors uppercase tracking-wider"
                onClick={(e) => e.stopPropagation()}
              >
                Code
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              </a>
            )}
          </div>
        </div>

        {/* Gallery Strip */}
        <div className="p-1 bg-black/20">
          <div className="grid grid-cols-3 gap-1">
            {project.shotsPanel.shots.slice(0, 3).map((shot, i) => (
              <div
                key={i}
                onClick={() => onImageClick(project, i)}
                className="relative aspect-video rounded-md overflow-hidden cursor-pointer group/img"
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-900/0 group-hover/img:bg-indigo-900/30 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Console/Code Area */}
        <div className="p-5 flex-1 bg-[#0B1020] font-mono text-[13px] leading-relaxed overflow-x-auto custom-scrollbar">
          <div className="flex gap-4">
            {/* Line Numbers */}
            <div className="flex flex-col text-right select-none text-slate-700/50 w-6">
              {project.codePanel.lines.slice(0, 12).map((_, i) => <span key={i}>{i + 1}</span>)}
            </div>

            {/* Code */}
            <div className="flex-1">
              {project.codePanel.lines.slice(0, 12).map((line, i) => (
                <div key={i} className="whitespace-pre-wrap">{line}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer/Chips */}
        <div className="px-5 py-4 border-t border-white/5 bg-white/[0.02]">
          <div className="flex flex-wrap gap-2">
            {project.codePanel.chips?.slice(0, 5).map((chip, i) => (
              <span key={i} className="inline-flex items-center px-2 py-1 rounded text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {chip}
              </span>
            ))}
            {project.codePanel.chips?.length > 5 && (
              <span className="inline-flex items-center px-2 py-1 rounded text-[11px] font-medium text-slate-500">
                +{project.codePanel.chips.length - 5}
              </span>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  );
};

// --- Modal Component ---
const ImageViewerModal = ({ project, initialIndex = 0, onClose }) => {
  const [imageIndex, setImageIndex] = useState(initialIndex);
  const screenshots = project?.shotsPanel?.shots || [];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImageIndex((i) => (i + 1) % screenshots.length);
      if (e.key === "ArrowLeft") setImageIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [screenshots.length, onClose]);

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl p-4 md:p-10"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>

      <div className="relative w-full max-w-7xl max-h-full flex flex-col items-center" onClick={e => e.stopPropagation()}>
        {/* Main Image */}
        <div className="relative w-full aspect-video md:aspect-[16/9] lg:h-[75vh] flex items-center justify-center bg-black/50 rounded-lg overflow-hidden border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.img
              key={imageIndex}
              src={screenshots[imageIndex].src}
              alt={screenshots[imageIndex].caption}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="max-w-full max-h-full object-contain"
            />
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button onClick={() => setImageIndex((i) => (i - 1 + screenshots.length) % screenshots.length)} className="absolute left-4 p-3 rounded-full bg-black/50 hover:bg-indigo-600 text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={() => setImageIndex((i) => (i + 1) % screenshots.length)} className="absolute right-4 p-3 rounded-full bg-black/50 hover:bg-indigo-600 text-white transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>

        {/* Caption & Thumbnails */}
        <div className="mt-6 flex flex-col items-center gap-4 w-full">
          <h3 className="text-xl font-outfit font-medium text-white">{screenshots[imageIndex].caption}</h3>

          <div className="flex gap-2 overflow-x-auto max-w-full p-2">
            {screenshots.map((shot, i) => (
              <button
                key={i}
                onClick={() => setImageIndex(i)}
                className={`relative h-16 w-24 rounded-lg overflow-hidden border-2 transition-all ${i === imageIndex ? 'border-indigo-500 scale-105' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={shot.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Data ---
const projectsData = [
  {
    id: "balloon-dekor",
    live: "https://balloon-dekor-client.vercel.app/",
    code: "https://github.com/khanbhaishoaib/balloon-dekor",
    codePanel: {
      title: "PartyPuffers",
      subtitle: "live • e-commerce",
      badge: "MERN • Vercel",
      lines: [
        <span key="1"><span className="text-fuchsia-400">const</span> <span className="text-emerald-300">PartyPuffers</span> <span className="text-slate-300">=</span> <span className="text-cyan-300">{"{"}</span></span>,
        <span key="2" className="pl-4"><span className="text-slate-400">domain</span><span className="text-slate-300">:</span> <span className="text-amber-300">'E-commerce'</span><span className="text-cyan-300">,</span></span>,
        <span key="3" className="pl-4"><span className="text-slate-400">stack</span><span className="text-slate-300">:</span> <span className="text-cyan-300">['React', 'Node', 'Mongo']</span><span className="text-cyan-300">,</span></span>,
        <span key="4" className="pl-4"><span className="text-slate-400">features</span><span className="text-slate-300">:</span> <span className="text-cyan-300">[</span></span>,
        <span key="5" className="pl-8"><span className="text-slate-200">"Dynamic product catalog"</span><span className="text-cyan-300">,</span></span>,
        <span key="6" className="pl-8"><span className="text-slate-200">"Cart & Wishlist system"</span><span className="text-cyan-300">,</span></span>,
        <span key="7" className="pl-8"><span className="text-slate-200">"Secure checkout & OTP"</span><span className="text-cyan-300">,</span></span>,
        <span key="8" className="pl-8"><span className="text-slate-200">"Admin dashboard"</span><span className="text-cyan-300">,</span></span>,
        <span key="9" className="pl-4"><span className="text-cyan-300">]</span><span className="text-cyan-300">,</span></span>,
        <span key="10" className="pl-4"><span className="text-slate-400">status</span><span className="text-slate-300">:</span> <span className="text-emerald-400">"Production Ready"</span></span>,
        <span key="11"><span className="text-cyan-300">{"}"}</span></span>
      ],
      chips: ["React", "Redux", "Node.js", "MongoDB", "Tailwind", "JWT"],
    },
    shotsPanel: {
      shots: [
        { src: "/balone.png", caption: "Home — Featured Party Decor" },
        { src: "/balone1.png", caption: "Admin — Analytics Dashboard" },
        { src: "/balone2.png", caption: "Shop — Product Filters" },
        { src: "/balone3.png", caption: "Orders — Management System" },
      ],
    },
  },
  {
    id: "loanyfy-crm",
    live: "",
    code: "",
    codePanel: {
      title: "Loanyfy CRM",
      subtitle: "internal • business tool",
      badge: "MERN • Internal",
      lines: [
        <span key="1"><span className="text-fuchsia-400">const</span> <span className="text-emerald-300">crm</span> <span className="text-slate-300">=</span> <span className="text-cyan-300">{"{"}</span></span>,
        <span key="2" className="pl-4"><span className="text-slate-400">type</span><span className="text-slate-300">:</span> <span className="text-amber-300">'Internal Tool'</span><span className="text-cyan-300">,</span></span>,
        <span key="3" className="pl-4"><span className="text-slate-400">users</span><span className="text-slate-300">:</span> <span className="text-slate-200">"Admins, Agents, Managers"</span><span className="text-cyan-300">,</span></span>,
        <span key="4" className="pl-4"><span className="text-slate-400">modules</span><span className="text-slate-300">:</span> <span className="text-cyan-300">[</span></span>,
        <span key="5" className="pl-8"><span className="text-slate-200">"Lead Pipeline Tracking"</span><span className="text-cyan-300">,</span></span>,
        <span key="6" className="pl-8"><span className="text-slate-200">"Task Automation"</span><span className="text-cyan-300">,</span></span>,
        <span key="7" className="pl-8"><span className="text-slate-200">"Performance Analytics"</span><span className="text-cyan-300">,</span></span>,
        <span key="8" className="pl-4"><span className="text-cyan-300">]</span><span className="text-cyan-300">,</span></span>,
        <span key="9" className="pl-4"><span className="text-slate-400">security</span><span className="text-slate-300">:</span> <span className="text-slate-200">"RBAC & Encryption"</span></span>,
        <span key="10"><span className="text-cyan-300">{"}"}</span></span>
      ],
      chips: ["React", "Express", "MongoDB", "Charts.js", "Socket.io"],
    },
    shotsPanel: {
      shots: [
        { src: "loanyfy/dashbored.png", caption: "CRM Dashboard" },
        { src: "loanyfy/leadsdetails.png", caption: "Lead Management" },
        { src: "loanyfy/todos.png", caption: "Task Board" },
        { src: "loanyfy/sales.png", caption: "Sales Reports" },
      ],
    },
  },
  {
    id: "alras-cars",
    live: "https://alrascars.com/",
    code: "",
    codePanel: {
      title: "Alras Cars",
      subtitle: "rental • platform",
      badge: "MERN • Live",
      lines: [
        <span key="1"><span className="text-fuchsia-400">const</span> <span className="text-emerald-300">rentalApp</span> <span className="text-slate-300">=</span> <span className="text-cyan-300">{"{"}</span></span>,
        <span key="2" className="pl-4"><span className="text-slate-400">service</span><span className="text-slate-300">:</span> <span className="text-amber-300">'Car Booking'</span><span className="text-cyan-300">,</span></span>,
        <span key="3" className="pl-4"><span className="text-slate-400">fleet</span><span className="text-slate-300">:</span> <span className="text-slate-200">"Luxury & Economy Cars"</span><span className="text-cyan-300">,</span></span>,
        <span key="4" className="pl-4"><span className="text-slate-400">flow</span><span className="text-slate-300">:</span> <span className="text-cyan-300">[</span></span>,
        <span key="5" className="pl-8"><span className="text-slate-200">"Search by Date/Type"</span><span className="text-cyan-300">,</span></span>,
        <span key="6" className="pl-8"><span className="text-slate-200">"Identity Verification"</span><span className="text-cyan-300">,</span></span>,
        <span key="7" className="pl-8"><span className="text-slate-200">"Payment Gateway"</span><span className="text-cyan-300">,</span></span>,
        <span key="8" className="pl-8"><span className="text-slate-200">"Booking Management"</span><span className="text-cyan-300">,</span></span>,
        <span key="9" className="pl-4"><span className="text-cyan-300">]</span><span className="text-cyan-300">,</span></span>,
        <span key="10"><span className="text-cyan-300">{"}"}</span></span>
      ],
      chips: ["Next.js", "Node.js", "Stripe", "MongoDB", "AWS"],
    },
    shotsPanel: {
      shots: [
        { src: "Alras/alras-home.png", caption: "Home — Fleet Search" },
        { src: "Alras/alras-booking.png", caption: "Booking Process" },
        { src: "Alras/alras-admin.png", caption: "Admin Dashboard" },
        { src: "Alras/alras-carlist.png", caption: "Fleet Management" },
      ],
    },
  },
  {
    id: "the-luxury-tiles",
    live: "https://theluxurytiles.com/",
    codePanel: {
      title: "Marble Tiles Co.",
      subtitle: "b2b • catalog",
      badge: "MERN • Business",
      lines: [
        <span key="1"><span className="text-fuchsia-400">const</span> <span className="text-emerald-300">catalog</span> <span className="text-slate-300">=</span> <span className="text-cyan-300">{"{"}</span></span>,
        <span key="2" className="pl-4"><span className="text-slate-400">client</span><span className="text-slate-300">:</span> <span className="text-amber-300">'Luxury Tiles'</span><span className="text-cyan-300">,</span></span>,
        <span key="3" className="pl-4"><span className="text-slate-400">focus</span><span className="text-slate-300">:</span> <span className="text-slate-200">"B2B Showcase"</span><span className="text-cyan-300">,</span></span>,
        <span key="4" className="pl-4"><span className="text-slate-400">integrations</span><span className="text-slate-300">:</span> <span className="text-cyan-300">[</span></span>,
        <span key="5" className="pl-8"><span className="text-slate-200">"WhatsApp API for Quotes"</span><span className="text-cyan-300">,</span></span>,
        <span key="6" className="pl-8"><span className="text-slate-200">"High-Res Image Zoom"</span><span className="text-cyan-300">,</span></span>,
        <span key="7" className="pl-8"><span className="text-slate-200">"PDF Catalog Gen"</span><span className="text-cyan-300">,</span></span>,
        <span key="8" className="pl-4"><span className="text-cyan-300">]</span><span className="text-cyan-300">,</span></span>,
        <span key="9"><span className="text-cyan-300">{"}"}</span></span>
      ],
      chips: ["React", "WhatsApp API", "Node.js", "Tailwind"]
    },
    shotsPanel: {
      shots: [
        { src: "theluxary/home.png", caption: "B2B Catalog Home" },
        { src: "theluxary/image.png", caption: "Tile Collections" },
        { src: "theluxary/application.png", caption: "Implementation Showcase" }
      ]
    }
  },
  {
    id: "loanyfy",
    live: "https://www.loanyfy.com/",
    code: "https://github.com/khanbhaishoaib/loanyfy",
    codePanel: {
      title: "Loanyfy Platform",
      subtitle: "fintech • public",
      badge: "MERN • Production",
      lines: [
        <span key="1"><span className="text-fuchsia-400">const</span> <span className="text-emerald-300">fintechApp</span> <span className="text-slate-300">=</span> <span className="text-cyan-300">{"{"}</span></span>,
        <span key="2" className="pl-4"><span className="text-slate-400">product</span><span className="text-slate-300">:</span> <span className="text-amber-300">'Business Loans'</span><span className="text-cyan-300">,</span></span>,
        <span key="3" className="pl-4"><span className="text-slate-400">kyc</span><span className="text-slate-300">:</span> <span className="text-emerald-400">true</span><span className="text-cyan-300">,</span></span>,
        <span key="4" className="pl-4"><span className="text-slate-400">modules</span><span className="text-slate-300">:</span> <span className="text-cyan-300">[</span></span>,
        <span key="5" className="pl-8"><span className="text-slate-200">"Instant Eligibility Check"</span><span className="text-cyan-300">,</span></span>,
        <span key="6" className="pl-8"><span className="text-slate-200">"Document Verification"</span><span className="text-cyan-300">,</span></span>,
        <span key="7" className="pl-8"><span className="text-slate-200">"Bank Integration"</span><span className="text-cyan-300">,</span></span>,
        <span key="8" className="pl-4"><span className="text-cyan-300">]</span><span className="text-cyan-300">,</span></span>,
        <span key="9"><span className="text-cyan-300">{"}"}</span></span>
      ],
      chips: ["React", "Node.js", "MongoDB", "Fintech", "AWS"],
    },
    shotsPanel: {
      shots: [
        { src: "/loanyfy.png", caption: "Landing Page" },
        { src: "/loanyfprodcut.png", caption: "Loan Products" },
        { src: "/Loanyfychatbot.png", caption: "Support Bot" },
      ],
    },
  },
  {
    id: "nokryfy",
    live: "https://nokryfyclients2.vercel.app/",
    code: "https://github.com/khanbhaishoaib/nokri",
    codePanel: {
      title: "Nokryfy Jobs",
      subtitle: "recruitment • portal",
      badge: "MERN • Client",
      lines: [
        <span key="1"><span className="text-fuchsia-400">const</span> <span className="text-emerald-300">jobPortal</span> <span className="text-slate-300">=</span> <span className="text-cyan-300">{"{"}</span></span>,
        <span key="2" className="pl-4"><span className="text-slate-400">users</span><span className="text-slate-300">:</span> <span className="text-slate-200">"Recruiters & Applicants"</span><span className="text-cyan-300">,</span></span>,
        <span key="3" className="pl-4"><span className="text-slate-400">flow</span><span className="text-slate-300">:</span> <span className="text-cyan-300">[</span></span>,
        <span key="4" className="pl-8"><span className="text-slate-200">"Post Jobs"</span><span className="text-cyan-300">,</span></span>,
        <span key="5" className="pl-8"><span className="text-slate-200">"Resume Parsing"</span><span className="text-cyan-300">,</span></span>,
        <span key="6" className="pl-8"><span className="text-slate-200">"Application Tracking"</span><span className="text-cyan-300">,</span></span>,
        <span key="7" className="pl-4"><span className="text-cyan-300">]</span><span className="text-cyan-300">,</span></span>,
        <span key="8"><span className="text-cyan-300">{"}"}</span></span>
      ],
      chips: ["React", "Node.js", "Express", "Job Search API"],
    },
    shotsPanel: {
      shots: [
        { src: "nokryfy/home.png", caption: "Job Search Flow" },
        { src: "nokryfy/image.png", caption: "Recruiter Dashboard" },
        { src: "nokryfy/postajob.png", caption: "Job Posting" },
        { src: "nokryfy/profile.png", caption: "Candidate Profile" },
      ]
    },
  }
];

// --- Main Component ---
const Projects = ({ items }) => {
  // Use passed items or fallback to internal data
  const data = items && items.length > 0 ? items : projectsData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (project, index) => {
    setSelectedProject(project);
    setSelectedImageIndex(index);
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 will-change-transform" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 rounded-full border border-indigo-500/20">
            Selected Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A diverse collection of full-stack applications, from e-commerce platforms to enterprise CRMs, built with scalablity and performance in mind.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {data.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        {/* Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <a
            href="https://github.com/mohdshoaibkhan72"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-slate-200 transition-all hover:scale-105 active:scale-95 text-sm font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            View More on GitHub
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ImageViewerModal
            project={selectedProject}
            initialIndex={selectedImageIndex}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
