"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY === 0) {
        setActiveSection("home");
      } else {
        const sections = [
          "Home",
          "About",
          "Education",
          "Experience",
          "Projects",
          "Certificates",
        ];
        const currentSection = sections.find((section) => {
          const element = document.getElementById(section.toLowerCase());
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom > 100;
          }
          return false;
        });

        if (currentSection) {
          setActiveSection(currentSection.toLowerCase());
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "") {
        setActiveSection("home");
      } else if (menuItems.map((item) => item.toLowerCase()).includes(hash)) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Education",
    "Experience",
    "Projects",
    "Certificates",
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex justify-center items-center space-x-6 w-full">
          {menuItems.map((item) => (
            <Link
              key={item}
              href={item.toLowerCase() === "" ? "#" : `#${item.toLowerCase()}`}
              className={`relative text-white hover:text-purple-400 transition duration-300 py-2 px-1 group ${
                activeSection === item.toLowerCase() ? "text-purple-400" : ""
              }`}
              onClick={() => {
                if (item.toLowerCase() === "home") {
                  setActiveSection("home");
                }
              }}
            >
              {item}
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
                initial={false}
                animate={{
                  width: activeSection === item.toLowerCase() ? "100%" : "0%",
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 opacity-0"
                initial={false}
                whileHover={{ width: "100%", opacity: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
            </Link>
          ))}
        </nav>

        <div className="md:hidden ml-auto">
          <button
            className="text-white hover:text-purple-400 transition duration-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item}
                  href={
                    item.toLowerCase() === "home"
                      ? "#"
                      : `#${item.toLowerCase()}`
                  }
                  className={`relative text-white hover:text-purple-400 transition duration-300 py-2 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : ""
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    setActiveSection(item.toLowerCase());
                  }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400"
                    initial={false}
                    animate={{
                      width:
                        activeSection === item.toLowerCase() ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
