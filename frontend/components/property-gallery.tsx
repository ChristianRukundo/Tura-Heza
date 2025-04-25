"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Grid2X2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { DialogTitle } from "@radix-ui/react-dialog";

interface PropertyGalleryProps {
  images: string[];
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentImageIndex((prev) =>
      prev === 0 ? validImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentImageIndex((prev) =>
      prev === validImages.length - 1 ? 0 : prev + 1
    );
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const validImages =
    images && images.length > 0
      ? images
      : ["/placeholder.svg?height=600&width=800"];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-2 relative"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="md:col-span-2 md:row-span-2 relative aspect-[4/3] rounded-tl-lg rounded-bl-lg overflow-hidden"
        >
          <Image
            src={validImages[0]}
            alt="Property main image"
            fill
            className="object-cover"
            unoptimized={validImages[0].includes("unsplash.com")}
          />

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute bottom-4 right-4 z-10"
          >
            <Button
              variant="secondary"
              size="sm"
              className="gap-1"
              onClick={() => setShowAllPhotos(true)}
            >
              <Grid2X2 className="h-4 w-4" />
              Show all photos
            </Button>
          </motion.div>
        </motion.div>

        {validImages.slice(1, 3).map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative aspect-[4/3] overflow-hidden",
              index === 0 && "rounded-tr-lg"
            )}
          >
            <Image
              src={image}
              alt={`Property image ${index + 2}`}
              fill
              className="object-cover"
              unoptimized={image.includes("unsplash.com")}
            />
          </motion.div>
        ))}

        {validImages.slice(3, 5).map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "relative aspect-[4/3] overflow-hidden",
              index === 1 && "rounded-br-lg"
            )}
          >
            <Image
              src={image}
              alt={`Property image ${index + 4}`}
              fill
              className="object-cover"
              unoptimized={image.includes("unsplash.com")}
            />
          </motion.div>
        ))}
      </motion.div>

      <Dialog open={showAllPhotos} onOpenChange={setShowAllPhotos}>
        <DialogTitle>{""}</DialogTitle>
        <DialogContent className="max-w-7xl w-full p-0 h-[90vh] flex flex-col">
          <div className="p-4 flex justify-between items-center border-b">
            <h2 className="font-semibold">All Photos</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowAllPhotos(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-4 relative">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentImageIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute h-full w-full"
              >
                <Image
                  src={validImages[currentImageIndex]}
                  alt={`Property image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  unoptimized={validImages[currentImageIndex].includes(
                    "unsplash.com"
                  )}
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10"
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/50 hover:bg-white hover:text-black rounded-full"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Previous image</span>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10"
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-white/50 hover:bg-white hover:text-black rounded-full"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Next image</span>
              </Button>
            </motion.div>

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              <div className="bg-white/50 px-4 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {validImages.length}
              </div>
            </div>
          </div>

          <div className="p-4 border-t overflow-x-auto">
            <div className="flex gap-2">
              {validImages.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "relative w-20 h-20 flex-shrink-0 rounded overflow-hidden",
                    currentImageIndex === index && "ring-2 ring-primary"
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized={image.includes("unsplash.com")}
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
