import { motion } from "framer-motion";
import {
  FaBullseye,
  FaRobot,
  FaGamepad,
  FaGlobe,
  FaGithub,
  FaExternalLinkAlt,
  FaCircle,
  FaClipboardList,
  FaDraftingCompass,
  FaCode,
  FaVial,
  FaTools,
} from "react-icons/fa";

const projects = [
  {
    title: "Number Guessing Game",
    icon: <FaGamepad />,
    status: "Completed",
    description:
      "A command-line number guessing game built in C. It generates a random number, guides players with higher-or-lower feedback, and tracks the number of attempts.",
    tech: ["C", "Control Structures", "CLI"],
    github:
      "https://github.com/roysmithbukamu-design/number-guessing-game-c",
    demo: null,
  },
  {
    title: "FocusFlow Productivity App",
    icon: <FaBullseye />,
    status: "In Progress",
    phase: "Requirements Gathering",
    description:
      "A productivity-focused software project exploring ways to help users manage distractions and improve focus. I'm following the Software Development Life Cycle (SDLC), starting with user surveys and requirements analysis before moving into system design.",
    tech: ["Requirements Engineering", "User Research", "SDLC"],
    github: null,
    demo: null,
    showSdlc: true,
  },
  {
    title: "Portfolio Website",
    icon: <FaGlobe />,
    status: "Completed",
    description:
      "A responsive developer portfolio built with React and Tailwind CSS. Framer Motion adds smooth transitions and interactive details while the site showcases my skills, projects, and developer journey.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github:
      "https://github.com/roysmithbukamu-design/portfolio-website",
    demo: "https://roysmithdev.vercel.app",
  },
  {
    title: "AI Chatbot",
    icon: <FaRobot />,
    status: "Planned",
    description:
      "A planned AI-powered conversational assistant intended to explore how intelligent systems can help users find information and solve practical problems.",
    tech: ["Python", "Artificial Intelligence"],
    github: null,
    demo: null,
  },
];

const sdlcStages = [
  {
    name: "Requirements",
    detail: "Gathering user needs and analyzing survey feedback",
    icon: <FaClipboardList />,
    state: "current",
  },
  {
    name: "Design",
    detail: "Planning the architecture, data, and user interface",
    icon: <FaDraftingCompass />,
    state: "upcoming",
  },
  {
    name: "Implementation",
    detail: "Building the application",
    icon: <FaCode />,
    state: "upcoming",
  },
  {
    name: "Testing",
    detail: "Checking functionality and usability",
    icon: <FaVial />,
    state: "upcoming",
  },
  {
    name: "Deployment & Maintenance",
    detail: "Releasing the application and improving it over time",
    icon: <FaTools />,
    state: "upcoming",
  },
];

const statusStyles = {
  Completed:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:border-emerald-400/20 dark:text-emerald-400",
  "In Progress":
    "border-amber-500/30 bg-amber-500/10 text-amber-700 dark:border-amber-400/20 dark:text-amber-300",
  Planned:
    "border-blue-500/30 bg-blue-500/10 text-blue-700 dark:border-blue-400/20 dark:text-blue-300",
};

function SdlcProgress() {
  return (
    <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-colors duration-300 dark:border-white/10 dark:bg-gray-950/60 sm:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Development roadmap
          </p>

          <h4 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
            Software Development Life Cycle
          </h4>
        </div>

        <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-xs font-medium text-amber-700 dark:border-amber-400/20 dark:text-amber-300">
          Phase 1 of 5
        </span>
      </div>

      <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <div className="h-full w-1/5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
      </div>

      <div className="space-y-5">
        {sdlcStages.map((stage, index) => {
          const isCurrent = stage.state === "current";

          return (
            <div key={stage.name} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                    isCurrent
                      ? "border-blue-400/40 bg-blue-500/15 text-blue-600 dark:text-blue-400"
                      : "border-slate-200 bg-white text-slate-400 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-500"
                  }`}
                >
                  {isCurrent ? (
                    stage.icon
                  ) : (
                    <FaCircle className="text-[7px]" />
                  )}
                </div>

                {index !== sdlcStages.length - 1 && (
                  <div className="mt-2 min-h-5 w-px flex-1 bg-slate-200 dark:bg-white/10" />
                )}
              </div>

              <div className="flex-1 pb-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h5
                    className={`font-semibold ${
                      isCurrent
                        ? "text-slate-900 dark:text-white"
                        : "text-slate-500 dark:text-gray-400"
                    }`}
                  >
                    {stage.name}
                  </h5>

                  {isCurrent && (
                    <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-blue-700 dark:text-blue-300">
                      Current phase
                    </span>
                  )}
                </div>

                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-gray-500">
                  {stage.detail}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 border-t border-slate-200 pt-4 text-xs leading-5 text-slate-500 dark:border-white/10 dark:text-gray-500">
        Future phases are planned milestones, not completed work. The roadmap
        will be updated as the project progresses.
      </p>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl scroll-mt-24 overflow-hidden bg-slate-50 px-6 py-24 text-slate-900 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-white md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7 }}
      >
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
            What I'm building
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Featured{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Projects.
            </span>
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-gray-400 sm:text-lg">
            A collection of projects reflecting my growth in programming, web
            development, and software engineering — from foundational
            applications to a structured, research-driven SDLC project.
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_12px_40px_rgba(59,130,246,0.08)] dark:border-white/10 dark:bg-white/[0.035] dark:hover:bg-white/[0.05] sm:p-8"
            >
              {/* Card header */}
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-xl text-blue-600 transition duration-300 group-hover:bg-blue-500/20 dark:border-blue-400/20 dark:text-blue-400">
                  {project.icon}
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="break-words text-xl font-bold leading-snug text-slate-900 dark:text-white sm:text-2xl">
                    {project.title}
                  </h3>

                  {project.phase && (
                    <p className="mt-1 text-xs text-slate-500 dark:text-gray-500">
                      Current phase: {project.phase}
                    </p>
                  )}
                </div>

                <span
                  className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-medium ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="mb-6 text-sm leading-7 text-slate-600 dark:text-gray-400 sm:text-base">
                {project.description}
              </p>

              {/* FocusFlow roadmap */}
              {project.showSdlc && <SdlcProgress />}

              {/* Technology tags and project links */}
              <div className="mt-auto pt-6">
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-5 dark:border-white/10">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub />
                      GitHub
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  ) : (
                    <span className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-500 dark:border-white/10 dark:text-gray-500">
                      <FaGithub />
                      Repository coming soon
                    </span>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-400/50 hover:text-blue-700 dark:border-white/15 dark:text-gray-200 dark:hover:text-white"
                      aria-label={`Open live demo of ${project.title}`}
                    >
                      Live Demo
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}