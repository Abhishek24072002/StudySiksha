import { PartnersHero } from "@/components/partners-hero"
import { PartnerColleges } from "@/components/partner-colleges"
import { CoachingInstitutes } from "@/components/coaching-institutes"

export default function PartnersPage() {
  return (
    <div className="flex flex-col">
      <PartnersHero />
      <PartnerColleges />
      <CoachingInstitutes />
    </div>
  )
}

