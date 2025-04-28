"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { X, Play } from "lucide-react";
import welderHero from "../assets/welderHero.jpg";
import welderHero2 from "../assets/welderHero2.jpg";
import plumperHero from "../assets/plumperHero.jpg";
import fm200BF from "../assets/fm200BF.jpg";
import fm200Hero from "../assets/fm200Hero.jpg";

// Define the media types
interface MediaItem {
  id: number;
  title: string;
  description: string;
  source: string;
  type: "image" | "video";
  thumbnail?: string;
  category: string;
}

// Sample media items
const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "Welding and Fabrication",
    description: "Professional Welding & Fabrication",
    source: welderHero,
    type: "image",
    category: "Welding",
  },
  {
    id: 2,
    title: "FM200 Installation",
    description:
      "Timelapse of downtown city lights at night showing urban life.",
    source: fm200BF,
    type: "image",
    thumbnail: "/placeholder.svg?text=City+Timelapse&width=400&height=300",
    category: "FM200 Installation",
  },
  {
    id: 3,
    title: "FM200 Completion",
    description:
      "Timelapse of downtown city lights at night showing urban life.",
    source: fm200Hero,
    type: "image",
    thumbnail: "/placeholder.svg?text=City+Timelapse&width=400&height=300",
    category: "FM200 Installation",
  },
  // {
  //   id: 2,
  //   title: "FM200 Installation",
  //   description:
  //     "Timelapse of downtown city lights at night showing urban life.",
  //   source: "/placeholder.svg?text=Video+Placeholder&width=800&height=600",
  //   type: "video",
  //   thumbnail: "/placeholder.svg?text=City+Timelapse&width=400&height=300",
  //   category: "urban",
  // },
  {
    id: 4,
    title: "Fire safety equipment",
    description:
      "Modern equipment and certified technicians for your protection",
    source: welderHero2,
    type: "image",
    category: "Welding",
  },
  {
    id: 5,
    title: "Cooking Tutorial",
    description:
      "Learn how to make homemade pasta from scratch with simple ingredients.",
    source: "/placeholder.svg?text=Video+Placeholder&width=800&height=600",
    type: "video",
    thumbnail: "/placeholder.svg?text=Cooking+Tutorial&width=400&height=300",
    category: "Fire Alarm",
  },
  {
    id: 6,
    title: "Piping and Fitting",
    description: "Reliable installation and maintenance services",
    source: plumperHero,
    type: "image",
    category: "Piping and Fitting",
  },
  {
    id: 7,
    title: "Concert Highlights",
    description:
      "Highlights from the summer music festival featuring various artists.",
    source: "/placeholder.svg?text=Video+Placeholder&width=800&height=600",
    type: "video",
    thumbnail: "/placeholder.svg?text=Concert+Highlights&width=400&height=300",
    category: "Fabrication",
  },
];

const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredMedia =
    selectedCategory === "all"
      ? mediaItems
      : mediaItems.filter((media) => media.category === selectedCategory);

  const categories = [
    "all",
    ...new Set(mediaItems.map((media) => media.category)),
  ];

  return (
    <section id="media-gallery" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Media Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our collection of images and videos from various categories.
          </p>
        </div>

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

export default MediaGallery;
