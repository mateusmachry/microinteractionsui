'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
    label: React.ReactNode,
    icon?: React.ReactNode,
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost",
    size?: "default" | "sm" | "lg" | "icon",
    className?: string,
    progress?: number,
    progressColor?: string
} & React.ComponentProps<"button">;

export const Button5 = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    icon,
    variant = "default",
    size = "lg",
    className,
    progress = 0,
    progressColor = "#10B981",
    ...props
}, ref) => {
    const clampedProgress = Math.min(Math.max(0, progress), 100);

    return (
        <Button
            {...props}
            ref={ref}
            variant={variant}
            size={size}
            className={cn(className, "cursor-pointer relative overflow-hidden")}>
            <motion.div
                className="absolute z-10 inset-0 left-0 top-0 h-full"
                style={{
                    backgroundColor: progressColor,
                    width: `${clampedProgress}%`,
                    originX: 0,
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${clampedProgress}%` }}
                transition={{ duration: 0.3, ease: "linear" }}
            />
            <div className="relative z-20 flex items-center justify-center gap-3">
                {label}
                {icon}
            </div>
        </Button>
    );
});

Button5.displayName = 'Button5';