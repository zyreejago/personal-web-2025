'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Award } from 'lucide-react'

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % certificates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + certificates.length) % certificates.length)
  }

  return (
    <section id="certificates" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certificates</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {certificates.map((cert, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg overflow-hidden shadow-md h-full group relative">
                    <div className="relative h-48 overflow-hidden">
                      <Image 
                        src={cert.image} 
                        alt={cert.name} 
                        layout="fill" 
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-600 bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Award className="text-white" size={48} />
                      </div>
                    </div>
                    <div className="p-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{cert.name}</h3>
                      <p className="text-sm text-gray-600 mb-1">Issued by: {cert.issuer}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
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

