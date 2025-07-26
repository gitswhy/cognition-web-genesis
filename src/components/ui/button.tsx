import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-98",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent hover:-translate-y-0.5",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-lg hover:-translate-y-0.5",
        ghost: "hover:bg-accent hover:text-accent-foreground hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary/80",
        terminal: "bg-terminal-green text-terminal-bg font-semibold border border-terminal-green/30 hover:bg-terminal-green/90 hover:shadow-terminal-glow hover:-translate-y-0.5 hover:border-terminal-green/50 focus:shadow-terminal-glow",
        "terminal-blue": "bg-terminal-blue text-terminal-bg font-semibold border border-terminal-blue/30 hover:bg-terminal-blue/90 hover:shadow-blue-glow hover:-translate-y-0.5 hover:border-terminal-blue/50 focus:shadow-blue-glow",
        "terminal-outline": "border border-terminal-green/50 text-terminal-green bg-transparent hover:bg-terminal-green/5 hover:border-terminal-green/70 hover:-translate-y-0.5 hover:shadow-terminal-glow/30 focus:shadow-terminal-glow/30",
        "terminal-outline-blue": "border border-terminal-blue/50 text-terminal-blue bg-transparent hover:bg-terminal-blue/5 hover:border-terminal-blue/70 hover:-translate-y-0.5 hover:shadow-blue-glow/30 focus:shadow-blue-glow/30",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 py-2",
        lg: "h-12 rounded-md px-8 py-3 text-base",
        xl: "h-14 rounded-lg px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
