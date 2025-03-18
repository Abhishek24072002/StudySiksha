"use client"
import { PinContainer } from "@/components/ui/3d-pin"

export default function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center">
      <PinContainer title="Book a Free Consultation" href="/contact">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">Shiksha Yogya</h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">
              We provide FREE career counseling, college admissions support, and study abroad guidance.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-primary via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  )
}

