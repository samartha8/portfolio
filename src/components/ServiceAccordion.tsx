import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: "01",
    title: "CHORI – Reproductive Insight",
    description: "Architecting the CHORI platform: A full-stack menstrual wellness app featuring an AI-driven chatbot, personalized health tracking, and automated diet planning.",
    image: "/thumbnails/chori.png",
  },


  {
    id: "02",
    title: "High-End Video Editing",
    description: "Transforming raw footage into cinematic narratives with professional color grading, sound design, and motion graphics.",
    image: "/project_thumbnail_2.png",
  },
  {
    id: "03",
    title: "Content Strategy & Creation",
    description: "Developing strategic visual content and high-impact digital campaigns that tell a compelling and authentic brand story.",
    image: "/project_thumbnail_1.png",
  },
  {
    id: "04",
    title: "Editorial Modeling",
    description: "Collaborating with premium brands to provide a sophisticated visual perspective across fashion and lifestyle editorials.",
    image: "/project_thumbnail_2.png",
  },
];


const ServiceAccordion = () => {
  const [expandedId, setExpandedId] = useState<string | null>("01");

  return (
    <div className="section-container">
      <div className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="border-b border-border group">
            <button
              onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
              className="w-full flex items-center justify-between py-12 text-left"
            >
              <div className="flex items-center gap-12">
                <span className="text-sm font-bold text-primary font-heading">{service.id}</span>
                <h3 className="text-4xl md:text-6xl font-heading group-hover:translate-x-4 transition-transform duration-500">
                  {service.title}
                </h3>
              </div>
              <div className="p-3 border border-border group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {expandedId === service.id ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
              </div>
            </button>

            <AnimatePresence>
              {expandedId === service.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-2 gap-12 pb-12">
                    <div className="space-y-8">
                      <p className="text-xl text-muted-foreground leading-relaxed max-w-md">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest border-b border-primary w-fit pb-2 cursor-pointer hover:opacity-70 transition-opacity">
                        View Service Details
                      </div>
                    </div>
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccordion;
