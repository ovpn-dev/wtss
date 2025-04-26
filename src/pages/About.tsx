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
            Learn about our mission, values, and the team behind Wisdom Tech &
            Safety Solutions Limited
          </p>
        </div>
      </div>

      {/* About Content */}
      <AboutSection />

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                position: "CEO & Founder",
                bio: "With over 30 years in fire safety, John founded Wisdom Tech & Safety Solutions Limited to make safety accessible to all.",
                image: "/placeholder.svg?text=John+Smith&width=300&height=300",
              },
              {
                name: "Sarah Johnson",
                position: "Head of Operations",
                bio: "Sarah ensures all our services meet the highest standards of quality and compliance.",
                image:
                  "/placeholder.svg?text=Sarah+Johnson&width=300&height=300",
              },
              {
                name: "Michael Chen",
                position: "Lead Safety Engineer",
                bio: "Michael specializes in designing custom fire safety systems for complex environments.",
                image:
                  "/placeholder.svg?text=Michael+Chen&width=300&height=300",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-red-600 mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our History</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    1998
                  </div>
                  <div className="h-full w-0.5 bg-red-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Founded</h3>
                  <p className="text-gray-600">
                    Wisdom Tech & Safety Solutions Limited was founded with a
                    mission to provide affordable fire safety solutions to homes
                    and small businesses.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    2005
                  </div>
                  <div className="h-full w-0.5 bg-red-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Expanded services to include commercial buildings and
                    industrial facilities, becoming a full-service fire safety
                    provider.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    2015
                  </div>
                  <div className="h-full w-0.5 bg-red-200 mx-auto mt-2"></div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-600">
                    Launched our innovative smart fire detection systems,
                    integrating IoT technology with traditional fire safety.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 w-24 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    Today
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">Present Day</h3>
                  <p className="text-gray-600">
                    Today, Wisdom Tech & Safety Solutions Limited serves
                    thousands of clients nationwide, with a continued commitment
                    to making fire safety accessible, affordable, and effective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
