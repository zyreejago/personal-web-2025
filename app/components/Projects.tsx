"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = projects.length - 3;
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
      controls.start({ x: `${-(currentIndex + 1)}00%` });
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
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Projects
        </h2>
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <motion.div
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-500 hover:shadow-2xl group"
                  whileHover={{
                    scale: 1.05,
                    borderRadius: "1rem",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                    borderRadius: {
                      duration: 0.1,
                    },
                  }}
                >
                  <div className="relative h-48 overflow-hidden group-hover:rounded-t-xl transition-all duration-300">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="flex space-x-6"
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Github size={24} />
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-gray-800 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                          >
                            <ExternalLink size={24} />
                          </a>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                  <div className="p-6 group-hover:rounded-b-xl transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {project.name}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "#90cdf4",
                            color: "#2c5282",
                          }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10,
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-300">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
          <motion.button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
