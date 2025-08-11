"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface GlassCardProps extends React.ComponentPropsWithoutRef<typeof motion.div> {
  children?: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className, ...props }: GlassCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      className={cn(
        "backdrop-blur-xl rounded-2xl shadow-xl",
        isDark
          ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
          : "bg-black/5 border border-black/10 hover:bg-black/10 hover:border-black/20",
        "transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};