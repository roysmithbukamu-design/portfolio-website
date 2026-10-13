import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28 sm:pt-32 md:pt-24"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-violet-600/10 blur-[110px]" />

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10 lg:gap-16">

        {/* Left: Introduction */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 text-center md:order-1 md:text-left"
        >
          {/* Student badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>

            <span className="text-sm font-medium tracking-wide text-blue-300">
              Software Engineering Student
            </span>
          </div>

          <p className="mb-3 text-lg font-medium text-gray-400">
            Hello, I'm
          </p>

          <h1 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Roysmith
            <span className="mt-1 block bg-gradient-to-r from-blue-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Bukamu.
            </span>
          </h1>

          <h2 className="mb-6 text-lg font-semibold leading-relaxed text-gray-200 sm:text-xl lg:text-2xl">
            Software Developer
            <span className="text-blue-400"> · </span>
            AI Enthusiast
            <span className="text-blue-400"> · </span>
            Problem Solver
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg md:mx-0">
            I build modern web experiences, explore AI-powered ideas, and turn
            concepts into practical digital solutions. I'm constantly learning,
            experimenting, and sharpening my skills to create technology that
            makes a difference.
          </p>

          {/* Areas of interest */}
          <div className="mb-9 flex flex-wrap justify-center gap-3 md:justify-start">
            <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300">
              Web Development
            </span>

            <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-gray-300">
              Artificial Intelligence
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              View Projects
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-blue-400/60 hover:bg-blue-500/[0.08] hover:text-white"
            >
              <FaDownload className="text-blue-400" />
              View My CV
            </a>
          </div>
        </motion.div>

        {/* Right: Profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[380px]">

            {/* Outer glow */}
            <div className="absolute inset-5 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Decorative rings */}
            <div className="absolute -inset-3 rounded-full border border-blue-400/20" />

            <div className="absolute -inset-6 rounded-full border border-violet-400/10" />

            {/* Image frame */}
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-blue-400 via-blue-600 to-violet-600 p-[3px] shadow-[0_0_60px_rgba(59,130,246,0.2)]">
              <div className="h-full w-full overflow-hidden rounded-full bg-gray-950 p-2">
                <img
                  src="/profile.jpeg"
                  alt="Portrait of Roysmith Bukamu"
                  fetchPriority="high"
                  className="h-full w-full rounded-full object-cover object-center transition duration-700 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}