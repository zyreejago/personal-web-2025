import Image from 'next/image'
import Link from 'next/link'


export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white mb-8 md:mb-0">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Developer</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">I am Mohammad Rezzy Alzamzammi</h1>
          <div className="flex space-x-4">
            <Link
              href="#contact"
              className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300"
            >
              Hire Me
            </Link>
            <a
              href="/path-to-your-cv.pdf"
              download
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/assets/file.png"
            alt="Mohammad Rezzy Alzamzammi"
            width={400}
            height={400}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

