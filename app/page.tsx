"use client";

import dynamic from "next/dynamic";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";

import Projects from "./components/Projects";
import Certificates from "./components/Certificates";

import Education from "./components/Education";
import  {HeroParallax}  from "@/components/ui/hero-parallax";
import TextPressure from './TextPressure/TextPressure';
import { AnimatedBeamDemo } from "./components/AnimatedBeamDemo";
import { ScrollBasedVelocityDemo } from "./components/ScrollBasedVelocityDemo";





const WorkExperience = dynamic(() => import("./components/WorkExperience"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        
        <ScrollBasedVelocityDemo/>
        
        <AnimatedBeamDemo/>
        <WorkExperience />
        <Projects />
        <HeroParallax
  products={[
    { title: "Detection Hoax Using Web Semantic", link: "https://github.com/zyreejago", thumbnail: "/assets/images/detection-hoa.jpg" },
    { title: "Cokedex", link: "https://github.com/8bitos/UAS-MOBILE/tree/main", thumbnail: "/assets/images/cokedex.jpg" },
    { title: "MyBuilder", link: "https://github.com/zyreejago/MyBuilder-project", thumbnail: "/assets/images/mybuilder.jpg" },
    { title: "re-u", link: "https://re-u.clarencespdf.site/", thumbnail: "/assets/images/re-u.jpeg" },
    { title: "moome", link: "https://github.com/zyreejago", thumbnail: "/assets/images/moome.jpg" },
    { title: "MyBuilder", link: "https://github.com/zyreejago/MyBuilder-project", thumbnail: "/assets/images/mybuilder.jpg" },
    { title: "re-u", link: "https://re-u.clarencespdf.site/", thumbnail: "/assets/images/re-u.jpeg" },
    { title: "moome", link: "https://github.com/zyreejago", thumbnail: "/assets/images/moome.jpg" },
    { title: "apepe premium", link: "https://github.com/zyreejago/dummy-wordpress", thumbnail: "/assets/images/apepe.jpg" },



  ]}
/>
        <Certificates />
        
        
        <TextPressure
    text="Thank you!"
    flex={true}
    alpha={false}
    stroke={false}
    width={true}
    weight={true}
    italic={true}
    textColor="#ffffff"
    strokeColor="#ff0000"
    minFontSize={36}
  />
        



      </main>
    </div>
  );
}
