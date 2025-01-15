import { Github, Linkedin, Instagram } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-950 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gradient animate-pulse-slow">About Me</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-6 animate-fade-in">
            Hello! I am an enthusiastic programmer and a dedicated student at Universitas Pendidikan Ganesha (Undiksha). My passion lies in web and mobile development, where I continuously strive to enhance my skills in various programming languages. Beyond academics, I work as a freelance developer, taking on diverse projects tailored to meet specific client needs. Through this, I have gained valuable experience in translating concepts into functional solutions, which sharpens both my technical expertise and creativity.
          </p>
          <p className="text-lg text-gray-300 mb-8 animate-fade-in animation-delay-300">
          Since my junior high and high school years, I have been actively involved in mathematics olympiads, achieving championships that have garnered recognition for my region. These experiences have significantly strengthened my analytical and problem-solving abilities, which are essential in navigating the complexities of software development. The combination of academic learning and practical application equips me to tackle real-world challenges with confidence and precision.
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in animation-delay-600">
            <a
              href="https://github.com/zyreejago"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/rezzyalzamzammi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://instagram.com/mrzyalzm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
