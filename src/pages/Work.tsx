import { motion } from "framer-motion";
import { ArrowRight, Camera, Code2, Clapperboard, Play } from "lucide-react";
import { Link } from "react-router-dom";

const workCategories = [
  {
    number: "01",
    title: "IT / AI-ML",
    eyebrow: "TECHNICAL WORK",
    description: "Full-stack builds, ML workflows, AI integration, and practical product engineering.",
    scope: ["React", "AI", "ML"],
    image: "/thumbnails/code.jpg",
    icon: Code2,
    path: "/it",
    highlight: true,
  },
  {
    number: "02",
    title: "Video Editor",
    eyebrow: "MOTION / COLOR",
    description: "Branded edits with rhythm, clarity, and polish.",
    scope: ["Edit", "Grade", "Story"],
    image: "/thumbnails/I.png",
    icon: Clapperboard,
    path: "/video",
    play: true,
  },
  {
    number: "03",
    title: "Content Creator",
    eyebrow: "VISUAL IDENTITY",
    description: "Fashion, brand, and social visuals with presence.",
    scope: ["Fashion", "Brand", "Social"],
    image: "/thumbnails/1.png",
    icon: Camera,
    path: "/model",
  },
];

const Work = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(107,112,92,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(107,112,92,0.07)_1px,transparent_1px)] bg-[size:220px_220px]" />
        <div className="section-container !py-0">
          <div className="relative mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <div className="mb-4 text-[10px] font-black uppercase tracking-[0.35em] text-primary">Selected Lanes</div>
              <h1 className="max-w-full text-[clamp(4rem,10vw,8rem)] font-heading font-black leading-none tracking-normal text-[#3d3e49]">
                Work
              </h1>
              <p className="mt-4 text-base text-muted-foreground tracking-[0.12em] sm:text-xl">
                Choose a lane and explore the craft
              </p>
            </div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:justify-self-end">
              A focused map of my work across web development, AI integration, editing, and content. Different outputs,
              same standard: useful, polished, and visually considered.
            </p>
          </div>

          <div className="relative grid gap-6 lg:grid-cols-3 lg:items-start">
            {workCategories.map((category, index) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <Link
                    to={category.path}
                    className={`group relative block min-h-[31rem] overflow-hidden rounded-lg bg-neutral-950 shadow-[0_18px_42px_rgba(20,20,20,0.16)] ring-1 ring-black/5 transition duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(20,20,20,0.22)] ${
                      index === 1 ? "lg:mt-10" : index === 2 ? "lg:mt-4" : ""
                    }`}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="absolute inset-0 h-full w-full object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.20),transparent_28%)] opacity-60" />
                    <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 rounded-full bg-black/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-sm shadow-black/20">
                        <Icon className="h-4 w-4 text-white" />
                        {category.eyebrow}
                      </div>
                      <span className="font-heading text-4xl leading-none text-white/35">{category.number}</span>
                    </div>
                    {category.play ? (
                      <div className="absolute inset-x-0 top-1/2 flex justify-center -translate-y-1/2">
                        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg shadow-black/20 transition group-hover:scale-110">
                          <Play className="h-6 w-6" />
                        </span>
                      </div>
                    ) : null}

                    <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                      <div className="border border-white/15 bg-black/30 p-5 backdrop-blur-md">
                        <h2 className="max-w-2xl font-heading text-4xl leading-[0.92] tracking-normal sm:text-5xl">
                        {category.title}
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/78 sm:text-base">
                          {category.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {category.scope.map((item) => (
                            <span key={item} className="border border-white/20 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-white/75">
                              {item}
                            </span>
                          ))}
                        </div>
                        <div className="mt-6 flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-xs font-bold uppercase tracking-[0.22em] transition group-hover:border-white">
                          View Work <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
