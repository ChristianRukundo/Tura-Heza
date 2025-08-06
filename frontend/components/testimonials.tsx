"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback,  } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    quote:
      "Tura Heza made finding our dream vacation home in Musanze effortless. The villa was breathtaking and the service was impeccable. Truly a five-star experience from start to finish.",
    author: "Aline U.",
    title: "Frequent Traveler",
    avatar: "AU",
  },
  {
    quote:
      "As an agent, this platform is a game-changer. The dashboard is intuitive and provides incredible insights. My bookings have increased significantly since I started listing my properties here.",
    author: "Jean-Pierre K.",
    title: "Real Estate Agent",
    avatar: "JP",
  },
  {
    quote:
      "The property we booked near Lake Kivu was even more beautiful in person. The attention to detail and the seamless booking process made our family trip one for the books. Highly recommended!",
    author: "Maria G.",
    title: "Family Vacationer",
    avatar: "MG",
  },
  {
    quote:
      "I was impressed by the quality of the listings. The descriptions were accurate, the photos were stunning, and the support team was always ready to help. Tura Heza is now my go-to for luxury rentals in Rwanda.",
    author: "David L.",
    title: "Expat",
    avatar: "DL",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export const Testimonials = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0 flex-grow-0 basis-full min-w-0 px-4 md:basis-1/2 lg:basis-1/3"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="flex flex-col justify-between h-full p-6">
                <div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg italic border-l-2 pl-4 border-primary">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                <div className="flex items-center mt-6">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};