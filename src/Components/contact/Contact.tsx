import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24 md:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl md:p-16"
        >
          <p className="text-center uppercase tracking-[0.35em] text-[#E1E0CC]/60">
            Contact
          </p>

          <h2 className="mt-6 text-center text-5xl font-bold text-[#E1E0CC] md:text-7xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-8 text-gray-400">
            Whether it's AI, full-stack development, or an exciting new idea,
            I'm always interested in building meaningful products and working
            with ambitious people.
          </p>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <a
              href="https://github.com/mayanarch"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#E1E0CC]/50 hover:bg-white/10 hover:-translate-y-2"
            >
              <p className="text-5xl">💻</p>

              <h3 className="mt-6 text-2xl font-semibold text-[#E1E0CC]">
                GitHub
              </h3>

              <p className="mt-3 text-gray-400">
                Explore my repositories and personal projects.
              </p>

              <p className="mt-8 text-sm uppercase tracking-widest text-[#E1E0CC]">
                Visit →
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/asmit-aayan-mohanty0/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#E1E0CC]/50 hover:bg-white/10 hover:-translate-y-2"
            >
              <p className="text-5xl">💼</p>

              <h3 className="mt-6 text-2xl font-semibold text-[#E1E0CC]">
                LinkedIn
              </h3>

              <p className="mt-3 text-gray-400">
                Connect with me professionally and follow my journey.
              </p>

              <p className="mt-8 text-sm uppercase tracking-widest text-[#E1E0CC]">
                Connect →
              </p>
            </a>

            <a
              href="mailto:asmitaayanmohanty@gmail.com"
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:border-[#E1E0CC]/50 hover:bg-white/10 hover:-translate-y-2"
            >
              <p className="text-5xl">📧</p>

              <h3 className="mt-6 text-2xl font-semibold text-[#E1E0CC]">
                Email
              </h3>

              <p className="mt-3 text-gray-400">
                Have an opportunity or just want to say hello? Drop me a mail.
              </p>

              <p className="mt-8 break-all text-[#E1E0CC]/80">
                asmitaayanmohanty@gmail.com
              </p>
            </a>

          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 border-t border-white/10 pt-10 text-center"
          >
            <p className="text-gray-500">
              © 2026 Asmit. Designed & Developed with React, TypeScript &
              Tailwind CSS.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}