import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all ring-offset-white transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        destructive: "text-white bg-error",
        outline:
          "border border-primary text-primary bg-transparent shadow-sm hover:bg-primary hover:text-white",
        secondary: "bg-white text-primary shadow-md",
        cancel: "bg-gray text-white",
        icon: "!p-1 bg-transition",
        link: "text-primary underline-offset-4 hover:underline",
        calendar: "",
        noBg: "bg-none",
        white: "bg-white text-primary",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 text-lg rounded-md px-8 py-6",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
