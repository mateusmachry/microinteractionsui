"use client";

import { SVGProps, useState } from "react";
import { Button, Group, NumberField } from "react-aria-components";
import { motion, AnimatePresence } from "framer-motion";

const MinusCircle = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )
};

const PlusCircle = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    )
};

export function Input2() {
    const step = 1;
    const minValue = 0;
    const [value, setValue] = useState<number>(0);
    const [direction, setDirection] = useState<"up" | "down">("up");

    const handleValueChange = (newValue: number) => {
        const direction = newValue > value ? "up" : "down";
        setDirection(direction);
        setValue(newValue);
    };

    return (
        <NumberField
            defaultValue={value}
            minValue={minValue}
            step={step}
            value={value}
            onChange={handleValueChange}
        >
            <Group className="border-input data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex h-9 w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none data-disabled:opacity-50 data-focus-within:ring-[3px]">
                <Button
                    slot="decrement"
                    className="cursor-pointer border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -ms-px flex aspect-square h-[inherit] items-center justify-center rounded-s-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <MinusCircle width={16} height={16} aria-hidden="true" />
                </Button>
                <div className="bg-background text-foreground w-full px-3 py-2 text-center overflow-hidden">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                            key={value}
                            initial={{
                                y: direction === "up" ? 20 : -20,
                                opacity: 0
                            }}
                            animate={{
                                y: 0,
                                opacity: 1
                            }}
                            exit={{
                                y: direction === "up" ? -20 : 20,
                                opacity: 0,
                                position: "absolute"
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30,
                                duration: 0.2
                            }}
                            className="inline-block w-full tabular-nums"
                        >
                            {value}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <Button
                    slot="increment"
                    className="cursor-pointer border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex aspect-square h-[inherit] items-center justify-center rounded-e-md border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                >
                    <PlusCircle width={16} height={16} aria-hidden="true" />
                </Button>
            </Group>
        </NumberField>
    );
};