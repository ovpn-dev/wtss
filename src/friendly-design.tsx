import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PhoneCall, Mail, MapPin, AlertTriangle, Users, Book } from 'lucide-react'

export default function FriendlyFireSafetyWebsite() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/placeholder.svg?text=FS&width=50&height=50" alt="FireSafe Logo" width={50} height={50} className="mr-2" />
            <span className="text-2xl font-bold text-orange-500">FireSafe Friends</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Safety Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-orange-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-orange-100 to-orange-50">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-5xl font-bold mb-6 text-orange-600">Keeping You Safe is Our Priority</h1>
            <p className="text-xl mb-8 text-gray-700">We're here to make fire safety friendly, accessible, and effective for everyone.</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">Learn How We Can Help</Button>
          </div>
          <div className="w-full md:w-1/2">
            <Image src="/placeholder.svg?text=Friendly Firefighter&width=500&height=400" alt="Friendly Firefighter" width={500} height={400} className="mx-auto" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-600">How We Keep You Safe</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Fire Prevention', icon: AlertTriangle, description: 'Proactive measures to stop fires before they start.' },
              { title: 'Safety Education', icon: Book, description: 'Fun and engaging workshops for all ages.' },
              { title: 'Community Outreach', icon: Users, description: 'Building a safer community together.' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <service.icon className="w-16 h-16 mx-auto mb-6 text-orange-500" />
                <h3 className="text-2xl font-semibold mb-4 text-orange-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Tips Section */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-600">Quick Safety Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Check smoke alarms monthly', 'Have an escape plan', 'Keep flammables away from heat', 'Never leave cooking unattended'].map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <Image src={`/placeholder.svg?text=${index + 1}&width=60&height=60`} alt={`Tip ${index + 1}`} width={60} height={60} className="mb-4 mx-auto" />
                <p className="text-center text-gray-700">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-orange-600">Get in Touch</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <form>
              <Input type="text" placeholder="Your Name" className="mb-4" />
              <Input type="email" placeholder="Your Email" className="mb-4" />
              <Textarea placeholder="Your Message" className="mb-4" />
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600">Send Message</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-600 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">FireSafe Friends</h3>
            <p>Making fire safety accessible and friendly for everyone.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Safety Tips</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center"><PhoneCall size={18} className="mr-2" /> 1-800-FIRE-SAFE</li>
              <li className="flex items-center"><Mail size={18} className="mr-2" /> hello@firesafefriends.com</li>
              <li className="flex items-center"><MapPin size={18} className="mr-2" /> 456 Friendly Ave, Safetown, ST 67890</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}