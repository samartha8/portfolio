import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Play, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Model = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const portfolio = [
    {
      title: "Cinematic Reel",
      videoSrc: "/videos/1st-compressed.mp4",
      thumbnail: "/thumbnails/1.png",
      url: "https://www.instagram.com/reel/C_TCYw6hzWJ/",
    },
    {
      title: "Brand Collaboration",
      videoSrc: "/videos/2nd-compressed.mp4",
      thumbnail: "/thumbnails/2.png",
      url: "https://www.instagram.com/p/DFnJyKlSM9-/",
    },
    {
      title: "Product Shoot",
      videoSrc: "/videos/3rd.mp4",
      thumbnail: "/thumbnails/3.png",
      url: "https://www.instagram.com/p/DOyMe8dDEwh/",
    },
    {
      title: "Festival Related Content",
      videoSrc: "/videos/4th.mp4",
      thumbnail: "/thumbnails/4.png",
      url: "https://www.instagram.com/p/DOyMe8dDEwh/",
    },
    {
      title: "Style Outfit Reel",
      videoSrc: "/videos/5th-compressed.mp4",
      thumbnail: "/thumbnails/5.png",
      url: "https://www.instagram.com/reel/C0tlsExPA1q/",
    },
    {
      title: "Scripting and Storyboarding",
      videoSrc: "/videos/6th.mov",
      thumbnail: "/thumbnails/6.png",
      url: "https://www.instagram.com/p/DQeOw-rkhjc/",
    },
  ];

  const brands = [
    "CubeX",
    "Eternal",
    "Gogoro Nepal",
    "Nepaesthetic",
    "Tippika",
    "thealliancecreations",
    "Earth Rhythm Nepal",
    "The Retro",
    "Origin Nepal",
    "CLA",
    "Arko Nepal",
    "Mika",
    "LostMandu",
  ];

  // ✅ Lazy-load videos only when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0");
            setVisibleIndexes((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".portfolio-video").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Model | <span className="text-model">Content Creator</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Bringing concepts to life through visuals and style. Model and content
            creator collaborating with brands, handling concept development, scripting,
            shooting, and editing to deliver compelling visual narratives.
          </p>
        </motion.div>

        {/* View CV Button (Updated) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <a href="/cv/model-cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-model hover:bg-model/90 hover:shadow-glow-model transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              View Model CV
            </Button>
          </a>
        </motion.div>

        {/* Portfolio Section */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-heading font-bold text-center">Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              data-index={index}
              className="portfolio-video group relative bg-card/70 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-glow-model hover:scale-[1.02] transition-all duration-300 flex flex-col cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveVideo(item)}
            >
              <div className="relative aspect-[9/16] overflow-hidden flex items-center justify-center bg-black">
                {visibleIndexes.includes(index) ? (
                  <img
                    src={item.thumbnail}
                    alt={`${item.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="bg-muted w-full h-full" />
                )}

                {/* Overlay Play Hint */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-10 h-10 text-white mb-2" />
                  <p className="text-white font-medium text-sm">Click to View</p>
                </div>

                {/* External Link */}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 bg-model/90 p-2 rounded-full hover:bg-model transition-colors duration-300 z-10"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                )}
              </div>

              <div className="p-4 flex-grow">
                <h3 className="text-lg font-heading font-bold text-center">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Collaborations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-heading font-bold mb-8">Brand Collaborations</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="px-8 py-4 bg-card/70 backdrop-blur-lg border border-border rounded-full text-model font-medium text-lg hover:shadow-glow-model transition-all duration-300"
              >
                {brand}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-black rounded-2xl overflow-hidden shadow-lg w-[20rem] md:w-[22rem] aspect-[9/16]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-2 rounded-full z-10 transition"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
                <video
                  src={activeVideo.videoSrc}
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Model;
