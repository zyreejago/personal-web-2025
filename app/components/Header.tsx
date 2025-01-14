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
    <header className={`fixed w-full z-10 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gradient">
          Rezzy.
        </Link>
        <button
          className="md:hidden text-white hover:text-purple-400 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${
          isOpen ? 'block' : 'hidden'
        } md:block absolute md:relative top-full left-0 right-0 md:top-auto bg-gray-900 md:bg-transparent`}>
          <ul className="md:flex space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
            {['Home', 'About', 'Skills', 'Projects', 'Certificates', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block text-white hover:text-purple-400 transition duration-300 py-2 md:py-0 border-b md:border-b-0 border-gray-700 md:border-transparent"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

