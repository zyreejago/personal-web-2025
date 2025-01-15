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
    company: 'Freelancer',
    position: 'Web Developer',
    period: 'Jan 2025 - Jan 2025',
    description: 'I worked as a freelancer, securing clients through Twitter. The task was to refine the interface using Laravel framework along with CSS styling to enhance the web applications appearance. Given the limited timeframe, I worked from night until morning.',
    achievements: [
      'Successfully refined the web applications interface using Laravel framework along with CSS styling, enhancing the overall user experience.',
      'Secured positive client feedback and testimonials for the improvements made.',
      'Demonstrated strong problem-solving skills by addressing and fixing multiple bugs efficiently within the given timeframe.',
      'Received appreciation from the client for delivering the project on time, despite limited working hours.',
      'Leveraged hands-on experience with Laravel to optimize and streamline web development processes, contributing to a seamless and responsive web application.',
    ],
    stack: ['Laravel', 'CSS']
  },
  {
    type: 'work',
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
    stack: ['Flutter', 'Laravel']
  },
]

const organizationExperiences: OrganizationExperience[] = [
  {
    type: 'organization',
    organization: 'INTEGER #6',
    position: 'Event Coordinator Mobile Legends',
    period: 'Mar 2025 - Jun 2025',
    description: 'Coordinated a major tech conference, managing logistics, speaker arrangements, and attendee experience.',
    achievements: [
      'Successfully organized a conference for over 500 attendees, receiving 95% positive feedback.',
      'Managed a team of 20 volunteers, ensuring smooth operation across all conference areas.',
      'Secured sponsorships from 10 major tech companies, increasing the event budget by 30%.',
      'Implemented an innovative mobile app for real-time schedule updates and networking, enhancing attendee engagement.',
    ],
    skills: ['Event Management', 'Team Leadership', 'Sponsorship Acquisition', 'Mobile App Implementation']
  },
  {
    type: 'organization',
    organization: 'INTEGER #5',
    position: 'Event Coordinator PUBG Mobile',
    period: 'Sep 2024 - Nov 2024',
    description: 'Led the technical aspects of a university-wide hackathon, focusing on emerging technologies.',
    achievements: [
      'Designed and implemented the hackathon\'s technical infrastructure, supporting over 200 participants.',
      'Created comprehensive documentation and conducted workshops to assist participants with various technologies.',
      'Collaborated with industry partners to provide cutting-edge tools and platforms for the event.',
      'Mentored 5 winning teams, helping them refine their projects for real-world application.',
    ],
    skills: ['Technical Leadership', 'Workshop Facilitation', 'Mentoring', 'Emerging Tech']
  },
  {
    type: 'organization',
    organization: 'INTEGER #5',
    position: 'Logistic',
    period: 'Jan 2024 - Dec 2024',
    description: 'Managed a year-long initiative to develop open-source solutions for local non-profit organizations.',
    achievements: [
      'Led a team of 15 volunteer developers to complete 5 impactful projects for community organizations.',
      'Implemented agile methodologies, resulting in a 40% increase in project completion efficiency.',
      'Organized monthly code review sessions, enhancing code quality and knowledge sharing among team members.',
      'Established partnerships with 3 local tech companies for ongoing support and resources.',
    ],
    skills: ['Project Management', 'Agile Methodologies', 'Open Source Development', 'Community Outreach']
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
