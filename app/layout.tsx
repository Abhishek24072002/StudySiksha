import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Shiksha Yogya Pvt Ltd - Education Counseling & Admissions Support",
  description: "We provide FREE career counseling, college admissions support, and study abroad guidance.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="bg-muted py-8">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="font-bold text-lg mb-4">Shiksha Yogya</h3>
                    <p className="text-muted-foreground">
                      Empowering students to make informed educational and career choices through expert guidance and
                      support.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">Services</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/services" className="text-muted-foreground hover:text-primary">
                          Career Counseling
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="text-muted-foreground hover:text-primary">
                          College Admissions
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="text-muted-foreground hover:text-primary">
                          Scholarship Assistance
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="text-muted-foreground hover:text-primary">
                          Study Abroad
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/about" className="text-muted-foreground hover:text-primary">
                          About Us
                        </a>
                      </li>
                      <li>
                        <a href="/success-stories" className="text-muted-foreground hover:text-primary">
                          Success Stories
                        </a>
                      </li>
                      <li>
                        <a href="/partners" className="text-muted-foreground hover:text-primary">
                          Partners
                        </a>
                      </li>
                      <li>
                        <a href="/contact" className="text-muted-foreground hover:text-primary">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-4">Contact</h3>
                    <address className="not-italic text-muted-foreground">
                      123 Education Street
                      <br />
                      New Delhi, 110001
                      <br />
                      India
                      <br />
                      <br />
                      <a href="tel:+919876543210" className="hover:text-primary">
                        +91 98765 43210
                      </a>
                      <br />
                      <a href="mailto:info@shikshayogya.com" className="hover:text-primary">
                        info@shikshayogya.com
                      </a>
                    </address>
                  </div>
                </div>
                <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
                  <p>&copy; {new Date().getFullYear()} Shiksha Yogya Pvt Ltd. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'