import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Video = () => {
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const videos = [
    {
      title: "Gym Related Video",
      src: "/videos/newOne.mp4",
      thumbnail: "/thumbnails/pic1.png",
      orientation: "landscape",
    },
    {
      title: "College Event Vlog",
      src: "/videos/sample.mp4",
      thumbnail: "/thumbnails/pic2.png",
      orientation: "landscape",
    },
    {
      title: "Scripting and Storyboarding Video",
      src: "/videos/BatteryVideo.mp4",
      thumbnail: "/thumbnails/pic3.png",
      orientation: "portrait",
    },
    {
      title: "Fashion Short Aesthetic Video",
      src: "/videos/hoodie-compressed.mp4",
      thumbnail: "/thumbnails/pic4.png",
      orientation: "portrait",
    },
    {
      title: "Announcement Video",
      src: "/videos/event.mp4",
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
    <div className="min-h-screen px-6 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Video <span className="text-video">Editing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Turning visuals into captivating stories. Click any video below to view it in the intended aspect ratio.
          </p>
        </motion.div>

        {/* Download CV */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-20"
        >
          <a href="/cv/video-cv.pdf" download>
            <Button
              size="lg"
              className="bg-video hover:bg-video/90 hover:shadow-glow-video transition-all duration-300"
            >
              <Download className="mr-2 w-5 h-5" />
              Download Video CV
            </Button>
          </a>
        </motion.div>

        {/* Gallery */}
        <div className="space-y-4 mb-12">
          <h2 className="text-3xl font-heading font-bold text-center">Video Gallery</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="group relative bg-card/70 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-glow-video hover:scale-[1.02] transition-all duration-300 flex flex-col h-full cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => setActiveVideo(video)}
            >
              <div className="relative flex items-center justify-center bg-black w-full h-full p-4">
                <div
                  className={`overflow-hidden rounded-xl border border-border shadow-md ${
                    video.orientation === "portrait"
                      ? "w-[18rem] h-[28rem] flex items-center justify-center bg-black"
                      : "aspect-video w-full"
                  }`}
                >
                  {/* ✅ Static thumbnail only */}
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-10 h-10 text-white mb-2" />
                    <p className="text-white font-medium text-sm">Click to View</p>
                  </div>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-heading font-bold text-center">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-heading font-bold mb-8">Tools I Use</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-card/70 backdrop-blur-lg border border-border rounded-full text-video font-medium hover:shadow-glow-video transition-all duration-300"
              >
                {tool}
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
                className={`relative bg-black rounded-2xl overflow-hidden shadow-lg ${
                  activeVideo.orientation === "portrait"
                    ? "w-[20rem] md:w-[22rem] aspect-[9/16]"
                    : "w-full max-w-4xl aspect-video"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveVideo(null)}
                  className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 p-2 rounded-full z-10 transition"
                >
                  <X className="w-5 h-5 text-white" />
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
