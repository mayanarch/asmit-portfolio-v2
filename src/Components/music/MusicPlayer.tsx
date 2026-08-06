import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";

import song from "../../assets/music/marwaloud.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playing, setPlaying] = useState(false);

  async function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      await audioRef.current.play();
    }

    setPlaying(!playing);
  }

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const stop = () => setPlaying(false);

    audio.addEventListener("pause", stop);

    return () => {
      audio.removeEventListener("pause", stop);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={song}
        loop
      />

      <div
        className="
        fixed
        bottom-6
        right-6
        z-50
        w-[320px]
        rounded-3xl
        border
        border-white/10
        bg-black/45
        backdrop-blur-3xl
        p-6
        shadow-[0_20px_60px_rgba(0,0,0,.45)]
      "
      >
        <p className="text-xs uppercase tracking-[0.35em] text-[#E1E0CC]/50">
          Now Playing
        </p>

        <h3 className="mt-3 text-2xl font-bold text-[#E1E0CC]">
          Bad Boy
        </h3>

        <p className="text-[#E1E0CC]/60">
          Marwa Loud
        </p>

        <div className="mt-8 flex items-center justify-between">

          <button
            className="text-[#E1E0CC]/60 transition hover:text-white"
          >
            <SkipBack size={22} />
          </button>

          <button
            onClick={toggleMusic}
            className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-[#E1E0CC]
            text-black
            transition
            hover:scale-105
            active:scale-95
          "
          >
            {playing ? (
              <Pause size={26} />
            ) : (
              <Play size={26} />
            )}
          </button>

          <button
            className="text-[#E1E0CC]/60 transition hover:text-white"
          >
            <SkipForward size={22} />
          </button>

        </div>

        <div className="mt-8 flex items-center justify-between text-[#E1E0CC]/60">

          <Volume2 size={18} />

          <span className="text-sm uppercase tracking-[0.25em]">
            Loop
          </span>

        </div>

      </div>
    </>
  );
}