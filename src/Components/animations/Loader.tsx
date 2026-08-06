import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="flex flex-col items-center">

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.9,
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="
            hero-title
            text-7xl
            md:text-9xl
            font-black
            tracking-[0.35em]
            text-[#E1E0CC]
          "
        >
          ASMIT
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
          }}
          className="mt-6 uppercase tracking-[0.45em] text-xs text-gray-500"
        >
          Loading Experience
        </motion.p>

        {/* Progress */}

        <div className="mt-10 h-[3px] w-60 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="h-full w-32 rounded-full bg-[#E1E0CC]"
          />

        </div>

      </div>
    </motion.div>
  );
}