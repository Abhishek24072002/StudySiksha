import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Users, Video } from "lucide-react"

export function ResumeSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 bg-muted">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Resume Building & Interview Coaching</h2>
        <p className="mt-4 text-muted-foreground md:text-lg max-w-3xl mx-auto">
          Our expert team helps you create impressive resumes and prepare for interviews to increase your chances of
          landing your dream job.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <FileText className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Resume Building</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Our resume building service helps you create a professional resume that highlights your strengths and
              achievements.
            </CardDescription>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm">
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
                <span>Professional resume templates</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Content writing and editing</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Keyword optimization for ATS</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Multiple revisions and feedback</span>
              </li>
            </ul>
            <Button className="w-full">Book a Session</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Video className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Interview Coaching</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Our interview coaching prepares you to face interviews with confidence and showcase your skills
              effectively.
            </CardDescription>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm">
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
                <span>One-on-one mock interviews</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Common interview questions</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Industry-specific preparation</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Detailed feedback and improvement tips</span>
              </li>
            </ul>
            <Button className="w-full">Schedule Coaching</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <Users className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Group Workshops</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base mb-4">
              Our group workshops provide a collaborative environment to learn and practice job search and interview
              skills.
            </CardDescription>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm">
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
                <span>Interactive group sessions</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Role-playing exercises</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Industry expert sessions</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
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
                <span>Networking opportunities</span>
              </li>
            </ul>
            <Button className="w-full">Join Workshop</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

