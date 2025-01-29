import type { SVGProps } from "react";

// Menggunakan named export untuk tipe IconName dan IconProps
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

// Interface untuk IconProps
export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
}
