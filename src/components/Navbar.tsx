import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Work", path: "/work" },
    { name: "Services", path: "/services" },
    { name: "Hobbies", path: "/hobbies" },
    { name: "Contact", path: "/contact" },
  ];

  const currentPath = `${location.pathname}${location.hash}`;

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-[9999] transition-all duration-500 ${
        scrolled || isOpen ? "bg-background py-4 border-b border-border/50" : "bg-transparent py-8"
      }`}
    >
      <div className="section-container relative z-[10001] !py-0 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="shrink-0 text-2xl font-heading font-black tracking-normal transition-opacity hover:opacity-70">
          SAMARTHA.
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex lg:gap-8 xl:gap-12">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path || location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-3 py-3 text-xs uppercase tracking-[0.16em] font-bold transition-colors lg:px-4 lg:tracking-[0.2em] ${
                  isActive
                    ? "bg-muted text-foreground before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-primary"
                    : "hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-30 md:hidden p-2 hover:text-primary transition-colors"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[10000] bg-background md:hidden">
          <div className="section-container flex min-h-svh flex-col !pb-8 !pt-28">
            <div className="mb-7 border-b border-border pb-5">
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                Navigation
              </div>
              <p className="mt-2 text-4xl font-heading leading-none text-foreground">
                Menu
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const isActive = currentPath === link.path || location.pathname === link.path;

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`group relative flex items-center justify-between overflow-hidden border px-5 py-5 transition duration-300 hover:border-primary/30 hover:bg-white ${
                      isActive ? "border-primary/30 bg-white text-primary shadow-sm" : "border-border/70 bg-white/55 text-foreground"
                    }`}
                  >
                    <span className="absolute inset-y-0 left-0 w-1 bg-primary opacity-0 transition group-hover:opacity-100" />
                    {isActive && <span className="absolute inset-y-0 left-0 w-1 bg-primary" />}
                    <span className="relative text-3xl font-heading font-bold uppercase tracking-normal">
                      {link.name}
                    </span>
                    <span className="relative font-mono text-xs font-bold text-muted-foreground transition group-hover:text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pb-8 pt-8">
              <p className="border-l border-primary/30 pl-4 text-sm leading-6 text-muted-foreground">
                Full-stack development, AI integration, and visual storytelling in one portfolio.
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
