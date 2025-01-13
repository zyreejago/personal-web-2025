"use client";

import dynamic from 'next/dynamic'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'

const WorkExperience = dynamic(() => import('./components/WorkExperience'), { ssr: false })

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <WorkExperience />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  )
}

