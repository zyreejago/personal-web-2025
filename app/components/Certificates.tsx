import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certificates = [
  {
    name: "ReactJS Basics",
    issuer: "CODEPOLITAN",
    date: "January 2025",
    image: "/assets/images/reactjs_fundamental.png",
  },
  {
    name: "Creating and utilizing components in a ReactJS-based application",
    issuer: "CODEPOLITAN",
    date: "January 2025",
    image: "/assets/images/reactjs_create.png",
  },
  {
    name: "Managing view changes with data and event handlers in a ReactJS-based application",
    issuer: "CODEPOLITAN",
    date: "January 2025",
    image: "/assets/images/certi3.png",
  },
  {
    name: "JavaScript Programming Basics",
    issuer: "Dicoding Indonesia",
    date: "Des 2024",
    image: "/assets/images/certiJS.png",
  },
  {
    name: "Cloud Practitioner Essentials (AWS Cloud Basics)",
    issuer: "Dicoding Indonesia",
    date: "Des 2024",
    image: "/assets/images/certi5.png",
  },
  {
    name: "AJAX and Web API Basics",
    issuer: "CODEPOLITAN",
    date: "Des 2024",
    image: "/assets/images/certi6.png",
  },
];

export default function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 640) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const maxIndex = certificates.length - itemsPerSlide;

  const nextSlide = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section
      id="certificates"
      className="py-16 bg-gray-950 text-white relative overflow-hidden pb-30"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Certificates
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerSlide)
                }%)`,
              }}
            >
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerSlide}%` }}
                >
                  <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg h-64 [perspective:1000px]">
                    <div className="absolute inset-0 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                      <div className="absolute inset-0">
                        <Image
                          src={cert.image}
                          alt={cert.name}
                          layout="fill"
                          objectFit="cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-lg font-bold mb-1">
                            {cert.name}
                          </h3>
                          <p className="text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-blue-600 text-white flex flex-col justify-center items-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h3 className="text-lg font-bold mb-2 text-center">
                          {cert.name}
                        </h3>
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
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex === maxIndex}
            className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-100 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
