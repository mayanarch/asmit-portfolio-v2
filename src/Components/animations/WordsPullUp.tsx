import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function WordsPullUp({ text, className }: Props) {
  const letters = text.split("");

  return (
    <div
      className={`${className} flex flex-wrap overflow-hidden`}
      aria-label={text}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{
            y: 120,
            opacity: 0,
            rotateX: -90,
          }}
          animate={{
            y: 0,
            opacity: 1,
            rotateX: 0,
          }}
          transition={{
            duration: 0.7,
            delay: index * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -8,
            scale: 1.08,
            color: "#ffffff",
          }}
          style={{
            display: "inline-block",
            transformOrigin: "bottom",
            whiteSpace: letter === " " ? "pre" : "normal",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
}