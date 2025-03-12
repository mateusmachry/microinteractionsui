'use client';

import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export type ButtonProps = {
    className?: string,
} & React.ComponentProps<"button">;

export const Button7 = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    ...props }, ref) => {
    return (
        <Button
            ref={ref}
            {...props}
            className={
                cn("rounded-full relative flex justify-center items-center cursor-pointer bg-[#161a20] text-neutral-200 border-none hover:z-0 hover:shadow-[40px_0_100px_#008cff85,-40px_0_100px_#e100ffbb]",
                    "after:absolute after:w-[103%] after:h-[108%] after:rounded-full after:bg-gradient-to-br after:from-[#008cff] after:to-[#e100ff] after:z-[-1]",
                    className
                )}
        >
            {children}
        </Button>
    );
});

Button7.displayName = 'Button7';