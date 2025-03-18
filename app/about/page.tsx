import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Users, Heart } from "lucide-react"
import { BackgroundGradientAnimationDemo } from "@/components/ui/background-gradient-animation"
import { ColourfulTextDemo } from "@/components/ui/colourful-text"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* About Hero with Background Gradient Animation */}
      <section className="w-full">
        <BackgroundGradientAnimationDemo />
      </section>

      {/* About Content */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Who We Are</h2>
            <p className="text-muted-foreground">
              Shiksha Yogya Pvt Ltd is a leading educational consulting firm dedicated to helping students navigate
              their educational journey. Founded in 2021, we have been providing free career counseling, college
              admissions support, and study abroad guidance to students across India.
            </p>
            <p className="text-muted-foreground">
              Our team of experienced counselors and education experts work closely with students to understand their
              interests, strengths, and aspirations, and guide them towards making informed decisions about their
              education and career.
            </p>
            <p className="text-muted-foreground">
              We believe that every student deserves access to quality education and career guidance, regardless of
              their financial background. That's why we offer our initial consultations completely free of charge.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_f71428d3.jpg-rKSi5qCSYpOs9RbZmpJHkCIFxMeyZw.jpeg"
              alt="Shiksha Yogya Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 py-12 md:py-24 bg-muted">
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
      </section>

      {/* Colorful Text Section */}
      <section className="w-full">
        <ColourfulTextDemo />
      </section>
    </div>
  )
}

