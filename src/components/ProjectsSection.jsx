import React from "react";
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

/* Panel height and desktop aspect */
const panelHeight = "h-[380px] sm:h-[440px] md:h-[500px] lg:h-[540px]";
const desktopAspect = "aspect-[16/10]"; // 16:10 feels more “desktop”; change to 16/9 if you prefer

/* Colorful code/details panel with Live/Code links */
const ProjectCodePanel = ({
  title = "Project — Details",
  subtitle = "live • colorful",
  badge = "MERN • Vercel",
  lines = [],
  chips = [],
  live,
  code,
}) => {
  return (
    <div className={`relative ${panelHeight}`}>
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-cyan-500/30 blur-2xl" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative h-full rounded-2xl border border-white/15 bg-[#0B1020]/80 backdrop-blur-md shadow-2xl overflow-hidden"
        {...float(0.2)}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 text-[12px] text-slate-300/80">{title}</span>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2">
            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                aria-label="Open live demo"
                className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-[11.5px] font-semibold text-white transition-colors hover:bg-indigo-700 focus:outline-none focus-visible:ring ring-indigo-500"
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
            ) : null}
            {code ? (
              <a
                href={code}
                target="_blank"
                rel="noreferrer"
                aria-label="Open source code"
                className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1.5 text-[11.5px] font-semibold text-white transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring ring-indigo-500"
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
            ) : null}
          </div>
        </div>

        {/* Code-like content */}
        <div className="p-5 md:p-6 h-full overflow-auto">
          <pre className="text-[12.5px] md:text-[13px] leading-6 font-mono">
            <code>
              {lines.map((ln, idx) => (
                <div key={idx} className="whitespace-pre-wrap">
                  {ln}
                </div>
              ))}
            </code>
          </pre>

          {/* Chips */}
          {chips?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {chips.map((c, i) => (
                <span
                  key={`${c}-${i}`}
                  className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-500 to-cyan-500 px-2.5 py-1 text-[11px] font-semibold text-white/95 shadow-sm"
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
        className="absolute -right-2 -top-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-3 py-2 text-[11px] font-semibold text-white shadow-xl"
        {...float(0.6)}
      >
        {badge}
      </motion.div>
    </div>
  );
};

/* Widescreen image carousel panel (desktop aspect) */
const ProjectShotsPanel = ({
  shots = [],
  badge = "Screens",
  subtitle = "screens • images only",
  title = "Screenshots",
}) => {
  const [index, setIndex] = React.useState(0);
  const next = () => setIndex((i) => (i + 1) % shots.length);
  const prev = () => setIndex((i) => (i - 1 + shots.length) % shots.length);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`relative ${panelHeight}`}>
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-cyan-500/30 via-indigo-500/20 to-fuchsia-500/30 blur-2xl" />
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        className="relative h-full rounded-2xl border border-white/15 bg-[#0B1020]/80 backdrop-blur-md shadow-2xl overflow-hidden"
        {...float(0.1)}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 text-[12px] text-slate-300/80">{title}</span>
          </div>
          <span className="text-[12px] text-slate-400">{subtitle}</span>
        </div>

        {/* Carousel frame with desktop aspect */}
        <div className="relative h-full p-5 md:p-6">
          <div
            className={`relative ${desktopAspect} w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 mx-auto`}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={shots[index]?.src}
                src={shots[index]?.src}
                alt={shots[index]?.caption || "Project screen"}
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                loading="lazy"
              />
            </AnimatePresence>

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/35 backdrop-blur-sm px-3 py-2">
              <p className="text-[12px] text-slate-200">
                {shots[index]?.caption || "Preview"}
              </p>
            </div>

            {/* Nav */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous image"
                className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="m14.6 7.4-1.4-1.4-6 6 6 6 1.4-1.4L10.8 12l3.8-4.6Z" />
                </svg>
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next image"
                className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 transition hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="m9.4 16.6 1.4 1.4 6-6-6-6-1.4 1.4L13.2 12 9.4 16.6Z" />
                </svg>
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {shots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to image ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index
                      ? "w-6 bg-white"
                      : "w-2.5 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        className="absolute -right-2 -top-2 rounded-xl bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-3 py-2 text-[11px] font-semibold text-white shadow-xl"
        {...float(0.5)}
      >
        {badge}
      </motion.div>
    </div>
  );
};

/* Alternating layout with demo/code per project */
const AlternatingProjects = ({
  items = [
    {
      id: "balloon-dekor",
      live: "https://balloon-dekor-client.vercel.app/",

      codePanel: {
        title: "Balloon Dekor — Details",
        subtitle: "live • colorful",
        badge: "MERN • Hostinger+Render",
        lines: [
          <span key="1">
            <span className="text-fuchsia-400">const</span>{" "}
            <span className="text-emerald-300">project</span>{" "}
            <span className="text-slate-300">=</span>{" "}
            <span className="text-cyan-300">{"{"}</span>
          </span>,
          <span key="2" className="pl-2">
            <span className="text-slate-400">name</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-amber-300">'Balloon Dekor'</span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="3" className="pl-2">
            <span className="text-slate-400">domain</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "Party balloons • Event decor • E‑commerce"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="4" className="pl-2">
            <span className="text-slate-400">frontend</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "React • Tailwind • SPA routing"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="5" className="pl-2">
            <span className="text-slate-400">backend</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "Node.js • Express • REST APIs"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="6" className="pl-2">
            <span className="text-slate-400">features</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-cyan-300">[</span>
            <span className="text-slate-200">
              "Categories","Cart","Wishlist","Coupons","Checkout","Order
              tracking"
            </span>
            <span className="text-cyan-300">]</span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="7" className="pl-2">
            <span className="text-slate-400">auth</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "Social login • Email OTP • JWT • RBAC"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="8" className="pl-2">
            <span className="text-slate-400">media</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "Cloudinary for images & transformations"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="9" className="pl-2">
            <span className="text-slate-400">hosting</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "Frontend: Hostinger • Backend: Render"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="10">
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
          "OTP",
          "Social Login",
          "Cloudinary",
        ],
      },
      shotsPanel: {
        badge: "Screens",
        subtitle: "images only",
        title: "Balloon Dekor UI",
        shots: [
          {
            src: "/balone.png",
            caption: "Home — events & featured decor",
          },
          {
            src: "/balone1.png",
            caption: "Admiin Dashbored  — All & sumirry ",
          },
          {
            src: "/balone2.png",
            caption: "All Product — balloon bundles & add‑ons",
          },
          {
            src: "/balone3.png",
            caption: "Admin — orders & inventory (screenshot)",
          },
        ],
      },
    },
    {
      id: "loanyfy",
      live: "https://www.loanyfy.com/",

      codePanel: {
        title: "Loanyfy — Details",
        subtitle: "live • colorful",
        badge: "MERN • Hostinger+Render",
        lines: [
          <span key="1">
            <span className="text-fuchsia-400">const</span>{" "}
            <span className="text-emerald-300">project</span>{" "}
            <span className="text-slate-300">=</span>{" "}
            <span className="text-cyan-300">{"{"}</span>
          </span>,
          <span key="2" className="pl-2">
            <span className="text-slate-400">domain</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-amber-300">'Business Loans'</span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="3" className="pl-2">
            <span className="text-slate-400">frontend</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "React • Tailwind • SPA routing"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="4" className="pl-2">
            <span className="text-slate-400">backend</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "Node.js • Express • REST APIs"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="5" className="pl-2">
            <span className="text-slate-400">flows</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-cyan-300">[</span>
            <span className="text-slate-200">
              "Application","Validation","Admin review","Chatbot"
            </span>
            <span className="text-cyan-300">]</span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="6" className="pl-2">
            <span className="text-slate-400">auth</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">"JWT • Role‑based access"</span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="7" className="pl-2">
            <span className="text-slate-400">storage</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">"MongoDB • S3 (documents)"</span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="8" className="pl-2">
            <span className="text-slate-400">hosting</span>
            <span className="text-slate-300">:</span>{" "}
            <span className="text-slate-200">
              "Frontend: Hostinger • Backend: Render"
            </span>
            <span className="text-cyan-300">,</span>
          </span>,
          <span key="9">
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
          "S3",
          "CI/CD",
        ],
      },
      shotsPanel: {
        badge: "Screens",
        subtitle: "images only",
        title: "Loanyfy UI",
        shots: [
          { src: "/loanyfy.png", caption: "Home — Landing" },
          { src: "/loanyfprodcut.png", caption: "Loans — Product list" },
          { src: "/Loanyfychatbot.png", caption: "Support — Chatbot" },
        ],
      },
    },
  ],
}) => {
  return (
    <section
      id="projects"
      className="w-full text-white bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Project Spotlight
          </h2>
          <p className="mt-2 text-slate-300/90 text-[14.5px]">
            Alternating colorful details and widescreen screenshots with demo
            and code links.
          </p>
        </div>

        <div className="space-y-12">
          {items.map((item, idx) => {
            const even = idx % 2 === 0;
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                {/* Left */}
                <div>
                  {even ? (
                    <ProjectCodePanel
                      title={item.codePanel.title}
                      subtitle={item.codePanel.subtitle}
                      badge={item.codePanel.badge}
                      lines={item.codePanel.lines}
                      chips={item.codePanel.chips}
                      live={item.live}
                      code={item.code}
                    />
                  ) : (
                    <ProjectShotsPanel
                      title={item.shotsPanel.title}
                      subtitle={item.shotsPanel.subtitle}
                      badge={item.shotsPanel.badge}
                      shots={item.shotsPanel.shots}
                    />
                  )}
                </div>

                {/* Right */}
                <div>
                  {even ? (
                    <ProjectShotsPanel
                      title={item.shotsPanel.title}
                      subtitle={item.shotsPanel.subtitle}
                      badge={item.shotsPanel.badge}
                      shots={item.shotsPanel.shots}
                    />
                  ) : (
                    <ProjectCodePanel
                      title={item.codePanel.title}
                      subtitle={item.codePanel.subtitle}
                      badge={item.codePanel.badge}
                      lines={item.codePanel.lines}
                      chips={item.codePanel.chips}
                      live={item.live}
                      code={item.code}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AlternatingProjects;
