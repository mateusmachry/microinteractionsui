'use client';

import { motion } from 'framer-motion';

export default function Button6() {
    const radialGradientBackground = { r: 250, g: 250, b: 250 };
    const solidColorBackground = { r: 15, g: 15, b: 15 };
    const overlayColor = { r: 255, g: 255, b: 255 };

    return (
        <motion.button
            className="px-6 py-2 rounded-md relative cursor-pointer"
            style={{
                background: `radial-gradient(circle at 50% 0%, rgba(${radialGradientBackground.r}, ${radialGradientBackground.g}, ${radialGradientBackground.b}, 0.05) 0%, transparent 60%), rgba(${solidColorBackground.r}, ${solidColorBackground.g}, ${solidColorBackground.b}, 1)`
            }}
            initial={{
                "--x": "100%",
                scale: 1,
            }}
            animate={{
                "--x": "-100%"
            }}
            whileHover={{
                scale: 0.97
            }}
            transition={{
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: 'spring',
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1
                }
            }}
        >
            <div
                className="w-full h-full block relative text-neutral-100 tracking-wide font-normal"
                style={{
                    maskImage: "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
                    WebkitMaskImage: "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))"
                }}
            >
                Subscribe
            </div>
            <span
                className="block absolute inset-0 rounded-md p-px"
                style={{
                    backgroundImage: `linear-gradient(-75deg, rgba(${overlayColor.r}, ${overlayColor.g}, ${overlayColor.b}, 0.1) calc(var(--x) + 20%), rgba(${overlayColor.r}, ${overlayColor.g}, ${overlayColor.b}, 0.5) calc(var(--x) + 25%), rgba(${overlayColor.r}, ${overlayColor.g}, ${overlayColor.b}, 0.1) calc(var(--x) + 100%))`,
                    mask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    WebkitMask: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor"
                }}
            />
        </motion.button>
    );
};