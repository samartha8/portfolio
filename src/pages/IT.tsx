import { motion } from "framer-motion";
import { ExternalLink, Github, Download, X, Code2, Database, Terminal, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

const IT = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      title: "CHORI – Care, Health, and Openness for Reproductive Insight",
      description: "Full-stack menstrual wellness platform with AI chatbot, personalized tracking, and diet planning.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      github: "https://github.com/samartha8/chori-app",
      // demo: "#",
      thumbnail: "/thumbnails/chori.png",
      tags: ["React", "AI/ML", "Node.js"]
    },
    {
      title: "PUBG Quiz Competition",
      description: "Full-stack Java-based quiz platform with real-time scoring and multiplayer support.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "https://github.com/samartha8/quiz-application",
      // demo: "#",
      thumbnail: "/thumbnails/pubg.png",
      tags: ["Java", "Real-time", "SQL"]
    },
    {
      title: "Diabetes Detection and Wellness Platform",
      description: "Full-stack AI-powered app with predictive analytics, smart diet plans, and cross-platform support.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      // github: "#",
      // demo: "#",
      thumbnail: "/thumbnails/onprogress.png",
      tags: ["AI", "Healthcare", "Python"]
    },
  ];

  return (
    <div className="min-h-screen px-6 py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-it/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Code2 className="w-4 h-4 text-it" />
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Software Engineering</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-it/80 to-it">
              Digital Future.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Crafting robust, scalable solutions with a focus on user experience and
            clean architecture. Specializing in modern web technologies and AI integration.
          </p>
        </motion.div>

        {/* View CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-24"
        >
          <a href="/cv/IT-cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-it text-white hover:bg-it/90 hover:shadow-lg hover:shadow-it/20 transition-all duration-300 rounded-full px-8 h-12"
            >
              <Eye className="mr-2 w-5 h-5" />
              View CV
            </Button>
          </a>
        </motion.div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-it/10 flex items-center justify-center border border-it/20">
              <Database className="w-6 h-6 text-it" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Tech Stack</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "React", "Firebase", "Java", "TypeScript",
              "Node.js", "Python", "Tailwind", "Git",
              "SQL", "NoSQL", "REST APIs", "AI/ML"
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="glass-panel p-4 rounded-xl text-center border border-white/5 hover:border-it/30 hover:bg-white/5 transition-all duration-300 group"
              >
                <p className="text-muted-foreground group-hover:text-it font-medium transition-colors">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-it/10 flex items-center justify-center border border-it/20">
              <Terminal className="w-6 h-6 text-it" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Projects</h2>
          </div>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center group`}
            >
              {/* Image Section */}
              <div
                className="w-full lg:w-1/2 relative cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative h-72 md:h-96 rounded-3xl overflow-hidden border border-white/10 glass-panel hover:shadow-2xl hover:shadow-it/10 transition-all duration-500">
                  <img
                    src={project.thumbnail || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium flex items-center gap-2">
                      View details <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-it/10 text-it border border-it/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white group-hover:text-it transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/10 bg-white/5 text-white hover:bg-it hover:border-it hover:text-white transition-all duration-300 rounded-full"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image Preview Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden rounded-3xl">
            <div className="relative">
              <img
                src={selectedImage || ""}
                alt="Full preview"
                className="rounded-lg object-contain max-h-[85vh] w-auto mx-auto"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default IT;

