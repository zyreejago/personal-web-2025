'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'

const projects = [
  {
    name: 'Detection Hoax Using Web Semantic',
    description: 'Detection Hoax Using Web Semantic is a project developed using Python for web scraping from detik.com and CNN Indonesia. The backend is built using GraphDB to manage and analyze data. In this project, I collaborated with a team of 3 members, including myself, to ensure the successful implementation and functionality of the system.',
    image: '/placeholder.svg',
    stack: ['Python', 'Flask', 'Scrapping Web'],
    github: 'https://github.com/yourusername/project1',
    live: 'https://project1.com'
  },
  {
    name: 'Cokedex',
    description: 'Cokedex is a Flutter application developed with a Laravel backend. The application allows users to search for food recipes, post new recipes, and interact with an AI bot powered by Gemini, which is free and limited to providing information solely about food. In this project, I collaborated with a team of 5 members, including myself, to ensure the successful development and functionality of the application.',
    image: '/placeholder.svg',
    stack: ['Flutter', 'Laravel'],
    github: 'https://github.com/yourusername/project2',
    live: 'https://project2.com'
  },
  {
    name: 'GoCheck',
    description: 'GoCheck is a web application similar to a simple to-do list where users can add or delete notes they have written. The website is built using ReactJS, ensuring a smooth and user-friendly experience.',
    image: '/placeholder.svg',
    stack: ['ReactJS'],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.com'
  },
  {
    name: 'Project from CODEPOLITAN',
    description: 'The project involves creating a simple blog application with pages for Home, Articles, and Blog. The articles are fetched from JSONPlaceholder API, and the frontend is developed using ReactJS.',
    image: '/placeholder.svg',
    stack: ['React.JS'],
    github: 'https://github.com/yourusername/project3',
    live: 'https://project3.com'
  },
  {
    name: 'MyBuilder',
    description: 'MyBuilder is a web application built with a PHP frontend and a MySQL backend. This platform is designed for people who have difficulty finding craftsmen, allowing them to order services online. In this project, I collaborated with a team of 3 members, including myself, with the role of team leader',
    image: '/placeholder.svg',
    stack: ['PHP', 'MySql'],
    github: 'https://github.com/yourusername/project4',
    live: 'https://project4.com'
  },
  {
    name: 'apepe premium',
    description: 'apepe premium is a website built using WordPress, utilizing the Elementor plugin and eCommerce features. This simple eCommerce site allows users to order premium applications directly through the website.',
    image: '/placeholder.svg',
    stack: ['WordPress', 'MySQL'],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.com'
  },{
    name: 'Project from CODEPOLITAN',
    description: 'Project from Codepolitan involves creating a website that fetches data from TVMaze API. The website will display popular TV shows or movies, providing users with a simple and interactive platform to explore content.',
    image: '/placeholder.svg',
    stack: ['JavaScript'],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.com'
  },{
    name: 'Project from CODEPOLITAN',
    description: 'Project from Codepolitan involves creating a website that fetches jokes using the Jokes Retrieval API. When users click a button on the website, a random joke is displayed, providing a fun and interactive experience.  ',
    image: '/placeholder.svg',
    stack: ['JavaScript'],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.com'
  },
  {
    name: 'Project from Clients',
    description: 'Project from clients involves creating custom web or mobile solutions tailored to the specific needs and requirements of each client. Due to confidentiality agreements, I am unable to provide specific details about these projects to maintain client privacy. ',
    image: '/placeholder.svg',
    stack: ['Laravel','Flutter','ReactJS','WordPress',],
    github: 'https://github.com/yourusername/project5',
    live: 'https://project5.com'
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = projects.length - 3
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
      controls.start({ x: `${-(currentIndex + 1)}00%` })
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      controls.start({ x: `${-(currentIndex - 1)}00%` })
    }
  }

  return (
    <section id="projects" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Projects</h2>
        <div className="relative overflow-hidden" ref={containerRef}>
          <motion.div
            className="flex"
            animate={controls}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full transform transition-all duration-500 hover:shadow-2xl group">
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
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-md hover:bg-blue-600 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
