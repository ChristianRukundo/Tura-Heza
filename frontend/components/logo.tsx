import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  textHidden?: boolean;
}

export function Logo({ className, textHidden = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2 font-semibold tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm",
        className
      )}
      aria-label="Tura Heza Home"
    >
      <Image
        src="/logo.svg"
        alt="Tura Heza Logo"
        width={32}
        height={32}
        priority
        className="h-8 w-auto"
      />
      {!textHidden && (
        <span className="text-xl text-foreground hover:text-primary transition-colors">
          TURA HEZA
        </span>
      )}
    </Link>
  );
}
