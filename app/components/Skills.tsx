"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Icon } from "./Icon";
import type { IconName } from "./Icon";

const skills: { name: string; description: string; icon: IconName }[] = [
  { name: "HTML", description: "Hypertext Markup Language", icon: "html5" },
  {
    name: "Next.js",
    description: "React framework for production",
    icon: "nextjs",
  },
  { name: "React", description: "Library for building UIs", icon: "react" },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: "tailwind",
  },
  {
    name: "Laravel",
    description: "PHP framework for development",
    icon: "laravel",
  },
  {
    name: "Flutter",
    description: "Programming Mobile language",
    icon: "flutter",
  },
  { name: "Dart", description: "Language for Flutter", icon: "dart" },
  { name: "Firebase", description: "Backend as a service", icon: "firebase" },
  { name: "Python", description: "Programming language", icon: "python" },
  {
    name: "Flask",
    description: "Micro web framework for Python",
    icon: "flask",
  },
  { name: "Docker", description: "Container platform", icon: "docker" },
];

export default function Skills() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const animation = marquee.animate(
        [{ transform: "translateX(0%)" }, { transform: "translateX(-100%)" }],
        {
          duration: 30000, // Durasi panjang untuk smooth
          iterations: Number.POSITIVE_INFINITY,
        }
      );
      return () => animation.cancel();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="py-20 relative overflow-hidden bg-gray-950 text-white">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div
          className="cosmic-burst"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 29, 149, 0.1) 0%, rgba(30, 58, 138, 0.1) 25%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Skills & Technologies
        </h2>
        <div className="overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex"
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              animation: "marquee 30s linear infinite",
            }}
          >
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div key={index} className="flex-shrink-0 w-64 mx-4">
                <div className="h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg border border-gray-700">
                  <Icon name={skill.icon} className="w-16 h-16 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add the CSS for smooth marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        /* For smaller devices, increase the duration for smoother animation */
        @media (max-width: 768px) {
          .flex {
            animation-duration: 45s; /* Increase animation duration for mobile */
          }
        }
      `}</style>
    </section>
  );
}
