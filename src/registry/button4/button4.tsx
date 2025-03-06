'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { forwardRef, useState } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
    label: React.ReactNode,
    size?: "default" | "sm" | "lg" | "icon",
    className?: string
} & Omit<React.ComponentProps<"button">, "onMouseEnter" | "onMouseLeave">;

export const Button4 = forwardRef<HTMLButtonElement, ButtonProps>(({
    label,
    size = "lg",
    className,
    ...props
}, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button
            {...props}
            ref={ref}
            variant={"link"}
            size={size}
            className={cn(className, "cursor-pointer relative overflow-hidden hover:no-underline")}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative inline-block">
                {label}
                <motion.div
                    className="absolute bottom-0 left-0 mb-[-4px] h-[2px] bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </Button>
    );
});

Button4.displayName = 'Button4';