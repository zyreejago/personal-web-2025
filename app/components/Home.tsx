"use client";

import { useEffect, useState, useCallback } from "react";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { motion } from "framer-motion";

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
      {/* Background Effect */}
      <div className="absolute inset-0">
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
      <div className="relative z-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-4 text-purple-300"
        >
          <span>{typedText}</span>
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-300"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Hello World,
          </span>{" "}
          <br />I am Mohammad Rezzy Alzamzammi
        </motion.h1>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            href="https://drive.google.com/drive/folders/1-8TnRTeEY9rfk-rrIRI5xESWUiboqIHT"
            download
            className="bg-gradient-to-r from-blue-400 to-teal-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-neon-blue hover:shadow-neon-blue-intense flex items-center space-x-2 transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download CV</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </motion.a>

          <motion.a
            href="#contact"
            className="border-2 border-purple-400 text-purple-400 px-6 py-3 rounded-full font-bold flex items-center space-x-2 transition-all hover:scale-105"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(167, 139, 250, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get in Touch</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </motion.a>
        </div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-purple-500 rounded-full blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/2 w-16 h-16 bg-teal-500 rounded-full blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
}
