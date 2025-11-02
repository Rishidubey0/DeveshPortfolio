import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* Motion helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const float = (delay = 0) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -6, 0],
    transition: { duration: 4, delay, repeat: Infinity, ease: "easeInOut" },
  },
});

/* Card height for grid */
const cardHeight = "h-[max] sm:h-max";

/* Colorful Code Card Component - Same Style as ProjectCodePanel */
const ProjectCard = React.memo(({ project, onImageClick }) => {
  return (
    <div className={`relative ${cardHeight}`}>
      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30 blur-2xl" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative h-full rounded-2xl border border-white/15 bg-[#0B1020]/80 backdrop-blur-md shadow-2xl overflow-hidden group"
        {...float(Math.random() * 0.5)}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 text-[12px] text-slate-300/80 truncate">
              {project.codePanel.title}
            </span>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label="Open live demo"
                className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-[11.5px] font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring ring-indigo-500"
                onClick={(e) => e.stopPropagation()}
              >
                Live
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3Z" />
                </svg>
              </a>
            )}
            {project.code && (
              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                aria-label="Open source code"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[11.5px] font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring ring-indigo-500"
                onClick={(e) => e.stopPropagation()}
              >
                Code
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="m9.4 16.6-1.4 1.4-6-6 6-6 1.4 1.4L5.8 12l3.6 4.6ZM14.6 7.4l1.4-1.4 6 6-6 6-1.4-1.4L18.2 12l-3.6-4.6Z" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Image thumbnails - Clickable */}
        <div className="mt-3 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between px-3 mb-2">
            <span className="text-[11px] text-slate-400">
              Desing ({project.shotsPanel.shots.length})
            </span>
            <span className="text-[10px] text-slate-500">Click to view</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {project.shotsPanel.shots.slice(0, 3).map((shot, i) => (
              <button
                key={i}
                onClick={() => onImageClick(project, i)}
                className="relative aspect-video rounded-lg overflow-hidden border border-white/10 hover:border-indigo-500 transition-all group/img cursor-pointer"
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
          {project.shotsPanel.shots.length > 3 && (
            <button
              onClick={() => onImageClick(project, 0)}
              className="mt-2 w-full text-center text-[10px] text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              +{project.shotsPanel.shots.length - 3} more screenshots
            </button>
          )}
        </div>
        {/* Code content */}
        <div className="p-4 md:p-5 h-[calc(100%-50px)] overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
          <pre className="text-[11.5px] md:text-[12.5px] leading-5 font-mono mb-3">
            <code>
              {project.codePanel.lines.slice(0, 12).map((ln, idx) => (
                <div key={idx} className="whitespace-pre-wrap">
                  {ln}
                </div>
              ))}
            </code>
          </pre>

          {/* Chips */}
          {project.codePanel.chips?.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.codePanel.chips.slice(0, 6).map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 px-2 py-0.5 text-[10px] font-semibold text-white/95 shadow-sm"
                >
                  {c}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        className="absolute -right-2 -top-6 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-2 text-[11px] font-semibold text-white shadow-xl"
        {...float(0.6 + Math.random() * 0.3)}
      >
        {project.codePanel.badge}
      </motion.div>
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

/* Full Image Viewer Modal */
const ImageViewerModal = ({ project, initialIndex = 0, onClose }) => {
  const [imageIndex, setImageIndex] = useState(initialIndex);

  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    const handleArrow = (e) => {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);
    window.addEventListener("keydown", handleArrow);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("keydown", handleArrow);
    };
  }, [onClose]);

  if (!project) return null;

  const screenshots = project.shotsPanel.shots || [];
  const nextImage = () => setImageIndex((i) => (i + 1) % screenshots.length);
  const prevImage = () =>
    setImageIndex((i) => (i - 1 + screenshots.length) % screenshots.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur-sm"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Project info header */}
      <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
        <h3 className="text-white font-semibold text-sm">
          {project.codePanel.title}
        </h3>
        <p className="text-slate-400 text-xs">{project.codePanel.subtitle}</p>
      </div>

      {/* Main image */}
      <div
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={screenshots[imageIndex]?.src}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            src={screenshots[imageIndex]?.src}
            alt={screenshots[imageIndex]?.caption}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
          />
        </AnimatePresence>

        {/* Navigation arrows */}
        {screenshots.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="m14.6 7.4-1.4-1.4-6 6 6 6 1.4-1.4L10.8 12l3.8-4.6Z" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="m9.4 16.6 1.4 1.4 6-6-6-6-1.4 1.4L13.2 12 9.4 16.6Z" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Caption and counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 max-w-2xl w-full px-4">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-3">
          <p className="text-white text-sm text-center mb-1">
            {screenshots[imageIndex]?.caption}
          </p>
          <p className="text-slate-400 text-xs text-center">
            {imageIndex + 1} / {screenshots.length}
          </p>
        </div>
      </div>

      {/* Thumbnail strip */}
      {screenshots.length > 1 && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-3xl w-full px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20">
            {screenshots.map((shot, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setImageIndex(i);
                }}
                className={`relative flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                  i === imageIndex
                    ? "border-indigo-500 ring-2 ring-indigo-500/50 scale-110"
                    : "border-white/20 hover:border-white/40"
                }`}
              >
                <img
                  src={shot.src}
                  alt={shot.caption}
                  className="w-full h-full object-cover"
                />
                {i === imageIndex && (
                  <div className="absolute inset-0 bg-indigo-500/20" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
};

const projectsData = [
  // 1. Balloon Dekor - E-commerce
  {
    id: "balloon-dekor",
    live: "https://balloon-dekor-client.vercel.app/",
    code: "https://github.com/khanbhaishoaib/balloon-dekor",
    codePanel: {
      title: "PartyPuffers ",
      subtitle: "live • e-commerce",
      badge: "MERN • Vercel",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">balloonDekor</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-4">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Balloon Dekor'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-4">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Party supplies • Event decoration • E-commerce"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-4">
          <span className="text-slate-400">stack</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
          <span className="text-slate-200">
            "React","Node.js","Express","MongoDB"
          </span>
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="5" className="pl-4">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
        </span>,
        <span key="6" className="pl-8">
          <span className="text-slate-200">
            "Multi-category product catalog"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-8">
          <span className="text-slate-200">"Shopping cart & wishlist"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-8">
          <span className="text-slate-200">"Dynamic coupon system"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-8">
          <span className="text-slate-200">"Order tracking & management"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10" className="pl-8">
          <span className="text-slate-200">"Admin analytics dashboard"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="11" className="pl-4">
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="12" className="pl-4">
          <span className="text-slate-400">auth</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "JWT • Google OAuth • Email OTP"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="13" className="pl-4">
          <span className="text-slate-400">media</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"Cloudinary CDN"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="14">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: [
        "React",
        "Tailwind",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Cloudinary",
        "REST API",
      ],
    },
    shotsPanel: {
      shots: [
        { src: "/balone.png", caption: "Home — Featured party decor" },
        { src: "/balone1.png", caption: "Admin — Dashboard & analytics" },
        { src: "/balone2.png", caption: "Products — Browse balloons" },
        { src: "/balone3.png", caption: "Orders — Management panel" },
      ],
    },
  },
  // 3. Loanyfy CRM System
  {
    id: "loanyfy-crm",
    live: "",
    code: "",
    codePanel: {
      title: "Loanyfy CRM ",
      subtitle: "internal • business tool",
      badge: "MERN • Internal",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">crmSystem</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-4">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Loanyfy CRM'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-4">
          <span className="text-slate-400">purpose</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Lead & customer relationship management"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-4">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
        </span>,
        <span key="5" className="pl-8">
          <span className="text-slate-200">
            "Lead tracking & pipeline management"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="6" className="pl-8">
          <span className="text-slate-200">"Customer profile & history"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-8">
          <span className="text-slate-200">"Activity timeline & notes"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-8">
          <span className="text-slate-200">
            "Analytics & performance reports"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-8">
          <span className="text-slate-200">"Team collaboration tools"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10" className="pl-8">
          <span className="text-slate-200">
            "Automated follow-up reminders"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="11" className="pl-4">
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="12" className="pl-4">
          <span className="text-slate-400">access</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Role-based permissions (Admin/Manager/Agent)"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="13">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Charts.js",
        "RBAC",
        "Real-time",
      ],
    },
    shotsPanel: {
      shots: [
        {
          src: "loanyfy/dashbored.png",
          caption: "Dashboard — Overview & metrics",
        },
        {
          src: "loanyfy/leadsdetails.png",
          caption: "Leads — Pipeline management",
        },
        { src: "loanyfy/image.png", caption: "Analytics — Team performance" },
        { src: "loanyfy/todos.png", caption: "Todoos" },
        { src: "loanyfy/sales.png", caption: "Analytics — Team performance" },
      ],
    },
  },

  // New Project: Alras Cars
  {
    id: "alras-cars",
    live: "https://alrascars.com/",
    code: "", // Add repo if available
    codePanel: {
      title: "Alras Cars — Vehicle Rental Platform",
      subtitle: "live • e-commerce",
      badge: "MERN • Vercel",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">alrasCars</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-4">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Alras Cars'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-4">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Vehicle rental • Car bookings"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-4">
          <span className="text-slate-400">stack</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">
            ["React", "Node.js", "Express", "MongoDB"]
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="5" className="pl-4">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
        </span>,
        <span key="6" className="pl-8">
          <span className="text-slate-200">
            "Car catalog with search & filters"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-8">
          <span className="text-slate-200">
            "Booking & payment integration"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-8">
          <span className="text-slate-200">
            "User profiles & booking history"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-8">
          <span className="text-slate-200">
            "Admin dashboard for fleet management"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10" className="pl-4">
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="11" className="pl-4">
          <span className="text-slate-400">auth</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"JWT • Email verification"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="12" className="pl-4">
          <span className="text-slate-400">hosting</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"Vercel • Render"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="13">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Stripe",
        "REST API",
      ],
    },
    shotsPanel: {
      shots: [
        { src: "Alras/alras-home.png", caption: "Home - Car listings" },
        { src: "Alras/alras-booking.png", caption: "Booking form" },
        { src: "Alras/alras-admin.png", caption: "Admin dashboard" },
        { src: "Alras/alras-carlist.png", caption: "User Carlist " },
        { src: "Alras/alras-admin2.png", caption: "Admin Car Listings" },
      ],
    },
  },
  // 6. Marble Tiles Company
  {
    id: "The luxury tiles",
    live: "https://theluxurytiles.com/",

    codePanel: {
      title: "Marble & Tiles Co.",
      subtitle: "client project • b2b",
      badge: "MERN • WhatsApp",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">marbleTiles</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-4">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Marble & Tiles Co.'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-4">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"Marble • Tiles • B2B catalog"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-4">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
        </span>,
        <span key="5" className="pl-8">
          <span className="text-slate-200">
            "Product catalog with specifications"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="6" className="pl-8">
          <span className="text-slate-200">
            "High-resolution image galleries"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-8">
          <span className="text-slate-200">"WhatsApp inquiry integration"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-8">
          <span className="text-slate-200">"Quote request system"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-8">
          <span className="text-slate-200">
            "Mobile-first responsive design"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10" className="pl-4">
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="11" className="pl-4">
          <span className="text-slate-400">integration</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"WhatsApp Business API"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="12">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: ["React", "Tailwind", "Node.js", "MongoDB", "WhatsApp API"],
    },
    shotsPanel: {
      shots: [
        { src: "theluxary/home.png", caption: "Home — Product showcase" },
        { src: "theluxary/image.png", caption: "Catalog — Browse tiles" },
        {
          src: "theluxary/application.png",
          caption: "Details — Specifications",
        },
      ],
    },
  },
  // 2. Loanyfy - Fintech Platform
  {
    id: "loanyfy",
    live: "https://www.loanyfy.com/",
    code: "https://github.com/khanbhaishoaib/loanyfy",
    codePanel: {
      title: "Loanyfy — A Loan Platform",
      subtitle: "live • fintech",
      badge: "MERN • Production",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">loanyfy</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-4">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Loanyfy'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-4">
          <span className="text-slate-400">company</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"Full-time role at Loanyfy"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-4">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"Business loans • Fintech"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="5" className="pl-4">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
        </span>,
        <span key="6" className="pl-8">
          <span className="text-slate-200">
            "Multi-step loan application forms"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-8">
          <span className="text-slate-200">"Document upload & validation"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-8">
          <span className="text-slate-200">
            "Admin review & approval workflow"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-8">
          <span className="text-slate-200">"AI-powered chatbot support"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10" className="pl-8">
          <span className="text-slate-200">
            "Real-time application tracking"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="11" className="pl-4">
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="12" className="pl-4">
          <span className="text-slate-400">security</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "JWT • RBAC • Document encryption"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="13" className="pl-4">
          <span className="text-slate-400">storage</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"MongoDB • AWS S3"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="14">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS S3",
        "JWT",
        "AI Chatbot",
        "Fintech",
      ],
    },
    shotsPanel: {
      shots: [
        { src: "/loanyfy.png", caption: "Home — Landing & loan products" },
        { src: "/loanyfprodcut.png", caption: "Products — Loan options" },
        { src: "/Loanyfychatbot.png", caption: "Support — AI Chatbot" },
      ],
    },
  },

  // 5. Nokri.com - Job Portal
  {
    id: "Nokryfy",
    live: "https://nokryfyclients2.vercel.app/",
    code: "https://github.com/khanbhaishoaib/nokri",
    codePanel: {
      title: "Nokryfy.com — Job Portal",
      subtitle: "client project • job board",
      badge: "MERN • Client",
      lines: [
        <span key="1">
          <span className="text-fuchsia-400">const</span>{" "}
          <span className="text-emerald-300">Nokryfy</span>{" "}
          <span className="text-slate-300">=</span>{" "}
          <span className="text-cyan-300">{"{"}</span>
        </span>,
        <span key="2" className="pl-4">
          <span className="text-slate-400">name</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-amber-300">'Nokryfy.com'</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="3" className="pl-4">
          <span className="text-slate-400">domain</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">"Job portal • Recruitment"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="4" className="pl-4">
          <span className="text-slate-400">features</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-cyan-300">[</span>
        </span>,
        <span key="5" className="pl-8">
          <span className="text-slate-200">"Job search & filtering"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="6" className="pl-8">
          <span className="text-slate-200">"Employer job posting"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="7" className="pl-8">
          <span className="text-slate-200">"Candidate applications"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="8" className="pl-8">
          <span className="text-slate-200">"Resume builder & upload"</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="9" className="pl-4">
          <span className="text-cyan-300">]</span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="10" className="pl-4">
          <span className="text-slate-400">role</span>
          <span className="text-slate-300">:</span>{" "}
          <span className="text-slate-200">
            "Full-stack development & API integration"
          </span>
          <span className="text-cyan-300">,</span>
        </span>,
        <span key="11">
          <span className="text-cyan-300">{"}"}</span>
          <span className="text-slate-300">;</span>
        </span>,
      ],
      chips: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    },
    shotsPanel: {
      shots: [
        { src: "nokryfy/image.png", caption: "Dashbored- company panel" },
        { src: "nokryfy/home.png", caption: "Home — Job search" },
        {
          src: "nokryfy/totalapplicant.png",
          caption: "Jobs — Total Applicants",
        },
        { src: "nokryfy/profile.png", caption: "Profile — Candidate" },
        { src: "nokryfy/postajob.png", caption: "Job- Job posting form" },
      ],
    },
  },
];

/* Main Projects Component */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [filter, setFilter] = useState("All");

  const handleImageClick = (project, imageIndex) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
  };

  const categories = [
    "All",
    "E-commerce",
    "Fintech",
    "Business",
    "B2B",
    "Personal",
  ];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) =>
          p.codePanel.subtitle.includes(filter.toLowerCase())
        );

  return (
    <section
      id="projects"
      className="relative w-full text-white bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-20 overflow-hidden"
    >
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

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-slate-300/90 text-lg max-w-2xl mx-auto">
            10+ real-world applications with colorful code details. Click on
            screenshots to view full images.
          </p>
        </motion.div>

        {/* Filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-all ${
                filter === cat
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div> */}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <a
            href="https://github.com/mohdshoaibkhan72"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all duration-300"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.137 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>

      {/* Image Viewer Modal */}
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
