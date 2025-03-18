"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
  {
    quote:
      "Shiksha Yogya helped me get into my dream college. Their counselors provided excellent guidance throughout the admission process.",
    author: "Rahul Sharma",
    role: "Engineering Student, IIT Delhi",
  },
  {
    quote:
      "I was confused about which career path to choose. The career counseling at Shiksha Yogya helped me understand my strengths and interests, and guided me towards the right direction.",
    author: "Priya Patel",
    role: "Medical Student, AIIMS",
  },
  {
    quote:
      "Thanks to Shiksha Yogya, I received a scholarship that made my education affordable. Their scholarship assistance program is truly helpful.",
    author: "Amit Kumar",
    role: "MBA Student, IIM Ahmedabad",
  },
  {
    quote:
      "The study abroad guidance from Shiksha Yogya was invaluable. They helped me with everything from university selection to visa application.",
    author: "Neha Singh",
    role: "Masters Student, University of Toronto",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 md:py-24 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Students Say</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Hear from students who have benefited from our services
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-none bg-background shadow-lg">
                <CardContent className="p-6 sm:p-10">
                  <Quote className="h-10 w-10 text-primary mb-4" />
                  <p className="mb-6 text-xl italic">{testimonials[current].quote}</p>
                  <div>
                    <p className="font-semibold">{testimonials[current].author}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${current === index ? "bg-primary" : "bg-muted-foreground/30"}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

