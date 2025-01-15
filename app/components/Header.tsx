'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo hanya sebagai ikon atau brand */}
        <Link href="/" className="text-2xl font-bold text-gradient">
          {/* Teks "Rezzy" hanya sebagai ikon atau logo */}
        </Link>
        
        {/* Menu navigasi diatur agar terpusat seperti ditengah */}
        <div className="flex justify-center items-center space-x-6 w-full">
          {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block text-white hover:text-purple-400 transition duration-300 py-2 md:py-0 border-b md:border-b-0 border-gray-700 md:border-transparent"
            >
              {item}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-purple-400 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}
