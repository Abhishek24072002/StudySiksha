import { ServicesGrid } from "@/components/services-grid"
import { ServiceHero } from "@/components/service-hero"

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServiceHero />
      <ServicesGrid />
    </div>
  )
}

