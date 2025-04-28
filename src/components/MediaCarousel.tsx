"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react";

// Define the media types
interface MediaItem {
  id: number;
  title: string;
  description: string;
  source: string;
  type: "image" | "video";
  thumbnail?: string;
  category: string;
  featured?: boolean;
}

// Sample media items
const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Sunset at the Beach",
    description:
      "Beautiful sunset captured at Malibu Beach during summer vacation.",
    source: "/placeholder.svg?text=Beach+Sunset&width=800&height=600",
    type: "image",
    category: "nature",
    featured: true,
  },
  {
    id: 2,
    title: "City Timelapse",
    description:
      "Timelapse of downtown city lights at night showing urban life.",
    source: "/placeholder.svg?text=Video+Placeholder&width=800&height=600",
    type: "video",
    thumbnail: "/placeholder.svg?text=City+Timelapse&width=400&height=300",
    category: "urban",
    featured: true,
  },
  {
    id: 3,
    title: "Mountain Panorama",
    description:
      "Breathtaking view of the Rocky Mountains captured during sunrise.",
    source: "/placeholder.svg?text=Mountain+View&width=800&height=600",
    type: "image",
    category: "nature",
    featured: true,
  },
  {
    id: 4,
    title: "Cooking Tutorial",
    description:
      "Learn how to make homemade pasta from scratch with simple ingredients.",
    source: "/placeholder.svg?text=Video+Placeholder&width=800&height=600",
    type: "video",
    thumbnail: "/placeholder.svg?text=Cooking+Tutorial&width=400&height=300",
    category: "tutorials",
  },
  {
    id: 5,
    title: "Abstract Art",
    description:
      "Modern abstract painting using vibrant colors and geometric shapes.",
    source: "/placeholder.svg?text=Abstract+Art&width=800&height=600",
    type: "image",
    category: "art",
  },
  {
    id: 6,
    title: "Concert Highlights",
    description:
      "Highlights from the summer music festival featuring various artists.",
    source: "/placeholder.svg?text=Video+Placeholder&width=800&height=600",
    type: "video",
    thumbnail: "/placeholder.svg?text=Concert+Highlights&width=400&height=300",
    category: "events",
    featured: true,
  },
];

const MediaCarousel = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredMedia =
    selectedCategory === "all"
      ? mediaItems
      : mediaItems.filter((media) => media.category === selectedCategory);

  const categories = [
    "all",
    ...new Set(mediaItems.map((media) => media.category)),
  ];
  const featuredMedia = mediaItems.filter((media) => media.featured);

  // Carousel auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredMedia.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredMedia.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredMedia.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredMedia.length) % featuredMedia.length
    );
  };

  return (
    <section id="media-gallery" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Media Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of images and videos from various categories.
          </p>
        </div>

        {/* Featured Carousel */}
        {featuredMedia.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Featured Content
            </h3>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              {/* Carousel Container */}
              <div className="relative aspect-video bg-gray-900">
                {/* Carousel Items */}
                {featuredMedia.map((media, index) => (
                  <div
                    key={media.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentSlide
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.source}
                        alt={media.title}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-black">
                        <div className="text-white text-center">
                          <div className="bg-white/20 rounded-full p-4 mb-4 inline-block">
                            <Play size={48} className="text-white" />
                          </div>
                          <p className="text-xl">{media.title}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <h4 className="text-white text-xl font-bold mb-2">
                        {media.title}
                      </h4>
                      <p className="text-white/80">{media.description}</p>
                    </div>
                  </div>
                ))}

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {featuredMedia.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentSlide
                          ? "bg-white"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMedia.map((media) => (
            <div
              key={media.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
              onClick={() => setSelectedMedia(media)}
            >
              <div className="relative">
                <img
                  src={
                    media.type === "video"
                      ? media.thumbnail || "/placeholder.svg"
                      : media.source
                  }
                  alt={media.title}
                  className="w-full h-48 object-cover"
                />
                {media.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <div className="bg-white/80 rounded-full p-2">
                      <Play className="text-blue-600" size={24} />
                    </div>
                  </div>
                )}
                {media.featured && (
                  <div className="absolute top-2 left-2">
                    <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{media.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                    {media.type.charAt(0).toUpperCase() + media.type.slice(1)}
                  </span>
                </div>
                <p className="text-gray-600 line-clamp-2">
                  {media.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedMedia && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
              <div className="relative">
                {selectedMedia.type === "image" ? (
                  <img
                    src={selectedMedia.source}
                    alt={selectedMedia.title}
                    className="w-full h-auto"
                  />
                ) : (
                  <div className="aspect-video bg-black flex items-center justify-center">
                    {/* Video would normally go here - using placeholder for demo */}
                    <div className="text-white text-center p-8">
                      <Play size={48} className="mx-auto mb-4" />
                      <p>Video player would appear here</p>
                      <p className="text-sm text-gray-400 mt-2">
                        ({selectedMedia.title})
                      </p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedMedia.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedMedia.description}
                </p>
                <Button onClick={() => setSelectedMedia(null)}>Close</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaCarousel;
