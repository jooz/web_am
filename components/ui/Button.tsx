import * as React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-brand-blue text-white hover:bg-brand-dark',
            secondary: 'bg-brand-green text-white hover:bg-green-600',
            outline: 'border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white',
            ghost: 'text-gray-600 hover:bg-gray-100',
        };

        const sizes = {
            sm: 'px-4 py-2 text-xs',
            md: 'px-6 py-2.5 text-sm',
            lg: 'px-8 py-4 text-base',
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-eight font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
