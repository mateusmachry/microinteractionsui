"use client";

import React, { useSyncExternalStore } from "react";
import { motion } from "motion/react";
import type { Transition, Variants } from "motion/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/registry/lib/utils";

type ToggleSize = "default" | "lg" | "xl";

const toggleSizeMap = {
  default: {
    container: "w-12 h-6",
    checkbox: "w-6 h-6",
    icon: "w-3 h-3",
    offset: "24px",
  },
  lg: {
    container: "w-16 h-8",
    checkbox: "w-8 h-8",
    icon: "w-4 h-4",
    offset: "32px",
  },
  xl: {
    container: "w-24 h-12",
    checkbox: "w-12 h-12",
    icon: "w-6 h-6",
    offset: "48px",
  },
};

const toggleVariants = {
  light: (offset: string) => ({
    left: "0px",
    right: offset,
  }),
  dark: (offset: string) => ({
    left: offset,
    right: "0px",
  }),
} satisfies Variants;

const sunVariants = {
  light: {
    y: "0%",
    x: "0%",
    opacity: 1,
  },
  dark: {
    y: "-100%",
    x: "100%",
    opacity: 0,
  },
} satisfies Variants;

const moonVariants = {
  light: {
    y: "-100%",
    x: "-100%",
    opacity: 0,
  },
  dark: {
    y: "0%",
    x: "0%",
    opacity: 1,
  },
} satisfies Variants;

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 30,
} satisfies Transition;

const useMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

export default function ThemeToggle2() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const handleToggle = () => {
    const newState = resolvedTheme === "light" ? "dark" : "light";
    setTheme(newState);
  };

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme ? resolvedTheme === "dark" : false;
  const toggleSize: ToggleSize = "default";
  const selectedSize = toggleSizeMap[toggleSize];

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        aria-pressed={isDark}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className={cn(
          "relative inline-flex shrink-0 items-center justify-start overflow-hidden rounded-full border-0 p-0 align-middle leading-none appearance-none cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          selectedSize.container,
          isDark ? "bg-gray-800" : "bg-gray-200",
        )}
        onClick={handleToggle}
      >
        <motion.div
          className={cn(
            selectedSize.checkbox,
            "absolute top-0 rounded-full flex items-center justify-center overflow-hidden",
            isDark
              ? "bg-black right-0 shadow-lg shadow-black/50"
              : "bg-white left-0 shadow-lg shadow-white/50",
          )}
          animate={isDark ? "dark" : "light"}
          variants={toggleVariants}
          custom={selectedSize.offset}
          transition={springTransition}
        >
          <motion.div
            className="absolute"
            initial="light"
            animate={isDark ? "dark" : "light"}
            variants={sunVariants}
            transition={springTransition}
          >
            <SunIcon className={selectedSize.icon} aria-hidden="true" />
          </motion.div>
          <motion.div
            className="absolute"
            initial="light"
            animate={isDark ? "dark" : "light"}
            variants={moonVariants}
            transition={springTransition}
          >
            <MoonIcon className={cn(selectedSize.icon)} aria-hidden="true" />
          </motion.div>
        </motion.div>
      </button>
    </div>
  );
}
