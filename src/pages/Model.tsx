import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Play, X, ExternalLink, Camera, Sparkles, Instagram, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Model = () => {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const portfolio = [
    {
      title: "Cinematic Reel",
      videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796903/1st_oezehl.mp4",
      thumbnail: "/thumbnails/1.png",
      url: "https://www.instagram.com/reel/C_TCY6hzWJ/",
    },
    {
      title: "Brand Collaboration",
      videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796875/2nd_dxgkf1.mp4",
      thumbnail: "/thumbnails/2.png",
      url: "https://www.instagram.com/p/DFnJyKlSM9-/",
    },
    {
      title: "Product Shoot",
      videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796941/3rd_kkbfl3.mov",
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
      videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796868/5th_kkbdzw.mp4",
      thumbnail: "/thumbnails/5.png",
      url: "https://www.instagram.com/reel/C0tlsExPA1q/",
    },
    {
      title: "Creative Short",
      videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796932/6th_sosgvj.mov",
      // videoSrc: "/videos/6th.mov",
      thumbnail: "/thumbnails/6.png",
      url: "https://www.instagram.com/p/DQeOw-rkhjc/",
    },
  ];

  const brands = [
    "CubeX", "Eternal", "Gogoro Nepal", "Nepaesthetic", "Tippika",
    "thealliancecreations", "Earth Rhythm Nepal", "The Retro",
    "Origin Nepal", "CLA", "Arko Nepal", "Mika", "LostMandu",
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
    <div className="min-h-screen px-6 py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-model/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Camera className="w-4 h-4 text-model" />
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Modeling & Content</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Capturing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-model to-pink-400">
              Your Vision.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Bringing concepts to life through visuals and style. Collaborating with brands to deliver compelling visual narratives.
          </p>
        </motion.div>

        {/* View CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-24"
        >
          <a href="/cv/model-cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-model text-white hover:bg-model/90 hover:shadow-lg hover:shadow-model/20 transition-all duration-300 rounded-full px-8 h-12"
            >
              <Eye className="mr-2 w-5 h-5" />
              View CV
            </Button>
          </a>
        </motion.div>

        {/* Portfolio Section */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-model/10 flex items-center justify-center border border-model/20">
              <Sparkles className="w-6 h-6 text-model" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Work</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {portfolio.map((item, index) => (
            <motion.div
              key={index}
              data-index={index}
              className="portfolio-video group relative glass-panel rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-model/10 hover:-translate-y-2 transition-all duration-500 flex flex-col cursor-pointer border border-white/5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveVideo(item)}
            >
              <div className="relative aspect-[9/16] overflow-hidden flex items-center justify-center bg-black/40">
                {visibleIndexes.includes(index) ? (
                  <img
                    src={item.thumbnail}
                    alt={`${item.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="bg-white/5 w-full h-full" />
                )}

                {/* Overlay Play Hint */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[1px]">
                  <div className="w-14 h-14 rounded-full bg-model/90 backdrop-blur-md flex items-center justify-center mb-4 shadow-lg shadow-model/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* External Link */}
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 bg-black/40 hover:bg-model p-2.5 rounded-full text-white backdrop-blur-md transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
              </div>

              <div className="p-5 border-t border-white/5 bg-white/5 backdrop-blur-sm absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-heading font-bold text-center text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Collaborations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-heading font-bold mb-10">Trusted By Brands</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="px-6 py-3 glass-panel rounded-full text-white/70 font-medium border border-white/5 hover:border-model/30 hover:bg-model/10 hover:text-white transition-all duration-300 cursor-default"
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
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 w-[22rem] md:w-[26rem] aspect-[9/16]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-full z-20 transition-all backdrop-blur-md text-white hover:text-red-500"
                >
                  <X className="w-5 h-5" />
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
