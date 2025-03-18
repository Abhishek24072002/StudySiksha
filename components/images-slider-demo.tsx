"use client"
import { motion } from "framer-motion"
import { ImagesSlider } from "@/components/ui/images-slider"

export default function ImagesSliderDemo() {
  const images = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.16_d503afc4.jpg-pRJlLdAlTLXhUbXgNL0tdr3gkJXSOp.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_b9e72a27.jpg-OtU9g240j8A01W4WIc02XFnavMfRwl.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-15%20at%2022.43.15_3753f8fd.jpg-McD4hFKR03QHb4b4sQKOy2h5pX9MwJ.jpeg",
  ]
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Shaping Your Future <br /> Through Education
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-primary/10 border-primary/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Book a Free Consultation →</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-primary to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}

