"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { useToast } from "@/components/ui/use-toast";
import { useToggleFavorite } from "@/lib/api/favorites";
import type { Property } from "@/lib/types";
import { motion } from "framer-motion";
import { useAuth } from "@/context/auth-context";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  const { user } = useAuth();

  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(property.isFavorite || false);
  const [isHovered, setIsHovered] = useState(false);

  const { mutate } = useToggleFavorite();

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to save properties to favorites",
      });
      return;
    }

    setIsFavorite(!isFavorite);
    mutate(
      { propertyId: property.id },
      {
        onError: () => {
          setIsFavorite(isFavorite);
          toast({
            title: "Error",
            description: "Failed to update favorites",
            variant: "destructive",
          });
        },
      }
    );
  };

  // Ensure we have a valid image URL
  const imageUrl =
    property.images && property.images.length > 0
      ? property.images[0]
      : "/placeholder.svg?height=400&width=600";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/villas/${property.id}`}
        className="group block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-card rounded-lg overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300">
          <div className="relative aspect-[4/3]">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={property.title}
              fill
              className={cn(
                "object-cover transition-transform duration-700",
                isHovered && "scale-110"
              )}
              unoptimized={imageUrl.includes("unsplash.com")}
            />
            <motion.div
              className="absolute top-3 right-3 z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-white/80 hover:bg-white"
                onClick={handleFavoriteClick}
              >
                <Heart
                  className={cn(
                    "h-5 w-5 transition-colors duration-300",
                    isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                  )}
                />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </motion.div>
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-white/80 text-black hover:bg-white/90">
                From €{Math.floor(property.pricePerNight)} / day
              </Badge>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/[0.70] to-transparent p-4">
              <div className="flex items-center text-white">
                <span className="text-sm">{property.location}</span>
                {property.subLocation && (
                  <>
                    <span className="mx-1">•</span>
                    <span className="text-sm">{property.subLocation}</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
              {property.title}
            </h3>
            <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <span>{property.guests} guests</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{property.bedrooms} bedrooms</span>
              </div>
              <div className="flex items-center gap-1">
                <span>{property.bathrooms} bathrooms</span>
              </div>
            </div>
            <div className="mt-2 text-sm">
              <span>{property.squareMeters} m²</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
