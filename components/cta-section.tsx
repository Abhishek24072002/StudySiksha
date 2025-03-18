import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Start Your Educational Journey Today
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
            Let our experts guide you towards the right educational path and career success.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col gap-2 sm:flex-row">
            <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
            <Button type="submit">Get Started</Button>
          </form>
          <p className="text-xs text-muted-foreground">
            Sign up for our newsletter to receive updates.{" "}
            <Link href="/terms" className="underline underline-offset-2">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

