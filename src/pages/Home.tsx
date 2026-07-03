import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Film, Palette, Play, X } from "lucide-react";
import { Link } from "react-router-dom";

const heroVideoSrc = "https://res.cloudinary.com/du8xf30ei/video/upload/v1774934646/IMG_1227_qze1uu.mov";
const heroPosterSrc = "https://res.cloudinary.com/du8xf30ei/video/upload/so_0/v1774934646/IMG_1227_qze1uu.jpg";

const featuredProjects = [
  {
    label: "Full-Stack / AI",
    title: "SweetTrack",
    image: "/Diabetes.png",
    imageClass: "object-cover object-center",
    path: "/it",
    className: "md:col-span-4 md:row-span-1 aspect-[16/9]",
  },
  {
    label: "Commercials",
    title: "Gym Promo",
    image: "/thumbnails/I.png",
    imageClass: "object-cover object-center",
    videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963699/GYM_dyn2iq.mp4",
    videoOrientation: "portrait",
    path: "/video",
    className: "md:col-span-4 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    label: "Villa ",
    title: "Tavera Ad",
    image: "/thumbnails/V.png",
    imageClass: "object-cover object-center",
    videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963985/Taveraa_ysflhc.mp4",
    videoOrientation: "portrait",
    path: "/video",
    className: "md:col-span-4 md:row-span-2 aspect-[4/5] md:aspect-auto",
  },
  {
    label: "Cinematic / Short-Form",
    title: "Cafeophillia",
    image: "/thumbnails/VIII.png",
    imageClass: "object-cover object-center",
    videoSrc: "https://res.cloudinary.com/du8xf30ei/video/upload/v1782963587/Cafe_rbdtgx.mp4",
    videoOrientation: "landscape",
    path: "/video",
    className: "md:col-span-4 md:row-span-1 aspect-[16/9]",
  },
];

