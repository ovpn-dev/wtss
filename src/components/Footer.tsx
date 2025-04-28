import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  PhoneCall,
} from "lucide-react";
// Import your images properly
import wtsslogo from "../assets/wtsslogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link to="/">
              <img
                src={wtsslogo}
                alt="Fire Safety Logo"
                width={100}
                height={100}
                className="mb-4"
              />
            </Link>
            <p>Your trusted partner in fire safety and prevention.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/safety-tips" className="hover:underline">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400 transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Emergency Contact</h3>
            <div className="flex items-center mb-2">
              <PhoneCall className="mr-2" />
              <p className="text-2xl font-bold">Tel: +234-803-325-7142</p>
            </div>
            <p className="text-sm">Available 24/7 for emergency assistance</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>
            &copy; {new Date().getFullYear()} Wisdom Tech & Safety Solutions
            Limited All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
