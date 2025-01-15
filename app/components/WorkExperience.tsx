'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type WorkExperience = {
  type: 'work';
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  stack: string[];
}

type OrganizationExperience = {
  type: 'organization';
  organization: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
  skills: string[];
}

type Experience = WorkExperience | OrganizationExperience;

const workExperiences: WorkExperience[] = [
  {
    type: 'work',
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
    type: 'work',
    company: 'fyisite.id',
    position: 'Intern - Curriculum Developer',
    period: 'Jan 2025 - Feb 2025',
    description: 'During my internship as a Curriculum Developer, I was tasked with designing and organizing full-stack development materials using the ReactJS framework. I was given a one-month period to complete this task, where I focused on developing comprehensive and user-friendly content for web. My role required thorough research, clear structuring of topics, and creating practical examples to enhance the learning experience for trainees. The experience allowed me to hone my technical skills and improve my ability to create structured educational content in a limited timeframe.',
    achievements: [
      'Obtaining a Certification.',
      'Receiving a Letter of Recommendation from a senior developer, highlighting my ability to manage complex projects effectively.',
      'Gaining strong recommendations on LinkedIn and building valuable connections with influential industry professionals.',
    ],
    stack: ['ReactJs', 'Vercel']
  },
  {
    type: 'work',
    company: 'Freelancer',
    position: 'Web Developer',
    period: 'Jan 2025 - Jan 2025',
    description: 'I worked as a freelancer. The task was to refine the interface using Laravel framework along with CSS styling to enhance the web applications appearance. Given the limited timeframe, I worked from night until morning.',
    achievements: [
      'Successfully refined the web applications interface using Laravel framework along with CSS styling, enhancing the overall user experience.',
      'Secured positive client feedback and testimonials for the improvements made.',
      'Demonstrated strong problem-solving skills by addressing and fixing multiple bugs efficiently within the given timeframe.',
      'Received appreciation from the client for delivering the project on time, despite limited working hours.',
      'Leveraged hands-on experience with Laravel to optimize and streamline web development processes, contributing to a seamless and responsive web application.',
    ],
    stack: ['Laravel', 'CSS']
  },
 
]

const organizationExperiences: OrganizationExperience[] = [
  {
    type: 'organization',
    organization: 'INTEGER #6',
    position: 'Event Coordinator Mobile Legends',
    period: 'Agust 2024 - Nov 2024',
    description: 'As the coordinator for the Mobile Legends event at Integer #6, my responsibilities include scheduling with team members, developing a guidebook, managing stage setups, and ensuring smooth event execution for 32 participants from high schools and universities in Bali.',
    achievements: [
      'Displaying strong leadership by guiding the team effectively to work collaboratively.',
      'Collaborating in teamwork to ensure a smooth event by coordinating well among committee members.',
      'Supporting the successful execution of the event with structured and professional organization.',

    ],
    skills: ['Event Management', 'Team Leadership']
  },
  {
    type: 'organization',
    organization: 'INTEGER #5',
    position: 'Event Coordinator PUBG Mobile',
    period: 'Sep 2023 - Oct 2023',
    description: 'As the coordinator for the PUBG Mobile event at Integer #5, my responsibilities include scheduling with team members, creating a guidebook, managing stage mockups, and facilitating the event exclusively for TI Undiksha students to nurture their gaming talents.',
    achievements: [
      'Displaying strong leadership by guiding the team effectively to work collaboratively.',
      'Collaborating in teamwork to ensure a smooth event by coordinating well among committee members.',
      'Supporting the successful execution of the event with structured and professional organization.',
    ],
    skills: ['Team Leadership', 'Event Management']
  },
  {
    type: 'organization',
    organization: 'INTEGER #5',
    position: 'Logistic',
    period: 'Oct 2023 - Dec 2023',
    description: 'As a logistics member for the Music Event at Integer #5, my role involves assisting in managing and displaying the artist requirements, ensuring smooth execution of logistical operations for the event.',
    achievements: [
      'Coordinating with the logistics team to ensure the provision of required equipment and resources according to the schedule.',
      'Managing and monitoring logistics workflows to support the overall smooth execution of the event.',
    ],
    skills: ['Responsibility', 'Time Management']
  },
]

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [showOrganization, setShowOrganization] = useState(false)

  const experiences: Experience[] = showOrganization ? organizationExperiences : workExperiences

  return (
    <section id="experience" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient animate-pulse-slow">
          {showOrganization ? 'Organization Experience' : 'Work Experience'}
        </h2>

        {/* Toggle Button */}
        <div className="flex justify-center mb-12">
          <motion.button
            className="px-6 py-3 bg-purple-600 rounded-full text-white font-semibold shadow-lg hover:bg-purple-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowOrganization(!showOrganization)}
          >
            <motion.span
              initial={false}
              animate={{ rotate: showOrganization ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              
            </motion.span>
            {' '}{showOrganization ? 'Work' : 'Organization'} Experience
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={showOrganization ? 'Organization' : 'work'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-8 flex flex-col md:flex-row justify-between items-start"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-full md:w-1/4 text-left md:text-right pr-0 md:pr-8 mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-purple-400">
                    {exp.type === 'work' ? exp.company : exp.organization}
                  </h3>
                  <p className="text-sm text-gray-400">{exp.period}</p>
                </div>
                <div className="w-full md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">{exp.position}</h4>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <motion.button
                    className="text-purple-400 hover:text-purple-600 transition-colors duration-300 mb-2"
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedIndex === index ? 'Hide Details' : 'Show Details'}
                  </motion.button>
                  <AnimatePresence>
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
                          {(exp.type === 'work' ? exp.stack : exp.skills).map((tech, i) => (
                            <motion.span
                              key={i}
                              className="bg-blue-600 text-white text-xs font-semibold px-2.5 py-0.5 rounded"
                              whileHover={{ scale: 1.1, backgroundColor: '#4299e1' }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
