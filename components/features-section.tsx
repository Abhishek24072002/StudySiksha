"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, Award, Building, Briefcase, FileText } from "lucide-react"
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo"

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
        <p className="mt-4 text-muted-foreground md:text-lg">Comprehensive support for your educational journey</p>
      </div>

      {/* Add the sticky scroll reveal component */}
      <StickyScrollRevealDemo />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-16">
        {[
          {
            icon: <BookOpen className="h-10 w-10 text-primary" />,
            title: "Career Counseling",
            description:
              "Personalized guidance to help you choose the right career path based on your interests, skills, and market demand.",
          },
          {
            icon: <GraduationCap className="h-10 w-10 text-primary" />,
            title: "College Admissions",
            description: "End-to-end support for college applications, entrance exams, and admission procedures.",
          },
          {
            icon: <Award className="h-10 w-10 text-primary" />,
            title: "Course Selection",
            description:
              "Expert advice on choosing the right courses and specializations that align with your career goals.",
          },
          {
            icon: <Building className="h-10 w-10 text-primary" />,
            title: "Scholarship Assistance",
            description: "Help identifying and applying for scholarships, grants, and financial aid opportunities.",
          },
          {
            icon: <Briefcase className="h-10 w-10 text-primary" />,
            title: "Exam Preparation",
            description: "Strategic guidance and resources for competitive exams and entrance tests.",
          },
          {
            icon: <FileText className="h-10 w-10 text-primary" />,
            title: "Internships & Placements",
            description: "Access to internship opportunities and placement assistance with our partner companies.",
          },
        ].map((feature, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <div className="mb-2">{feature.icon}</div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

