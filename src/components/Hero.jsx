import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 md:pt-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-lg mb-4">
            Hello, I'm
          </p>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            Roysmith Bukamu
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-250 mb-6">
            Software Developer | AI Enthusiast | Problem Solver
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Building innovative web applications and AI-powered solutions that
            solve real-world problems. Passionate about technology, software
            development, and continuous learning.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-300 font-medium"
            >
              View Projects
            </a>

            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-500 hover:border-blue-500 rounded-xl transition duration-300 font-medium"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="/profile.jpeg"
              alt="Roysmith Bukamu"
              className="
                w-72
                h-72
                md:w-96
                md:h-96
                object-cover
                rounded-full
                border-4
                border-blue-500
                shadow-[0_0_50px_rgba(59,130,246,0.5)]
                hover:scale-105
                transition-all
                duration-500
              "
            />

            <div className="absolute inset-0 rounded-full border border-blue-400 animate-pulse"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}