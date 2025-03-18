"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const colleges = [
  { name: "IIT Delhi", logo: "/placeholder.svg?height=100&width=100", category: "Engineering" },
  { name: "IIT Bombay", logo: "/placeholder.svg?height=100&width=100", category: "Engineering" },
  { name: "IIT Madras", logo: "/placeholder.svg?height=100&width=100", category: "Engineering" },
  { name: "AIIMS Delhi", logo: "/placeholder.svg?height=100&width=100", category: "Medical" },
  { name: "BITS Pilani", logo: "/placeholder.svg?height=100&width=100", category: "Engineering" },
  { name: "IIM Ahmedabad", logo: "/placeholder.svg?height=100&width=100", category: "Management" },
  { name: "IIM Bangalore", logo: "/placeholder.svg?height=100&width=100", category: "Management" },
  { name: "Delhi University", logo: "/placeholder.svg?height=100&width=100", category: "Arts & Science" },
  { name: "Jawaharlal Nehru University", logo: "/placeholder.svg?height=100&width=100", category: "Arts & Science" },
  { name: "National Law School of India University", logo: "/placeholder.svg?height=100&width=100", category: "Law" },
  { name: "NIFT Delhi", logo: "/placeholder.svg?height=100&width=100", category: "Design" },
  { name: "University of Toronto", logo: "/placeholder.svg?height=100&width=100", category: "International" },
  { name: "Harvard University", logo: "/placeholder.svg?height=100&width=100", category: "International" },
  { name: "MIT", logo: "/placeholder.svg?height=100&width=100", category: "International" },
  { name: "Stanford University", logo: "/placeholder.svg?height=100&width=100", category: "International" },
]

export function PartnerColleges() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Engineering", "Medical", "Management", "Arts & Science", "Law", "Design", "International"]

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || college.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <section className="container mx-auto px-4 py-12 md:py-24">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Partner Colleges & Universities</h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search colleges..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {filteredColleges.map((college, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-background rounded-lg border hover:shadow-md transition-shadow"
          >
            <div className="relative h-16 w-16 mb-4">
              <Image src={college.logo || "/placeholder.svg"} alt={college.name} fill className="object-contain" />
            </div>
            <h3 className="text-sm font-medium text-center">{college.name}</h3>
            <p className="text-xs text-muted-foreground">{college.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

