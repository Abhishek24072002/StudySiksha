"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, GraduationCap, Award, Building, Briefcase, FileText } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: <BookOpen className="h-10 w-10 text-primary" />,
    title: "Career Counseling",
    description:
      "Our expert counselors help you identify your strengths, interests, and aptitudes to guide you towards the right career path. We provide personalized advice based on your unique profile and market trends.",
    features: [
      "Personality and aptitude assessment",
      "One-on-one counseling sessions",
      "Career path exploration",
      "Industry insights and trends",
      "Follow-up guidance and support",
    ],
  },
  {
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    title: "College Admissions",
    description:
      "We provide end-to-end support for college applications and admissions. From selecting the right colleges to preparing for entrance exams and interviews, we guide you through every step of the process.",
    features: [
      "College selection based on your profile",
      "Application preparation and review",
      "Entrance exam guidance",
      "Interview preparation",
      "Admission process assistance",
    ],
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Course Selection",
    description:
      "Choosing the right course is crucial for your future career. We help you select courses and specializations that align with your interests, abilities, and career goals, ensuring you make an informed decision.",
    features: [
      "Course comparison and analysis",
      "Specialization guidance",
      "Future career prospects",
      "Industry requirements assessment",
      "Skill development planning",
    ],
  },
  {
    icon: <Building className="h-10 w-10 text-primary" />,
    title: "Scholarship Assistance",
    description:
      "We help you identify and apply for scholarships, grants, and financial aid opportunities. Our team assists with application preparation, ensuring you have the best chance of securing financial support for your education.",
    features: [
      "Scholarship search and matching",
      "Application preparation",
      "Essay and personal statement review",
      "Documentation assistance",
      "Interview preparation",
    ],
  },
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Exam Preparation",
    description:
      "We provide strategic guidance and resources for competitive exams and entrance tests. Our approach focuses on effective study techniques, time management, and targeted practice to help you achieve your best possible score.",
    features: [
      "Exam strategy development",
      "Study plan creation",
      "Resource recommendations",
      "Mock tests and analysis",
      "Performance improvement tips",
    ],
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Internships & Placements",
    description:
      "Access internship opportunities and placement assistance with our partner companies. We help you build your resume, prepare for interviews, and connect with potential employers to kickstart your career.",
    features: [
      "Resume and CV building",
      "Interview preparation",
      "Industry connections",
      "Internship opportunities",
      "Placement assistance",
    ],
  },
]

export function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <h4 className="font-medium mb-2">What we offer:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-primary flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

