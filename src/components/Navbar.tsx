import React, { useState } from "react";

export default function Navbar() {
  // Track theme state
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(document.documentElement.classList.contains("dark"));
  };

  // Smooth scroll to section by ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full h-16 md:h-20 flex justify-between items-center px-6 md:px-12 bg-white/70 dark:bg-black/70 backdrop-blur-sm z-50 transition-colors duration-500">
      {/* Logo */}
      <h1
        onClick={() => scrollToSection("hero")}
        className="text-xl md:text-2xl font-bold tracking-wider text-black dark:text-white cursor-pointer hover:text-cyan-300 transition"
      >
        TRIONN®
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 font-medium text-black dark:text-white">
        <li
          onClick={() => scrollToSection("hero")}
          className="cursor-pointer hover:text-cyan-300 transition"
        >
          Home
        </li>
        <li
          onClick={() => scrollToSection("recent-work")}
          className="cursor-pointer hover:text-cyan-300 transition"
        >
          Work
        </li>
        <li
          onClick={() => scrollToSection("who-we-are")}
          className="cursor-pointer hover:text-cyan-300 transition"
        >
          About
        </li>
        <li
          onClick={() => scrollToSection("social-links")}
          className="cursor-pointer hover:text-cyan-300 transition"
        >
          Contact
        </li>
      </ul>

      {/* Right side */}
      <div className="flex gap-3 items-center">
        {/* Dark / Light toggle */}
        <button
          onClick={toggleTheme}
          className="rounded-full bg-gray-200 dark:bg-gray-800 p-2 text-black dark:text-white transition"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Mobile menu button */}
        <button className="md:hidden rounded-full bg-gray-200 dark:bg-gray-800 p-2 text-black dark:text-white transition">
          ≡
        </button>
        <span className="hidden md:inline font-medium text-cyan-600 dark:text-cyan-100">
          MENU
        </span>
      </div>
    </header>
  );
}
