import { motion } from "framer-motion";
import {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaGraduationCap />,
    title: "Software Engineering",
    description:
      "Building a strong foundation in software design and development.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "Creating responsive, modern, and user-focused web experiences.",
  },
  {
    icon: <FaBrain />,
    title: "AI Exploration",
    description:
      "Exploring intelligent solutions to practical, real-world problems.",
  },
  {
    icon: <FaCode />,
    title: "Continuous Growth",
    description:
      "Learning by building projects, solving problems, and improving my craft.",
  },
];

const stats = [
  { value: "01", label: "Engineering mindset" },
  { value: "02", label: "Web development" },
  { value: "03", label: "AI & innovation" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-hidden bg-slate-50 px-6 py-24 transition-colors duration-300 dark:bg-[#0a0a0a] md:py-32"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-0 top-20 -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 -z-10 h-64 w-64 rounded-full bg-violet-600/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            About <span className="text-blue-600 dark:text-blue-400">Me.</span>
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Introduction */}
          <div>
            <h3 className="mb-6 text-2xl font-semibold leading-snug text-slate-900 dark:text-white sm:text-3xl">
              Turning curiosity into code,
              <span className="text-blue-600 dark:text-blue-400">
                {" "}and ideas into solutions.
              </span>
            </h3>

            <p className="mb-5 text-base leading-8 text-slate-600 dark:text-gray-400 sm:text-lg">
              I'm a Software Engineering student at Murang'a University of
              Technology, passionate about building useful software and
              exploring how technology can solve everyday problems.
            </p>

            <p className="mb-8 text-base leading-8 text-slate-600 dark:text-gray-400 sm:text-lg">
              My interests span modern web development, backend systems, and
              artificial intelligence. I enjoy learning how things work,
              experimenting with new tools, and turning what I learn into
              practical projects. My goal is to grow into a versatile software
              engineer who builds reliable, thoughtful, and impactful digital
              products.
            </p>

            {/* Focus tags */}
            <div className="mb-9 flex flex-wrap gap-3">
              {[
                "Software Engineering",
                "Full-Stack Development",
                "AI Enthusiast",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-blue-500/50 hover:bg-blue-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300 dark:hover:bg-blue-500/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Focus cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 dark:border-white/10 dark:bg-white/[0.035] dark:hover:border-blue-500/40 dark:hover:bg-white/[0.06]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-xl text-blue-600 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/20 dark:border-blue-400/20 dark:text-blue-400">
                  {item.icon}
                </div>

                <h4 className="mb-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h4>

                <p className="text-sm leading-7 text-slate-600 dark:text-gray-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom identity strip */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-r from-blue-100/70 via-white to-violet-100/70 p-6 shadow-sm transition-colors duration-300 dark:border-white/10 dark:from-blue-500/[0.08] dark:via-white/[0.025] dark:to-violet-500/[0.08] dark:shadow-none sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3 sm:divide-x sm:divide-slate-200 dark:sm:divide-white/10">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="sm:px-6 first:sm:pl-0 last:sm:pr-0"
              >
                <p className="mb-2 text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 dark:text-gray-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}