"use client"

import { useEffect } from "react"
import SafetyTipsGallery from "../components/SafetyTipsGallery"

const SafetyTips = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Safety Tips</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Essential fire safety information to help protect your home and workplace
          </p>
        </div>
      </div>

      {/* Safety Tips Content */}
      <SafetyTipsGallery />

      {/* Additional Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fire Safety Checklist",
                description: "Download our comprehensive fire safety checklist for your home or business.",
                icon: "📋",
              },
              {
                title: "Emergency Plan Template",
                description: "Create a customized emergency evacuation plan with our easy-to-use template.",
                icon: "🚪",
              },
              {
                title: "Fire Safety Videos",
                description: "Watch our educational videos on fire prevention and emergency response.",
                icon: "🎬",
              },
            ].map((resource, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a href="#" className="text-red-600 hover:text-red-800 font-medium inline-flex items-center">
                  Download
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default SafetyTips
