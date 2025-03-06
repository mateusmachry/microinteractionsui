'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { SVGProps, useEffect, useRef, useState, forwardRef } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = {
  label: React.ReactNode,
  icon?: React.ReactNode,
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost",
  size?: "default" | "sm" | "lg" | "icon",
  className?: string
} & Omit<React.ComponentProps<"button">, "onMouseEnter" | "onMouseLeave">;

const ArrowForwardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z" />
  </svg>
);

export const Button1 = forwardRef<HTMLButtonElement, ButtonProps>(({
  label,
  icon,
  variant = "default",
  size = "lg",
  className,
  ...props
}, ref) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const internalRef = useRef<HTMLButtonElement>(null);
  const buttonRef = (ref || internalRef) as React.RefObject<HTMLButtonElement>;

  useEffect(() => {
    const currentRef = buttonRef.current;
    if (currentRef) {
      setButtonWidth(currentRef.offsetWidth);
    }
  }, [buttonRef]);

  const iconVariants = {
    initial: { opacity: 1 },
    hover: (buttonWidth: number) => ({
      x: -1 * buttonWidth,
      opacity: 0,
    }),
  };

  const labelVariants = {
    initial: { x: '0%' },
    hover: { x: '-20%' },
  };

  const arrowVariants = {
    initial: {
      position: 'absolute' as const,
      x: '100%',
      opacity: 0
    },
    hover: {
      x: 0,
      opacity: 1
    },
  };

  const commonTransition = {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  };

  return (
    <Button
      {...props}
      ref={buttonRef}
      variant={variant}
      size={size}
      className={cn(className, "cursor-pointer relative overflow-hidden")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {icon && <motion.div
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={iconVariants}
        custom={buttonWidth}
        transition={commonTransition}
      >
        {icon}
      </motion.div>}

      <motion.div
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={labelVariants}
        transition={commonTransition}
      >
        {label}
      </motion.div>

      <motion.div
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={arrowVariants}
        transition={{
          ...commonTransition,
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
});

Button1.displayName = 'Button1';