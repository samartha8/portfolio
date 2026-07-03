import { motion } from "framer-motion";

const tools = [
  { name: "DaVinci Resolve", level: 78, area: "Color" },
  { name: "Adobe Premiere Pro", level: 22, area: "Editing" },
  { name: "Adobe Photoshop", level: 31, area: "Design" },
  { name: "Canva", level: 73, area: "Content" },
  { name: "Python (Pandas, NumPy, XGBoost, LightGBM)", level: 74, area: "ML" },
  { name: "Deep Learning (TensorFlow, Keras, EfficientNetB0)", level: 68, area: "AI" },
  { name: "Computer Vision (Mobile-SAM, Image Segmentation)", level: 66, area: "Vision" },
  { name: "LLM Integration (Groq, Gemini, Prompt Engineering)", level: 70, area: "LLM" },
  { name: "React / TypeScript", level: 74, area: "Frontend" },
  { name: "REST API Integration", level: 72, area: "API" },
  { name: "React Native", level: 72, area: "Mobile" },
  { name: "Node.js", level: 70, area: "Backend" },
  { name: "MongoDB", level: 68, area: "Database" },
  { name: "Machine Learning Model Evaluation", level: 70, area: "Metrics" },
  { name: "Data Visualization (Streamlit, Matplotlib)", level: 70, area: "Data" },
  { name: "Git & Version Control", level: 76, area: "Git" },
  { name: "UI/UX (Figma)", level: 68, area: "UI/UX" },
];

const About = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background pt-20">
      <section className="relative py-20 md:py-32">
        <div className="absolute right-0 top-28 hidden h-px w-1/3 bg-gradient-to-l from-primary/30 to-transparent md:block" />
        <div className="section-container !py-0">
          <div className="grid gap-12 md:grid-cols-12 md:items-center lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="md:col-span-7"
            >
              <h1 className="max-w-full text-[clamp(4.5rem,12vw,10rem)] font-heading font-black leading-none tracking-normal text-[#1f2026]">
                About Me.
              </h1>

              <div className="mt-12 space-y-9 md:mt-16 md:space-y-10">
                <div className="relative max-w-3xl border-l border-primary/40 pl-7">
                  <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-primary sm:text-xs sm:tracking-[0.35em]">
                    Creative Technology / Visual Storytelling
                  </div>
                  <p className="text-3xl font-light leading-tight text-muted-foreground sm:text-4xl md:text-5xl">
                    I build things that work and make people stop scrolling.
                  </p>
                  <span className="absolute -left-1 top-0 h-16 w-1 bg-primary" />
                </div>

                <div className="max-w-3xl space-y-8">
                  <p className="text-2xl font-light leading-snug text-muted-foreground sm:text-3xl">
                    <span className="font-bold text-foreground">Samartha Shakya</span>, Kathmandu-based full-stack
                    developer, AI builder, video editor, and the person who notices when the font is wrong.
                  </p>

                  <p className="text-lg leading-8 text-muted-foreground/90 sm:text-xl">
                    From the first line of code to the final color grade, everything is built to feel as good as it works.
                  </p>

                  <div className="flex flex-wrap gap-3 border-y border-border py-5">
                    {["Code", "AI", "Edit", "Design Sense"].map((item) => (
                      <span
                        key={item}
                        className="bg-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-foreground ring-1 ring-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border pt-8 sm:gap-8 md:mt-16 md:pt-10">
                <div>
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div>
                  <div className="stat-number">280+</div>
                  <div className="stat-label">Work Hours</div>
                </div>
                <div>
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md md:col-span-5 md:max-w-none"
            >
              <div className="absolute -right-8 -top-8 hidden h-32 w-32 border border-primary/20 md:block" />
              <div className="relative aspect-[3/4] overflow-hidden bg-muted ring-1 ring-border">
                <video
                  src="https://res.cloudinary.com/du8xf30ei/video/upload/v1761796913/profileVideo_snii0b.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10" />
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-primary/10 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="section-container !py-0">
          <div className="border-t border-border pt-16 md:pt-20">
            <div className="mb-12 grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-end">
              <div>
                <h2 className="max-w-full text-[clamp(3.5rem,9vw,8rem)] font-heading font-black leading-none tracking-normal text-[#3d3e49]">
                  Toolkit
                </h2>
                <p className="mt-4 text-base text-muted-foreground tracking-[0.14em] sm:text-lg sm:tracking-[0.28em] md:text-2xl">
                  Tools I use to shape the work
                </p>
              </div>
              <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9 md:justify-self-end">
                A practical mix of full-stack, AI, data, and creative tools used to build projects that work well and look considered.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="group relative overflow-hidden rounded-lg border border-border/80 bg-white/75 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_18px_42px_rgba(40,42,35,0.10)] sm:p-6"
                >
                  <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full border border-primary/10 transition duration-500 group-hover:scale-125 group-hover:border-primary/25" />
                  <div className="absolute inset-x-0 bottom-0 h-14 bg-[radial-gradient(circle_at_20%_100%,rgba(107,112,92,0.14),transparent_42%),radial-gradient(circle_at_80%_100%,rgba(165,165,141,0.18),transparent_40%)]" />

                  <div className="relative mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row">
                    <div>
                      <h3 className="font-mono text-sm font-bold leading-relaxed tracking-[0.08em] text-[#25262d] sm:text-base sm:tracking-[0.12em]">
                        {tool.name}
                      </h3>
                      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:tracking-[0.22em]">
                        <span>Skill Profile</span>
                        <span>Track {String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
                    <span className="rounded-full border border-primary/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {tool.area}
                    </span>
                  </div>

                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      <span>Proficiency</span>
                      <span>{tool.level}%</span>
                    </div>

                    <div className="relative pb-4">
                      <div className="relative h-4 overflow-hidden rounded-full bg-[#e7e7e1] shadow-inner ring-1 ring-border/70">
                        <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(90deg,rgba(255,255,255,0.75),transparent_28%,transparent_72%,rgba(255,255,255,0.65))]" />
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tool.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.12 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute inset-y-0 left-0 overflow-hidden rounded-full bg-gradient-to-r from-primary via-[#92977b] to-[#d8d0a5] shadow-[0_0_18px_rgba(107,112,92,0.28)]"
                        >
                          <motion.span
                            initial={{ x: "-120%" }}
                            whileInView={{ x: "180%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.15, delay: 0.35 + index * 0.05, ease: "easeOut" }}
                            className="absolute inset-y-0 left-0 w-20 skew-x-[-24deg] bg-white/35"
                          />
                        </motion.div>
                        <div className="absolute inset-x-0 top-0 h-px bg-white/80" />
                      </div>

                      <motion.div
                        initial={{ left: "0%" }}
                        whileInView={{ left: `${tool.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.12 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-2 z-10 -translate-x-1/2 -translate-y-1/2"
                      >
                        <div className="h-5 w-5 rounded-full border-[3px] border-white bg-primary shadow-[0_8px_18px_rgba(40,42,35,0.22)]" />
                      </motion.div>

                      <div className="mt-4 flex items-center gap-1.5">
                        {Array.from({ length: 18 }).map((_, bar) => (
                          <motion.span
                            key={bar}
                            initial={{ opacity: 0.2, scaleX: 0.7 }}
                            whileInView={{
                              opacity: bar < Math.round((tool.level / 100) * 18) ? 0.7 : 0.18,
                              scaleX: bar < Math.round((tool.level / 100) * 18) ? 1 : 0.7,
                            }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.32, delay: 0.2 + bar * 0.012 }}
                            className="h-px flex-1 bg-primary/70"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
