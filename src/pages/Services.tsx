import { motion } from "framer-motion";
import { Code2, Video, Camera, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      id: "01",
      title: "Full-Stack Development",
      description: "Architecting high-performance digital ecosystems. From complex backend logic to seamless, state-of-the-art frontend experiences. Specializing in AI-integrated platforms and scalable architectures.",
      featured: "CHORI Platform",
      featuredDesc: "AI-driven wellness platform for reproductive health.",
      icon: Code2,
      path: "/it",
      image: "/thumbnails/chori.png",
      tags: ["React", "AI/ML", "Node.js", "Firebase"]
    },
    {
      id: "02",
      title: "Cinematic Video Editing",
      description: "Transforming raw motion into cinematic stories. Expert color grading, rhythmic pacing, and high-fidelity sound design to create visual experiences that resonate across platforms.",
      icon: Video,
      path: "/video",
      image: "https://images.unsplash.com/photo-1574717024453-35405623fb58?w=1200",
      tags: ["Premiere Pro", "DaVinci Resolve", "After Effects"]
    },
    {
      id: "03",
      title: "Editorial Modeling & Content",
      description: "Providing a sophisticated visual presence for premium brands. Blending fashion modeling expertise with strategic content creation to build high-impact digital identities.",
      icon: Camera,
      path: "/model",
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200",
      tags: ["Fashion", "Creative Direction", "Editorial"]
    }
  ];

  return (
    <div className="bg-transparent text-zinc-900 pb-32 pt-32 overflow-hidden">

      {/* 1. REFINED HERO */}
      <section className="section-container pb-24 md:pb-48">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-[#6B705C]" />
              <p className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#6B705C]">Service Section</p>
            </div>
            <h1 className="text-7xl md:text-[8vw] font-heading font-black leading-[0.8] tracking-tighter uppercase">
              Services <br /> <span className="italic font-serif normal-case tracking-normal text-[#6B705C]">Work in Progress</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-relaxed max-w-2xl pt-4">
              This section is currently being updated. Check back soon for the latest offerings and case studies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-container py-24">
        <div className="rounded-[2rem] border border-border/70 bg-white/70 p-16 text-center shadow-lg shadow-black/5">
          <p className="text-sm uppercase tracking-[0.4em] text-[#6B705C] mb-6">Update in progress</p>
          <h2 className="text-4xl font-heading font-black mb-4">We're polishing the service experience.</h2>
          <p className="max-w-2xl mx-auto text-base text-muted-foreground leading-relaxed">
            New service packages, visual case studies, and project details are being prepared. For immediate enquiries, please reach out via the contact page.
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <Button size="lg" className="bg-[#6B705C] text-white rounded-full px-10 h-14 hover:bg-[#59634f] transition-all">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
