import type { SVGProps } from "react"

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
  | "docker"

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName
}

