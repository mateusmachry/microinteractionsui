'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { SVGProps, useEffect, useRef, useState } from "react";

const ArrowForwardIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
        <path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z" />
    </svg>
);

const animationVariants = {
    icon: {
        initial: { opacity: 1 },
        hover: (buttonWidth: number) => ({
            x: -1 * buttonWidth,
            opacity: 0,
        }),
    },
    label: {
        initial: { x: '0%' },
        hover: { x: '-20%' },
    },
    arrow: {
        initial: {
            position: 'absolute' as const,
            x: '100%',
            opacity: 0
        },
        hover: {
            x: 0,
            opacity: 1
        },
    }
};

const animationTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
};

const IconParkSolidApple = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><path fill="currentColor" d="M23.911 11.318c.082-2.232.71-4.192 1.866-5.83c1.163-1.647 3.086-2.817 5.717-3.48l.055.243v.424c0 .961-.233 2.064-.693 3.276c-.483 1.174-1.237 2.28-2.238 3.277c-.936.879-1.803 1.46-2.569 1.723c-.252.076-.599.15-1.018.217q-.558.087-1.12.15"></path><path fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="4" d="M24.35 14.629c-2.972 0-5.036-2.63-7.969-2.63c-2.932 0-8.973 2.696-8.973 12c0 9.306 5.365 15.3 5.965 16c.6.701 1.987 2.5 4.137 2.5s4.503-1.709 6.84-1.709s5.279 1.71 7.2 1.71c1.92 0 2.71-.783 4.016-2.134s3.8-5.47 4.67-7.944c-1.433-.854-5.234-3.17-5.234-8.422q0-5.251 3.838-8.725Q36.322 12 33 12c-3.323 0-5.677 2.629-8.65 2.629Z"></path></svg>
    )
};

export default function Button8() {
    const [isHovered, setIsHovered] = useState(false);
    const [buttonWidth, setButtonWidth] = useState(0);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const currentRef = buttonRef.current;
        if (currentRef) {
            setButtonWidth(currentRef.offsetWidth);
        }
    }, [buttonRef]);

    return (
        <Button
            ref={buttonRef}
            variant="default"
            size="lg"
            className="cursor-pointer relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <motion.div
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={animationVariants.icon}
                custom={buttonWidth}
                transition={animationTransition}
            >
                <IconParkSolidApple />
            </motion.div>

            <motion.div
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={animationVariants.label}
                transition={animationTransition}
            >
                <span>Sign in with Apple</span>
            </motion.div>

            <motion.div
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={animationVariants.arrow}
                transition={{
                    ...animationTransition,
                    delay: 0.1
                }}
                style={{
                    right: Math.round(buttonWidth * 0.1)
                }}
            >
                <ArrowForwardIcon />
            </motion.div>
        </Button>
    );
};