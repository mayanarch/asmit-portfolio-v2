import { motion } from "framer-motion";

const stats = [
  {
    number: "10+",
    title: "Technologies",
  },
  {
    number: "AI",
    title: "Engineering",
  },
  {
    number: "FULL",
    title: "Stack",
  },
  {
    number: "∞",
    title: "Learning",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-6 py-32 md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Small Heading */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="uppercase tracking-[0.45em] text-[#E1E0CC]/55"
        >
          About
        </motion.p>

        {/* Huge Title */}

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
            mt-8
            max-w-5xl
            text-5xl
            font-black
            leading-[0.9]
            text-[#F5F1E6]
            sm:text-6xl
            lg:text-7xl
            xl:text-8xl
          "
        >
          Building Intelligent
          <br />
          Experiences For
          <br />
          The Future.
        </motion.h2>

        {/* Text */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
          className="
            mt-20
            grid
            gap-12
            lg:grid-cols-2
          "
        >
          <p className="text-xl leading-10 text-gray-300">
            I'm an AI Engineer and Full Stack Developer passionate about
            designing modern software, AI products, and digital experiences
            that combine beautiful interfaces with intelligent systems.
          </p>

          <p className="text-xl leading-10 text-gray-300">
            My focus is building scalable applications powered by Artificial
            Intelligence while creating user experiences that feel fast,
            premium, and intuitive across every device.
          </p>

          <p className="text-xl leading-10 text-gray-300">
            I enjoy experimenting with new technologies, creating AI-powered
            tools, and continuously learning modern software architecture,
            backend engineering, and UI design.
          </p>

          <p className="text-xl leading-10 text-gray-300">
            Every project I build emphasizes clean design, performance,
            maintainability, and real-world impact.
          </p>

        </motion.div>

        {/* Cards */}

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="
            mt-24
            grid
            gap-8
            sm:grid-cols-2
            xl:grid-cols-4
          "
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: .25,
              }}
              className="
                rounded-[34px]
                border
                border-white/10
                bg-black/25
                p-10
                backdrop-blur-xl
              "
            >
              <h3 className="text-6xl font-black text-[#F5F1E6]">
                {item.number}
              </h3>

              <p className="mt-5 text-xl text-gray-400">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}