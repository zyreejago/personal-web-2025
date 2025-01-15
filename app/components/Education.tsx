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
    level: "S1 Teknik Informatika",
    institution: "Universitas Pendidikan Ganesha",
    location: "Kota Singaraja, Indonesia",
    period: "2022 - Sekarang",
    description: "Sedang menempuh pendidikan S1 Teknik Informatika dengan fokus pada pengembangan perangkat lunak, kecerdasan buatan, dan struktur data.",
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
    level: "SMA",
    institution: "MAN 3 Jembrana",
    location: "Kota Jembrana, Indonesia",
    period: "2019 - 2022",
    description: "Menyelesaikan pendidikan menengah atas dengan fokus pada ilmu alam dan teknologi informasi.",
    subjects: [
      { name: "Matematika", icon: Calculator },
      { name: "Fisika", icon: Flask },
      { name: "Kimia", icon: Flask },
      { name: "Biologi", icon: Dna },
      { name: "Bahasa Inggris", icon: Globe },
      { name: "Teknologi Informasi dan Komunikasi", icon: Cpu }
    ]
  },
  {
    level: "SMP",
    institution: "MTS Ma'arif",
    location: "Kota Karangasem, Indonesia",
    period: "2016 - 2019",
    description: "Menyelesaikan pendidikan menengah pertama dengan pengenalan dasar ilmu komputer.",
    subjects: [
      { name: "Matematika", icon: Calculator },
      { name: "IPA", icon: Flask },
      { name: "Bahasa Indonesia", icon: Globe },
      { name: "Bahasa Inggris", icon: Globe },
      { name: "Pengenalan Komputer Dasar", icon: Cpu }
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
                        {edu.ongoing ? "Sedang Mempelajari:" : "Mata Pelajaran Utama:"}
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

