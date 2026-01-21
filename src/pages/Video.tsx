import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Play, X, Film, Video as VideoIcon, Tv, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Video = () => {
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const videos = [
    {
      title: "Gym Related Video",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796945/newOne_stvwbr.mov",
      thumbnail: "/thumbnails/pic1.png",
      orientation: "landscape",
    },
    {
      title: "Cinematic Short Video",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1763351443/mikaHoodieFinal_cn7vij.mov",
      thumbnail: "/thumbnails/pic2.png",
      orientation: "portrait",
    },
    {
      title: "Scripting and Storyboarding Video",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796946/BatteryVideo_w3dfbx.mov",
      thumbnail: "/thumbnails/pic3.png",
      orientation: "portrait",
    },
    {
      title: "Fashion Short Aesthetic Video",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796909/hoodie_shob5w.mp4",
      thumbnail: "/thumbnails/pic4.png",
      orientation: "portrait",
    },
    {
      title: "Announcement Video",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796921/event_z7x6jk.mov",
      thumbnail: "/thumbnails/pic5.png",
      orientation: "portrait",
    },
  ];

  const tools = ["DaVinci Resolve", "CapCut"];

  // ESC key to close modal
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="min-h-screen px-6 py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-video/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            <VideoIcon className="w-4 h-4 text-video" />
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Video Production</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Visual <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-video to-purple-400">
              Storytelling
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Crafting compelling narratives through editing, color grading, and dynamic visuals.
            Turning raw footage into cinematic experiences.
          </p>
        </motion.div>

        {/* View CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-24"
        >
          <a href="/cv/video-cv.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-video text-white hover:bg-video/90 hover:shadow-lg hover:shadow-video/20 transition-all duration-300 rounded-full px-8 h-12"
            >
              <Eye className="mr-2 w-5 h-5" />
              View CV
            </Button>
          </a>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24 text-center"
        >
          <h2 className="text-2xl font-heading font-bold mb-8">Creative Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 glass-panel rounded-full text-white/80 font-medium hover:text-white hover:border-video/50 hover:bg-video/10 transition-all duration-300 cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gallery */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-video/10 flex items-center justify-center border border-video/20">
              <Film className="w-6 h-6 text-video" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">Featured Edits</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="group relative glass-panel rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-video/10 hover:-translate-y-1 transition-all duration-500 cursor-pointer border border-white/5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative flex items-center justify-center bg-black/60 w-full p-8 min-h-[450px] overflow-hidden">
                {/* Background Blur */}
                <div className="absolute inset-0 z-0">
                  <img src={video.thumbnail} alt="" className="w-full h-full object-cover opacity-40 blur-2xl scale-125" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div
                  className={`relative z-10 overflow-hidden rounded-xl border border-white/10 shadow-2xl transition-all duration-500 ${video.orientation === "portrait"
                    ? "h-[400px] w-auto aspect-[9/16] shadow-black/50"
                    : "w-full aspect-video shadow-black/50"
                    }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-video/90 backdrop-blur-md flex items-center justify-center mb-4 shadow-lg shadow-video/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                    <p className="text-white font-medium tracking-wide">Watch Video</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-video transition-colors">{video.title}</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Tv className="w-4 h-4" />
                  <span>{video.orientation === "portrait" ? "Vertical Short" : "Cinematic Widescreen"}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative bg-black rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 ${activeVideo.orientation === "portrait"
                  ? "w-[22rem] md:w-[26rem] aspect-[9/16]"
                  : "w-full max-w-5xl aspect-video"
                  }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-full z-20 transition-all backdrop-blur-md text-white hover:text-red-500"
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Video;
