import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code, Video, Camera, MousePointerClick } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const personas = [
    {
      id: "it",
      title: "Full Stack Developer",
      desc: "Building scalable digital solutions with modern tech stacks.",
      icon: <Code className="w-8 h-8 text-it" />,
      color: "from-it to-blue-900",
      link: "/it",
      glow: "group-hover:shadow-glow-it",
      border: "group-hover:border-it",
      text: "text-it"
    },
    {
      id: "video",
      title: "Video Editor",
      desc: "Crafting compelling visual narratives through editing.",
      icon: <Video className="w-8 h-8 text-video" />,
      color: "from-video to-purple-900",
      link: "/video",
      glow: "group-hover:shadow-glow-video",
      border: "group-hover:border-video",
      text: "text-video"
    },
    {
      id: "model",
      title: "Model & Content",
      desc: "Expressing creativity through fashion and digital content.",
      icon: <Camera className="w-8 h-8 text-model" />,
      color: "from-model to-red-900",
      link: "/model",
      glow: "group-hover:shadow-glow-model",
      border: "group-hover:border-model",
      text: "text-model"
    }
  ];

  return (
    <div className="relative">

      {/* Hero Section */}
      <section ref={targetRef} className="h-screen flex items-center justify-center relative overflow-hidden px-6">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-background z-0" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-it/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-video/20 rounded-full blur-[128px] animate-pulse-glow delay-1000" />

        <motion.div
          style={{ opacity, scale, y: position }}
          className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block"
          >
            <div className="absolute inset-x-0 top-1/2 h-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl" />
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold tracking-tighter text-white">
              SAMARTHA
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
                SHAKYA
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed"
          >
            Multidisciplinary creator merging <span className="text-it font-medium">Logich</span>, <span className="text-video font-medium">Motion</span>, and <span className="text-model font-medium">Aesthetics</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-8"
          >
            <div className="animate-bounce text-muted-foreground">
              <div className="text-xs uppercase tracking-[0.2em] mb-2">Explore</div>
              <ArrowRight className="w-5 h-5 rotate-90 mx-auto" />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Personas / Navigation Grid */}
      <section className="py-32 px-6 relative z-10 bg-background/50 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Three Worlds. <span className="text-muted-foreground">One Creator.</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-it via-video to-model mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {personas.map((persona, index) => (
              <Link to={persona.link} key={persona.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group relative h-full glass-panel p-8 rounded-3xl border border-white/5 overflow-hidden transition-all duration-500 hover:-translate-y-2 ${persona.border} hover:shadow-2xl hover:shadow-${persona.id}/20`}
                >
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${persona.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                      {persona.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 font-heading group-hover:text-white transition-colors">
                      {persona.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-gray-200 transition-colors leading-relaxed">
                      {persona.desc}
                    </p>

                    <div className={`flex items-center gap-2 mt-8 text-sm font-semibold uppercase tracking-wider ${persona.text} group-hover:text-white transition-colors`}>
                      View Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-it via-video to-model" />

            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
              "I believe in the power of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">visual storytelling.</span>"
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              Whether it's writing clean code, editing a cinematic sequence, or posing for a shot – it's all about communicating an idea. I bridge the gap between technical complexity and artistic expression.
            </p>

            <Link to="/explore">
              <Button size="lg" className="rounded-full px-8 h-12 text-base bg-white text-black hover:bg-gray-200 transition-colors">
                More About Me
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
