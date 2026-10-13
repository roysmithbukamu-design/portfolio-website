import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaLinux,
} from "react-icons/fa";

import {
  SiMysql,
  SiC,
  SiCplusplus,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiVercel,
} from "react-icons/si";

const skillGroups = [
  {
    number: "01",
    title: "Programming Languages",
    description:
      "The programming foundations I use to develop software.",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        level: "Practised",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        level: "Practised",
      },
      {
        name: "JavaScript",
        icon: <FaJs />,
        level: "Practised",
      },
      {
        name: "Python",
        icon: <FaPython />,
        level: "Intermediate",
      },
      {
        name: "C",
        icon: <SiC />,
        level: "Practised",
      },
      {
        name: "C++",
        icon: <SiCplusplus />,
        level: "Building skills",
      },
      {
        name: "SQL",
        icon: <SiMysql />,
        level: "Foundational",
      },
    ],
  },
  {
    number: "02",
    title: "Frameworks & Libraries",
    description:
      "Technologies I use to create responsive and interactive applications.",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        level: "Practised",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: "Practised",
      },
      {
        name: "Framer Motion",
        icon: <SiFramer />,
        level: "Practised",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: "Basic",
      },
    ],
  },
  {
    number: "03",
    title: "Backend & Databases",
    description:
      "Exploring server-side development, APIs and data storage.",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        level: "Learning",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: "Basic",
      },
      {
        name: "MySQL",
        icon: <SiMysql />,
        level: "Foundational",
      },
    ],
  },
  {
    number: "04",
    title: "Developer Tools",
    description:
      "Tools I use to write, manage and deploy my projects.",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        level: "Practised",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        level: "Practised",
      },
      {
        name: "Linux / Ubuntu",
        icon: <FaLinux />,
        level: "Practising",
      },
      {
        name: "Vercel",
        icon: <SiVercel />,
        level: "Practised",
      },
    ],
  },
];

const concepts = [
  {
    title: "Object-Oriented Programming",
    abbreviation: "OOP",
    description:
      "Learning classes, objects, encapsulation, inheritance and polymorphism.",
  },
  {
    title: "System Programming",
    abbreviation: "SYS",
    description:
      "Studying Unix commands, system calls, errors and operating system interfaces.",
  },
  {
    title: "Linux & Unix",
    abbreviation: "CLI",
    description:
      "Practising terminal commands, filesystem navigation and command-line workflows.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden bg-[#080B12] px-6 py-24 text-white md:py-32"
    >
      {/* Background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            MY TECH STACK
          </span>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Technologies Behind{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
              My Work
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-400 md:text-lg">
            The languages, frameworks, tools and computer science
            concepts I'm using to grow as a software engineer.
          </p>
        </motion.div>

        {/* Categorized technology cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <motion.article
              key={group.number}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-300 hover:border-blue-400/40 hover:bg-white/[0.055] sm:p-7"
            >
              {/* Hover accent */}
              <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-blue-500 to-violet-500 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-5 flex items-start justify-between gap-3">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                    CATEGORY {group.number}
                  </p>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl">
                    {group.title}
                  </h3>
                </div>

                <span className="font-mono text-sm text-gray-600">
                  /{group.number}
                </span>
              </div>

              <p className="mb-6 text-sm leading-6 text-gray-400">
                {group.description}
              </p>

              <div className="mb-6 h-px bg-white/10" />

              <div className="grid grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    title={`${skill.name}: ${skill.level}`}
                    className="flex min-w-0 items-center gap-3 rounded-xl border border-white/[0.07] bg-[#111722] p-3 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.07]"
                  >
                    <span className="shrink-0 text-2xl text-blue-400">
                      {skill.icon}
                    </span>

                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-gray-100">
                        {skill.name}
                      </p>

                      <p className="mt-1 text-xs leading-4 text-gray-500">
                        {skill.level}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Computer science concepts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-20"
        >
          <div className="mb-8 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Beyond the Code
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Core Computer Science Concepts
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
              Concepts I'm developing through my Software Engineering
              studies, practical exercises and programming projects.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {concepts.map((concept, index) => (
              <motion.article
                key={concept.abbreviation}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                <span className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 px-3 font-mono text-sm font-bold text-violet-300">
                  {concept.abbreviation}
                </span>

                <h4 className="mt-5 text-lg font-semibold text-white">
                  {concept.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {concept.description}
                </p>

                <p className="mt-5 text-xs font-medium text-violet-300">
                  Currently developing
                </p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Learning statement */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-blue-400/15 bg-gradient-to-r from-blue-500/[0.08] via-transparent to-violet-500/[0.08] p-6 text-center md:p-8"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Always Learning
          </p>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            I'm strengthening my programming fundamentals, exploring
            backend development and building practical projects that
            turn ideas into working software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}