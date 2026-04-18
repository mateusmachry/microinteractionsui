'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'motion/react';
import React, { useState } from "react";

export default function Button4() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button
            type="button"
            variant={"link"}
            className="text-base cursor-pointer relative overflow-hidden hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            <div className="relative inline-block">
                Get started
                <motion.div
                    className="absolute bottom-0 left-0 mb-[-4px] h-[2px] bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                />
            </div>
        </Button>
    );
};
