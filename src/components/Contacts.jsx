import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaArrowUpRightFromSquare,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";

export default function Contact() {
  const form = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        "service_bejihzr",
        "template_nq4hzeg",
        form.current,
        "-qqj8CadjXR3xy-HO"
      );

      form.current.reset();

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully. Thank you for reaching out!",
      });
    } catch (error) {
      console.error("EmailJS submission failed:", error);

      setStatus({
        type: "error",
        message:
          "We couldn't send your message. Please try again or contact me directly by email.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      description: "Explore my code and projects",
      href: "https://github.com/roysmithbukamu-design",
      icon: FaGithub,
      hover: "hover:border-slate-400 hover:text-slate-700 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      description: "Connect professionally",
      href: "https://www.linkedin.com/in/roysmith-bukamu-517b38408",
      icon: FaLinkedin,
      hover: "hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "Email",
      description: "Send me a direct email",
      href: "mailto:roysmithbukamu@gmail.com",
      icon: FaEnvelope,
      hover: "hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400",
    },
    {
      name: "WhatsApp",
      description: "Let's chat directly",
      href: "https://wa.me/254708440360",
      icon: FaWhatsapp,
      hover: "hover:border-green-500 hover:text-green-600 dark:hover:text-green-400",
    },
    {
      name: "X (Twitter)",
      description: "Follow my updates",
      href: "https://x.com/Roysmith10714",
      icon: FaXTwitter,
      hover: "hover:border-slate-500 hover:text-slate-700 dark:hover:text-white",
    },
    {
      name: "Instagram",
      description: "See more of my world",
      href: "https://www.instagram.com/roysmith_bmw?igsh=MWZwem54c2x2N3Y1dA==",
      icon: FaInstagram,
      hover: "hover:border-pink-500 hover:text-pink-600 dark:hover:text-pink-400",
    },
  ];

  const fieldClass =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-white/10 dark:bg-[#080B12] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-slate-50 px-5 py-24 text-slate-900 transition-colors duration-300 sm:px-8 sm:py-28 dark:bg-[#0a0a0a] dark:text-white"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Get in touch
          </p>

          <h2
            id="contact-heading"
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Contact Me
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Have an idea, an opportunity, or a project in mind? I'd love to
            hear from you. Let's connect and explore what we can build together.
          </p>
        </div>

        {/* Introduction and quick contact */}
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 dark:border-white/10 dark:bg-white/[0.04]">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl"
            />

            <div className="relative">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-500"
                />
                Open to opportunities
              </div>

              <h3 className="max-w-lg text-2xl font-bold leading-tight sm:text-3xl">
                Let's build something great together.
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-slate-600 dark:text-slate-400">
                I'm open to internships, software development opportunities,
                collaborations, and AI-related projects. If you're working on
                something interesting, let's talk.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 dark:border-white/10 dark:bg-white/[0.04]">
            <h3 className="mb-6 text-xl font-bold">Quick Contact</h3>

            <div className="space-y-5">
              <a
                href="mailto:roysmithbukamu@gmail.com"
                className="group flex items-start gap-4 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <FaEnvelope size={18} aria-hidden="true" />
                </span>

                <span className="min-w-0">
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Email
                  </span>
                  <span className="mt-1 block break-all font-medium transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    roysmithbukamu@gmail.com
                  </span>
                </span>
              </a>

              <a
                href="https://wa.me/254708440360"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/10 text-green-600 dark:text-green-400">
                  <FaWhatsapp size={20} aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    WhatsApp
                  </span>
                  <span className="mt-1 block font-medium transition-colors group-hover:text-green-600 dark:group-hover:text-green-400">
                    +254 708 440 360
                  </span>
                </span>
              </a>

              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-600 dark:text-violet-400">
                  <FaLocationDot size={18} aria-hidden="true" />
                </span>

                <span>
                  <span className="block text-sm text-slate-500 dark:text-slate-400">
                    Location
                  </span>
                  <span className="mt-1 block font-medium">
                    Nairobi, Kenya
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="mb-16">
          <div className="mb-6">
            <h3 className="text-xl font-bold">Find me online</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-400">
              Connect with me across my platforms.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    social.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className={`group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-black/20 ${social.hover}`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-current/5 dark:bg-white/[0.06]">
                    <Icon size={24} aria-hidden="true" />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">
                      {social.name}
                    </span>
                    <span className="mt-1 block text-sm text-slate-500 dark:text-slate-400">
                      {social.description}
                    </span>
                  </span>

                  <FaArrowUpRightFromSquare
                    size={13}
                    aria-hidden="true"
                    className="shrink-0 opacity-40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Message form */}
        <div className="grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-9 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-12 dark:border-white/10 dark:bg-white/[0.04]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Send an enquiry
            </p>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
              Send Me a Message
            </h3>

            <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
              Fill in the form and tell me a little about what you have in mind.
              I'll get back to you as soon as I can.
            </p>

            <div className="mt-7 flex items-start gap-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              <span
                aria-hidden="true"
                className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-xs font-bold text-emerald-600 dark:text-emerald-400"
              >
  ✓
              </span>
              <p>
                Your details are used to respond to your enquiry. Please avoid
                including passwords or other sensitive information.
              </p>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium"
              >
                Your name
              </label>
              <input
                id="contact-name"
                type="text"
                name="from_name"
                autoComplete="name"
                placeholder="Enter your name"
                minLength={2}
                maxLength={100}
                required
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>
              <input
                id="contact-email"
                type="email"
                name="reply_to"
                autoComplete="email"
                placeholder="you@example.com"
                maxLength={254}
                required
                className={fieldClass}
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                minLength={10}
                maxLength={5000}
                placeholder="Tell me about your idea, project, or opportunity..."
                required
                className={`${fieldClass} resize-y`}
              />
              <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                Please include enough detail for me to understand your enquiry.
              </p>
            </div>

            {status.message && (
              <div
                role={status.type === "error" ? "alert" : "status"}
                aria-live="polite"
                className={`rounded-xl border p-4 text-sm leading-6 ${
                  status.type === "success"
                    ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                    : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSending ? (
                <>
                  <span
                    aria-hidden="true"
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                  />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane size={15} aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}