"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/registry/lib/utils";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import React, { useEffect, useState, useRef, SVGProps } from "react";

const LucideCheck = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 6L9 17l-5-5"
      ></path>
    </svg>
  );
};

const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
      />
    </svg>
  );
};

const containerVariants = {
  normal: (width: number | null) => ({
    width: width ? width : "auto",
  }),
  compact: {
    width: "fit-content",
  },
} satisfies Variants;

const progressVariants = {
  initial: { width: "0%" },
  animate: (progress: number) => ({
    width: `${progress}%`,
  }),
} satisfies Variants;

const contentVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
} satisfies Variants;

const checkmarkVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1.0 },
} satisfies Variants;

const animationTransition = {
  checkmarkTransitionDuration: 0.6,
};

export default function Button5() {
  const [progress, setProgress] = useState<number>(0);
  const clampedProgress = Math.min(Math.max(0, progress), 100);
  const [startAnimation, setStartAnimation] = useState(false);
  const [animationState, setAnimationState] = useState<
    "progress" | "showing-check" | "complete"
  >("progress");
  const [buttonWidth, setButtonWidth] = useState<number | null>(null);
  const completeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const checkmarkTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const completeAnimationDurationMs = 2000;

  const clearAnimationTimeouts = () => {
    if (checkmarkTimeoutRef.current) {
      clearTimeout(checkmarkTimeoutRef.current);
      checkmarkTimeoutRef.current = null;
    }

    if (completeTimeoutRef.current) {
      clearTimeout(completeTimeoutRef.current);
      completeTimeoutRef.current = null;
    }

    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
  };

  function handleComplete() {
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
    }

    resetTimeoutRef.current = setTimeout(() => {
      resetTimeoutRef.current = null;
      setProgress(0);
      setStartAnimation(false);
      setAnimationState("progress");
    }, 200);
  }

  useEffect(() => {
    if (startAnimation) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setStartAnimation(false);
            clearAnimationTimeouts();
            checkmarkTimeoutRef.current = setTimeout(() => {
              setAnimationState("showing-check");
              completeTimeoutRef.current = setTimeout(() => {
                setAnimationState("complete");
                handleComplete();
              }, completeAnimationDurationMs);
            }, animationTransition.checkmarkTransitionDuration * 1000);
            return 100;
          }
          return prev + 10;
        });
      }, 250);
      return () => clearInterval(interval);
    }
  }, [startAnimation]);

  const runAnimation = () => {
    clearAnimationTimeouts();
    setAnimationState("progress");
    setProgress(0);
    setStartAnimation(true);
  };

  useEffect(() => {
    const currentRef = buttonRef.current;
    if (currentRef) {
      setButtonWidth(currentRef.offsetWidth);
    }
  }, []);

  useEffect(() => {
    return () => {
      clearAnimationTimeouts();
    };
  }, []);

  const isShowingCheckmarkAnimation = animationState === "showing-check";

  return (
    <motion.div
      className="inline-block"
      variants={containerVariants}
      custom={buttonWidth}
      animate={isShowingCheckmarkAnimation ? "compact" : "normal"}
      transition={{
        duration: animationTransition.checkmarkTransitionDuration,
        ease: "easeInOut",
      }}
    >
      <Button
        ref={buttonRef}
        type="button"
        onClick={() => runAnimation()}
        variant="default"
        size="lg"
        className={cn(
          "cursor-pointer relative overflow-hidden w-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          isShowingCheckmarkAnimation
            ? "aspect-square rounded-full p-0 disabled:opacity-100"
            : "",
        )}
        disabled={isShowingCheckmarkAnimation}
      >
        {/* Progress overlay */}
        <motion.div
          className="absolute left-0 top-0 h-full z-10"
          style={{
            backgroundColor: "#10B981",
          }}
          variants={progressVariants}
          custom={clampedProgress}
          initial="initial"
          animate="animate"
          transition={{ ease: "linear" }}
        />

        {/* Content container */}
        <motion.div
          className="relative z-20 flex items-center justify-center gap-3 w-full h-full"
          variants={contentVariants}
          animate={isShowingCheckmarkAnimation ? "hidden" : "visible"}
        >
          <span>Pay with credit card</span>
          <CreditCardIcon width={16} height={16} />
        </motion.div>

        {/* Complete Checkmark */}
        <motion.div
          className="absolute inset-0 z-30 flex items-center justify-center gap-3"
          variants={checkmarkVariants}
          initial="hidden"
          animate={isShowingCheckmarkAnimation ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {isShowingCheckmarkAnimation && (
            <LucideCheck className="text-primary-foreground size-6" />
          )}
        </motion.div>
      </Button>
    </motion.div>
  );
}
