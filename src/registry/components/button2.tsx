'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';
import React, { useState } from "react";

const animationVariants = {
    getIconContainerVariants: (iconColor: string, iconColorOnHover: string, iconBgColorOnHover: string) => ({
        default: {
            color: iconColor,
            backgroundColor: "transparent",
            scale: 1
        },
        hover: {
            color: iconColorOnHover,
            backgroundColor: iconBgColorOnHover,
            scale: 1.15
        }
    }),
    icon: {
        default: { rotate: 0 },
        hover: { rotate: -45 }
    },
};

const animationTransition = {
    ease: "linear",
    duration: 0.3
};

export default function Button2() {
    const iconColor = "var(--primary-foreground)";
    const iconColorOnHover = "var(--accent-foreground)";
    const iconBgColorOnHover = "var(--accent)";
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button
            variant="default"
            size="lg"
            className="cursor-pointer relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span>Get started</span>
            <motion.div
                variants={animationVariants.getIconContainerVariants(iconColor, iconColorOnHover, iconBgColorOnHover)}
                animate={isHovered ? "hover" : "default"}
                transition={animationTransition}
                className="flex justify-center items-center rounded-full p-0.5"
            >
                <motion.svg
                    variants={animationVariants.icon}
                    animate={isHovered ? "hover" : "default"}
                    transition={animationTransition}
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
};