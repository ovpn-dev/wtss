"use client";

import { useEffect } from "react";
import AboutSection from "../components/AboutSection";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16">
      {/* Page Header */}
      <div className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Delivering comprehensive fire safety and protection solutions that
            safeguard lives, assets, and infrastructure across Nigeria
          </p>
        </div>
      </div>

      {/* About Content */}
      <AboutSection />

      {/* Core Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Integrity",
                description:
                  "Transparency and accountability in all engagements.",
                image:
                  "src/assets/icons/trust.png?text=Integrity&width=300&height=300",
              },
              {
                name: "Quality",
                description:
                  "Solutions aligned with the highest safety standards.",
                image:
                  "src/assets/icons/quality.png?text=Quality&width=300&height=300",
              },
              {
                name: "Innovation",
                description:
                  "Adoption of cutting-edge technologies and safety practices.",
                image:
                  "src/assets/icons/idea.png?text=Innovation&width=300&height=300",
              },
              {
                name: "Customer Focus",
                description:
                  "Prioritizing client satisfaction and long-term safety.",
                image:
                  "src/assets/icons/customer.png?text=Customer+Focus&width=300&height=300",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={value.image || "/placeholder.svg"}
                  alt={value.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{value.name}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Our Core Services
            </h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    01
                  </div>
                  <div className="h-full w-0.5 bg-red-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    Fire Protection Systems
                  </h3>
                  <p className="text-gray-600">
                    Design, installation, and maintenance of fire hydrants,
                    sprinklers, and suppression systems. Integration with
                    building management systems (BMS) for seamless fire safety
                    operations. Installation of fire alarms, smoke detectors,
                    and extinguishers.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    02
                  </div>
                  <div className="h-full w-0.5 bg-red-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    Safety Equipment Procurement & Installation
                  </h3>
                  <p className="text-gray-600">
                    Supply and installation of PPE for industrial and corporate
                    clients. Provision of fire panels, CO2 and ABC
                    extinguishers, safety signage, and emergency escape systems.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    03
                  </div>
                  <div className="h-full w-0.5 bg-red-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    Industrial Piping & Fabrication
                  </h3>
                  <p className="text-gray-600">
                    Fabrication and installation of fire suppression piping
                    networks. Construction of civil works supporting fire
                    protection infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    04
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    Consulting & Compliance
                  </h3>
                  <p className="text-gray-600">
                    Fire risk assessments, NFPA-compliant designs, and safety
                    audits. Liaison with local fire services for Certification
                    of Completion (COC) and regulatory approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Key Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Federal Airport Authority of Nigeria (FAAN)",
                description:
                  "Installation of hydrant systems along the runway for enhanced fire safety measures at a major airport facility.",
                period: "Jan 2023 – Apr 2024",
                image:
                  "/placeholder.svg?text=FAAN+Project&width=300&height=300",
              },
              {
                name: "MTN Lagos Data Center",
                description:
                  "Subcontracted by CITCC Nigeria Limited for fire suppression and foam system installation at MTN's new data center.",
                period: "Dec 2024 – April 2025",
                image: "/placeholder.svg?text=MTN+Project&width=300&height=300",
              },
              {
                name: "NCAA Headquarters",
                description:
                  "Installation of fire suppression systems at the Nigerian Civil Aviation Authority's new headquarters.",
                period: "2024",
                image:
                  "/placeholder.svg?text=NCAA+Project&width=300&height=300",
              },
            ].map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                <p className="text-red-600 mb-3">{project.period}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
