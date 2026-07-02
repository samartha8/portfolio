import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "CHORI – Menstrual Wellness",
    category: "Full-Stack / AI",
    image: "/thumbnails/chori.png",
  },

  {
    title: "Glowora Magazine",
    category: "Digital Design",
    image: "/project_thumbnail_1.png",
  },
  {
    title: "Luxury Brand UI",
    category: "Web Development",
    image: "/project_thumbnail_2.png",
  },
];


const WorkSlider = () => {
  return (
    <div className="overflow-hidden py-12">
      <motion.div 
        className="flex gap-8 px-6 md:px-12 lg:px-24"
        drag="x"
        dragConstraints={{ right: 0, left: -800 }}
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="min-w-[300px] md:min-w-[450px] aspect-[3/4] relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
            <img 
              src={project.image} 
              alt={project.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-xs uppercase tracking-widest mb-2">{project.category}</p>
              <h3 className="text-3xl font-heading mb-4">{project.title}</h3>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                View Project <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default WorkSlider;
