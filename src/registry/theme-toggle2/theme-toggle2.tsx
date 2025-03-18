'use client';

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

type ToggleSize = 'default' | 'lg' | 'xl';

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

export default function ThemeToggle2() {
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
    const toggleSize: ToggleSize = 'default';
    const selectedSize = toggleSizeMap[toggleSize];

    return (
        <div className="flex items-center justify-center">
            <div
                className={cn(
                    "relative rounded-full cursor-pointer",
                    selectedSize.container,
                    isDark ? "bg-gray-800" : "bg-gray-200",
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
                            "bg-black right-0 shadow-lg shadow-black/50" :
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
                        <SunIcon className={selectedSize.icon} aria-hidden="true"/>
                    </motion.div>
                    <motion.div
                        className="absolute"
                        initial="light"
                        animate={isDark ? 'dark' : 'light'}
                        variants={animationVariants.moon}
                        transition={springTransition}
                    >
                        <MoonIcon
                            className={cn(
                                selectedSize.icon
                            )}
                            aria-hidden="true"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};