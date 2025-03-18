import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const companies = [
  { name: "Google", logo: "/placeholder.svg?height=100&width=100" },
  { name: "Microsoft", logo: "/placeholder.svg?height=100&width=100" },
  { name: "Amazon", logo: "/placeholder.svg?height=100&width=100" },
  { name: "Infosys", logo: "/placeholder.svg?height=100&width=100" },
  { name: "TCS", logo: "/placeholder.svg?height=100&width=100" },
  { name: "Wipro", logo: "/placeholder.svg?height=100&width=100" },
]

export function InternshipSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Internship & Job Opportunities</h2>
          <p className="text-muted-foreground">
            We have partnerships with leading companies across various industries to provide internship and job
            opportunities to our students. Our placement cell works closely with these companies to match students with
            suitable positions based on their skills and interests.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-8">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative h-16 w-16 mb-2">
                  <Image src={company.logo || "/placeholder.svg"} alt={company.name} fill className="object-contain" />
                </div>
                <p className="text-sm font-medium text-center">{company.name}</p>
              </div>
            ))}
          </div>

          <Button className="mt-6">View All Opportunities</Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>How to Apply</CardTitle>
            <CardDescription>Follow these steps to apply for internships and jobs through our platform</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Register with our placement cell</h4>
                  <p className="text-sm text-muted-foreground">
                    Fill out the registration form with your details, skills, and preferences.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Update your resume</h4>
                  <p className="text-sm text-muted-foreground">
                    Our team will help you create or update your resume to highlight your strengths.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Attend interview preparation sessions</h4>
                  <p className="text-sm text-muted-foreground">
                    Participate in mock interviews and training sessions to prepare for actual interviews.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Apply for opportunities</h4>
                  <p className="text-sm text-muted-foreground">
                    Browse available opportunities and apply for those that match your profile.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  5
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Receive ongoing support</h4>
                  <p className="text-sm text-muted-foreground">
                    Our team will provide support throughout the application and interview process.
                  </p>
                </div>
              </li>
            </ol>

            <Button variant="outline" className="mt-6 w-full">
              Download Application Guide
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

