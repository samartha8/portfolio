import { motion } from "framer-motion";
import { ArrowRight, Camera, Music, Play, X } from "lucide-react";
import { useEffect, useState } from "react";

const singingVideos = [
  {
    title: "Basanta Cover",
    src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796945/cover1_ztxd4e.mov",
    poster: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796945/cover1_ztxd4e.jpg",
  },
  {
    title: "Juni Vari Lai Cover",
    src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796891/cover2_uy7hd4.mp4",
    poster: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796891/cover2_uy7hd4.jpg",
  },
  {
    title: "Blue Cover",
    src: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796933/cover4_qaemws.mp4",
    poster: "https://res.cloudinary.com/du8xf30ei/video/upload/v1761796933/cover4_qaemws.jpg",
  },
];

const creativePhotos = ["/photos/1.jpg", "/photos/2.jpg", "/photos/3.jpg", "/photos/4.jpg"];

const Hobbies = () => {
  const [activeVideo, setActiveVideo] = useState<(typeof singingVideos)[number] | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="py-20 md:py-32">
        <div className="section-container !py-0">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <h1 className="max-w-full text-[clamp(4rem,10vw,8rem)] font-heading font-black leading-none tracking-normal text-[#3d3e49]">
                Hobbies
              </h1>
              <p className="mt-4 text-base text-muted-foreground tracking-[0.12em] sm:text-xl">
                The side quests that keep the main work alive
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:justify-self-end">
              Music, photos, and small creative experiments. They are not separate from the portfolio, they are the fuel
              behind the timing, mood, and visual decisions in the work.
            </p>
          </div>

          <div className="grid gap-6">
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="border border-border bg-white/70 p-5 shadow-sm sm:p-6"
            >
              <div className="mb-6 flex items-center justify-between border-b border-border pb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Music</div>
                  <h2 className="mt-2 text-5xl font-heading leading-none text-foreground">Vocal Sessions</h2>
                </div>
                <Music className="h-8 w-8 text-primary" />
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {singingVideos.map((video, index) => (
                  <button
                    key={video.title}
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    style={{
                      minHeight: "240px",
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,.86), rgba(0,0,0,.22), rgba(0,0,0,.08)), url(${video.poster})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    className="group relative block w-full overflow-hidden border border-border/80 bg-black text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_36px_rgba(40,42,35,0.12)]"
                  >
                    <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
                    <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-foreground sm:left-4 sm:top-4 sm:text-[10px]">
                        Cover {String(index + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-primary text-white shadow-lg transition group-hover:scale-105 sm:right-4 sm:top-4 sm:h-11 sm:w-11">
                      <Play className="ml-0.5 h-4 w-4 fill-current" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <div className="text-2xl font-heading leading-none text-white sm:text-3xl">{video.title}</div>
                      <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-[0.2em]">
                        Watch / Listen
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="border border-border bg-white/70 p-5 shadow-sm sm:p-6"
            >
              <div className="mb-6 flex items-center justify-between border-b border-border pb-5">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.28em] text-primary">Photography</div>
                  <h2 className="mt-2 text-5xl font-heading leading-none text-foreground">Creative Clicks</h2>
                </div>
                <Camera className="h-8 w-8 text-primary" />
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {creativePhotos.map((photo, index) => (
                  <motion.a
                    key={photo}
                    href={photo}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4 }}
                    className="group relative aspect-[4/5] overflow-hidden bg-muted"
                  >
                    <img
                      src={photo}
                      alt={`Creative click ${index + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent opacity-0 transition group-hover:opacity-100" />
                    <div className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white text-foreground opacity-0 transition group-hover:opacity-100">
                      <ArrowRight className="h-4 w-4 -rotate-45" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </section>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 p-5"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideo(null)}
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-black/70 text-white transition hover:bg-white hover:text-black"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              src={activeVideo.src}
              preload="metadata"
              poster={activeVideo.poster}
              controls
              autoPlay
              playsInline
              className="max-h-[82vh] w-full bg-black object-contain"
            />
            <div className="bg-background px-5 py-4">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-primary">Now Playing</div>
              <div className="mt-1 text-3xl font-heading text-foreground">{activeVideo.title}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hobbies;
