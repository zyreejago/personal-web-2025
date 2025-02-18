import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",

  "laravel",
  "nextdotjs",
  "flask",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  
  "docker",
  "git",
    "bitbucket",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  
  "figma",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    
    <div className="relative flex size-full items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
      </div>
      <div className="relative inset-0 z-10"><IconCloud  images={images}  /></div>
      
      
    </div>
  );
}
