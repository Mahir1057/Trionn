import React from "react";

export default function RecentWork() {
  return (
    <section className="w-full bg-black text-white flex flex-col justify-start px-8 py-16 md:py-24 relative">
      {/* Heading */}
      <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-cyan-100">
        RECENT <br /> WORK
      </h2>

      {/* Subtext */}
      <p className="text-gray-400 mt-4 max-w-xl text-lg">
        In the creative wilderness, clients find our work truly beloved.
      </p>

      {/* Explore Work Button - Bottom Right */}
      <button id="recent-work" className="absolute bottom-6 right-6 border border-cyan-200 text-cyan-200 px-6 py-2 rounded-full hover:bg-cyan-200 hover:text-black transition flex items-center gap-2">
        Explore work
      </button>
    </section>
  );
}
