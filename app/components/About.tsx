import { Github, Linkedin, Instagram } from "lucide-react";
import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <section
      id="about"
      className="py-20 bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div
          className="cosmic-burst"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(76, 29, 149, 0.1) 0%, rgba(30, 58, 138, 0.1) 25%, transparent 50%)`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About
        </motion.h2>

        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-lg text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hello! I am an enthusiastic programmer and a dedicated student at
            Universitas Pendidikan Ganesha (Undiksha). My passion lies in web
            and mobile development, where I continuously strive to enhance my
            skills in various programming languages. Beyond academics, I work as
            a freelance developer, taking on diverse projects tailored to meet
            specific client needs. Through this, I have gained valuable
            experience in translating concepts into functional solutions, which
            sharpens both my technical expertise and creativity.
          </motion.p>

          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Since my junior high and high school years, I have been actively
            involved in mathematics olympiads, achieving championships that have
            garnered recognition for my region. These experiences have
            significantly strengthened my analytical and problem-solving
            abilities, which are essential in navigating the complexities of
            software development. The combination of academic learning and
            practical application equips me to tackle real-world challenges with
            confidence and precision.
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
