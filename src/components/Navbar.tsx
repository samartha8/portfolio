import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Download, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Hobbies", path: "/hobbies" },
    { name: "Contact", path: "/contact" },
  ];

  const cvLinks = [
    { name: "IT & Development", path: "/cv/it-cv.pdf" },
    { name: "Video Editing", path: "/cv/video-cv.pdf" },
    { name: "Model | Content Creator", path: "/cv/model-cv.pdf" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2 md:py-4" : "py-3 md:py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-2 md:px-6">
        <div
          className={`rounded-2xl px-4 md:px-6 py-3 md:py-4 transition-all duration-300 ${scrolled || isOpen
            ? "glass-panel bg-black/40 backdrop-blur-md border-white/10"
            : "bg-transparent border-transparent"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-heading font-extrabold tracking-tight hover:opacity-80 transition-opacity">
              <span className="text-white">S</span>
              <span className="text-muted-foreground">S</span>
              <span className="text-accent">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative group py-2"
                >
                  <span className={`text-sm font-medium tracking-wide transition-colors duration-300 ${location.pathname === link.path
                    ? "text-white"
                    : "text-muted-foreground group-hover:text-white"
                    }`}>
                    {link.name}
                  </span>

                  {/* Subtle Indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-px bg-white" // Minimalist white line
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Hover Glow */}
                  <span className="absolute inset-0 -z-10 rounded-lg bg-white/0 group-hover:bg-white/5 transition-colors duration-300" />
                </Link>
              ))}

              {/* CV Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowCVDropdown(true)}
                onMouseLeave={() => setShowCVDropdown(false)}
              >
                <button className="flex items-center gap-2 px-4 py-2 ml-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <span className="text-xs font-semibold tracking-wider text-white uppercase">Resume</span>
                  <ChevronDown className={`w-3 h-3 text-muted-foreground transition-transform duration-300 ${showCVDropdown ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {showCVDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-4 w-72 glass-panel p-2 rounded-2xl overflow-hidden shadow-2xl origin-top-right"
                    >
                      <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        Select Category
                      </div>
                      {cvLinks.map((cv, index) => (
                        <a
                          key={index}
                          href={cv.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                            {cv.name}
                          </span>
                          <Download className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden mt-4"
              >
                <div className="py-4 space-y-2 border-t border-white/10">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${location.pathname === link.path
                        ? "bg-white/10 text-white"
                        : "text-muted-foreground hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="pt-4 mt-4 border-t border-white/10">
                    <p className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Downloads
                    </p>
                    {cvLinks.map((cv, index) => (
                      <a
                        key={index}
                        href={cv.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                      >
                        {cv.name}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
