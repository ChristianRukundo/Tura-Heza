import { ArrowRight, Search, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedProperties } from "@/components/featured-properties";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StaggerChildren, StaggerItem, SlideUp } from "@/components/animations";
import { BentoFeatures } from "@/components/bento-features";
import { Testimonials } from "@/components/testimonials";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[100vh] flex flex-col items-center justify-center text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop"
              alt="Luxury Villa background"
              fill
              className="object-cover"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="relative z-10 flex flex-col items-center text-center px-4">
            <SlideUp>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                <span className="text-gradient">Find Your Sanctuary</span>
              </h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-neutral-300">
                Discover and book exclusive luxury properties in the heart of
                Rwanda. Unforgettable experiences await.
              </p>
            </SlideUp>

            <SlideUp delay={0.2}>
              <div className="w-full max-w-3xl p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg">
                <form className="flex flex-col md:flex-row items-center gap-4">
                  <div className="relative w-full md:w-1/3">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-300" />
                    <Input
                      type="text"
                      placeholder="Where to?"
                      className="bg-transparent border-0 pl-12 h-12 text-white placeholder:text-neutral-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                  </div>
                  <div className="relative w-full md:w-1/3 flex items-center border-l border-r border-white/20 px-4">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-300" />
                    <span className="pl-10 text-neutral-300">Add Dates</span>
                  </div>
                  <div className="w-full md:w-1/3 flex items-center gap-4">
                    <Input
                      type="text"
                      placeholder="Add Guests"
                      className="bg-transparent border-0 h-12 text-white placeholder:text-neutral-300 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="rounded-full w-12 h-12 bg-primary hover:bg-primary/90 flex-shrink-0"
                    >
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                </form>
              </div>
            </SlideUp>
          </div>
        </section>

        {/* Bento Grid Features Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <BentoFeatures />
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <StaggerChildren className="text-center mb-12">
              <StaggerItem>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Featured Properties
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
                  Handpicked selection of our finest villas, offering the
                  pinnacle of luxury and comfort.
                </p>
              </StaggerItem>
            </StaggerChildren>
            <FeaturedProperties />
            <div className="text-center mt-12">
              <Button asChild size="lg" variant="outline">
                <Link href="/villas">
                  Explore All Properties <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <StaggerChildren className="text-center mb-12">
              <StaggerItem>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  What Our Guests Say
                </h2>
              </StaggerItem>
              <StaggerItem>
                <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
                  Hear from those who have experienced the Tura Heza
                  difference firsthand.
                </p>
              </StaggerItem>
            </StaggerChildren>
            <Testimonials />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="relative rounded-2xl overflow-hidden bg-primary text-primary-foreground p-12 md:p-20 text-center">
              <div
                className="absolute inset-0 bg-black/20"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Crect x='0' y='0' width='50' height='50'/%3E%3Crect x='50' y='50' width='50' height='50'/%3E%3C/g%3E%3C/svg%3E\")",
                }}
              />
              <StaggerChildren className="relative z-10">
                <StaggerItem>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Ready to Find Your Perfect Villa?
                  </h2>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-lg mt-4 max-w-xl mx-auto">
                    Browse our exclusive collection and book your dream getaway
                    today. Your next adventure is just a click away.
                  </p>
                </StaggerItem>
                <StaggerItem>
                  <Button
                    asChild
                    size="lg"
                    variant="secondary"
                    className="mt-8"
                  >
                    <Link href="/villas">
                      Explore Properties
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </StaggerItem>
              </StaggerChildren>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}