import Image from "next/image"

const institutes = [
  { name: "FIITJEE", logo: "/placeholder.svg?height=100&width=100", category: "Engineering" },
  { name: "Aakash Institute", logo: "/placeholder.svg?height=100&width=100", category: "Medical" },
  { name: "Allen Career Institute", logo: "/placeholder.svg?height=100&width=100", category: "Engineering & Medical" },
  { name: "Resonance", logo: "/placeholder.svg?height=100&width=100", category: "Engineering" },
  { name: "Vidyamandir Classes", logo: "/placeholder.svg?height=100&width=100", category: "Engineering" },
  { name: "Career Launcher", logo: "/placeholder.svg?height=100&width=100", category: "Management" },
  { name: "TIME", logo: "/placeholder.svg?height=100&width=100", category: "Management" },
  { name: "IMS", logo: "/placeholder.svg?height=100&width=100", category: "Management" },
]

export function CoachingInstitutes() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-24 bg-muted">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Partner Coaching Institutes</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {institutes.map((institute, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 bg-background rounded-lg border hover:shadow-md transition-shadow"
          >
            <div className="relative h-20 w-20 mb-4">
              <Image src={institute.logo || "/placeholder.svg"} alt={institute.name} fill className="object-contain" />
            </div>
            <h3 className="text-base font-medium text-center">{institute.name}</h3>
            <p className="text-sm text-muted-foreground text-center">{institute.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

