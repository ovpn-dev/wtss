import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import your images properly
import welderHero from "../assets/welderHero.jpg";
import welderHero2 from "../assets/welderHero2.jpg";
import plumperHero from "../assets/plumperHero.jpg";
import fm200BF from "../assets/fm200BF.jpg";
import fm200Hero from "../assets/fm200Hero.jpg";

interface Slide {
  type: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    type: "image",
    src: welderHero,
    alt: "Welding and Fabrication",
    title: "Professional Welding & Fabrication",
    description: "Expert welding services with safety as our top priority",
  },
  {
    type: "image",
    src: welderHero2,
    alt: "Fire safety equipment",
    title: "Complete Fire Safety Solutions",
    description:
      "Modern equipment and certified technicians for your protection",
  },
  {
    type: "image",
    src: plumperHero,
    alt: "Piping and Fitting",
    title: "Advanced Piping & Fitting",
    description: "Reliable installation and maintenance services",
  },
  {
    type: "image",
    src: fm200BF,
    alt: "FM200 Installation",
    title: "FM200 Fire Suppression Systems",
    description: "State-of-the-art fire suppression technology",
  },
  {
    type: "image",
    src: fm200Hero,
    alt: "Full FM200 Installation",
    title: "Complete FM200 Installation Services",
    description: "End-to-end fire suppression system solutions",
  },
  // Add more slides as needed, including videos
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section
      id="home"
      className="relative h-[500px] md:h-[600px] bg-gray-800 text-white overflow-hidden"
    >
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt={slide.alt || "Hero image"}
                className="w-full h-full object-cover opacity-70"
              />
            ) : (
              <video
                src={slide.src}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover opacity-70"
              />
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg animate-fadeIn">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto drop-shadow-md animate-slideUp">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Get a Free Safety Inspection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
