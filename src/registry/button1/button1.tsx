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

const LogosGoogleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="0.98em" height="1em" viewBox="0 0 256 262" {...props}><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
  )
};

export default function Button1() {
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
      variant="secondary"
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
        <LogosGoogleIcon />
      </motion.div>

      <motion.div
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
        variants={animationVariants.label}
        transition={animationTransition}
      >
        <span>Sign in with Google</span>
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