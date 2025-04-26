"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ChevronRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  learnMoreUrl?: string
}

const ServiceCard = ({ title, description, icon, learnMoreUrl = "#" }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 ${
        isHovered ? "transform -translate-y-2 shadow-lg" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 relative w-24 h-24 mx-auto">
        <img src={icon || "/placeholder.svg"} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button variant="outline" className="group text-red-600 border-red-600 hover:bg-red-600 hover:text-white" asChild>
        <a href={learnMoreUrl}>
          Learn More
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </Button>
    </div>
  )
}

export default ServiceCard
