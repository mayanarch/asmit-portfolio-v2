import { motion } from "framer-motion";

const projects = [
  {
    title: "StudyOS",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description:
      "A next-generation student platform that combines productivity, collaboration, scheduling, learning resources, and campus life into one intelligent ecosystem.",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
    status: "Live Project",
  },
  {
    title: "AI Portfolio",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200",
    description:
      "An AI-powered portfolio capable of answering recruiter questions, showcasing projects, explaining skills, and providing an interactive conversational experience.",
    tech: ["React", "OpenAI", "Framer Motion", "TypeScript"],
    status: "In Development",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            PORTFOLIO
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#E1E0CC] md:text-7xl">
            Featured Projects
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Some of the projects I've been building, focusing on Artificial
            Intelligence, Full Stack Development and modern user experiences.
          </p>
        </motion.div>

        <div className="mt-20 space-y-14">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 60,
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
                duration: 0.7,
              }}
              whileHover={{
                y: -8,
              }}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="grid lg:grid-cols-2">

                {/* Image */}

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full min-h-[340px] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div className="flex flex-col justify-center p-10">

                  <span className="w-fit rounded-full bg-[#E1E0CC]/10 px-4 py-2 text-sm text-[#E1E0CC]">
                    {project.status}
                  </span>

                  <h3 className="mt-6 text-4xl font-bold text-[#E1E0CC]">
                    {project.title}
                  </h3>

                  <p className="mt-6 leading-8 text-gray-400">
                    {project.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm text-[#E1E0CC]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-10 flex gap-4">

                    <button className="rounded-full bg-[#E1E0CC] px-7 py-3 font-semibold text-black transition hover:scale-105">
                      Live Demo
                    </button>

                    <button className="rounded-full border border-white/20 px-7 py-3 text-[#E1E0CC] transition hover:bg-white/10">
                      GitHub
                    </button>

                  </div>

                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}