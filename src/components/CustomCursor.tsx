import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);
  const [trails, setTrails] = useState<{ id: number; x: number; y: number }[]>([]);

  // Smooth follow variables
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const speed = 0.2;

  useEffect(() => {
    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // dust trail
      setTrails((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), x: e.clientX, y: e.clientY },
      ]);
    };

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * speed;
      pos.current.y += (mouse.current.y - pos.current.y) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);

  useEffect(() => {
    if (trails.length > 0) {
      const timer = setTimeout(() => {
        setTrails((prev) => prev.slice(1));
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [trails]);

  // Hover detection
  useEffect(() => {
    const interactiveEls = document.querySelectorAll("a, button, [role='button']");
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsActive(true));
      el.addEventListener("mouseleave", () => setIsActive(false));
    });

    // Magnetic buttons (with class .magnetic-btn)
    const magneticEls = document.querySelectorAll(".magnetic-btn");
    magneticEls.forEach((el) => {
      el.addEventListener("mouseenter", () => setIsMagnetic(true));
      el.addEventListener("mouseleave", () => setIsMagnetic(false));
    });

    return () => {
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsActive(true));
        el.removeEventListener("mouseleave", () => setIsActive(false));
      });
      magneticEls.forEach((el) => {
        el.removeEventListener("mouseenter", () => setIsMagnetic(true));
        el.removeEventListener("mouseleave", () => setIsMagnetic(false));
      });
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]">
      {/* Cursor Circle */}
      <div
        ref={cursorRef}
        className={`fixed w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none 
        transition-all duration-300 ease-out mix-blend-difference`}
        style={{
          marginLeft: "-12px",
          marginTop: "-12px",
          backgroundColor: isActive ? "rgba(34,211,238,0.3)" : "transparent",
          transformOrigin: "center",
          scale: isMagnetic ? "3.5" : isActive ? "2" : "1",
          boxShadow: isMagnetic
            ? "0 0 40px 20px rgba(34,211,238,0.4)"
            : "0 0 0 transparent",
        }}
      />

      {/* Dust Trail */}
      {trails.map((trail) => (
        <span
          key={trail.id}
          className="absolute w-3 h-3 rounded-full bg-cyan-300 opacity-50 pointer-events-none"
          style={{
            left: trail.x - 6,
            top: trail.y - 6,
            animation: "dustFade 0.6s ease-out forwards",
          }}
        />
      ))}

      <style>{`
        @keyframes dustFade {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0; transform: scale(2); }
        }
      `}</style>
    </div>
  );
}
