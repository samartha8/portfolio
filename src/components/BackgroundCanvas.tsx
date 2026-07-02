import { motion } from "framer-motion";

const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-[#F5F5F3]">
      {/* 1. DIGITAL GRAIN OVERLAY */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100px 100px'
        }}
      />

      {/* 2. FLOATING BRAND BLOBS */}
      {/* Blob 1: Olive */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#6B705C]/[0.03] blur-[120px]"
      />

      {/* Blob 2: Light Cream/Peach Accent */}
      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.1, 1]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[0%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#A5A58D]/[0.04] blur-[120px]"
      />

      {/* Blob 3: Center Mid */}
      <motion.div
        animate={{
          opacity: [0.01, 0.03, 0.01]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[40%] left-[30%] w-[40vw] h-[30vw] rounded-full bg-[#6B705C]/[0.02] blur-[100px]"
      />

      {/* 3. MAGAZINE GRID ACCENTS (Very faint lines) */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute left-[15%] h-full w-px bg-black" />
        <div className="absolute left-[85%] h-full w-px bg-black" />
        <div className="absolute top-[20%] w-full h-px bg-black" />
        <div className="absolute top-[80%] w-full h-px bg-black" />
      </div>

    </div>
  );
};

export default BackgroundCanvas;
