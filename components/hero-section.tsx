"use client"
import { Check } from "lucide-react"
import { VortexDemo } from "@/components/vortex-demo"
import { SplashCursor } from "@/components/ui/splash-cursor"

export function HeroSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Add the splash cursor effect */}
      <SplashCursor BACK_COLOR={{ r: 0, g: 0, b: 0 }} TRANSPARENT={true} COLOR_UPDATE_SPEED={5} />

      {/* Replace ContainerScroll with VortexDemo */}
      <VortexDemo />

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-start gap-2">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg">No Consultation Fees</h3>
              <p className="text-muted-foreground">All our initial consultations are completely free of charge.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg">Expert Career Counseling</h3>
              <p className="text-muted-foreground">Personalized guidance from experienced counselors.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg">Scholarships & Financial Aid</h3>
              <p className="text-muted-foreground">Help finding and applying for financial assistance.</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg">Study Abroad Support</h3>
              <p className="text-muted-foreground">Complete guidance for international education.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

