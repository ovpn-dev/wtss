"use client"

import { useEffect } from "react"
import ServicesSection from "../components/ServicesSection"
import { Button } from "../components/ui/button"

const Services = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">Comprehensive fire safety solutions for homes and businesses</p>
        </div>
      </div>

      {/* Services Content */}
      <ServicesSection />

      {/* Additional Services Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Services?</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Certified Professionals</h3>
                <p>
                  All our technicians are certified and undergo regular training to stay up-to-date with the latest fire
                  safety standards and technologies.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Customized Solutions</h3>
                <p>
                  We understand that every property is unique. Our team provides tailored fire safety solutions that
                  address your specific needs and concerns.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p>
                  Fire safety doesn't operate on a 9-to-5 schedule. Our support team is available 24/7 to address any
                  emergencies or concerns.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button className="bg-red-600 hover:bg-red-700">Request a Free Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
