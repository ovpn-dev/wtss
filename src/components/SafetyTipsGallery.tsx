"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { X } from "lucide-react"

interface SafetyTip {
  id: number
  title: string
  description: string
  image: string
  category: string
}

const safetyTips: SafetyTip[] = [
  {
    id: 1,
    title: "Keep Extinguishers Accessible",
    description: "Always keep a fire extinguisher easily accessible in your home and workplace.",
    image: "/placeholder.svg?text=Extinguisher+Tip&width=400&height=300",
    category: "home",
  },
  {
    id: 2,
    title: "Test Smoke Alarms Monthly",
    description: "Test your smoke alarms at least once a month and replace batteries annually.",
    image: "/placeholder.svg?text=Smoke+Alarm+Tip&width=400&height=300",
    category: "home",
  },
  {
    id: 3,
    title: "Create an Escape Plan",
    description: "Develop and practice a fire escape plan with all members of your household.",
    image: "/placeholder.svg?text=Escape+Plan&width=400&height=300",
    category: "planning",
  },
  {
    id: 4,
    title: "Kitchen Safety",
    description: "Never leave cooking unattended and keep flammable items away from the stove.",
    image: "/placeholder.svg?text=Kitchen+Safety&width=400&height=300",
    category: "home",
  },
  {
    id: 5,
    title: "Electrical Safety",
    description: "Don't overload outlets and replace damaged electrical cords immediately.",
    image: "/placeholder.svg?text=Electrical+Safety&width=400&height=300",
    category: "workplace",
  },
  {
    id: 6,
    title: "Store Flammables Properly",
    description: "Store flammable liquids and materials in approved containers away from heat sources.",
    image: "/placeholder.svg?text=Flammables&width=400&height=300",
    category: "workplace",
  },
]

const SafetyTipsGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTip, setSelectedTip] = useState<SafetyTip | null>(null)

  const filteredTips =
    selectedCategory === "all" ? safetyTips : safetyTips.filter((tip) => tip.category === selectedCategory)

  const categories = ["all", ...new Set(safetyTips.map((tip) => tip.category))]

  return (
    <section id="safety-tips" className="py-16 bg-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Safety Tips</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of fire safety tips to help protect your home and workplace.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedTip(tip)}
            >
              <img src={tip.image || "/placeholder.svg"} alt={tip.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600 line-clamp-2">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedTip && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                <img src={selectedTip.image || "/placeholder.svg"} alt={selectedTip.title} className="w-full h-auto" />
                <button
                  onClick={() => setSelectedTip(null)}
                  className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedTip.title}</h3>
                <p className="text-gray-600 mb-4">{selectedTip.description}</p>
                <Button onClick={() => setSelectedTip(null)}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default SafetyTipsGallery
