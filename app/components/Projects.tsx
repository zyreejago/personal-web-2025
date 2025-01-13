'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Github } from 'lucide-react'

const projects = [
  {
    name: 'Project 1',
    description: 'A brief description of Project 1 and its features.',
    image: '/placeholder.svg',
    stack: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project1'
  },
  {
    name: 'Project 2',
    description: 'An overview of Project 2 and what it accomplishes.',
    image: '/placeholder.svg',
    stack: ['Next.js', 'TypeScript', 'GraphQL'],
    github: 'https://github.com/yourusername/project2'
  },
  {
    name: 'Project 3',
    description: 'Details about Project 3 and its unique aspects.',
    image: '/placeholder.svg',
    stack: ['Vue.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com/yourusername/project3'
  },
  {
    name: 'Project 4',
    description: 'A summary of Project 4 and its key features.',
    image: '/placeholder.svg',
    stack: ['React Native', 'Firebase', 'Redux'],
    github: 'https://github.com/yourusername/project4'
  },
  {
    name: 'Project 5',
    description: 'An explanation of Project 5 and its main objectives.',
    image: '/placeholder.svg',
    stack: ['Angular', 'NestJS', 'MySQL'],
    github: 'https://github.com/yourusername/project5'
  }
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2">
                  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg h-full group relative">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.name} 
                        layout="fill" 
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 transition-colors duration-300"
                        >
                          <Github size={32} />
                        </a>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{project.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-0.5 rounded transition-transform duration-300 hover:scale-110">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

