'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Freelancer',
    position: 'Web Developer',
    period: 'Jan 2024 - Jan 2024',
    description: ' worked as a freelancer, securing clients through Twitter. The task was to refine the interface using Laravel framework along with CSS styling to enhance the web applications appearance. Given the limited timeframe, I worked from night until morning.',
    achievements: [
        'Successfully refined the web applications interface using Laravel framework along with CSS styling, enhancing the overall user experience.',
        'Secured positive client feedback and testimonials for the improvements made.',
        'Demonstrated strong problem-solving skills by addressing and fixing multiple bugs efficiently within the given timeframe.',
        'Received appreciation from the client for delivering the project on time, despite limited working hours.',
        'Leveraged hands-on experience with Laravel to optimize and streamline web development processes, contributing to a seamless and responsive web application.',
      ],
    stack: ['Laravel', 'Css']
  },
  {
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    period: 'Mar 2018 - Dec 2020',
    description: 'Developed and maintained various client projects, focusing on responsive design and optimal performance. Collaborated with cross-functional teams to deliver high-quality solutions.',
    achievements: [
      'Successfully refined the web applications interface using Laravel framework along with CSS styling, enhancing the overall user experience.',
      'Secured positive client feedback and testimonials for the improvements made.',
      'Demonstrated strong problem-solving skills by addressing and fixing multiple bugs efficiently within the given timeframe.',
      'Received appreciation from the client for delivering the project on time, despite limited working hours.',
      'Leveraged hands-on experience with Laravel to optimize and streamline web development processes, contributing to a seamless and responsive web application.',
    ],
    stack: ['Vue.js', 'Express', 'PostgreSQL', 'Docker']
  },
  {
    company: 'StartUp Ventures',
    position: 'Junior Developer',
    period: 'Jun 2016 - Feb 2018',
    description: 'Assisted in the development of web applications and gained hands-on experience with various technologies. Participated in code reviews and contributed to improving development processes.',
    achievements: [
      'Developed a key feature that attracted 10,000 new users within a month',
      'Reduced database query times by 60% through optimization',
      'Contributed to open-source projects, gaining recognition in the developer community'
    ],
    stack: ['JavaScript', 'PHP', 'MySQL', 'jQuery']
  }
]

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-8 flex justify-between items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="w-1/4 text-right pr-8">
                <h3 className="text-xl font-semibold text-gray-800">{exp.company}</h3>
                <p className="text-sm text-gray-600">{exp.period}</p>
              </div>
              <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <button
                  className="text-blue-600 hover:text-blue-800 transition-colors duration-300 mb-2"
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                >
                  {expandedIndex === index ? 'Hide Details' : 'Show Details'}
                </button>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h5 className="font-semibold mt-2 mb-1">Key Achievements:</h5>
                    <ul className="list-disc list-inside mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-gray-700">{achievement}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech, i) => (
                        <span key={i} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
        </div>
      </div>
    </section>
  )
}

