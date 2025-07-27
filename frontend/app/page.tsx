import { Button } from "@/components/ui/button";
import { FeaturedProperties } from "@/components/featured-properties";
import Link from "next/link";
import Image from "next/image";
import {
  FadeIn,
  SlideUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations";
import { ArrowRight, Calendar, MapPin, Search } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Villa"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-white">
          <SlideUp className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Discover Extraordinary Luxury Villas
            </h1>
            <p className="text-xl mb-8">
              Experience unparalleled luxury in the world&apos;s most stunning
              locations
            </p>
            <div className="flex gap-4">
              <Button size="lg" asChild>
                <Link href="/villas">Browse Villas</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-black border-white hover:bg-white/20"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </SlideUp>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold">How It Works</h2>
            <p className="text-muted-foreground">
              Find and book your perfect luxury villa in just a few steps
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <SlideUp
              delay={0.1}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Search</h3>
              <p className="text-muted-foreground">
                Browse our extensive collection of luxury villas and filter by
                location, amenities, and more.
              </p>
            </SlideUp>

            <SlideUp
              delay={0.2}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Book</h3>
              <p className="text-muted-foreground">
                Select your dates, review the details, and secure your
                reservation with our easy booking process.
              </p>
            </SlideUp>

            <SlideUp
              delay={0.3}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-4">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Enjoy</h3>
              <p className="text-muted-foreground">
                Arrive at your destination and enjoy a luxurious stay with
                premium amenities and exceptional service.
              </p>
            </SlideUp>
          </div>
        </div>
      </section>
      {/* Featured Properties */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <FadeIn className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Villas</h2>
            <Button variant="outline" asChild>
              <Link href="/villas">View All</Link>
            </Button>
          </FadeIn>
          <FeaturedProperties />
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-cover bg-center relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Luxury Lifestyle"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="container relative z-10">
          <FadeIn className="max-w-3xl mx-auto text-center text-white">
            <p className="text-2xl italic font-light">
              &apos;Luxury takes many forms nowadays, but one thing doesn&apos;t change:
              luxury is about desire and the ability to create dreams.&apos;
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20">
        <div className="container">
          <SlideUp className="text-3xl font-bold mb-12 text-center">
            <h2>Popular Destinations</h2>
          </SlideUp>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Nyungwe Forest National Park",
              "Volcanoes National Park",
              "Lake Kivu",
            ].map((location) => (
              <StaggerItem key={location}>
                <Link href={`/villas?location=${location}`} className="group">
                  <div className="relative h-80 rounded-lg overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                      alt={location}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold text-white">
                        {location}
                      </h3>
                      <p className="text-white/80 group-hover:translate-x-2 transition-transform duration-300">
                        Explore villas
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Ready to Find Your Perfect Villa?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Browse our collection of luxury properties and book your dream
            vacation today.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/villas">
              Explore Properties
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
