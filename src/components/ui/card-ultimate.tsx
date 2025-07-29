import * as React from "react"
import { cn } from "@/lib/utils"

const CardUltimate = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "premium" | "glass" | "neon"
  }
>(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "card-ultimate rounded-xl transition-ultra",
      {
        "border-2 border-terminal-green/20 shadow-ultra": variant === "premium",
        "glass border-white/10 backdrop-blur-2xl": variant === "glass", 
        "border-terminal-green border-2 shadow-[0_0_30px_rgba(0,255,102,0.3)]": variant === "neon",
        "": variant === "default"
      },
      className
    )}
    {...props}
  />
))
CardUltimate.displayName = "CardUltimate"

const CardUltimateHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardUltimateHeader.displayName = "CardUltimateHeader"

const CardUltimateTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-fluid-xl font-display font-semibold leading-none tracking-tight text-gradient-primary",
      className
    )}
    {...props}
  />
))
CardUltimateTitle.displayName = "CardUltimateTitle"

const CardUltimateDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-fluid-sm text-muted-foreground", className)}
    {...props}
  />
))
CardUltimateDescription.displayName = "CardUltimateDescription"

const CardUltimateContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardUltimateContent.displayName = "CardUltimateContent"

const CardUltimateFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardUltimateFooter.displayName = "CardUltimateFooter"

export { 
  CardUltimate, 
  CardUltimateHeader, 
  CardUltimateFooter, 
  CardUltimateTitle, 
  CardUltimateDescription, 
  CardUltimateContent 
}