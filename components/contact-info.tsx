import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Office Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p>123 Education Street, Knowledge Park</p>
              <p>New Delhi, 110001</p>
              <p>India</p>
            </div>
          </div>
          <Button variant="outline" className="w-full mt-2" asChild>
            <Link href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
              View on Map
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Contact Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium">Phone</p>
              <p className="text-muted-foreground">+91 98765 43210</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-muted-foreground">info@shikshayogya.com</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Office Hours</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex items-start gap-2">
            <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle>Book a Free Consultation</CardTitle>
          <CardDescription>Schedule a free consultation with our experts</CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="w-full">Book Now</Button>
        </CardContent>
      </Card>
    </div>
  )
}

