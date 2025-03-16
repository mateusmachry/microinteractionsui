"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { motion } from "framer-motion";

export function Input3() {
    const [value, setValue] = useState([3]);
    const labels = ["Awful", "Poor", "Okay", "Good", "Amazing"];
    const minRating = 1;
    const maxRating = 5;

    return (
        <div className="space-y-3 min-w-64">
            <div className="flex items-center justify-between gap-2">
                <Label className="leading-6">Rate your experience</Label>
                <span className="text-sm font-medium">{labels[value[0] - 1]}</span>
            </div>
            <div className="flex items-center gap-2">
                <motion.span className="text-2xl" initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        scale: value[0] === minRating ? 1.15 : 1,
                        color: value[0] === minRating ? ["#ff0000", "#ff6600", "#ff0000"] : "initial",
                        textShadow: value[0] === minRating ?
                            ["0 0 0px rgba(255,0,0,0)", "0 0 10px rgba(255,0,0,0.8)", "0 0 0px rgba(255,0,0,0)"] :
                            "none"
                    }}
                    transition={{
                        duration: 0.6,
                        repeat: 3,
                        repeatType: 'mirror'
                    }}>😡</motion.span>
                <Slider
                    value={value}
                    onValueChange={setValue}
                    min={1}
                    max={5}
                    aria-label="Rate your experience"
                />
                <motion.span className="text-2xl" initial={{ scale: 1 }} animate={{ scale: value[0] === maxRating ? 1.3 : 1.0 }} transition={{ duration: 0.4, repeat: 3, repeatType: 'mirror' }}>😍</motion.span>
            </div>
        </div>
    );
}
