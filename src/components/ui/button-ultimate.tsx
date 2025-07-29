import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonUltimateVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-ultra focus-ultra disabled:pointer-events-none disabled:opacity-50 transform-gpu relative overflow-hidden",
  {
    variants: {
      variant: {
        ultimate: "button-ultimate text-terminal-bg hover-ultra",
        premium: "bg-gradient-to-r from-terminal-blue to-terminal-green/80 text-terminal-bg hover-premium shadow-premium",
        ghost: "hover:bg-accent hover:text-accent-foreground hover-scale",
        link: "text-primary underline-offset-4 hover:underline",
        neon: "neon-button text-terminal-green border-terminal-green hover:text-terminal-bg",
        glassmorphism: "glass border-border/50 hover:border-terminal-green/50 transition-premium backdrop-blur-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-14 rounded-xl px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "ultimate",
      size: "default",
    },
  }
)

export interface ButtonUltimateProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonUltimateVariants> {
  asChild?: boolean
}

const ButtonUltimate = React.forwardRef<HTMLButtonElement, ButtonUltimateProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonUltimateVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {variant === "ultimate" && (
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-terminal-green via-terminal-blue to-terminal-green opacity-0 transition-opacity duration-500 group-hover:opacity-20" />
        )}
      </Comp>
    )
  }
)
ButtonUltimate.displayName = "ButtonUltimate"

export { ButtonUltimate, buttonUltimateVariants }