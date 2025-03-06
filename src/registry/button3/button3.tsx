'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
    label: React.ReactNode,
    bgColorOnHover: string,
    textColorOnHover?: string,
    icon?: React.ReactNode,
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost",
    size?: "default" | "sm" | "lg" | "icon",
    className?: string
} & Omit<React.ComponentProps<"button">, "onMouseEnter" | "onMouseLeave">;

export const Button3 = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    bgColorOnHover,
    icon,
    textColorOnHover = "var(--primary-foreground)",
    variant = "default",
    size = "lg",
    className,
    ...props
}, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    const animationVariants = {
        background: {
            initial: {
                y: -50,
                opacity: 0,
                backgroundColor: 'transparent'
            },
            hover: (bgColor: string) => ({
                y: 0,
                opacity: 1,
                backgroundColor: bgColor
            }),
            exit: {
                y: -50,
                opacity: 0,
                backgroundColor: 'transparent'
            }
        },
        hoverContent: {
            initial: {
                y: -50,
                opacity: 0
            },
            hover: (textColor: string) => ({
                y: 0,
                opacity: 1,
                color: textColor
            }),
            exit: {
                y: -50,
                opacity: 0
            }
        },
        defaultContent: {
            initial: {
                y: 0,
                opacity: 1
            },
            hover: {
                y: 50,
                opacity: 0
            },
            exit: {
                y: 0,
                opacity: 1
            }
        }
    };

    const transition = {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.5
    };

    return (
        <Button
            {...props}
            ref={ref}
            variant={variant}
            size={size}
            className={cn(className, "cursor-pointer overflow-hidden relative")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute inset-0 w-full h-full rounded-md"
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={animationVariants.background}
                custom={bgColorOnHover}
                transition={transition}
            />

            <div className="relative z-10 w-full h-full flex flex-row justify-center items-center">
                <motion.div
                    className="flex flex-row justify-center items-center gap-3 absolute inset-0 w-full"
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    variants={animationVariants.hoverContent}
                    custom={textColorOnHover}
                    transition={transition}
                >
                    {label}
                    {icon}
                </motion.div>

                <motion.div
                    className="flex flex-row justify-center items-center gap-3 w-full"
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    variants={animationVariants.defaultContent}
                    transition={transition}
                >
                    {label}
                    {icon}
                </motion.div>
            </div>
        </Button>
    );
});

Button3.displayName = 'Button3';