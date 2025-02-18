
import { motion } from "framer-motion";



export default function Contact() {
  
  return (
    
    <section
      id="contact"
      className=" text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
    <div className="stars"></div>
  </div>
      
      
      
      {/* Moved motion.h2 element to the top */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 relative pt-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
    </section>
  );
}
