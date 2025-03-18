"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { TimelineDemo } from "@/components/timeline-demo"

const successStories = [
  {
    name: "Rahul Sharma",
    achievement: "Secured admission to IIT Delhi",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "With the guidance of Shiksha Yogya, I was able to prepare effectively for JEE Advanced and secure a seat at IIT Delhi. The counselors helped me develop a structured study plan and provided valuable resources that were crucial for my success.",
    year: "2023",
  },
  {
    name: "Priya Patel",
    achievement: "Got selected for MBBS at AIIMS",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "I had always dreamed of becoming a doctor, but the competition for medical seats is intense. Shiksha Yogya's counselors guided me through NEET preparation and helped me secure a seat at AIIMS. Their support was invaluable throughout my journey.",
    year: "2022",
  },
  {
    name: "Amit Kumar",
    achievement: "Received full scholarship for MBA at IIM Ahmedabad",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "The scholarship assistance program at Shiksha Yogya helped me identify and apply for scholarships that I wasn't even aware of. Thanks to their guidance, I received a full scholarship for my MBA at IIM Ahmedabad.",
    year: "2023",
  },
  {
    name: "Neha Singh",
    achievement: "Admitted to Masters program at University of Toronto",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "Studying abroad seemed like a distant dream until I consulted with Shiksha Yogya. They guided me through the entire process, from university selection to visa application. Now I'm pursuing my Masters at the University of Toronto.",
    year: "2022",
  },
  {
    name: "Vikram Malhotra",
    achievement: "Secured internship at Google",
    image: "/placeholder.svg?height=400&width=400",
    story:
      "The internship and placement assistance at Shiksha Yogya helped me prepare for interviews and build a strong resume. With their guidance, I was able to secure an internship at Google, which has been a life-changing experience.",
    year: "2023",
  },
]

export function SuccessStories() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % successStories.length)
  }

  const previous = () => {
    setCurrent((current - 1 + successStories.length) % successStories.length)
  }

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Card className="border-none shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto">
                    <Image
                      src={successStories[current].image || "/placeholder.svg"}
                      alt={successStories[current].name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold">{successStories[current].name}</h3>
                        <p className="text-sm">{successStories[current].achievement}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm mb-4">
                        Success Story • {successStories[current].year}
                      </div>
                      <h2 className="text-2xl font-bold mb-4">{successStories[current].achievement}</h2>
                      <p className="text-muted-foreground">{successStories[current].story}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <p className="text-sm text-muted-foreground">
                        {current + 1} of {successStories.length}
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={previous}>
                          <ChevronLeft className="h-4 w-4" />
                          <span className="sr-only">Previous</span>
                        </Button>
                        <Button variant="outline" size="icon" onClick={next}>
                          <ChevronRight className="h-4 w-4" />
                          <span className="sr-only">Next</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Add the timeline component */}
      <div className="mt-24">
        <TimelineDemo />
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {successStories.slice(0, 3).map((story, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={story.image || "/placeholder.svg"} alt={story.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold mb-1">{story.name}</h3>
              <p className="text-sm text-primary mb-2">{story.achievement}</p>
              <p className="text-sm text-muted-foreground line-clamp-3">{story.story}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

