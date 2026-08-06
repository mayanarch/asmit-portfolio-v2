import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 260,
    damping: 24,
    mass: 0.25,
  });

  const y = useSpring(mouseY, {
    stiffness: 260,
    damping: 24,
    mass: 0.25,
  });

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const enter = () => setHovering(true);
    const leave = () => setHovering(false);

    window.addEventListener("mousemove", move);

    document
      .querySelectorAll("a, button")
      .forEach((el) => {
        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
      });

    return () => {
      window.removeEventListener("mousemove", move);

      document
        .querySelectorAll("a, button")
        .forEach((el) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
    };
  }, []);

  return (
    <>
      {/* BIG AMBIENT GLOW */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          scale: hovering ? 1.3 : 1,
          opacity: hovering ? 0.22 : 0.14,
        }}
        transition={{
          duration: 0.25,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-0
          h-[360px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#E1E0CC]
          blur-[150px]
        "
      />

      {/* GLOW RING */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 0.9 : 0.65,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9998]
          h-10
          w-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#E1E0CC]/70
        "
      />

      {/* CENTER DOT */}

      <motion.div
        style={{
          x,
          y,
        }}
        animate={{
          scale: hovering ? 1.8 : 1,
        }}
        transition={{
          duration: 0.15,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-[9999]
          h-2.5
          w-2.5
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#E1E0CC]
        "
      />
    </>
  );
}