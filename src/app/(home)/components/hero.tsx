import { TechStack } from "@/app/(home)/components/tech-stack";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";

export function Hero() {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16">
            <div className="mt-5 max-w-3xl text-center mx-auto">
                <h1 className="block text-pretty font-semibold tracking-tight text-4xl md:text-5xl lg:text-6xl bg-gradient-to-b from-foreground to-foreground/75 bg-clip-text text-transparent">
                    Build Fluid and Elegant UIs with <AnimatedGradientText colorFrom="#D4D4D4" colorTo="#737373" className="text-4xl md:text-5xl lg:text-6xl font-semibold">
                        Animated
                    </AnimatedGradientText> Components
                </h1>
            </div>

            <div className="mt-5 max-w-3xl text-center mx-auto">
                <h2 className="text-lg md:text-xl text-gray-600 dark:text-neutral-400">A collection of ready-to-use UI components built with React, Tailwind CSS, Shadcn, and Motion.</h2>
            </div>

            <div className="mt-5 w-fit mx-auto">
                <TechStack
                    className="mx-auto flex w-full items-center justify-between"
                    technologies={[
                        "react",
                        "typescript",
                        "tailwindcss",
                        "motion",
                        "shadcn",
                    ]}
                />
            </div>
        </div>
    );
};