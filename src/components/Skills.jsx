import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import { SiMysql } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "SQL", icon: <SiMysql size={40} /> },
  { name: "C", icon: "C" },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:-translate-y-2 transition duration-300"
            >
              <div className="flex flex-col items-center gap-3">
  <div className="text-blue-400">
    {skill.icon}
  </div>

  <h3 className="text-lg font-semibold">
    {skill.name}
  </h3>
</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}