"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMaxIndex = () => {
      if (containerRef.current) {
        // Removed containerWidth since it's not being used
        const maxSlides = Math.floor(projects.length / 3);
        setMaxIndex(Math.max(0, maxSlides - 1));
      }
    };

    updateMaxIndex();
    window.addEventListener("resize", updateMaxIndex);
    return () => window.removeEventListener("resize", updateMaxIndex);
  }, []);

  const nextSlide = () => {
    const newIndex = currentIndex + 1;
    if (newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
      controls.start({ x: `${-newIndex * 100}%` });
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      controls.start({ x: `${-(currentIndex - 1)}00%` });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Project
        </motion.h2>
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex items-stretch"
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-48">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-300 mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex space-x-4 mt-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors duration-300 flex items-center space-x-2 hover:bg-blue-600"
                      >
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 text-white px-4 py-2 rounded-full shadow-lg transition-colors duration-300 flex items-center space-x-2 hover:bg-blue-600"
                        >
                          <ExternalLink size={16} />
                          <span>Live</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
