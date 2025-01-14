'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const certificates = [
  {
    name: 'Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'January 2023',
    image: '/placeholder.svg'
  },
  {
    name: 'React Nanodegree',
    issuer: 'Udacity',
    date: 'June 2022',
    image: '/placeholder.svg'
  },
  {
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'December 2021',
    image: '/placeholder.svg'
  },
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: 'August 2022',
    image: '/placeholder.svg'
  },
  {
    name: 'Cybersecurity Fundamentals',
    issuer: 'edX',
    date: 'March 2023',
    image: '/placeholder.svg'
  }
]

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const maxIndex = certificates.length - 3

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0))
  }

  return (
    <section id="certificates" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Certificates</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2">
                  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg h-64 [perspective:1000px]">
                    <div className="absolute inset-0 [transform-style:preserve-3d] transition-all duration-500 group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                          <p className="text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-blue-600 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center p-4">
                        <h3 className="text-lg font-bold mb-2 text-center">{cert.name}</h3>
                        <p className="text-sm mb-1">Issued by: {cert.issuer}</p>
                        <p className="text-xs">{cert.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

