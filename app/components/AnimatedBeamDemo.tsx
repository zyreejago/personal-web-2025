"use client";

import React, { forwardRef, useRef } from "react";
import { Icons } from "./icons"
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";


export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)
  const div9Ref = useRef<HTMLDivElement>(null)
  const div10Ref = useRef<HTMLDivElement>(null)

  return (
    <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden p-10 " ref={containerRef}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
      </div>
      <div className="flex size-full max-h-[3000px] max-w-2xl flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.nextjs />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.typescript />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div4Ref}>
            <Icons.flutter />
          </Circle>
          <Circle ref={div5Ref} className="size-20">
            <Icons.skills />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.firebase />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div7Ref}>
            <Icons.javascript />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.flask />
          </Circle>
          <Circle ref={div9Ref}>
            <Icons.python />
          </Circle>
          <Circle ref={div10Ref}>
            <Icons.cpp />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div5Ref} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div5Ref} curvature={-25} endYOffset={-5} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div5Ref} curvature={25} endYOffset={-5} />
      <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div5Ref} curvature={-25} endYOffset={5} />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div5Ref} curvature={25} endYOffset={5} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div5Ref}
        curvature={-75}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div5Ref}
        curvature={-25}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div5Ref}
        curvature={25}
        endYOffset={10}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div5Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  )
}

