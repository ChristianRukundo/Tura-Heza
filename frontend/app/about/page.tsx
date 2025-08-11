import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - Tura Heza",
  description:
    "Learn more about Tura Heza and our mission to provide luxury rentals in Rwanda.",
};

const AboutPage = () => {
  return (
    <div className="container mx-auto py-20">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <Image
            src="https://images.unsplash.com/photo-1564564244674-7448ef554db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80s"
            alt="About Us Image"
            width={800}
            height={600}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:order-1">
          <h2 className="text-4xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Tura Heza was founded in 2023 with a vision to redefine luxury
            property rentals in Rwanda. We saw an opportunity to connect
            discerning travelers with exceptional homes and provide unparalleled
            service.
          </p>
          <p className="text-gray-600 mb-4">
            Our team is passionate about showcasing the beauty and culture of
            Rwanda while ensuring our guests experience the utmost comfort and
            convenience.
          </p>
          <Button asChild>
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Mission</h2>
        <p className="text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
          Our mission is to provide exceptional experiences through luxury
          property rentals, connecting guests with the best of Rwanda while
          supporting local communities and promoting sustainable tourism.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1573496808620-52aa2b73ca9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Team Member 1"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">CEO</p>
          </div>
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1564564244674-7448ef554db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80"
              alt="Team Member 2"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold">Jane Smith</h3>
            <p className="text-sm text-gray-500">Head of Operations</p>
          </div>
          <div className="text-center">
            <Image
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
              alt="Team Member 3"
              width={300}
              height={300}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold">Richard Roe</h3>
            <p className="text-sm text-gray-500">Marketing Manager</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We are committed to providing the highest quality properties and
              services.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We operate with transparency, honesty, and ethical practices.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">
              We promote responsible tourism and support local communities.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
