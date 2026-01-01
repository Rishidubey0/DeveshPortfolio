import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const offset = window.scrollY;
          setScrolled(offset > 50);

          // Calculate scroll progress
          const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const progress = windowHeight > 0 ? (offset / windowHeight) * 100 : 0;
          setScrollProgress(progress);

          // Use IntersectionObserver logic replacement or simple offset check for better performance
          // Here we keep the existing logic but throttle it
          const sections = SECTIONS.map((section) => {
            const element = document.getElementById(section.id);
            if (element) {
              const rect = element.getBoundingClientRect();
              return {
                id: section.id,
                top: rect.top,
                bottom: rect.bottom,
              };
            }
            return null;
          }).filter(Boolean);

          const current = sections.find(
            (section) => section && section.top <= 150 && section.bottom > 150
          );

          if (current) {
            setActiveSection(current.id);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX: scrollProgress / 100 }}
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-in-out ${scrolled || mobileMenuOpen ? "pt-4" : "pt-0"
          }`}
      >
        <div
          className={`relative transition-all duration-500 ease-in-out ${scrolled || mobileMenuOpen
            ? "w-[90%] md:w-[85%] lg:w-[1300px] bg-slate-900/90 backdrop-blur-md rounded-2xl shadow-xl shadow-indigo-500/10"
            : "w-full max-w-100% bg-transparent"
            }`}
        >
          <div className="flex items-center justify-between h-20 px-6">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("home")}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/50 group-hover:shadow-indigo-500/70 transition-shadow">
                  <span className="text-white font-bold">DD</span>
                </div>
              </div>
              <span className="text-white hidden sm:block font-medium">Devesh Dubey</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/10 rounded-lg"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg shadow-indigo-500/50 hover:shadow-indigo-500/70 transition-all font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Talk
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 text-white hover:bg-white/10 rounded-lg transition-colors relative z-[60] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-white/5 overflow-hidden"
              >
                <div className="px-4 py-4 space-y-2">
                  {SECTIONS.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setTimeout(() => scrollToSection(section.id), 100);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors font-medium ${activeSection === section.id
                        ? "bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {section.label}
                    </button>
                  ))}
                  <motion.a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileMenuOpen(false);
                      setTimeout(() => scrollToSection("contact"), 100);
                    }}
                    className="block w-full text-center px-6 py-3 mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg font-medium"
                    whileTap={{ scale: 0.95 }}
                  >
                    Let's Talk
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
