'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    name: 'Project 1',
    description: 'A brief description of Project 1 and its features. This project showcases the use of modern web technologies to solve real-world problems.',
    image: '/placeholder.svg',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com'
  },
  {
    name: 'Project 2',
    description: 'An overview of Project 2 and what it accomplishes. This application demonstrates advanced state management and API integration.',
    image: '/placeholder.svg',
    stack: ['Next.js', 'TypeScript', 'GraphQL'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com'
  },
  {
    name: 'Project 3',
    description: 'Details about Project 3 and its unique aspects. This project focuses on creating a seamless user experience with cutting-edge frontend technologies.',
    image: '/placeholder.svg',
    stack: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com'
  },
  {
    name: 'Project 4',
    description: 'A summary of Project 4 and its key features. This mobile application showcases cross-platform development and real-time data synchronization.',
    image: '/placeholder.svg',
    stack: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com/yourusername/project4',
    live: 'https://project4.com'
  },
  {
    name: 'Project 5',
    description: 'An explanation of Project 5 and its main objectives. This project demonstrates the power of server-side rendering and microservices architecture.',
    image: '/placeholder.svg',
    stack: ['Angular', 'NestJS', 'MySQL'],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.com'
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = projects.length - 3
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
      controls.start({ x: `${-currentIndex - 1}00%` })
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      controls.start({ x: `${-currentIndex + 1}00%` })
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={controls}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-500 hover:shadow-2xl group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="flex space-x-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <Github size={24} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-gray-800 hover:text-blue-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                        >
                          <ExternalLink size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full transition-all duration-300 hover:bg-blue-200 hover:text-blue-900"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

