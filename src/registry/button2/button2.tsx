'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
    label: React.ReactNode,
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost",
    size?: "default" | "sm" | "lg" | "icon",
    iconColor?: string,
    iconHoverColor?: string,
    iconHoverBgColor?: string,
    className?: string
} & Omit<React.ComponentProps<"button">, "onMouseEnter" | "onMouseLeave">;

export const Button2 = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    variant = "default",
    size = "lg",
    iconColor = "var(--primary-foreground)",
    iconHoverColor = "var(--accent-foreground)",
    iconHoverBgColor = "var(--accent)",
    className,
    ...props
}, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const getIconContainerVariants = () => ({
        default: {
            color: iconColor,
            backgroundColor: "transparent",
            scale: 1
        },
        hover: {
            color: iconHoverColor,
            backgroundColor: iconHoverBgColor,
            scale: 1.25
        }
    });
    
    const iconVariants = {
        default: { rotate: 0 },
        hover: { rotate: -45 }
    };
    
    const transition = {
        ease: "linear",
        duration: 0.3
    };

    return (
        <Button
            {...props}
            ref={ref}
            variant={variant}
            size={size}
            className={cn(className, "cursor-pointer relative overflow-hidden")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {label}
            <motion.div
                variants={getIconContainerVariants()}
                animate={isHovered ? "hover" : "default"}
                transition={transition}
                className="flex justify-center items-center rounded-full p-0.5"
            >
                <motion.svg
                    variants={iconVariants}
                    animate={isHovered ? "hover" : "default"}
                    transition={transition}
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
                    />
                </motion.svg>
            </motion.div>
        </Button>
    );
});

Button2.displayName = 'Button2';