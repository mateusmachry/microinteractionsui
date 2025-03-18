'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { SVGProps, useState } from "react";

type AnimationDirection = 'from-top' | 'from-bottom';

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

const MaterialSymbolsChevronRight = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"></path></svg>
    )
}

export function Button3() {
    const [isHovered, setIsHovered] = useState(false);
    const animationDirection: AnimationDirection = "from-top";

    return (
        <Button
            variant="outline"
            size="lg"
            className="cursor-pointer overflow-hidden relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="absolute inset-0 w-full h-full rounded-md"
                initial="initial"
                animate={isHovered ? "hover" : "initial"}
                variants={animationVariants.background}
                custom={{ bgColorOnHover: "var(--primary)", animationDirection: animationDirection }}
                transition={animationTransition}
            />

            <div className="relative z-10 w-full h-full flex flex-row justify-center items-center">
                <motion.div
                    className="flex flex-row justify-center items-center gap-3 absolute inset-0 w-full"
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    variants={animationVariants.hoverContent}
                    custom={{ textColorOnHover: "var(--primary-foreground)", animationDirection: animationDirection }}
                    transition={animationTransition}
                >
                    <span>Sign up</span>
                    <MaterialSymbolsChevronRight />
                </motion.div>

                <motion.div
                    className="flex flex-row justify-center items-center gap-3 w-full"
                    initial="initial"
                    animate={isHovered ? "hover" : "initial"}
                    variants={animationVariants.defaultContent}
                    custom={{ animationDirection: animationDirection }}
                    transition={animationTransition}
                >
                    <span>Sign up</span>
                    <MaterialSymbolsChevronRight />
                </motion.div>
            </div>
        </Button>
    );
};