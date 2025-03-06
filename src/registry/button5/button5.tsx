'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { forwardRef, useEffect, useState, useRef, SVGProps } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
    label: React.ReactNode,
    icon?: React.ReactNode,
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost",
    size?: "default" | "sm" | "lg" | "icon",
    className?: string,
    progress?: number,
    progressColor?: string,
    onComplete?: () => void,
    completeAnimationDurationMs?: number,
} & React.ComponentProps<"button">;

const LucideCheck = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 6L9 17l-5-5"></path></svg>
    )
};

const animationVariants = {
    containerVariants: {
        normal: (width: number | null) => ({
            width: width ? width : 'auto',
        }),
        compact: {
            width: 'fit-content',
        }
    },
    progressVariants: {
        initial: { width: "0%" },
        animate: (progress: number) => ({
            width: `${progress}%`,
        })
    },
    contentVariants: {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    },
    checkmarkVariants: {
        hidden: { scale: 0 },
        visible: { scale: 1.0 }
    }
};

const animationTransition = {
    checkmarkTransitionDuration: 0.6
};

export const Button5 = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    icon,
    variant = "default",
    size = "lg",
    className,
    progress = 0,
    progressColor = "#10B981",
    onComplete,
    completeAnimationDurationMs = 2000,
    ...props
}, ref) => {
    const clampedProgress = Math.min(Math.max(0, progress), 100);
    const [animationState, setAnimationState] = useState<'progress' | 'showing-check' | 'complete'>('progress');
    const [buttonWidth, setButtonWidth] = useState<number | null>(null);
    const completeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const internalRef = useRef<HTMLButtonElement>(null);
    const buttonRef = (ref || internalRef) as React.RefObject<HTMLButtonElement>;

    useEffect(() => {
        const currentRef = buttonRef.current;
        if (currentRef) {
            setButtonWidth(currentRef.offsetWidth);
        }
    }, [buttonRef]);

    useEffect(() => {
        return () => {
            if (completeTimeoutRef.current) {
                clearTimeout(completeTimeoutRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (clampedProgress >= 100 && animationState === 'progress') {
            setTimeout(() => {
                setAnimationState('showing-check');
                completeTimeoutRef.current = setTimeout(() => {
                    setAnimationState('complete');
                    if (onComplete) onComplete();
                }, completeAnimationDurationMs);
            }, animationTransition.checkmarkTransitionDuration * 1000);
        }
        else if (clampedProgress < 100 && animationState !== 'progress') {
            if (completeTimeoutRef.current) {
                clearTimeout(completeTimeoutRef.current);
                completeTimeoutRef.current = null;
            }
            setAnimationState('progress');
        }
    }, [clampedProgress, animationState]);

    const isShowingCheckmarkAnimation = animationState === 'showing-check';

    return (
        <motion.div
            className="inline-block"
            variants={animationVariants.containerVariants}
            custom={buttonWidth}
            animate={isShowingCheckmarkAnimation ? 'compact' : 'normal'}
            transition={{ duration: animationTransition.checkmarkTransitionDuration, ease: "easeInOut" }}
        >
            <Button
                {...props}
                ref={buttonRef}
                variant={variant}
                size={size}
                className={cn(
                    className,
                    "cursor-pointer relative overflow-hidden w-full transition-all",
                    isShowingCheckmarkAnimation ? "aspect-square rounded-full p-0 disabled:opacity-100" : ''
                )}
                disabled={isShowingCheckmarkAnimation || props.disabled}
            >
                {/* Progress overlay */}
                <motion.div
                    className="absolute left-0 top-0 h-full z-10"
                    style={{
                        backgroundColor: progressColor,
                    }}
                    variants={animationVariants.progressVariants}
                    custom={clampedProgress}
                    initial="initial"
                    animate="animate"
                    transition={{ ease: "linear" }}
                />

                {/* Content container */}
                <motion.div
                    className="relative z-20 flex items-center justify-center gap-3 w-full h-full"
                    variants={animationVariants.contentVariants}
                    animate={isShowingCheckmarkAnimation ? 'hidden' : 'visible'}
                >
                    {label}
                    {icon}
                </motion.div>

                {/* Complete Checkmark */}
                <motion.div
                    className="absolute inset-0 z-30 flex items-center justify-center gap-3"
                    variants={animationVariants.checkmarkVariants}
                    initial="hidden"
                    animate={isShowingCheckmarkAnimation ? 'visible' : 'hidden'}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {isShowingCheckmarkAnimation && <LucideCheck className="text-primary-foreground size-6" />}
                </motion.div>
            </Button>
        </motion.div>
    );
});

Button5.displayName = 'Button5';