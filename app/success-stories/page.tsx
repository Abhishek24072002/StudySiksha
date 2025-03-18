"use client"

import GoogleGeminiEffectDemo from "@/components/google-gemini-effect-demo"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SuccessStoriesPage() {
  return (
    <div className="flex flex-col">
      {/* Success Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Success Stories</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Celebrating the achievements of students who have benefited from our guidance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Story */}
      <section className="container mx-auto px-4 py-12 md:py-24">
        <Card className="border-none shadow-lg overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_b9e72a27.jpg-OtU9g240j8A01W4WIc02XFnavMfRwl.jpeg"
                  alt="Graduate student"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Rahul Sharma</h3>
                    <p className="text-sm">Secured admission to IIT Delhi</p>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                    Success Story • 2023
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Secured admission to IIT Delhi</h2>
                  <p className="text-muted-foreground">
                    With the guidance of Shiksha Yogya, I was able to prepare effectively for JEE Advanced and secure a
                    seat at IIT Delhi. The counselors helped me develop a structured study plan and provided valuable
                    resources that were crucial for my success.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-sm text-muted-foreground">1 of 5</p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Success Timeline with Google Gemini Effect */}
      <section className="w-full">
        <GoogleGeminiEffectDemo />
      </section>

      {/* More Success Stories */}
      <section className="container mx-auto px-4 py-12 md:py-24 bg-muted">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">More Success Stories</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Card className="overflow-hidden h-full">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_d503afc4.jpg-pRJlLdAlTLXhUbXgNL0tdr3gkJXSOp.jpeg"
                  alt="Graduation ceremony"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-1">Priya Patel</h3>
                <p className="text-sm text-primary mb-2">Got selected for MBBS at AIIMS</p>
                <p className="text-sm text-muted-foreground">
                  I had always dreamed of becoming a doctor, but the competition for medical seats is intense. Shiksha
                  Yogya's counselors guided me through NEET preparation and helped me secure a seat at AIIMS.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Card className="overflow-hidden h-full">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.17_a233e427.jpg-NpmXqEj7cQ1VS4JhASaAt2zBJlXQm6.jpeg"
                  alt="Study desk"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-1">Amit Kumar</h3>
                <p className="text-sm text-primary mb-2">Received full scholarship for MBA at IIM Ahmedabad</p>
                <p className="text-sm text-muted-foreground">
                  The scholarship assistance program at Shiksha Yogya helped me identify and apply for scholarships that
                  I wasn't even aware of. Thanks to their guidance, I received a full scholarship for my MBA at IIM
                  Ahmedabad.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
            <Card className="overflow-hidden h-full">
              <div className="relative h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_3753f8fd.jpg-McD4hFKR03QHb4b4sQKOy2h5pX9MwJ.jpeg"
                  alt="Study abroad"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-1">Neha Singh</h3>
                <p className="text-sm text-primary mb-2">Admitted to Masters program at University of Toronto</p>
                <p className="text-sm text-muted-foreground">
                  Studying abroad seemed like a distant dream until I consulted with Shiksha Yogya. They guided me
                  through the entire process, from university selection to visa application. Now I'm pursuing my Masters
                  at the University of Toronto.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

