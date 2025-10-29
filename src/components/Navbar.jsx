// src/components/Navbar.jsx
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  MotionConfig,
  useScroll,
  useSpring,
} from "framer-motion";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },

  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const menuRef = useRef(null);

  // Close on outside click (mobile)
  useEffect(() => {
    function onDocClick(e) {
      if (open && menuRef.current && !menuRef.current.contains(e.target))
        setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  // Scroll‑spy
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // Lock body when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Scroll progress bar (static indigo color to avoid undefined variables)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    mass: 0.3,
  });

  const prefersReduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReduced() ? "auto" : "smooth",
        block: "start",
      });
      setOpen(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="border-b border-slate-200/60 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 shadow-sm dark:border-slate-800/60 dark:bg-slate-950/80"
        >
          {/* Scroll progress bar (no hue MotionValue, so no undefined) */}
          <motion.div
            style={{ scaleX, transformOrigin: "0% 50%" }}
            className="h-[2px] w-full bg-indigo-600"
          />

          <nav
            aria-label="Primary"
            role="navigation"
            className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-3"
          >
            {/* Brand */}
            <a
              href="#home"
              className="flex items-center gap-2 focus:outline-none focus-visible:ring ring-indigo-500 rounded"
            >
              <motion.span
                className="inline-grid h-8 w-8 place-items-center rounded bg-indigo-600 text-xs font-semibold text-white"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                MK
              </motion.span>
              <span className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-100">
                Mohammad Shoaib Khan
              </span>
            </a>

            {/* Desktop links */}
            <ul
              className="hidden items-center gap-2 md:flex"
              role="menubar"
              aria-label="Primary navigation"
            >
              {SECTIONS.map((s) => {
                const isActive = active === s.id;
                return (
                  <li key={s.id} role="none" className="relative">
                    <button
                      role="menuitem"
                      onClick={() => handleNav(s.id)}
                      className={`px-3 py-2 rounded text-sm font-medium transition-colors focus:outline-none focus-visible:ring ring-indigo-500 ${
                        isActive
                          ? "text-indigo-600 dark:text-indigo-400"
                          : "text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                      }`}
                    >
                      {s.label}
                    </button>
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-indigo-600 dark:bg-indigo-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            {/* Right actions */}
            <div className="hidden md:flex items-center gap-2">
              <motion.a
                href="mailto:khanbhaishoaib107@gmail.com"
                className="px-3 py-2 text-sm rounded border border-slate-300 text-slate-800 hover:border-slate-400 focus:outline-none focus-visible:ring ring-indigo-500 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-500"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                Contact
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/your-handle"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-2 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring ring-indigo-500"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                Resume
              </motion.a>
            </div>

            {/* Mobile toggle */}
            <motion.button
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded p-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus-visible:ring ring-indigo-500 dark:text-slate-200 dark:hover:bg-slate-800/70"
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 500, damping: 35 }}
            >
              <svg
                className={`h-6 w-6 ${open ? "hidden" : "block"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
              <svg
                className={`h-6 w-6 ${open ? "block" : "hidden"}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>
          </nav>

          {/* Mobile panel */}
          <AnimatePresence>
            {open && (
              <motion.div
                id="mobile-menu"
                ref={menuRef}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ type: "spring", stiffness: 220, damping: 26 }}
                className="md:hidden overflow-hidden"
              >
                <ul
                  className="space-y-1 px-6 pb-4 pt-2"
                  role="menu"
                  aria-label="Mobile navigation"
                >
                  {SECTIONS.map((s) => (
                    <li key={s.id} role="none">
                      <motion.button
                        role="menuitem"
                        onClick={() => handleNav(s.id)}
                        className={`w-full text-left px-3 py-2 rounded text-sm font-medium focus:outline-none focus-visible:ring ring-indigo-500 ${
                          active === s.id
                            ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300"
                            : "text-slate-800 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800/60"
                        }`}
                        whileHover={{ x: 2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 28,
                        }}
                      >
                        {s.label}
                      </motion.button>
                    </li>
                  ))}

                  <li
                    role="none"
                    className="pt-2 border-t border-slate-200 dark:border-slate-800"
                  >
                    <motion.a
                      href="mailto:khanbhaishoaib107@gmail.com"
                      role="menuitem"
                      className="block px-3 py-2 text-sm rounded hover:bg-slate-100 focus:outline-none focus-visible:ring ring-indigo-500 dark:hover:bg-slate-800/60"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Contact
                    </motion.a>
                  </li>
                  <li role="none">
                    <motion.a
                      href="https://www.linkedin.com/in/your-handle"
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      className="block px-3 py-2 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring ring-indigo-500"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Resume
                    </motion.a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>
    </MotionConfig>
  );
}
