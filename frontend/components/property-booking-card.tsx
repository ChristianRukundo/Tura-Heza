"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { addDays, format, differenceInDays } from "date-fns";
import { CalendarIcon } from "lucide-react";
import type { Property } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useCreateBooking } from "@/lib/api/bookings";
import { useAuth } from "@/context/auth-context";

interface PropertyBookingCardProps {
  property: Property;
}

export function PropertyBookingCard({ property }: PropertyBookingCardProps) {
  const { user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const { mutate: createBooking, isPending } = useCreateBooking();

  const [dateRange, setDateRange] = useState<{
    from: Date;
    to?: Date;
  }>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  const [guests, setGuests] = useState("2");

  const nights = dateRange.to
    ? differenceInDays(dateRange.to, dateRange.from)
    : 0;

  const subtotal = property.pricePerNight * nights;
  const cleaningFee = 130;
  const serviceFee = Math.round(subtotal * 0.15);
  const total = subtotal + cleaningFee + serviceFee;

  const handleBooking = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please login to book this property",
      });
      router.push("/auth/login");
      return;
    }

    if (!dateRange.to) {
      toast({
        title: "Select dates",
        description: "Please select check-in and check-out dates",
      });
      return;
    }

    createBooking(
      {
        propertyId: property.id,
        checkIn: dateRange.from.toISOString(),
        checkOut: dateRange.to.toISOString(),
        guests: Number.parseInt(guests),
        totalAmount: total,
        cleaningFee,
        serviceFee,
      },
      {
        onSuccess: () => {
          toast({
            title: "Booking successful",
            description: "Your booking has been confirmed",
          });
          router.push("/bookings");
        },
        onError: () => {
          toast({
            title: "Booking failed",
            description:
              "There was an error processing your booking. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <div className="border rounded-lg p-6 shadow-sm bg-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-2xl font-bold">€{property.pricePerNight}</span>
          <span className="text-muted-foreground"> / night</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    format(dateRange.from, "MMM d, yyyy")
                  ) : (
                    <span>Check in</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={(range) => {
                    if (range?.from) {
                      setDateRange({ from: range.from, to: range.to });
                    }
                  }}
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.to ? (
                    format(dateRange.to, "MMM d, yyyy")
                  ) : (
                    <span>Check out</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={(range) => {
                    if (range?.from) {
                      setDateRange({ from: range.from, to: range.to });
                    }
                  }}
                  numberOfMonths={1}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div>
          <Select value={guests} onValueChange={setGuests}>
            <SelectTrigger>
              <SelectValue placeholder="Select guests" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: property.guests }, (_, i) => i + 1).map(
                (num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "guest" : "guests"}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>

        <Button
          className="w-full"
          size="lg"
          onClick={handleBooking}
          disabled={isPending}
        >
          {isPending ? "Processing..." : "Reserve"}
        </Button>

        <p className="text-center text-sm text-muted-foreground">
          You won't be charged yet
        </p>

        <div className="space-y-4 mt-6">
          <div className="flex justify-between">
            <div>
              €{property.pricePerNight} x {nights} nights
            </div>
            <div>€{subtotal}</div>
          </div>

          <div className="flex justify-between">
            <div>Cleaning fee</div>
            <div>€{cleaningFee}</div>
          </div>

          <div className="flex justify-between">
            <div>Service fee</div>
            <div>€{serviceFee}</div>
          </div>

          <Separator />

          <div className="flex justify-between font-semibold">
            <div>Total before taxes</div>
            <div>€{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
