"use client";

import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-red-600 shadow-md py-2" : "bg-red-600 py-4"
      } text-white`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="src/assets/wtsslogo.png"
              alt="Fire Safety Logo"
              width={100}
              height={100}
              className="mr-2"
            />
            <span className="text-xl font-bold">
              Wisdom Tech & Safety Solutions Limited
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 border-white pb-1"
                    : "hover:underline font-semibold"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 border-white pb-1"
                    : "hover:underline font-semibold"
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 border-white pb-1"
                    : "hover:underline font-semibold"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/safety-tips"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 border-white pb-1"
                    : "hover:underline font-semibold"
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "font-bold border-b-2 border-white pb-1"
                    : "hover:underline font-semibold"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Emergency Contact - Desktop */}
        <div className="hidden md:flex items-center">
          <PhoneCall className="mr-2" />
          <span className="mr-4">Tel: +234-803-325-7142</span>
          <Button variant="secondary" asChild>
            <Link to="/contact">Request Service</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-red-600 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-700 px-4 py-2 rounded-md"
                    : "text-white hover:bg-red-700 px-4 py-2 rounded-md"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-700 px-4 py-2 rounded-md"
                    : "text-white hover:bg-red-700 px-4 py-2 rounded-md"
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-700 px-4 py-2 rounded-md"
                    : "text-white hover:bg-red-700 px-4 py-2 rounded-md"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/safety-tips"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-700 px-4 py-2 rounded-md"
                    : "text-white hover:bg-red-700 px-4 py-2 rounded-md"
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-red-700 px-4 py-2 rounded-md"
                    : "text-white hover:bg-red-700 px-4 py-2 rounded-md"
                }
              >
                Contact
              </NavLink>
              <div className="border-t border-red-500 pt-4 mt-2">
                <div className="flex items-center mb-4">
                  <PhoneCall className="mr-2" />
                  <span>Tel: +234-803-325-7142</span>
                </div>
                <Button variant="secondary" className="w-full" asChild>
                  <Link to="/contact">Request Service</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
