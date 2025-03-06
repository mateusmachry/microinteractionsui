'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export type AnimationDirection = 'from-top' | 'from-bottom';

export type ButtonProps = {
    label: React.ReactNode,
    bgColorOnHover: string,
    textColorOnHover?: string,
    icon?: React.ReactNode,
    animationDirection?: AnimationDirection,
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost",
    size?: "default" | "sm" | "lg" | "icon",
    className?: string
} & Omit<React.ComponentProps<"button">, "onMouseEnter" | "onMouseLeave">;

const animationDirectionMap = {
    'from-top': {
        'background': {
            initial: {
                x: 0,
                y: -50
            },
            hover: {
                x: 0,
                y: 0
            },
            exit: {
                x: 0,
                y: -50
            }
        },
        'hoverContent': {
            initial: {
                x: 0,
                y: -50
            },
            hover: {
                x: 0,
                y: 0
            },
            exit: {
                x: 0,
                y: -50
            }
        },
        'defaultContent': {
            initial: {
                x: 0,
                y: 0
            },
            hover: {
                x: 0,
                y: 50
            },
            exit: {
                x: 0,
                y: 0
            }
        }
    },
    'from-bottom': {
        'background': {
            initial: {
                x: 0,
                y: 50
            },
            hover: {
                x: 0,
                y: 0
            },
            exit: {
                x: 0,
                y: 50
            }
        },
        'hoverContent': {
            initial: {
                x: 0,
                y: 50
            },
            hover: {
                x: 0,
                y: 0
            },
            exit: {
                x: 0,
                y: 50
            }
        },
        'defaultContent': {
            initial: {
                x: 0,
                y: 0
            },
            hover: {
                x: 0,
                y: -50
            },
            exit: {
                x: 0,
                y: 0
            }
        }
    },
};

const animationVariants = {
    background: {
        initial: ({ animationDirection }: { animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].background.initial.y,
            x: animationDirectionMap[animationDirection].background.initial.x,
            opacity: 0,
            backgroundColor: 'transparent'
        }),
        hover: ({ bgColorOnHover, animationDirection }: { bgColorOnHover: string, animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].background.hover.y,
            x: animationDirectionMap[animationDirection].background.hover.x,
            opacity: 1,
            backgroundColor: bgColorOnHover
        }),
        exit: ({ animationDirection }: { animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].background.exit.y,
            x: animationDirectionMap[animationDirection].background.exit.x,
            opacity: 0,
            backgroundColor: 'transparent'
        })
    },
    hoverContent: {
        initial: ({ animationDirection }: { animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].hoverContent.initial.y,
            x: animationDirectionMap[animationDirection].hoverContent.initial.x,
            opacity: 0
        }),
        hover: ({ textColorOnHover, animationDirection }: { textColorOnHover: string, animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].hoverContent.hover.y,
            x: animationDirectionMap[animationDirection].hoverContent.hover.x,
            opacity: 1,
            color: textColorOnHover
        }),
        exit: ({ animationDirection }: { animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].hoverContent.exit.y,
            x: animationDirectionMap[animationDirection].hoverContent.exit.x,
            opacity: 0
        })
    },
    defaultContent: {
        initial: ({ animationDirection }: { animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].defaultContent.initial.y,
            x: animationDirectionMap[animationDirection].defaultContent.initial.x,
            opacity: 1
        }),
        hover: ({ animationDirection }: { animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].defaultContent.hover.y,
            x: animationDirectionMap[animationDirection].defaultContent.hover.x,
            opacity: 0
        }),
        exit: ({ animationDirection }: { animationDirection: AnimationDirection }) => ({
            y: animationDirectionMap[animationDirection].defaultContent.exit.y,
            x: animationDirectionMap[animationDirection].defaultContent.exit.x,
            opacity: 1
        })
    }
};

const animationTransition = {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5
};

export const Button3 = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    bgColorOnHover,
    icon,
    animationDirection = "from-top",
    textColorOnHover = "var(--primary-foreground)",
    variant = "default",
    size = "lg",
    className,
    ...props
}, ref) => {
    const [isHovered, setIsHovered] = useState(false);

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
                custom={{ bgColorOnHover: bgColorOnHover, animationDirection: animationDirection }}
                transition={animationTransition}
            />

            <div className="relative z-10 w-full h-full flex flex-row justify-center items-center">
                <motion.div
                    className="flex flex-row justify-center items-center gap-3 absolute inset-0 w-full"
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    variants={animationVariants.hoverContent}
                    custom={{ textColorOnHover: textColorOnHover, animationDirection: animationDirection }}
                    transition={animationTransition}
                >
                    {label}
                    {icon}
                </motion.div>

                <motion.div
                    className="flex flex-row justify-center items-center gap-3 w-full"
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    variants={animationVariants.defaultContent}
                    custom={{ animationDirection: animationDirection }}
                    transition={animationTransition}
                >
                    {label}
                    {icon}
                </motion.div>
            </div>
        </Button>
    );
});

Button3.displayName = 'Button3';