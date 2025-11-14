import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-it via-video to-model rounded-full blur-3xl opacity-30 animate-pulse" />
              <video
  src="https://res.cloudinary.com/du8xf30ei/video/upload/v1761796913/profileVideo_snii0b.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="relative w-80 h-80 rounded-full object-cover border-4 border-border shadow-2xl scale-200 -translate-y-4"
/>

            </div>
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-muted-foreground text-lg mb-2"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-it via-video to-model bg-clip-text text-transparent"
              >
                Samartha Shakya
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              A multidisciplinary creator passionate about technology, design, and
              storytelling — blending logic and creativity across IT, content
              creation, and editing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Link to="/explore">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-it via-video to-model hover:shadow-2xl hover:shadow-it/50 transition-all duration-300 hover:scale-105"
                >
                  Explore My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
