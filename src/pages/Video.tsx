import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Play, X, Film, Video as VideoIcon, Tv, ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Video = () => {
  const [activeVideo, setActiveVideo] = useState<any>(null);

  const videos = [
    {
      title: "Gym Promo",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963699/GYM_dyn2iq.mp4",
      thumbnail: "/thumbnails/I.png",
      orientation: "portrait",
    },
    {
      title: "Travel",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963600/Travel_lw0qwi.mp4",
      thumbnail: "/thumbnails/VII.png",
      orientation: "landscape",
    },
    {
      title: "Cafeophillia",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963587/Cafe_rbdtgx.mp4",
      thumbnail: "/thumbnails/VIII.png",
      orientation: "landscape",
    },
    {
      title: "Studio Spots",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782964004/spots-studio-trial-videoo_bq0irv.mp4",
      thumbnail: "/thumbnails/IV.png",
      orientation: "portrait",
    },
    {
      title: "Clothing Brand",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963614/Clothing_Brand_jsjy0s.mp4",
      thumbnail: "/thumbnails/III.png",
      orientation: "portrait",
    },
    {
      title: "Venue Advertisement",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963669/Venue-Advertisement_qaik45.mp4",
      thumbnail: "/thumbnails/II.png",
      orientation: "portrait",
    },
    {
      title: "Tavera Ad",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963985/Taveraa_ysflhc.mp4",
      thumbnail: "/thumbnails/V.png",
      orientation: "portrait",
    },
    {
      title: "Summer Style",
      src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963606/Summer-Style_d2koal.mp4",
      thumbnail: "/thumbnails/VI.png",
      orientation: "landscape",
    },
  ];

  const tools = ["DaVinci Resolve", "CapCut", "Canva"];

  // ESC key to close modal
  useEffect(() => {
    const close = (e: KeyboardEvent) => e.key === "Escape" && setActiveVideo(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background px-5 py-28 sm:px-6 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(107,112,92,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(107,112,92,0.08)_1px,transparent_1px)] bg-[size:220px_220px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 grid items-end gap-10 overflow-hidden md:mb-20 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="min-w-0 space-y-8">
            <div className="inline-flex max-w-full items-center gap-3 border-y border-primary/20 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-primary sm:tracking-[0.32em]">
              <VideoIcon className="h-4 w-4" />
              Video Production / Color / Motion
            </div>

            <div className="space-y-5">
              <h1 className="max-w-full overflow-hidden text-[3.7rem] font-heading font-black leading-[0.82] tracking-normal text-[#1f2024] min-[420px]:text-[4.4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem]">
                Visual
                <span className="block text-primary">Storytelling</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                Story-first edits, sharp pacing, and cinematic finishing for commercials, content, and branded visuals.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a href="/cv/video-cv.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="h-14 rounded-lg bg-primary px-8 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-primary/90"
                >
                  <Eye className="mr-2 h-5 w-5" />
                  View CV
                </Button>
              </a>
              <div className="border-l border-primary/25 pl-4 text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:tracking-[0.24em]">
                Cut / Grade / Deliver
              </div>
            </div>
          </div>

          <div className="relative mx-auto min-h-[30rem] w-full max-w-sm overflow-hidden rounded-lg bg-black shadow-[0_24px_70px_rgba(20,20,20,0.24)] ring-1 ring-black/10 sm:min-h-[40rem] lg:justify-self-end">
            <img
              src="/thumbnails/video-side-images.jpg"
              alt="Video production side visual"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-6 text-white sm:p-8">
              <div className="min-w-0">
                <div className="text-[10px] font-black uppercase tracking-[0.24em] text-white/60 sm:tracking-[0.28em]">Behind The Frame</div>
                <div className="mt-2 max-w-[10ch] text-4xl font-heading leading-[0.9] sm:text-5xl">
                  Film Eye
                </div>
              </div>
              <div className="text-left text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                Direction / Detail
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20 grid gap-6 border-y border-primary/20 py-8 md:grid-cols-[0.7fr_1.3fr] md:items-center"
        >
          <div>
            <div className="text-[10px] font-black uppercase tracking-[0.32em] text-primary">Creative Arsenal</div>
            <h2 className="mt-2 text-4xl font-heading leading-none text-[#1f2024] sm:text-5xl">Tools in rotation</h2>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="rounded-lg border border-primary/20 bg-white/70 px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-foreground shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-primary/50 hover:bg-white"
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20 auto-rows-max">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className={`group relative glass-panel overflow-hidden rounded-lg border border-white/5 hover:-translate-y-1 hover:shadow-2xl hover:shadow-video/10 transition-all duration-500 cursor-pointer ${video.orientation === "portrait" ? "md:col-span-1" : "md:col-span-2"}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setActiveVideo(video)}
            >
              <div className={`relative flex items-center justify-center bg-black/60 w-full overflow-hidden rounded-lg ${video.orientation === "portrait" ? "aspect-[9/16] max-h-[400px]" : "aspect-video"}`}>
                {/* Background Blur */}
                <div className="absolute inset-0 z-0">
                  <img src={video.thumbnail} alt="" className="w-full h-full object-cover opacity-30 blur-xl scale-110" />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div
                  className={`relative z-10 overflow-hidden rounded-lg shadow-2xl transition-all duration-500 w-full h-full flex items-center justify-center ${video.orientation === "portrait"
                    ? "shadow-black/50"
                    : "shadow-black/50"
                    }`}
                >
                  <img
                    src={video.thumbnail}
                    alt={`${video.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                    <div className="w-16 h-16 rounded-full bg-video/90 backdrop-blur-md flex items-center justify-center mb-4 shadow-lg shadow-video/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white fill-white ml-1" />
                    </div>
                    <p className="text-white font-medium tracking-wide">Watch Video</p>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 bg-black/40 backdrop-blur-sm px-6 py-5">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">{video.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-white/80">
                      <Tv className="w-4 h-4" />
                      <span>{video.orientation === "portrait" ? "Vertical Short" : "Cinematic Widescreen"}</span>
                    </div>
                  </div>
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
                  key={activeVideo.src}
                  src={activeVideo.src}
                  preload="metadata"
                  poster={activeVideo.thumbnail}
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
