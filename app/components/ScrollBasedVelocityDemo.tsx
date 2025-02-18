  import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

  export function ScrollBasedVelocityDemo() {
    return (
      
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-20">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden">
          <div className="stars"></div>
          
        </div>
          
        <VelocityScroll>* Web & Mobile Developer</VelocityScroll>
        
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
      </div>
    );
  }
