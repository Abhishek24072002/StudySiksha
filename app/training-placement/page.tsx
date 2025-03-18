import { TrainingHero } from "@/components/training-hero"
import { InternshipSection } from "@/components/internship-section"
import { ResumeSection } from "@/components/resume-section"

export default function TrainingPlacementPage() {
  return (
    <div className="flex flex-col">
      <TrainingHero />
      <InternshipSection />
      <ResumeSection />
    </div>
  )
}

