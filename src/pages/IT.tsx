import { motion } from "framer-motion";
import { ExternalLink, Github, Download, X } from "lucide-react";
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
      demo: "#",
      thumbnail: "/thumbnails/ai-thumb.jpg",
    },
    {
      title: "PUBG Quiz Competition",
      description: "Full-stack Java-based quiz platform with real-time scoring and multiplayer support.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "https://github.com/samartha8/quiz-application",
      demo: "#",
      thumbnail: "/thumbnails/ecom-thumb.jpg",
    },
    {
      title: "Diabetes Detection and Wellness Platform",
      description: "Full-stack AI-powered app with predictive analytics, smart diet plans, and cross-platform support for proactive diabetes management.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "#",
      demo: "#",
      thumbnail: "/thumbnails/dashboard-thumb.jpg",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            IT & <span className="text-it">Development</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building creative and functional digital solutions with expertise in
            React, Firebase, AI/ML projects, and modern web technologies.
            Passionate about turning ideas into elegant, user-centric
            applications.
          </p>
        </motion.div>

        {/* View CV (Updated) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <a href="/cv/IT-cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-it hover:bg-it/90 hover:shadow-glow-it transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              View IT CV
            </Button>
          </a>
        </motion.div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            What I Know
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "React",
              "Firebase",
              "Java",
              "JavaScript / TypeScript",
              "Node.js",
              "Python",
              "HTML & CSS",
              "Tailwind CSS",
              "Git & GitHub",
              "SQL & NoSQL",
              "REST APIs",
              "AI/ML Integration",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="bg-card/70 backdrop-blur-lg border border-border rounded-xl p-4 text-center hover:shadow-glow-it transition-all duration-300 hover:scale-105"
              >
                <p className="text-it font-medium">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-heading font-bold text-center">
            Projects
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center group`}
            >
              {/* Image Section */}
              <div
                className="w-full lg:w-1/2 relative cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-80 rounded-2xl overflow-hidden border-2 border-it/20 shadow-glow-it"
                >
                  <img
                    src={project.thumbnail || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-it/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="absolute top-4 left-4 w-12 h-12 bg-it rounded-full flex items-center justify-center text-background font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
                >
                  <h3 className="text-3xl font-heading font-bold mb-3 text-it">
                    {project.title}
                  </h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-it to-transparent mb-6" />
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                <div className="flex gap-4 pt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-it/50 text-it hover:bg-it/10 hover:border-it transition-all duration-300"
                    >
                      <Github className="w-5 h-5 mr-2" />
                      View Code
                    </Button>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-it hover:bg-it/90 hover:shadow-glow-it transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🖼️ Image Preview Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="p-0 border-border bg-black/90 flex items-center justify-center max-w-5xl w-full">
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Full preview"
                className="rounded-lg object-contain max-h-[90vh] w-auto mx-auto"
              />
            )}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-2 rounded-full z-10 transition"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default IT;
