import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <motion.div
            className="bg-slate-800 text-white p-8 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-6">Let&apos;s connect</h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Phone</p>
                <p>+00 00 000 000</p>
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p>info@luxuryrentals.com</p>
              </div>
              <div>
                <p className="font-medium">Address</p>
                <p>Prospect Ln</p>
                <p>Santorini GR 84700 Thira</p>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="#" className="text-white hover:text-primary">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-primary">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-white hover:text-primary">
                  <Twitter size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-semibold mb-6">
              We&apos;d love to hear from you
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" />
                </div>
                <div>
                  <Input placeholder="Email" type="email" />
                </div>
              </div>
              <div>
                <Textarea placeholder="Message" className="min-h-[120px]" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I accept the Terms and Conditions
                </label>
              </div>
              <Button className="w-full">SEND</Button>
            </form>
            </motion.div>
          </div>
        </div>
        <div className="border-t pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-4">TURA HEZA</h4>
              <p className="text-sm text-muted-foreground max-w-md">
                Discover your dream property in the heart of Rwanda! 🚀 A modern
                real estate platform built with Next.js, TypeScript, and a suite
                of powerful tools to make finding your perfect home or
                investment easy and enjoyable.
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="font-semibold mb-4">Connect with us</h4>
              <p className="text-sm">+250 795990100</p>
              <p className="text-sm">info@luxuryrentals.com</p>
              <div className="flex gap-4 mt-4 md:justify-end">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Facebook size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Instagram size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter size={18} />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin size={18} />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 text-sm text-muted-foreground">
            <div className="flex gap-4 mb-4 md:mb-0">
              <Link href="/terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="hover:text-primary">
                Privacy Policy and Cookies
              </Link>
              <Link href="/sitemap" className="hover:text-primary">
                Sitemap
              </Link>
            </div>
            <p>© Luxury Rentals. All rights reserved since 2023</p>
          </div>
        </div>
    </footer>
  );
}
