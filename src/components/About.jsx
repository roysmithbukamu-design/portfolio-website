import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-10">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a Software Engineering student at Murang'a
              University of Technology with a passion for
              building web applications and AI-powered
              solutions.

              My goal is to create technology that solves
              real-world challenges while continuously
              expanding my expertise in software
              development, artificial intelligence,
              and modern web technologies.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                3+
              </h3>
              <p className="text-gray-400">
                Projects
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                6+
              </h3>
              <p className="text-gray-400">
                Technologies
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                1+
              </h3>
              <p className="text-gray-400">
                Years Learning
              </p>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition duration-300">
              <h3 className="text-4xl font-bold text-blue-400">
                AI
              </h3>
              <p className="text-gray-400">
                Focus Area
              </p>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}