"use client"
import { LayoutGrid } from "@/components/ui/layout-grid"

export default function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Career Counseling</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Our expert counselors help you identify your strengths, interests, and aptitudes to guide you towards the right
        career path. We provide personalized advice based on your unique profile and market trends.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">College Admissions</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We provide end-to-end support for college applications and admissions. From selecting the right colleges to
        preparing for entrance exams and interviews, we guide you through every step of the process.
      </p>
    </div>
  )
}

const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Scholarship Assistance</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        We help you identify and apply for scholarships, grants, and financial aid opportunities. Our team assists with
        application preparation, ensuring you have the best chance of securing financial support for your education.
      </p>
    </div>
  )
}

const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Study Abroad Programs</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Dreaming of studying abroad? Our comprehensive guidance covers everything from university selection to visa
        application. We help you navigate the international education landscape and turn your study abroad dreams into
        reality.
      </p>
    </div>
  )
}

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/placeholder.svg?height=600&width=600",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/placeholder.svg?height=600&width=800",
  },
]

