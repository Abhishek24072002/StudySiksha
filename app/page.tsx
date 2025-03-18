import ImagesSliderDemo from "@/components/images-slider-demo"
import GlowingEffectDemo from "@/components/glowing-effect-demo"
import WobbleCardDemo from "@/components/wobble-card-demo"
import { LampDemo } from "@/components/ui/lamp"
import Image from "next/image"
import { Check } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Image Slider */}
      <section className="w-full">
        <ImagesSliderDemo />
      </section>

      {/* Features Section with Glowing Effect */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Services</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Comprehensive support for your educational journey</p>
          </div>
          <GlowingEffectDemo />
        </div>
      </section>

      {/* About Section with Lamp Effect */}
      <section className="w-full">
        <LampDemo />
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Students Say</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Hear from students who have benefited from our services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_b9e72a27.jpg-OtU9g240j8A01W4WIc02XFnavMfRwl.jpeg"
                    alt="Student"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Rahul Sharma</h3>
                  <p className="text-sm text-muted-foreground">Engineering Student, IIT Delhi</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Shiksha Yogya helped me get into my dream college. Their counselors provided excellent guidance
                throughout the admission process."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_b9e72a27.jpg-OtU9g240j8A01W4WIc02XFnavMfRwl.jpeg"
                    alt="Student"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Priya Patel</h3>
                  <p className="text-sm text-muted-foreground">Medical Student, AIIMS</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "I was confused about which career path to choose. The career counseling at Shiksha Yogya helped me
                understand my strengths and interests."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_b9e72a27.jpg-OtU9g240j8A01W4WIc02XFnavMfRwl.jpeg"
                    alt="Student"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">Amit Kumar</h3>
                  <p className="text-sm text-muted-foreground">MBA Student, IIM Ahmedabad</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                "Thanks to Shiksha Yogya, I received a scholarship that made my education affordable. Their scholarship
                assistance program is truly helpful."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Wobble Cards */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">Book a free consultation with our expert counselors</p>
          </div>
          <WobbleCardDemo />
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-start gap-2">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">No Consultation Fees</h3>
                <p className="text-muted-foreground">All our initial consultations are completely free of charge.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Expert Career Counseling</h3>
                <p className="text-muted-foreground">Personalized guidance from experienced counselors.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Scholarships & Financial Aid</h3>
                <p className="text-muted-foreground">Help finding and applying for financial assistance.</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg">Study Abroad Support</h3>
                <p className="text-muted-foreground">Complete guidance for international education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

