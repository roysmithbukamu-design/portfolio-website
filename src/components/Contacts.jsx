import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <div className="mb-10">
  <p className="text-blue-400 font-medium">
    Available for Opportunities
  </p>

  <h3 className="text-2xl font-bold mt-2">
    Let's Build Something Great Together
  </h3>

  <p className="text-gray-400 mt-4 max-w-2xl">
    I'm currently open to internships, software
    development opportunities, collaborations,
    and AI-related projects.
  </p>
</div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-10">
  <h3 className="text-xl font-bold mb-4">
    Quick Contact
  </h3>

  <p className="text-gray-400">
    Email: roysmithbukamu@gmail.com
  </p>

  <p className="text-gray-400 mt-2">
    WhatsApp: +254 708 440 360
  </p>

  <p className="text-gray-400 mt-2">
    Location: Kenya
  </p>
</div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <a
          href="https://github.com/roysmithbukamu-design"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition"
        >
          <FaGithub size={28} />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/roysmith-bukamu-517b38408"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition"
        >
          <FaLinkedin size={28} />
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:roysmithbukamu@gmail.com"
          className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition"
        >
          <FaEnvelope size={28} />
          <span>Email</span>
        </a>

        <a
          href="https://wa.me/254708440360"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)] transition"
        >
          <FaWhatsapp size={28} />
          <span>WhatsApp</span>
        </a>

        <a
  href="https://x.com/Roysmith10714"
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] transition"
>
  <FaXTwitter size={28} />
  <span>X (Twitter)</span>
</a>

    <a
  href="https://www.instagram.com/roysmith_bmw?igsh=MWZwem54c2x2N3Y1dA=="
  target="_blank"
  rel="noreferrer"
  className="flex items-center gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-pink-500 hover:shadow-[0_0_25px_rgba(236,72,153,0.3)] transition"
>
  <FaInstagram size={28} />
  <span>Instagram</span>
</a>

      </div>
      <div className="mt-16 bg-white/5 border border-white/10 rounded-3xl p-8">

  <h3 className="text-2xl font-bold mb-6">
    Send Me a Message
  </h3>

  <form className="space-y-6">

    <input
      type="text"
      placeholder="Your Name"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
    />

    <input
      type="email"
      placeholder="Your Email"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
    />

    <textarea
      rows="5"
      placeholder="Your Message"
      className="w-full p-4 rounded-xl bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
    ></textarea>

    <button
      type="submit"
      className="px-6 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
    >
      Send Message
    </button>

  </form>

</div>
    </section>
  );
}