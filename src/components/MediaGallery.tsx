"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X, Play, Plus } from "lucide-react";
import {
  mediaItems,
  getAllCategories,
  MediaItem,
} from "../components/MediaData";

const MediaGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>([]);

  // Filter media based on selected category
  useEffect(() => {
    const filtered =
      selectedCategory === "all"
        ? mediaItems
        : mediaItems.filter((media) => media.category === selectedCategory);

    setFilteredMedia(filtered);
    // Reset visible count when category changes
    setVisibleCount(9);
  }, [selectedCategory]);

  // Get all categories for filter buttons
  const categories = getAllCategories();

  // Handle showing more media items
  const handleShowMore = () => {
    // Increase visible count by 10 (or any number you prefer)
    setVisibleCount((prev) => prev + 10);
  };

  // Get the currently visible items
  const visibleMedia = filteredMedia.slice(0, visibleCount);
  // Check if there are more items to show
  const hasMoreItems = filteredMedia.length > visibleCount;

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
          {visibleMedia.map((media) => (
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

        {/* Show More Button */}
        {hasMoreItems && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleShowMore}
              className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
            >
              <Plus size={16} />
              Show More ({filteredMedia.length - visibleCount} more)
            </Button>
          </div>
        )}

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
                  <div className="aspect-video bg-black">
                    <video
                      src={selectedMedia.source}
                      poster={selectedMedia.thumbnail || "/placeholder.svg"}
                      controls
                      className="w-full h-full"
                    >
                      Your browser does not support the video tag.
                    </video>
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
