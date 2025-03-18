import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Heart } from "lucide-react"

export function AboutContent() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Who We Are</h2>
          <p className="text-muted-foreground">
            Shiksha Yogya Pvt Ltd is a leading educational consulting firm dedicated to helping students navigate their
            educational journey. Founded in 2021, we have been providing free career counseling, college admissions
            support, and study abroad guidance to students across India.
          </p>
          <p className="text-muted-foreground">
            Our team of experienced counselors and education experts work closely with students to understand their
            interests, strengths, and aspirations, and guide them towards making informed decisions about their
            education and career.
          </p>
          <p className="text-muted-foreground">
            We believe that every student deserves access to quality education and career guidance, regardless of their
            financial background. That's why we offer our initial consultations completely free of charge.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Why Choose Us</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <div className="rounded-full bg-primary p-1 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium leading-none">Free Consultations</h3>
                <p className="text-sm text-muted-foreground">
                  We offer free initial consultations to all students, making quality guidance accessible to everyone.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <div className="rounded-full bg-primary p-1 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium leading-none">Expert Counselors</h3>
                <p className="text-sm text-muted-foreground">
                  Our team consists of experienced education experts with in-depth knowledge of various fields and
                  institutions.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <div className="rounded-full bg-primary p-1 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium leading-none">Extensive Network</h3>
                <p className="text-sm text-muted-foreground">
                  We have partnerships with numerous colleges, universities, and coaching institutes across India and
                  abroad.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <div className="rounded-full bg-primary/10 p-1">
                <div className="rounded-full bg-primary p-1 text-primary-foreground">
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
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium leading-none">Personalized Approach</h3>
                <p className="text-sm text-muted-foreground">
                  We provide customized guidance based on each student's unique interests, abilities, and goals.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <Target className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To empower students with the knowledge and resources they need to make informed decisions about their
                education and career, and to help them achieve their full potential.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To be the most trusted educational consulting firm in India, known for our integrity, expertise, and
                commitment to student success.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <Heart className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Values</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Integrity, Excellence, Accessibility, Student-Centered Approach, and Continuous Improvement guide
                everything we do at Shiksha Yogya.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

