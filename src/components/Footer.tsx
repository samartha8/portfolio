import { Instagram, Mail, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Gradient Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-it through-video via-model to-transparent opacity-50" />
      
      <div className="bg-card/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left: Brand Name */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-heading font-bold bg-gradient-to-r from-it via-video to-model bg-clip-text text-transparent">
                Samartha Shakya
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                Creator • Developer • Storyteller
              </p>
            </div>

            {/* Center: Social Links */}
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/_samartha_._/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="Instagram"
              >
                <div className="absolute inset-0 bg-model/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-model group-hover:shadow-glow-model transition-all duration-300">
                  <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-model transition-colors" />
                </div>
              </a>
              
              <a
                href="https://www.linkedin.com/in/samartha-shakya-032767254/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-it/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-it group-hover:shadow-glow-it transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-it transition-colors" />
                </div>
              </a>
              
              <a
                href="mailto:workwithsamartha@gmail.com"
                className="group relative"
                aria-label="Email"
              >
                <div className="absolute inset-0 bg-video/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center group-hover:border-video group-hover:shadow-glow-video transition-all duration-300">
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-video transition-colors" />
                </div>
              </a>
            </div>

            {/* Right: Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2025 All Rights Reserved
              </p>
              <p className="text-xs text-muted-foreground/60 mt-1">
                Crafted with passion & code
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
