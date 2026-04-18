"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import type { Transition, Variants } from "motion/react";
import React, { useState } from "react";

const getIconContainerVariants = (
  iconColor: string,
  iconColorOnHover: string,
  iconBgColorOnHover: string,
) =>
  ({
    default: {
      color: iconColor,
      backgroundColor: "transparent",
      scale: 1,
    },
    hover: {
      color: iconColorOnHover,
      backgroundColor: iconBgColorOnHover,
      scale: 1.15,
    },
  }) satisfies Variants;

const iconVariants = {
  default: { rotate: 0 },
  hover: { rotate: -45 },
} satisfies Variants;

const animationTransition = {
  ease: "linear",
  duration: 0.3,
} satisfies Transition;

export default function Button2() {
  const iconColor = "var(--primary-foreground)";
  const iconColorOnHover = "var(--accent-foreground)";
  const iconBgColorOnHover = "var(--accent)";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      type="button"
      variant="default"
      size="lg"
      className="cursor-pointer relative overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      <span>Get started</span>
      <motion.div
        variants={getIconContainerVariants(
          iconColor,
          iconColorOnHover,
          iconBgColorOnHover,
        )}
        animate={isHovered ? "hover" : "default"}
        transition={animationTransition}
        className="flex justify-center items-center rounded-full p-0.5"
      >
        <motion.svg
          variants={iconVariants}
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
}
