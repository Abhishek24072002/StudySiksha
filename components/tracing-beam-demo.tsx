"use client"
import Image from "next/image"
import { TracingBeam } from "@/components/ui/tracing-beam"

export default function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-primary text-white rounded-full text-sm w-fit px-4 py-1 mb-4">{item.badge}</h2>

            <p className="text-xl font-bold mb-4">{item.title}</p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  )
}

const dummyContent = [
  {
    title: "Our Journey to Educational Excellence",
    description: (
      <>
        <p>
          At Shiksha Yogya, we believe that every student deserves access to quality education and career guidance. Our
          journey began with a simple mission: to provide free career counseling to students from all backgrounds,
          helping them make informed decisions about their educational and professional futures.
        </p>
        <p>
          Founded in 2021, we have grown from a small team of dedicated counselors to a comprehensive educational
          consulting firm with partnerships across India and abroad. Our commitment to student success remains at the
          core of everything we do.
        </p>
        <p>
          We understand that choosing the right educational path is one of the most important decisions in a student's
          life. That's why we offer personalized guidance tailored to each student's unique interests, abilities, and
          goals.
        </p>
      </>
    ),
    badge: "About Us",
    image: "/placeholder.svg?height=1000&width=1000",
  },
  {
    title: "Comprehensive Services for Every Student",
    description: (
      <>
        <p>
          Our services cover every aspect of a student's educational journey. From career counseling and college
          admissions to scholarship assistance and study abroad guidance, we provide end-to-end support to help students
          achieve their dreams.
        </p>
        <p>
          What sets us apart is our personalized approach. We take the time to understand each student's strengths,
          interests, and aspirations before providing guidance. This ensures that our recommendations are tailored to
          their unique profile and goals.
        </p>
      </>
    ),
    badge: "Services",
    image: "/placeholder.svg?height=1000&width=1000",
  },
  {
    title: "Success Stories That Inspire",
    description: (
      <>
        <p>
          Our greatest achievement is the success of our students. From securing admissions to top colleges and
          universities to receiving scholarships and excelling in their chosen fields, our students' achievements are a
          testament to the effectiveness of our guidance.
        </p>
        <p>
          We take pride in the diverse range of success stories we've been a part of. Whether it's helping a student
          from a small town get into an IIT or assisting a first-generation college-goer secure a scholarship for
          international education, each story reinforces our commitment to making quality education accessible to all.
        </p>
      </>
    ),
    badge: "Success Stories",
    image: "/placeholder.svg?height=1000&width=1000",
  },
]

