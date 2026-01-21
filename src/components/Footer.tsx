import { Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20 pb-10">
      <div className="container-custom">
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden group">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 p-20 bg-gold/5 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 p-20 bg-electric-blue/5 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            {/* Left: Brand Name */}
            <div className="text-center md:text-left space-y-4">
              <h3 className="text-3xl font-heading font-bold text-white tracking-tight">
                Samartha Shakya
              </h3>
              <p className="text-muted-foreground max-w-sm mx-auto md:mx-0 font-light">
                Creating digital experiences that blend technology, storytelling, and design.
              </p>
            </div>

            {/* Right: Social Links */}
            <div className="flex flex-col items-center md:items-end gap-6">
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/_samartha_._/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/icon"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/in/samartha-shakya-032767254/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/icon"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" />
                </a>

                <a
                  href="mailto:workwithsamartha@gmail.com"
                  className="p-3 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/icon"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-400 group-hover/icon:text-white transition-colors" />
                </a>
              </div>

              <div className="text-sm text-muted-foreground/50 font-mono">
                © 2025 Samartha Nexus. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
