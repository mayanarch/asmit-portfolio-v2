import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "AI Portfolio",
    description:
      "Designed and developed a next-generation AI portfolio featuring smooth animations, conversational interfaces, and modern UI/UX principles.",
  },
  {
    year: "2024",
    title: "Full Stack Development",
    description:
      "Built scalable full-stack applications using React, Node.js, Express, MongoDB, and PostgreSQL while exploring cloud deployment and APIs.",
  },
  {
    year: "2023",
    title: "AI & Programming Journey",
    description:
      "Started my journey into software engineering, competitive programming, machine learning, and modern web technologies.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 min-h-screen px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.35em] text-[#E1E0CC]/60">
            JOURNEY
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#E1E0CC] md:text-7xl">
            Experience
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every project has been an opportunity to learn, experiment,
            and push my technical skills further.
          </p>
        </motion.div>

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-5 top-0 h-full w-[2px] bg-white/10" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              className="relative mb-16 pl-16"
            >
              {/* Timeline Dot */}

              <div className="absolute left-0 top-2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#E1E0CC] text-black font-bold shadow-lg">
                ✓
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10">

                <p className="text-sm uppercase tracking-[0.25em] text-[#E1E0CC]/50">
                  {item.year}
                </p>

                <h3 className="mt-3 text-3xl font-bold text-[#E1E0CC]">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-400">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}