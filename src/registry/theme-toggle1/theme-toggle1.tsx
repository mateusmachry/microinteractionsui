'use client';

import React, { SVGProps, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";

type ToggleSize = 'default' | 'lg' | 'xl';

const Moon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="white"
        >
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
        </svg>
    )
};

const Sun = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="#F59E0B"
        >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
    )
};

const toggleSizeMap = {
    default: {
        container: 'w-12 h-6',
        checkbox: 'w-6 h-6',
        icon: 'w-3 h-3',
        offset: '24px',
    },
    lg: {
        container: 'w-16 h-8',
        checkbox: 'w-8 h-8',
        icon: 'w-4 h-4',
        offset: '32px',
    },
    xl: {
        container: 'w-24 h-12',
        checkbox: 'w-12 h-12',
        icon: 'w-6 h-6',
        offset: '48px',
    },
};

const animationVariants = {
    toggle: {
        light: (offset: string) => ({
            left: '0px',
            right: offset,
        }),
        dark: (offset: string) => ({
            left: offset,
            right: '0px',
        })
    },
    sun: {
        light: {
            y: '0%',
            x: '0%',
            opacity: 1
        },
        dark: {
            y: '-100%',
            x: '100%',
            opacity: 0
        }
    },
    moon: {
        light: {
            y: '-100%',
            x: '-100%',
            opacity: 0
        },
        dark: {
            y: '0%',
            x: '0%',
            opacity: 1
        }
    }
};

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 30
};

export function ThemeToggle1() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleToggle = () => {
        const newState = resolvedTheme === 'light' ? 'dark' : 'light';
        setTheme(newState);
    };

    if (!mounted) {
        return null;
    }

    const isDark = resolvedTheme ? resolvedTheme === 'dark' : false;
    const toggleSize: ToggleSize = 'lg';
    const selectedSize = toggleSizeMap[toggleSize];

    return (
        <div className="flex items-center justify-center">
            <div
                className={cn(
                    "relative rounded-full cursor-pointer",
                    selectedSize.container,
                    isDark ? "bg-gray-800" : "bg-gray-100"
                )}
                onClick={handleToggle}
            >
                <input
                    type="checkbox"
                    className="hidden"
                    checked={isDark}
                    onChange={handleToggle}
                />
                <motion.div
                    className={cn(
                        selectedSize.checkbox,
                        "absolute rounded-full flex items-center justify-center overflow-hidden",
                        isDark ?
                            "bg-gray-900 right-0 shadow-lg shadow-black/50" :
                            "bg-white left-0 shadow-lg shadow-white/50",
                    )}
                    animate={isDark ? 'dark' : 'light'}
                    variants={animationVariants.toggle}
                    custom={selectedSize.offset}
                    transition={springTransition}
                >
                    <motion.div
                        className="absolute"
                        initial="light"
                        animate={isDark ? 'dark' : 'light'}
                        variants={animationVariants.sun}
                        transition={springTransition}
                    >
                        <Sun className={selectedSize.icon} />
                    </motion.div>
                    <motion.div
                        className="absolute"
                        initial="light"
                        animate={isDark ? 'dark' : 'light'}
                        variants={animationVariants.moon}
                        transition={springTransition}
                    >
                        <Moon
                            className={cn(
                                selectedSize.icon
                            )}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};