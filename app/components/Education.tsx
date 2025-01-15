'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, GraduationCap, Calendar, MapPin, BookOpen, Code, Database, Network, Brain, Smartphone, Calculator, FlaskRoundIcon as Flask, Dna, Globe, Cpu } from 'lucide-react'

type Education = {
  level: string
  institution: string
  location: string
  period: string
  description: string
  subjects?: { name: string; icon: React.ElementType }[]
  ongoing?: boolean
  progress?: number
}

const educationData: Education[] = [
  {
    level: "Bachelor's Degree in Informatics Engineering",
    institution: "Universitas Pendidikan Ganesha",
    location: "Singaraja, Indonesia",
    period: "2022 - Present",
    description: "In college, I have been learning a lot about programming, which sparked my interest in diving deeper into this field. As a result, I have been studying web and mobile development, which has led me to work as a freelancer, as I am doing now.",
    subjects: [
      { name: "Algoritma dan Struktur Data", icon: Code },
      { name: "Pemrograman Berorientasi Objek", icon: Code },
      { name: "Basis Data", icon: Database },
      { name: "Jaringan Komputer", icon: Network },
      { name: "Kecerdasan Buatan", icon: Brain },
      { name: "Pengembangan Aplikasi Web dan Mobile", icon: Smartphone }
    ],
    ongoing: true,
    progress: 75
  },
  {
    level: "Senior High School.",
    institution: "MAN 3 Jembrana",
    location: "Jembrana, Indonesia",
    period: "2019 - 2022",
    description: "In high school, I achieved first place in a national online Mathematics Olympiad, third place in the most prestigious district-level Mathematics Olympiad event, and third place in a math competition among Islamic schools in the district.",
    subjects: [
      { name: "Matematika", icon: Calculator },
      { name: "Fisika", icon: Flask },
      { name: "Kimia", icon: Flask },
      { name: "Biologi", icon: Dna },
      { name: "Bahasa Inggris", icon: Globe },
       
    ]
  },
  {
    level: "Junior High School",
    institution: "MTS Ma'arif",
    location: "Karangasem, Indonesia",
    period: "2016 - 2019",
    description: "In junior high school, I won second place in the district Mathematics Olympiad and the training program, earning the chance to compete at the provincial level. Although I didn't win provincially, it was a valuable experience.",
    subjects: [
      { name: "Matematika", icon: Calculator },
      { name: "IPA", icon: Flask },
      { name: "Bahasa Indonesia", icon: Globe },
      { name: "Bahasa Inggris", icon: Globe },
    
    ]
  }
]

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(prevIndex => prevIndex === index ? null : index)
  }

  return (
    <section id="education" className="py-20 bg-gray-950 text-white relative overflow-hidden">
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
          Education
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div 
                className="p-6 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{edu.level}</h3>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-400"
                  >
                    {expandedIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </motion.div>
                </div>
                <div className="mt-2 flex items-center text-gray-300 text-sm">
                  <GraduationCap size={16} className="mr-2 text-blue-400" />
                  <span>{edu.institution}</span>
                </div>
                <div className="mt-1 flex items-center text-gray-400 text-sm">
                  <Calendar size={16} className="mr-2 text-green-400" />
                  <span>{edu.period}</span>
                </div>
                <div className="mt-1 flex items-center text-gray-400 text-sm">
                  <MapPin size={16} className="mr-2 text-red-400" />
                  <span>{edu.location}</span>
                </div>
                {edu.ongoing && (
                  <div className="mt-3">
                    <div className="text-xs font-medium text-gray-400 mb-1">Progress</div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                        style={{ width: `${edu.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                      <h4 className="font-semibold text-base text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
                        {edu.ongoing ? "Currently Learning:" : "Already Learned:"}
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.subjects?.map((subject, i) => (
                          <motion.div
                            key={i}
                            className="flex items-center bg-gray-700 rounded-lg p-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <subject.icon size={16} className="mr-2 text-purple-400 flex-shrink-0" />
                            <span className="text-xs">{subject.name}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

