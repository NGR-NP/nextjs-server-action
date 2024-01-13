import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const BadgeVariants = cva("border rounded", {
  variants: {
    variant: {
      default: "bg-muted text-muted-foreground",
      dark: "bg-slate-900 text-slate-100",
    },
    size: {
      default: "px-2 py-0.5 text-sm font-medium",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});
const Badge = forwardRef(
  ({ className, children, size, variant, ...props }, ref) => {
    return (
      <div
        className={cn(
          BadgeVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Badge.displayName = "Badge";
export { Badge, BadgeVariants };
