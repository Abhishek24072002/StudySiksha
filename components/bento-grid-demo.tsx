"use client"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { BookOpen, GraduationCap, Award, Building, Briefcase, FileText } from "lucide-react"

export default function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  )
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
)

const items = [
  {
    title: "Career Counseling",
    description:
      "Personalized guidance to help you choose the right career path based on your interests, skills, and market demand.",
    header: <Skeleton />,
    icon: <BookOpen className="h-4 w-4 text-primary" />,
  },
  {
    title: "College Admissions",
    description: "End-to-end support for college applications, entrance exams, and admission procedures.",
    header: <Skeleton />,
    icon: <GraduationCap className="h-4 w-4 text-primary" />,
  },
  {
    title: "Course Selection",
    description: "Expert advice on choosing the right courses and specializations that align with your career goals.",
    header: <Skeleton />,
    icon: <Award className="h-4 w-4 text-primary" />,
  },
  {
    title: "Scholarship Assistance",
    description: "Help identifying and applying for scholarships, grants, and financial aid opportunities.",
    header: <Skeleton />,
    icon: <Building className="h-4 w-4 text-primary" />,
  },
  {
    title: "Exam Preparation",
    description: "Strategic guidance and resources for competitive exams and entrance tests.",
    header: <Skeleton />,
    icon: <Briefcase className="h-4 w-4 text-primary" />,
  },
  {
    title: "Internships & Placements",
    description: "Access to internship opportunities and placement assistance with our partner companies.",
    header: <Skeleton />,
    icon: <FileText className="h-4 w-4 text-primary" />,
  },
]

