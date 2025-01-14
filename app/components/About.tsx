import { Github, Linkedin, Instagram } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-6">
            Hello! I'm a passionate web developer with a keen eye for design and a love for creating
            beautiful, functional websites. With expertise in modern web technologies, I strive to
            build responsive and user-friendly applications that make a difference.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source
            projects, or enjoying a good book. I'm always excited to take on new challenges and collaborate
            on innovative projects.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

