import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const location = useLocation();

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
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="bg-card/30 backdrop-blur-lg border border-border rounded-2xl px-6 py-3 shadow-xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="text-2xl font-heading font-bold">
              <span className="bg-gradient-to-r from-it via-video to-model bg-clip-text text-transparent">
                SS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-it via-video to-model"
                    />
                  )}
                </Link>
              ))}

              {/* CV Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShowCVDropdown(true)}
                onMouseLeave={() => setShowCVDropdown(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                  CVs
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {showCVDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-64 bg-card/95 backdrop-blur-lg border border-border rounded-xl overflow-hidden shadow-xl"
                    >
                      {cvLinks.map((cv, index) => (
                        <a
                          key={index}
                          href={cv.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-secondary/50 transition-colors group"
                        >
                          <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                            {cv.name}
                          </span>
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
              className="md:hidden text-foreground"
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
                className="md:hidden overflow-hidden"
              >
                <div className="pt-4 pb-2 space-y-3">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-3 py-2 rounded-lg transition-colors ${
                        location.pathname === link.path
                          ? "bg-secondary text-primary"
                          : "text-muted-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="pt-2 border-t border-border">
                    <p className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                      View CVs
                    </p>
                    {cvLinks.map((cv, index) => (
                      <a
                        key={index}
                        href={cv.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:bg-secondary/50 hover:text-primary transition-colors rounded-lg"
                      >
                        <Download className="w-4 h-4" />
                        {cv.name}
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
