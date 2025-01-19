"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const typedText = useTypingEffect("Web and Mobile Developer", 100);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-950 text-white">
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

      {/* Content */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Content */}
        <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-purple-300 typing-container">
            <span className="typing-text">{typedText}</span>
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-300">
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
            >
              Hello World,
            </span>{" "}
            <br/>I am Mohammad Rezzy Alzamzammi
          </h1>
          <div className="flex flex-col sm:flex-row justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-gradient-to-r from-blue-400 to-teal-400 text-gray-900 px-8 py-4 rounded-full font-bold transition duration-300 transform hover:scale-105 hover:from-blue-500 hover:to-teal-500 shadow-neon-blue hover:shadow-neon-blue-intense flex items-center justify-center space-x-2"
            >
              <span>Download CV</span>
              <svg
                className="w-5 h-5 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50 animate-pulse-slow"></div>
            <Image
              src="/assets/file.png"
              alt="Mohammad Rezzy Alzamzammi"
              width={300}
              height={300}
              className="rounded-full border-4 border-purple-300 shadow-2xl relative z-10 hover:scale-105 transition duration-300 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
