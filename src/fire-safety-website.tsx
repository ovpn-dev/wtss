import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  LinkedinIcon as LinkedIn,
} from "lucide-react";

export default function FireSafetyWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/placeholder.svg"
              alt="Fire Safety Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <span className="text-2xl font-bold">
              Wisdom Tech and Safety Solutions Limited
            </span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <PhoneCall className="mr-2" />
            <span className="mr-4">Emergency: 1-800-FIRE-HELP</span>
            <Button variant="secondary">Request Service</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-800 text-white">
        <Image
          src="/placeholder.svg?height=500&width=1920"
          alt="Firefighters in action"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Your Safety is Our Priority
            </h1>
            <p className="text-xl mb-8">
              Professional Fire Safety and Prevention Services
            </p>
            <Button size="lg">Get a Free Safety Inspection</Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Fire Extinguisher Maintenance",
              "Alarm System Installation",
              "Emergency Planning",
              "Safety Training",
              "Fire Risk Assessment",
              "Sprinkler System Service",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <Image
                  src={`/placeholder.svg?text=${encodeURIComponent(
                    service
                  )}&width=100&height=100`}
                  alt={service}
                  width={100}
                  height={100}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Wisdom Tech & Safety Solutions Limited
          </h2>
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?text=About Us&width=600&height=400"
                alt="About Wisdom Tech & Safety Solutions Limited"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <p className="text-lg mb-4">
                Wisdom Tech & Safety Solutions Limited has been at the forefront
                of fire safety and prevention for over 25 years. Our team of
                certified professionals is dedicated to protecting lives and
                property through innovative solutions and rigorous standards.
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>25+ Years of Experience</li>
                <li>10,000+ Satisfied Clients</li>
                <li>100% Safety Compliance Rate</li>
              </ul>
              <Button variant="outline">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Tips Carousel (simplified version) */}
      <section className="py-16 bg-orange-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Safety Tips</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Image
              src="/placeholder.svg?text=Safety Tip&width=200&height=200"
              alt="Safety Tip"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
            <p className="text-center text-lg">
              Always keep a fire extinguisher easily accessible in your home and
              workplace.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
              <form>
                <Input type="text" placeholder="Your Name" className="mb-4" />
                <Input type="email" placeholder="Your Email" className="mb-4" />
                <Input type="tel" placeholder="Your Phone" className="mb-4" />
                <Textarea placeholder="Your Message" className="mb-4" />
                <Button type="submit">Send Message</Button>
              </form>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="bg-gray-200 h-64 mb-4 rounded-lg">
                {/* Placeholder for map */}
                <div className="h-full flex items-center justify-center">
                  <span className="text-gray-500">Map Placeholder</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <PhoneCall className="mr-2 text-red-600" />
                  <span>1-800-FIRE-HELP</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-red-600" />
                  <span>info@firesafeco.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-red-600" />
                  <span>123 Safety Street, Firetown, ST 12345</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <Image
                src="/placeholder.svg"
                alt="Fire Safety Logo"
                width={100}
                height={100}
                className="mb-4"
              />
              <p>Your trusted partner in fire safety and prevention.</p>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Safety Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Facebook />
                <Twitter />
                <Instagram />
                <LinkedIn />
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
              <p className="text-2xl font-bold">1-800-FIRE-HELP</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>
              &copy; 2025 Wisdom Tech & Safety Solutions Limited All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
