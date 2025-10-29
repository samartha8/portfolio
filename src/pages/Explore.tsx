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
      gradient: "from-it/20 to-transparent",
      hoverGlow: "hover:shadow-glow-it",
      textColor: "text-it",
    },
    {
      title: "Video Editing",
      description: "Dive into my visual storytelling and creative edits.",
      icon: Video,
      path: "/video",
      gradient: "from-video/20 to-transparent",
      hoverGlow: "hover:shadow-glow-video",
      textColor: "text-video",
    },
    {
      title: "Model | Content Creator",
      description: "Discover my portfolio of campaigns and collaborations.",
      icon: Camera,
      path: "/model",
      gradient: "from-model/20 to-transparent",
      hoverGlow: "hover:shadow-glow-model",
      textColor: "text-model",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Which side of me do you want to{" "}
            <span className="bg-gradient-to-r from-it via-video to-model bg-clip-text text-transparent">
              explore
            </span>
            ?
          </h1>
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
                  className={`group relative h-96 bg-card/70 backdrop-blur-lg border border-border rounded-3xl p-8 overflow-hidden transition-all duration-500 hover:scale-105 ${card.hoverGlow} cursor-pointer`}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-center">
                      <card.icon
                        className={`w-24 h-24 ${card.textColor} transition-transform duration-500 group-hover:scale-110`}
                      />
                    </div>

                    <div className="space-y-3">
                      <h3
                        className={`text-2xl font-heading font-bold ${card.textColor}`}
                      >
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground">{card.description}</p>
                    </div>

                    {/* Hover Arrow Indicator */}
                    <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center`}>
                        <span className={`text-xl ${card.textColor}`}>→</span>
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
