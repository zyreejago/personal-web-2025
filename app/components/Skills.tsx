'use client'

import { useEffect, useRef } from 'react'

const skills = [
    { "name": "Next.js", "description": "React framework for production" },
    { "name": "HTML", "description": "Hypertext Markup Language" },
    { "name": "React", "description": "Library for building UIs" },
    { "name": "Tailwind CSS", "description": "Utility-first CSS framework" },
    { "name": "Laravel", "description": "PHP framework for development" },
    { "name": "Flutter", "description": "Programming Mobile language" },
    { "name": "Dart", "description": "Language for Flutter" },
    { "name": "Firebase", "description": "Backend as a service" },
    { "name": "Python", "description": "Programming language" },
    { "name": "Flask", "description": "Micro web framework for Python" },
    { "name": "Docker", "description": "Container platform" }
]

export default function Skills() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const marquee = marqueeRef.current
    if (marquee) {
      const animation = marquee.animate(
        [
          { transform: 'translateX(0%)' },
          { transform: 'translateX(-50%)' }
        ],
        {
          duration: 30000,
          iterations: Infinity
        }
      )
      return () => animation.cancel()
    }
  }, [])

  return (
    <section id="skills" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient animate-pulse-slow">Skills</h2>
        <div className="overflow-hidden">
          <div ref={marqueeRef} className="flex whitespace-nowrap">
            {[...skills, ...skills].map((skill, index) => (
              <div key={index} className="inline-flex flex-col items-center mx-8">
                <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <p className="text-sm text-gray-300 max-w-[200px]">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
