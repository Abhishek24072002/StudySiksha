import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import WorldMapDemo from "@/components/world-map-demo"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Contact Hero */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch with our team for any queries or to book a free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <div className="container grid gap-8 py-12 md:grid-cols-2 lg:py-24">
        <ContactForm />
        <ContactInfo />
      </div>

      {/* World Map */}
      <section className="w-full py-12 md:py-24 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Our Global Presence</h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              We have partnerships with universities and institutions worldwide
            </p>
          </div>
          <WorldMapDemo />
        </div>
      </section>
    </div>
  )
}

