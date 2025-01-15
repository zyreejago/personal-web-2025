'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Freelancer',
    position: 'Web & Mobile Developer',
    period: 'Jan 2025 - Present',
    description: 'As a freelancer, I provide professional web and mobile development services, helping clients complete their projects efficiently and effectively. I focus on delivering high-quality results that meet client expectations, with attention to detail and a commitment to timely completion. My work consistently receives positive feedback, reflecting my dedication to client satisfaction and excellence in every project.',
    achievements: [
        'Successfully delivered multiple web and mobile projects as a freelancer, meeting client expectations and timelines.',
        'Maintained a high level of client satisfaction with consistent positive feedback on quality and timely delivery.',
        'Worked collaboratively with clients to understand their unique needs, ensuring effective solutions tailored to their requirements.',
        'Gained a strong reputation for reliability and professionalism in delivering well-crafted, user-friendly applications.',
        'Continuously improved technical skills and project management abilities, ensuring the successful completion of diverse projects.',
      ],
    stack: ['ReactJs', 'Flutter','Laravel','Python', 'Flask','C', 'WordPress']
  },
  {
    company: 'Freelancer',
    position: 'Web Developer',
    period: 'Jan 2025 - Jan 2025',
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
    company: 'Freelancer',
    position: 'Mobile Developer',
    period: 'Jan 2025 - Jan 2025',
    description: 'I developed a simple mobile app as a freelancer using Flutter for the frontend and Laravel for the backend. The project focused on delivering smooth functionality and a user-friendly design to meet the clients need.',
    achievements: [
      'Successfully developed a simple mobile app using Flutter for the frontend and Laravel for the backend.',
      'Delivered the project on time with smooth functionality and user-friendly design.',
      'Received positive feedback from the client for quality and professionalism.',
      'Enhanced my professional portfolio with this achievement.',
    ],
    stack: ['Flutter', 'Laravel', ]
  },
  
]

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="experience" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient animate-pulse-slow">Work Experience</h2>
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
                <h3 className="text-xl font-semibold text-gray-300">{exp.company}</h3>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
              <div className="w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">{exp.position}</h4>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <button
                  className="text-purple-400 hover:text-purple-600 transition-colors duration-300 mb-2"
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
                    <h5 className="font-semibold text-purple-300 mt-2 mb-1">Key Achievements:</h5>
                    <ul className="list-disc list-inside mb-4 text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm">{achievement}</li>
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
        </div>
      </div>
    </section>
  )
}

