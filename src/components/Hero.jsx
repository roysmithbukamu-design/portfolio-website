import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-blue-500/20 blur-[150px] rounded-full top-20 left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-500/20 blur-[150px] rounded-full bottom-20 right-20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center relative z-10"
      >

        <p className="text-blue-400 mb-4 text-lg">
          Hello, I'm
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-white via-blue-300 to-purple-400 bg-clip-text text-transparent">
          Roysmith Bukamu
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
          Software Engineering Student • Full-Stack Developer • AI Enthusiast
        </h2>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-8">
          Building innovative web applications and AI-powered
          solutions that solve real-world problems.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition">
            View Projects
          </button>

          <button className="px-6 py-3 rounded-xl border border-gray-600 hover:border-blue-500 transition">
            Download CV
          </button>

        </div>

      </motion.div>

    </section>
  );
}