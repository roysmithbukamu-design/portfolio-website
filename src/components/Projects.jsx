import { motion } from "framer-motion";

import {
  FaBullseye,
  FaRobot,
  FaGamepad,
  FaGlobe
} from "react-icons/fa";

const projects = [
  {
    title: "Number Guessing Game",
    icon: <FaGamepad />,
    status: "Completed",
    description:
      "A lightweight, deterministic number-guessing engine built entirely in procedural C to demonstrate foundational low-level programming concepts within a command-line interface (CLI). The application implements optimized binary-search feedback loops, robust buffer clearing to handle malicious user input gracefully, and efficient memory management to deliver a lightning-fast, terminal-native user experience.",
    tech: ["C"],
    github: "https://github.com/roysmithbukamu-design/number-guessing-game-c",
    demo: null,
  },
  {
    title: "FocusFlow Productivity App",
    icon: <FaBullseye />,
    status: "In Progress",
    description:
      "A context-aware productivity engine that automatesphysical and digital environments into distraction free-zones using geofencing,real-time device restriction and smart-home hardware triggers.",
    tech: ["Typescript", "React", "Tailwind CSS"],
    github: "https://github.com/roysmithbukamu-design",
    demo: null,
  },
  {
    title: "Portfolio Website",
    icon: <FaGlobe />,
    status: "Completed",
    description:
      "A high-performance, single-page portfolio engineered with React and Tailwind CSS to showcase technical expertise through a clean, developer-centric interface. Leveraging Framer Motion, the site features fluid, physics-based transitions and micro-interactions that elevate the user experience without sacrificing performance or accessibility..",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/roysmithbukamu-design/portfolio-website",
    demo: null,
  },
  {
    title: "AI Chatbot",
    icon: <FaRobot />,
    status: "Planned",
    description:
      "An AI-powered conversational assistant designed to solve user problems.",
    tech: ["Python", "AI"],
    github: "https://github.com/roysmithbukamu-design",
    demo: null,
  },
];
 

const statusColor = {
  Completed: "text-green-400",
  "In Progress": "text-yellow-400",
  Planned: "text-blue-400",
};

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12">
          Projects
        </h2>
<p className="text-gray-400 mb-12 max-w-2xl">
  A collection of projects showcasing my journey
  from C programming fundamentals to modern web
  development and artificial intelligence.
</p>
        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:-translate-y-2 transition duration-300"
            >
              
              {/* Title + Status */}
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
  <span className="text-blue-400 text-2xl">
    {project.icon}
  </span>

  <h3 className="text-2xl font-bold">
    {project.title}
  </h3>
</div>

                <span className={`text-sm ${statusColor[project.status]}`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-6">

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
  >
    GitHub
  </a>

  {project.demo && (
    <a
      href={project.demo}
      target="_blank"
      rel="noreferrer"
      className="px-4 py-2 border border-gray-600 rounded-lg hover:border-blue-500 transition"
    >
      Live Demo
    </a>
  )}

</div>

            </div>
          ))}

        </div>
      </motion.div>

    </section>
  )};
