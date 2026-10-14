import { useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const themeButton = (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center
        rounded-xl border border-slate-300 bg-white text-slate-700
        transition-colors duration-300 hover:bg-slate-100
        focus:outline-none focus:ring-2 focus:ring-blue-500
        dark:border-white/15 dark:bg-white/5 dark:text-yellow-300
        dark:hover:bg-blue-500/20"
    >
      {isDark ? (
        /* Sun icon: click to switch to light mode */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
          />
        </svg>
      ) : (
        /* Moon icon: click to switch to dark mode */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"
          />
        </svg>
      )}
    </button>
  );

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full border-b
        border-slate-200 bg-white/80 backdrop-blur-md
        transition-colors duration-300
        dark:border-white/10 dark:bg-black/70"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.jpeg"
            alt="RoySmithDev Logo"
            className="h-10 w-auto md:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 transition-colors duration-300
                hover:text-blue-500
                dark:text-gray-300 dark:hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}

          {themeButton}
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          {themeButton}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center
              rounded-xl border border-slate-300 bg-white text-slate-800
              transition hover:bg-slate-100
              dark:border-white/15 dark:bg-white/5 dark:text-white
              dark:hover:bg-blue-500/20"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6l12 12M18 6 6 18"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div id="mobile-navigation" className="px-6 pb-5 md:hidden">
          <div
            className="mx-auto max-w-6xl rounded-2xl border
              border-slate-200 bg-white/95 p-3 shadow-xl
              shadow-slate-200/40
              dark:border-white/10 dark:bg-gray-950/95
              dark:shadow-blue-950/20"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-slate-700
                  transition-colors duration-200 hover:bg-blue-500/10
                  hover:text-blue-600
                  dark:text-gray-200 dark:hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}