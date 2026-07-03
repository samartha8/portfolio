import { motion } from "framer-motion";
import { ArrowRight, Eye, Code2, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useState } from "react";

const IT = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const tools = ["React", "TypeScript", "Node.js", "Python", "AI / ML", "MongoDB"];

  const projects = [
    {
      id: "01",
      title: "SWEETTRACK",
      subtitle: "AI Diabetes & Wellness Platform",
      description: "A mobile-first health app that predicts diabetes risk with ML and supports everyday wellness through meal logging, activity tracking, diet guidance, and secure health insights.",
      image: "/Diabetes.png",
      thumbnail: "/Diabetes.png",
      repositories: [
        { label: "Frontend", url: "https://github.com/samartha8/FYP-SweetTrack-Frontend" },
        { label: "Backend", url: "https://github.com/samartha8/FYP-SweetTrack-Backend" },
      ],
      tags: ["React Native", "Python", "ML", "HealthTech"],
      specs: {
        role: "Full-Stack / ML",
        stack: "React Native / Node.js / Python / ML",
        scale: "HealthTech"
      }
    },
    {
      id: "02",
      title: "CHORI PLATFORM",
      subtitle: "Reproductive Wellness & AI",
      description: "A comprehensive menstrual health ecosystem. Integrating AI-driven insights with high-fidelity tracking and personalized wellness strategies.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
      thumbnail: "/thumbnails/chori.png",
      repositories: [
        { label: "View Repository", url: "https://github.com/samartha8/chori-app" },
      ],
      tags: ["React", "AI/ML", "Node.js", "Tailwind"],
      specs: {
        role: "Lead Architect",
        stack: "MERN Stack",
        scale: "Global"
      }
    },
    {
      id: "03",
      title: "QUIZ ENGINE",
      subtitle: "Competitive Java Logic",
      description: "Building the backbone for real-time competitive gaming analytics. A high-concurrency engine optimized for low-latency performance.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200",
      thumbnail: "/thumbnails/pubg.png",
      repositories: [
        { label: "View Repository", url: "https://github.com/samartha8/quiz-application" },
      ],
      tags: ["Java", "SQL", "Swing", "Real-time"],
      specs: {
        role: "Full-Stack Dev",
        stack: "Java/MySQL",
        scale: "Enterprise"
      }
    },
  ];

  return (
    <div className="relative overflow-hidden bg-background pb-32 pt-28 text-zinc-900">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(107,112,92,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(107,112,92,0.07)_1px,transparent_1px)] bg-[size:220px_220px]" />

      {/* 1. HERO */}
      <section className="section-container relative !py-0 pb-20 md:pb-28">
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="min-w-0 space-y-8"
          >
            <div className="inline-flex max-w-full items-center gap-3 border-y border-primary/20 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-primary sm:tracking-[0.32em]">
              <Code2 className="h-4 w-4" />
              Full-Stack / AI / ML
            </div>

            <div className="space-y-5">
              <h1 className="max-w-full text-[clamp(3.2rem,13vw,7rem)] font-heading font-black leading-[0.84] tracking-normal text-[#1f2024] sm:text-[clamp(4rem,8vw,7rem)]">
                Technical
                <span className="block text-primary">Builder</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Full-stack development, AI integration, and machine learning workflows built with clear structure and practical delivery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="/cv/IT-cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-14 rounded-lg bg-primary px-8 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-primary/90"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View CV
                </Button>
              </a>
              <div className="border-l border-primary/25 pl-4 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:tracking-[0.24em]">
                Build / Train / Deploy
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative mx-auto min-h-[30rem] w-full max-w-sm overflow-hidden rounded-lg bg-black shadow-[0_24px_70px_rgba(20,20,20,0.24)] ring-1 ring-black/10 sm:min-h-[40rem] lg:justify-self-end"
          >
            <img
              src="/thumbnails/code.jpg"
              alt="Technical project preview"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6 text-white sm:p-8">
              <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/60">System Thinking</div>
              <div className="max-w-[12ch] text-4xl font-heading leading-[0.9] sm:text-5xl">
                Code That Ships
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70">
                Product / AI / Data
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SYSTEM STACK */}
      <section className="section-container relative !py-0 pb-28">
         <div className="grid gap-6 border-y border-primary/20 py-8 md:grid-cols-[0.7fr_1.3fr] md:items-center">
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.32em] text-primary">Technical Stack</div>
            <h2 className="mt-2 text-4xl font-heading leading-none text-[#1f2024] sm:text-5xl">Tools in rotation</h2>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {tools.map((tech) => (
              <motion.div 
                key={tech} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-primary/20 bg-white/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-foreground shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/50 hover:bg-white"
              >
                 {tech}
              </motion.div>
            ))}
          </div>
         </div>
      </section>

      {/* 3. STRUCTURED PROJECTS */}
      <section className="space-y-20 md:space-y-28">
         {projects.map((project, index) => (
           <div key={project.id} className="section-container !py-0">
              <div className={`grid md:grid-cols-12 gap-12 md:gap-24 items-center`}>
                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className={`md:col-span-7 ${index % 2 !== 0 ? 'md:order-last' : ''}`}
                 >
                    <div 
                      className="aspect-video relative overflow-hidden group border border-border/50 cursor-pointer shadow-xl"
                      onClick={() => setSelectedImage(project.image)}
                    >
                       <img 
                         src={project.thumbnail || project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                       />
                       <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                       <div className="absolute bottom-6 right-6 p-4 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                          <Eye className="w-6 h-6 text-white" />
                       </div>
                    </div>
                 </motion.div>

                 <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="md:col-span-5 space-y-8"
                 >
                    <div className="space-y-4">
                       <div className="text-[10px] font-bold text-[#6B705C] uppercase tracking-widest">{project.id} // CASE STUDY</div>
                       <h4 className="text-4xl md:text-5xl font-heading font-bold uppercase tracking-tight leading-none group">
                          {project.title}
                       </h4>
                       <p className="text-sm font-serif italic text-muted-foreground">{project.subtitle}</p>
                    </div>

                    <p className="text-lg opacity-80 leading-relaxed font-light">
                       {project.description}
                    </p>

                    <div className="grid grid-cols-2 gap-8 py-6 border-t border-b border-border">
                       <div>
                          <div className="text-[10px] font-black opacity-30 uppercase tracking-widest">Stack</div>
                          <div className="font-bold text-xs">{project.specs.stack}</div>
                       </div>
                       <div>
                          <div className="text-[10px] font-black opacity-30 uppercase tracking-widest">Scale</div>
                          <div className="font-bold text-xs">{project.specs.scale}</div>
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                       {project.repositories.map((repository) => (
                         <a
                           key={repository.url}
                           href={repository.url}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="group/link inline-flex min-h-11 max-w-full items-center justify-center gap-2 rounded-lg border border-primary/20 bg-white/70 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#6B705C] shadow-sm transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white sm:text-xs"
                         >
                            <span className="truncate">{repository.label}</span>
                            <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover/link:translate-x-1" />
                         </a>
                       ))}
                    </div>
                 </motion.div>
              </div>
           </div>
         ))}
      </section>

      {/* 4. CTA */}
      <section className="section-container pt-48 md:pt-64">
        <div className="bg-[#6B705C] text-white p-12 md:p-24 space-y-8 text-center relative overflow-hidden">
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative z-10 space-y-6"
          >
            <h2 className="text-[clamp(3rem,7vw,5.5rem)] font-heading font-black uppercase leading-[0.9] tracking-normal">
              READY TO <br /> DEPLOY?
            </h2>
            <p className="text-lg opacity-80 font-light max-w-xl mx-auto">
              Initiate a conversation about your technical infrastructure.
            </p>
            <div className="pt-6">
               <Link to="/contact">
                  <Button variant="outline" className="h-20 rounded-none border-white bg-white px-16 text-xs font-bold uppercase tracking-[0.3em] text-[#6B705C] transition-all hover:bg-transparent hover:text-white">
                    Start a project
                  </Button>
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. IMAGE MODAL */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 border-none bg-black/95 overflow-hidden rounded-none">
          <img
            src={selectedImage || ""}
            alt="Full preview"
            className="w-full h-auto object-contain max-h-[90vh]"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IT;
