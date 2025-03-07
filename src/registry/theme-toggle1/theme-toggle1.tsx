'use client';

import React, { SVGProps, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

export type Theme = 'light' | 'dark';

export type ThemeToggleProps = {
    initialTheme: string | undefined,
    size?: 'default' | 'lg';
    onChange?: (theme: Theme) => void;
};

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
            fill="rgb(255, 214, 0)"
        >
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
        </svg>
    )
};

export function ThemeToggle1({ initialTheme, onChange, size = 'default' }: ThemeToggleProps) {
    const [theme, setTheme] = useState<Theme | null>(null);

    useEffect(() => {
        if (initialTheme) {
            setTheme(initialTheme as Theme);
        }
    }, [initialTheme]);

    const handleToggle = () => {
        const newState = theme === 'light' ? 'dark' : 'light';
        setTheme(newState);
        onChange?.(newState);
    };

    const isDark = theme === 'dark';

    const sizeMap = {
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
    };
    const currentSize = sizeMap[size];

    return (
        <div
            className="flex items-center justify-center"
        >
            <div
                className={cn(
                    "relative rounded-full cursor-pointer",
                    currentSize.container,
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
                        currentSize.checkbox,
                        "absolute rounded-full flex items-center justify-center overflow-hidden",
                        isDark ?
                            "bg-gray-900 right-0 shadow-lg shadow-black/50" :
                            "bg-white left-0 shadow-lg shadow-white/50",
                    )}
                    animate={{
                        left: isDark ? currentSize.offset : '0px',
                        right: isDark ? '0px' : currentSize.offset,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30
                    }}
                >
                    <motion.div
                        className="absolute"
                        initial={{
                            y: '0%',
                            x: '0%'
                        }}
                        animate={{
                            y: isDark ? '-100%' : '0%',
                            x: isDark ? '100%' : '0%',
                            opacity: isDark ? 0 : 1
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30
                        }}
                    >
                        <Sun
                            className={cn(
                                currentSize.icon,
                            )}
                        />
                    </motion.div>
                    <motion.div
                        className="absolute"
                        initial={{
                            y: '0%',
                            x: '0%'
                        }}
                        animate={{
                            y: isDark ? '0%' : '-100%',
                            x: isDark ? '0%' : '-100%',
                            opacity: isDark ? 1 : 0
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30
                        }}>
                        <Moon
                            className={cn(
                                currentSize.icon,
                                isDark ? "opacity-100" : "opacity-0"
                            )}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};