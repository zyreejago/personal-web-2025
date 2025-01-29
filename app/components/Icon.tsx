import { SVGProps } from "react"; // Pastikan impor ini ada

// Menyediakan tipe untuk IconName yang hanya bisa berisi nilai tertentu
export type IconName =
  | "nextjs"
  | "html5"
  | "react"
  | "tailwind"
  | "laravel"
  | "flutter"
  | "dart"
  | "firebase"
  | "python"
  | "flask"
  | "docker";

// Interface untuk properti IconProps, menggabungkan properti SVG dan name
export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName; // name berisi salah satu nilai dari IconName
}

// Mengimpor ikon dari react-icons
import {
  SiNextdotjs,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiLaravel,
  SiFlutter,
  SiDart,
  SiFirebase,
  SiPython,
  SiFlask,
  SiDocker,
} from "react-icons/si";

// Menyimpan komponen ikon berdasarkan nama
const iconComponents: Record<
  string,
  React.ComponentType<SVGProps<SVGSVGElement>>
> = {
  nextjs: SiNextdotjs,
  html5: SiHtml5,
  react: SiReact,
  tailwind: SiTailwindcss,
  laravel: SiLaravel,
  flutter: SiFlutter,
  dart: SiDart,
  firebase: SiFirebase,
  python: SiPython,
  flask: SiFlask,
  docker: SiDocker,
};

// Menyimpan warna untuk setiap ikon
const iconColors: Record<string, string> = {
  nextjs: "#000000",
  html5: "#E34F26",
  react: "#61DAFB",
  tailwind: "#06B6D4",
  laravel: "#FF2D20",
  flutter: "#02569B",
  dart: "#0175C2",
  firebase: "#FFCA28",
  python: "#3776AB",
  flask: "#000000",
  docker: "#2496ED",
};

// Komponen Icon yang menerima nama dan menampilkan ikon dengan warna
export function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconComponents[name]; // Menggunakan name untuk memilih ikon
  return IconComponent ? (
    <div className="relative group">
      <IconComponent
        {...props}
        style={{
          ...props.style,
          color: iconColors[name], // Mengatur warna ikon sesuai dengan name
          filter: `drop-shadow(0 0 0.5rem ${iconColors[name]}80)`, // Menambahkan efek shadow
        }}
      />
      <div
        className="absolute inset-0 bg-current opacity-0 group-hover:opacity-25 transition-opacity duration-300 rounded-full blur-xl"
        style={{ backgroundColor: iconColors[name] }}
      ></div>
    </div>
  ) : null; // Jika komponen tidak ditemukan, tidak merender apa-apa
}
