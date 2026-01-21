import { motion } from "framer-motion";
import { Music, Camera, X, Play, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Hobbies = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [videoOrientations, setVideoOrientations] = useState<
    Record<number, "portrait" | "landscape">
  >({});
  const [activeVideo, setActiveVideo] = useState<{
    src: string;
    orientation: "portrait" | "landscape";
  } | null>(null);

  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const singingVideos = [
    { title: "Basanta (Cover)", src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796945/cover1_ztxd4e.mov" },
    { title: "Juni Vari Lai (Cover)", src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796891/cover2_uy7hd4.mp4" },
    { title: "Blue (Cover)", src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796933/cover4_qaemws.mp4" },
    { title: "Kalo Seto (Cover)", src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1763351159/cover33-compressed_xjjn75.mp4" },
  ];

  const creativePhotos = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
  ];

  // Auto detect video orientation
  useLayoutEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      const updateOrientation = () => {
        setVideoOrientations((prev) => ({
          ...prev,
          [index]:
            video.videoHeight > video.videoWidth ? "portrait" : "landscape",
        }));
      };
      if (video.readyState >= 1) updateOrientation();
      else
        video.addEventListener("loadedmetadata", updateOrientation, {
          once: true,
        });
    });
  }, [singingVideos.length]);

  // Close modal with ESC
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-video/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-it/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <Music className="w-4 h-4 text-video" />
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Beyond Work</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Expression.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            When I'm not coding or editing, I explore the world through music and visuals.
            These are the moments that fuel my imagination.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-24"
        >
          <div className="glass-panel p-8 md:p-12 rounded-3xl text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-video via-purple-500 to-indigo-500" />
            <p className="text-xl md:text-2xl font-serif italic text-white/90 leading-relaxed">
              "Music is the universal language of mankind. It connects us beyond words,
              beyond logic — straight to the soul."
            </p>
          </div>
        </motion.div>

        {/* Singing Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-video/10 flex items-center justify-center border border-video/20">
              <Music className="w-6 h-6 text-video" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Vocal Sessions</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {singingVideos.map((video, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative glass-panel rounded-3xl overflow-hidden cursor-pointer border border-white/5 hover:border-video/30 transition-all duration-300"
                onClick={() =>
                  setActiveVideo({
                    src: video.src,
                    orientation: videoOrientations[index] || "portrait",
                  })
                }
              >
                <div
                  className={`w-full ${videoOrientations[index] === "portrait"
                    ? "aspect-[9/16]"
                    : "aspect-video"
                    } bg-black relative`}
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    preload="metadata"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    <source src={video.src} type="video/mp4" />
                  </video>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-16 h-16 rounded-full bg-video/80 backdrop-blur-md flex items-center justify-center mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-glow-video">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                    <span className="text-white font-medium tracking-wide">Play Cover</span>
                  </div>
                </div>

                <div className="p-5 relative z-10 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg font-bold text-white group-hover:text-video transition-colors">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Clicks Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-it/10 flex items-center justify-center border border-it/20">
              <Camera className="w-6 h-6 text-it" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Creative Clicks</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {creativePhotos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-[4/5] cursor-pointer overflow-hidden rounded-3xl border border-white/10 hover:border-it/50 relative group"
                onClick={() => setSelectedImage(photo)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <motion.img
                  src={photo}
                  alt={`Creative photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white -rotate-45" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className={`relative bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 ${activeVideo.orientation === "portrait"
                ? "w-[22rem] md:w-[26rem] aspect-[9/16]"
                : "w-full max-w-5xl aspect-video"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white hover:text-red-500 p-2 rounded-full z-20 transition-all backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={activeVideo.src}
                autoPlay
                controls
                playsInline
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-0 border-white/10 bg-black/90 backdrop-blur-xl overflow-hidden rounded-3xl">
            <div className="relative">
              <img
                src={selectedImage || ""}
                alt="Full size"
                className="w-full h-auto max-h-[85vh] object-contain"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Hobbies;
