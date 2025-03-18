"use client"
import WorldMap from "@/components/ui/world-map"
import { motion } from "framer-motion"

export default function WorldMapDemo() {
  return (
    <div className="py-20 dark:bg-black bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Global{" "}
          <span className="text-neutral-400">
            {"Connections".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          We have partnerships with universities and institutions worldwide, providing you with global opportunities for
          your education.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 28.6139,
              lng: 77.209,
            }, // New Delhi
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.6532, lng: -79.3832 }, // Toronto
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -33.8688, lng: 151.2093 }, // Sydney
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 52.52, lng: 13.405 }, // Berlin
          },
        ]}
        lineColor="#3b82f6"
      />
    </div>
  )
}

