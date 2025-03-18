"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { Home, Info, BookOpen, Award, Building, Briefcase, Phone, GraduationCap } from "lucide-react"
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const links = [
  {
    label: "Home",
    href: "/",
    icon: <Home className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "About Us",
    href: "/about",
    icon: <Info className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Services",
    href: "/services",
    icon: <BookOpen className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Success Stories",
    href: "/success-stories",
    icon: <Award className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Partners",
    href: "/partners",
    icon: <Building className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Training & Placement",
    href: "/training-placement",
    icon: <Briefcase className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
  {
    label: "Contact Us",
    href: "/contact",
    icon: <Phone className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sidebar open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Shiksha Yogya</span>
          </div>
          <div className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className={cn(pathname === link.href && "bg-muted text-primary font-medium rounded-md")}
              />
            ))}
          </div>
        </div>
        <div>
          <SidebarLink
            link={{
              label: "Book Consultation",
              href: "/contact",
              icon: (
                <div className="h-7 w-7 flex-shrink-0 rounded-full bg-primary flex items-center justify-center">
                  <Phone className="h-4 w-4 text-primary-foreground" />
                </div>
              ),
            }}
            className="bg-muted rounded-md font-medium"
          />
        </div>
      </SidebarBody>
    </Sidebar>
  )
}

