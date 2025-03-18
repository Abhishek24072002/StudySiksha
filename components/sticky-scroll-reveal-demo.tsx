"use client"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import Image from "next/image"

const content = [
  {
    title: "Career Counseling",
    description:
      "Work together with our expert counselors to identify your strengths, interests, and aptitudes. We provide personalized guidance to help you choose the right career path based on your unique profile and market trends.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Career Counseling
      </div>
    ),
  },
  {
    title: "College Admissions",
    description:
      "Navigate the complex college admission process with our end-to-end support. From selecting the right colleges to preparing for entrance exams and interviews, we guide you through every step to secure admission in your dream college.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/placeholder.svg?height=300&width=300"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="College admissions"
        />
      </div>
    ),
  },
  {
    title: "Scholarship Assistance",
    description:
      "Don't let financial constraints limit your education. Our scholarship assistance program helps you identify and apply for scholarships, grants, and financial aid opportunities to make your education affordable.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Scholarship Assistance
      </div>
    ),
  },
  {
    title: "Study Abroad Programs",
    description:
      "Dreaming of studying abroad? Our comprehensive guidance covers everything from university selection to visa application. We help you navigate the international education landscape and turn your study abroad dreams into reality.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Study Abroad Programs
      </div>
    ),
  },
]

export default function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  )
}

