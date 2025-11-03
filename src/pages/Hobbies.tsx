import { motion } from "framer-motion";
import { Music, Camera, X, Play } from "lucide-react";
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
    { title: "Basanta (Cover)", src: "/videos/cover1-compressed.mp4" },
    { title: "Juni Vari Lai (Cover)", src: "/videos/cover2-compressed.mp4" },
    { title: "Blue (Cover)", src: "/videos/cover4-compressed.mp4" },
    { title: "Kalo Seto (Cover)", src: "/videos/cover33-compressed.mp4" },
    // ✅ You can freely add more videos below — they'll auto-fit the layout.
    // { title: "New Song (Cover)", src: "/videos/newCover-compressed.mp4" },
  ];

  const creativePhotos = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
  ];

  // ✅ Auto detect video orientation
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

  // ✅ Close modal with ESC
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
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
          <div className="flex items-center justify-center gap-4 mb-6">
            <Music className="w-12 h-12 text-video" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold">
              Beyond{" "}
              <span className="bg-gradient-to-r from-it via-video to-model bg-clip-text text-transparent">
                Work
              </span>
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            When I'm not coding, editing, or creating content, you'll find me exploring
            another passion of mine — music. Singing has always been a creative outlet
            that fuels my imagination and keeps me inspired.
          </p>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-20 p-8 bg-card/70 backdrop-blur-lg border border-border rounded-2xl text-center"
        >
          <p className="text-lg italic text-muted-foreground">
            "Music is the universal language of mankind. It connects us beyond words,
            beyond logic — straight to the soul."
          </p>
        </motion.div>

        {/* Singing Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Music className="w-8 h-8 text-video" />
            <h2 className="text-3xl font-heading font-bold">Singing</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {singingVideos.map((video, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="relative group bg-card/70 backdrop-blur-lg border border-border rounded-2xl overflow-hidden hover:shadow-glow-video cursor-pointer"
                onClick={() =>
                  setActiveVideo({
                    src: video.src,
                    orientation: videoOrientations[index] || "portrait",
                  })
                }
              >
                <div
                  className={`w-full ${
                    videoOrientations[index] === "portrait"
                      ? "aspect-[9/16]"
                      : "aspect-video"
                  } bg-black relative`}
                >
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current[index] = el;
                    }}
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-10 h-10 text-white mb-2" />
                    <p className="text-white text-lg font-semibold tracking-wide">
                      Click to View
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-heading font-bold">{video.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Clicks Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <Camera className="w-8 h-8 text-it" />
            <h2 className="text-3xl font-heading font-bold">Creative Clicks</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {creativePhotos.map((photo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="aspect-[9/16] cursor-pointer overflow-hidden rounded-xl border border-border hover:shadow-glow-it"
                onClick={() => setSelectedImage(photo)}
              >
                <motion.img
                  src={photo}
                  alt={`Creative photo ${index + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Modal */}
        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className={`relative bg-black rounded-2xl overflow-hidden shadow-lg ${
                activeVideo.orientation === "portrait"
                  ? "w-[20rem] md:w-[24rem] aspect-[9/16]"
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
            </div>
          </div>
        )}

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 border-border bg-black/95">
            <img
              src={selectedImage || ""}
              alt="Full size"
              className="w-full h-auto rounded-lg"
            />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Hobbies;