const ProjectCard = ({
  project,
  index,
  className = "",
  onPlay,
}: {
  project: (typeof featuredProjects)[number];
  index: number;
  className?: string;
  onPlay: (project: (typeof featuredProjects)[number]) => void;
}) => (
  <motion.article
    key={project.title}
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.55, delay: index * 0.08 }}
    className={`group relative min-h-[16rem] overflow-hidden rounded-lg bg-neutral-900 shadow-[0_14px_34px_rgba(15,15,20,0.16)] ring-1 ring-black/5 ${className}`}
  >
    <img
      src={project.image}
      alt={project.title}
      className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105 ${project.imageClass || "object-cover"}`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/25" />
    <div className="absolute left-4 top-4 rounded-full bg-black/60 px-4 py-2 text-xs font-bold uppercase text-white backdrop-blur-sm">
      {project.label}
    </div>
    {project.videoSrc ? (
      <button
        type="button"
        onClick={() => onPlay(project)}
        className="absolute left-1/2 top-1/2 z-10 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-black/45 text-white transition duration-300 group-hover:bg-white group-hover:text-black"
        aria-label={`Play ${project.title}`}
      >
        <Play className="ml-0.5 h-5 w-5 fill-current" />
      </button>
    ) : null}
    <Link
      to={project.path}
      className="absolute bottom-0 left-0 right-0 z-10 flex translate-y-0 items-end justify-between gap-4 p-5 text-white opacity-100 transition duration-300 md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
      aria-label={`View ${project.title}`}
    >
      <h3 className="text-2xl font-heading tracking-normal sm:text-3xl">{project.title}</h3>
      <ArrowRight className="h-5 w-5 shrink-0" />
    </Link>
  </motion.article>
);

const brands = [
  { src: "/brands/Auscast.png", alt: "Auscast Podcast" },
  { src: "/brands/bull%20club.jpg", alt: "Bull Club" },
  { src: "/brands/Cafeophillia.jpg", alt: "Cafeophillia" },
  { src: "/brands/cubex.svg", alt: "CubeX" },
  { src: "/brands/Glowroom.jpg", alt: "Glowroom Unisex Salon" },
  { src: "/brands/gogoro.jpg", alt: "Gogoro Nepal" },
  { src: "/brands/Taaj%20Palace.jpg", alt: "Taaj Palace" },
  { src: "/brands/Tavera.png", alt: "Tavera Inn" },
];

const services = [
  {
    icon: Film,
    number: "01",
    title: "Video Editing",
    description: "Editing short-form and cinematic content with rhythm, pacing, clean cuts, and strong visual flow.",
  },
  {
    icon: Palette,
    number: "02",
    title: "Color Grading",
    description: "Mood-focused color correction and finishing that gives footage a polished, cinematic look.",
  },
  {
    icon: Bot,
    number: "03",
    title: "AI Integration",
    description: "Building AI-assisted features with LLMs, prompt workflows, ML models, and computer vision tools.",
  },
  {
    icon: Code2,
    number: "04",
    title: "Full-Stack Web",
    description: "Developing frontend and backend experiences with React, TypeScript, Node.js, APIs, and databases.",
  },
];

const Home = () => {
  const [activeProject, setActiveProject] = useState<(typeof featuredProjects)[number] | null>(null);

  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <div className="pt-20 overflow-hidden bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative -mt-20 flex min-h-[100svh] items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-black">
          <img
            src={heroPosterSrc}
            alt=""
            aria-hidden="true"
            loading="eager"
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <video
            src={heroVideoSrc}
            poster={heroPosterSrc}
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="absolute inset-0 h-full w-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="section-container relative z-20 flex min-h-[100svh] w-full flex-col items-start justify-end pb-16 text-white sm:pb-24 md:pb-32">
          <div className="max-w-xl space-y-8">
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-heading font-black leading-none tracking-normal sm:text-7xl md:text-8xl"
            >
              SAMARTHA.
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <div className="h-px w-16 bg-primary" />
                   <p className="text-[10px] uppercase tracking-[0.28em] font-bold opacity-60 sm:tracking-[0.5em]">Multidisciplinary Creator</p>
                </div>
                <p className="max-w-lg text-2xl font-light uppercase tracking-[0.05em] leading-[1.1] md:text-3xl">
                  Merging <span className="font-bold">Logic</span>, <span className="italic opacity-80">Motion</span>, and <span className="font-serif italic text-white underline decoration-primary/40 underline-offset-8">Aesthetics</span>.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 sm:gap-x-8">
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] opacity-50 transition-opacity hover:opacity-100 sm:tracking-[0.4em]">Video Editor</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] opacity-50 transition-opacity hover:opacity-100 sm:tracking-[0.4em]">Content Creator</span>
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] opacity-50 transition-opacity hover:opacity-100 sm:tracking-[0.4em]">Developer</span>
              </div>
            </motion.div>
          </div>
        </div>


      </section>




      {/* 3. PROJECTS */}
      <section id="work" className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="absolute -right-24 top-16 hidden h-64 w-64 rounded-full border border-primary/10 md:block" />
        <div className="section-container !py-0">
          <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <h2 className="text-6xl font-heading font-black leading-none tracking-normal text-[#3d3e49] sm:text-7xl md:text-8xl">Projects</h2>
              <p className="mt-3 text-base text-muted-foreground tracking-[0.08em] sm:text-lg sm:tracking-[0.12em] md:text-xl">
                Selected work across code, motion, and visuals
              </p>
            </div>
            <div className="max-w-xl border-primary/30 text-base leading-8 text-muted-foreground sm:border-l sm:pl-6 md:justify-self-end">
              A mixed grid for the different lanes I work in, from wellness tech to cinematic short-form edits.
            </div>
          </div>

          <div className="grid gap-7 sm:gap-8 lg:grid-cols-2 xl:gap-10">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onPlay={setActiveProject}
                className="aspect-[4/5] min-h-[24rem] sm:aspect-[16/10] sm:min-h-[22rem] lg:min-h-[24rem]"
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeProject?.videoSrc ? (
          <motion.div
            className="fixed inset-0 z-[10020] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className={`relative overflow-hidden rounded-lg bg-black shadow-2xl ring-1 ring-white/10 ${
                "videoOrientation" in activeProject && activeProject.videoOrientation === "portrait"
                  ? "aspect-[9/16] max-h-[82svh] w-[min(90vw,28rem)]"
                  : "aspect-video w-full max-w-5xl"
              }`}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-black/60 text-white transition hover:bg-white hover:text-black"
                aria-label="Close video"
              >
                <X className="h-5 w-5" />
              </button>
              <video
                key={activeProject.videoSrc}
                src={activeProject.videoSrc}
                poster={activeProject.image}
                autoPlay
                controls
                playsInline
                className="h-full w-full bg-black object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* 4. BRANDS */}
      <section className="bg-white py-20 md:py-32">
        <div className="section-container !py-0">
          <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <h2 className="text-6xl font-heading font-black leading-none tracking-normal text-[#3d3e49] sm:text-7xl md:text-8xl">Brands</h2>
              <p className="mt-3 text-base text-muted-foreground tracking-[0.08em] sm:text-lg sm:tracking-[0.12em] md:text-xl">
                Collaborations, concepts, and client work
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:justify-self-end">
              A quiet wall of names connected to campaigns, content, products, and experiments.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.src}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative flex h-28 items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-[#f0f0f0] px-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_16px_36px_rgba(40,42,35,0.10)] sm:h-32 sm:px-6"
              >
                <div className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 bg-primary transition duration-500 group-hover:scale-x-100" />
                <div className={`${brand.alt && brand.alt.toLowerCase().includes('tavera') ? 'flex w-full h-full items-center justify-center p-0' : 'flex w-full h-full items-center justify-center p-4'}`}>
                  {brand.alt && brand.alt.toLowerCase().includes('tavera') ? (
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      loading="lazy"
                      style={{ transform: 'scale(2.6)', transformOrigin: 'center' }}
                      className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-300"
                    />
                  ) : (
                    <img
                      src={brand.src}
                      alt={brand.alt}
                      loading="lazy"
                      className="max-w-[70%] max-h-[85%] w-auto h-auto object-contain transition-transform duration-300 transform group-hover:scale-105"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES */}
      <section id="services" className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="absolute left-0 top-24 h-px w-1/3 bg-gradient-to-r from-primary/40 to-transparent" />
        <div className="absolute bottom-12 right-0 h-px w-1/2 bg-gradient-to-l from-primary/30 to-transparent" />
        <div className="section-container !py-0">
          <div className="mb-12 grid gap-8 md:mb-16 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <h2 className="text-6xl font-heading font-black leading-none tracking-normal text-[#3d3e49] sm:text-7xl md:text-8xl">Services</h2>
              <p className="mt-3 text-base text-muted-foreground tracking-[0.08em] sm:text-lg sm:tracking-[0.12em] md:text-xl">
                Video / AI / Full-Stack Digital Work
              </p>
            </div>
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:justify-self-end">
              A flexible production stack for projects that need both cinematic taste and practical digital execution.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`group relative min-h-[18rem] overflow-hidden rounded-lg border border-border/70 bg-[#f0f0ed] px-6 py-7 transition duration-500 hover:-translate-y-2 hover:border-primary/40 hover:bg-white hover:shadow-[0_22px_50px_rgba(40,42,35,0.14)] sm:min-h-[21rem] sm:px-7 sm:py-8 ${
                    index % 2 === 1 ? "lg:mt-10" : ""
                  }`}
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-transparent opacity-60 transition group-hover:opacity-100" />
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-primary/10 transition duration-500 group-hover:scale-125 group-hover:border-primary/25" />
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-10 flex items-start justify-between">
                      <span className="font-heading text-4xl text-primary/35">{service.number}</span>
                      <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-primary shadow-sm transition group-hover:bg-primary group-hover:text-white">
                        <Icon className="h-7 w-7" strokeWidth={2.2} />
                      </div>
                    </div>
                    <h3 className="mb-5 max-w-full break-words text-3xl font-heading leading-[0.95] tracking-normal text-[#25262d] sm:text-4xl xl:text-[2.4rem]">
                      {service.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                    {/* CTA removed per request */}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social feed removed per request */}

      {/* 8. WATERMARK FOOTER */}
      <footer className="relative overflow-hidden border-t border-border bg-primary py-20 text-white md:py-24">
        <div className="section-container relative z-10">
          <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <div className="space-y-4">
              <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Get In Touch</div>
              <a href="mailto:workwithsamartha@gmail.com" className="inline-block break-all text-2xl font-heading underline decoration-1 underline-offset-8 decoration-white/30 transition-opacity hover:opacity-70 sm:text-3xl md:text-5xl">
                workwithsamartha@gmail.com
              </a>
            </div>

            <div className="flex flex-col items-start gap-4 text-left md:items-end md:text-right">
              <div className="mb-4 flex flex-wrap gap-5 text-[10px] font-bold uppercase tracking-widest opacity-80 sm:gap-8">
                <a href="https://www.instagram.com/_samartha_._/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-colors">Instagram</a>
                <a href="https://www.linkedin.com/in/samartha-shakya-032767254/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-colors">LinkedIn</a>
                <a href="https://github.com/samartha8/" target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-colors">GitHub</a>
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-40">
                © 2026 Samartha Shakya — All rights reserved.
              </div>
            </div>
          </div>
        </div>

        {/* Giant Watermark Name */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none opacity-[0.15] select-none z-0 overflow-hidden text-center pb-0">
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 0.15 }}
            transition={{ duration: 1.5 }}
            className="text-[25vw] font-heading font-black text-white leading-[0.7] transform translate-y-[20%]"
          >
            SAMARTHA.
          </motion.h2>
        </div>




      </footer>




    </div>
  );
};

export default Home;
