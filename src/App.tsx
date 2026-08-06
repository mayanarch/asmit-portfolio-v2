import { useEffect, useState } from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import About from "./Components/about/About";
import Projects from "./Components/projects/Projects";
import Skills from "./Components/skills/Skills";
import Experience from "./Components/experience/Experience";
import Contact from "./Components/contact/Contact";

import MouseGlow from "./Components/UI/MouseGlow";
import FloatingBlobs from "./Components/UI/FloatingBlobs";

import WordsPullUp from "./Components/animations/WordsPullUp";
import Loader from "./Components/animations/Loader";

import MusicPlayer from "./Components/music/MusicPlayer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);

    const lenis = new Lenis({
      duration: 1.8,
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1,
      infinite: false,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && <Loader />}

      {/* Background */}

      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 -z-40 h-full w-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          type="video/mp4"
        />
      </video>

      <div className="fixed inset-0 -z-30 bg-black/60" />

      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black/10 via-black/20 to-black" />

      <div className="fixed inset-0 -z-10 noise-overlay" />

      <MouseGlow />
      <FloatingBlobs />

      {/* Navbar */}

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="
        fixed
        left-1/2
        top-6
        z-50
        -translate-x-1/2
        rounded-full
        border
        border-white/10
        bg-black/30
        backdrop-blur-2xl
        px-8
        py-4
      "
      >
        <div className="flex gap-10 text-[#E1E0CC]/80">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      {/* Hero */}

      <main className="relative flex min-h-screen items-center px-6 md:px-16">

        <div className="relative z-20 max-w-3xl">

          <WordsPullUp
            text="ASMIT"
            className="hero-title text-7xl md:text-[9rem]"
          />

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: .4,
              duration: .8,
            }}
            className="mt-8 text-xl text-gray-300"
          >
            AI Engineer • Full Stack Developer • Building
            intelligent digital experiences.
          </motion.p>

          <motion.a
            href="#projects"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: .6,
            }}
            className="
            mt-10
            inline-flex
            items-center
            gap-4
            rounded-full
            bg-[#E1E0CC]
            px-8
            py-4
            font-semibold
            text-black
            transition
            hover:gap-6
          "
          >
            View Portfolio

            <div className="rounded-full bg-black p-3">
              <ArrowRight className="text-[#E1E0CC]" />
            </div>

          </motion.a>

        </div>

      </main>

      {/* Sections */}

      <div className="relative z-10 space-y-12">

        <About />

        <Projects />

        <Skills />

        <Experience />

        <Contact />

      </div>

      <MusicPlayer />

    </>
  );
}