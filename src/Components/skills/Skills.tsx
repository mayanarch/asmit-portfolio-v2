import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Artificial Intelligence",
    icon: "🤖",
    skills: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenAI API",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "HTML & CSS",
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "Linux",
      "VS Code",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 min-h-screen px-6 py-24 md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.35em] text-[#E1E0CC]/60">
            EXPERTISE
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#E1E0CC] md:text-7xl">
            Skills &
            <br />
            Technologies
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            I enjoy working across the complete software stack—from intelligent
            AI systems to modern frontend experiences and scalable backend
            architectures.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">

          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.15,
                duration: 0.6,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-3xl">
                  {category.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#E1E0CC]">
                    {category.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Core technologies I work with
                  </p>
                </div>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-[#E1E0CC] transition hover:border-[#E1E0CC]/50 hover:bg-white/20"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}