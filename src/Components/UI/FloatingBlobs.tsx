import { motion } from "framer-motion";

export default function FloatingBlobs() {
  return (
    <>
      {/* Top Left Blob */}

      <motion.div
        animate={{
          x: [0, 120, -80, 40, 0],
          y: [0, -90, 50, -20, 0],
          scale: [1, 1.2, 0.9, 1.15, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          fixed
          -top-40
          -left-40
          h-[700px]
          w-[700px]
          rounded-full
          bg-[#E1E0CC]/6
          blur-[170px]
          -z-10
        "
      />

      {/* Top Right Blob */}

      <motion.div
        animate={{
          x: [0, -140, 90, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.85, 1.15, 1],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          fixed
          -top-32
          -right-32
          h-[620px]
          w-[620px]
          rounded-full
          bg-blue-500/6
          blur-[170px]
          -z-10
        "
      />

      {/* Bottom Left */}

      <motion.div
        animate={{
          x: [0, 90, -60, 0],
          y: [0, -70, 40, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          fixed
          -bottom-44
          -left-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-violet-500/5
          blur-[150px]
          -z-10
        "
      />

      {/* Bottom Right */}

      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 60, -50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          fixed
          -bottom-36
          -right-24
          h-[650px]
          w-[650px]
          rounded-full
          bg-cyan-500/5
          blur-[170px]
          -z-10
        "
      />
    </>
  );
}