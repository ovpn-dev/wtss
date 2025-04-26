"use client"

import { useEffect } from "react"
import ContactSection from "../components/ContactSection"

const Contact = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with our team for inquiries, service requests, or emergency assistance
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How often should fire extinguishers be inspected?",
                answer:
                  "Fire extinguishers should be visually inspected monthly and undergo professional maintenance annually. However, specific requirements may vary based on local regulations and the type of extinguisher.",
              },
              {
                question: "What types of fire alarm systems do you offer?",
                answer:
                  "We offer a wide range of fire alarm systems, including conventional, addressable, and wireless systems. Our solutions can be customized based on your property size, type, and specific requirements.",
              },
              {
                question: "Do you provide emergency services?",
                answer:
                  "Yes, we provide 24/7 emergency services for our clients. In case of a fire safety emergency, you can contact our emergency hotline at 1-800-FIRE-HELP.",
              },
              {
                question: "How much does a fire safety inspection cost?",
                answer:
                  "The cost of a fire safety inspection varies depending on the size and type of your property. We offer free initial consultations to assess your needs and provide a detailed quote.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
