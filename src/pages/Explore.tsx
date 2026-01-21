import { motion } from "framer-motion";
import { Code2, Video, Camera } from "lucide-react";
import { Link } from "react-router-dom";

const Explore = () => {
  const cards = [
    {
      title: "IT & Development",
      description: "Explore my web projects, designs, and creative builds.",
      icon: Code2,
      path: "/it",
      border: "hover:border-it/50",
      bg: "hover:bg-it/5",
      iconColor: "text-it",
      glow: "shadow-it/20",
    },
    {
      title: "Video Editing",
      description: "Dive into my visual storytelling and creative edits.",
      icon: Video,
      path: "/video",
      border: "hover:border-video/50",
      bg: "hover:bg-video/5",
      iconColor: "text-video",
      glow: "shadow-video/20",
    },
    {
      title: "Model | Content Creator",
      description: "Discover my portfolio of campaigns and collaborations.",
      icon: Camera,
      path: "/model",
      border: "hover:border-model/50",
      bg: "hover:bg-model/5",
      iconColor: "text-model",
      glow: "shadow-model/20",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-it/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-model/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight">
            Which side of me <br /> do you want to{" "}
            <span className="bg-gradient-to-r from-it via-video to-model bg-clip-text text-transparent">
              explore
            </span>
            ?
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            A blend of technical expertise, visual storytelling, and creative expression.
            Choose a path to see my work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.path}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link to={card.path}>
                <div
                  className={`group relative h-[450px] glass-panel rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-white/10 ${card.border} ${card.bg} cursor-pointer hover:shadow-2xl ${card.glow}`}
                >
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center z-10 text-center space-y-8">
                    <div className={`w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10`}>
                      <card.icon
                        className={`w-10 h-10 ${card.iconColor} transition-transform duration-500 group-hover:scale-110 drop-shadow-lg`}
                      />
                    </div>

                    <div className="space-y-4">
                      <h3 className={`text-3xl font-heading font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-colors`}>
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-gray-300 transition-colors text-lg leading-relaxed px-4">
                        {card.description}
                      </p>
                    </div>

                    {/* Hover Arrow Indicator */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className={`w-12 h-12 rounded-full bg-${card.iconColor.replace('text-', '')}/20 backdrop-blur-md flex items-center justify-center border border-${card.iconColor.replace('text-', '')}/30`}>
                        <span className={`text-xl ${card.iconColor}`}>→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
