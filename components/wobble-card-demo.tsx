"use client"
import Image from "next/image"
import { WobbleCard } from "@/components/ui/wobble-card"

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-primary/80 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Free Career Counseling
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Our expert counselors help you identify your strengths, interests, and aptitudes to guide you towards the
            right career path.
          </p>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_b9e72a27.jpg-OtU9g240j8A01W4WIc02XFnavMfRwl.jpeg"
          width={500}
          height={500}
          alt="Graduate student"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-blue-800">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Study Abroad Programs
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          Comprehensive guidance for international education, from university selection to visa application.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-indigo-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Book a Free Consultation Today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Let our experts guide you towards the right educational path and career success. We're here to help you
            achieve your dreams.
          </p>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_3753f8fd.jpg-McD4hFKR03QHb4b4sQKOy2h5pX9MwJ.jpeg"
          width={500}
          height={500}
          alt="Study abroad"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  )
}

