'use client';

import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import React, { useState } from "react";

export function Button4() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Button
            variant={"link"}
            className="text-base cursor-pointer relative overflow-hidden hover:no-underline"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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