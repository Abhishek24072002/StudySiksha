import { Vortex } from "@/components/ui/vortex"

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">Empowering Students for Success</h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          We provide FREE career counseling, college admissions support, and study abroad guidance.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2 bg-primary hover:bg-primary/90 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
            Book a Free Consultation
          </button>
          <button className="px-4 py-2 text-white">Learn More</button>
        </div>
      </Vortex>
    </div>
  )
}

