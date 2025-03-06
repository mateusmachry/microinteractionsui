'use client'
import { IcBaselinePayments } from "@/icons/payment";
import { Button5 } from "@/registry/button5/button5";
import { useState, useEffect } from "react";

export default function ProgressButton() {
    const [progress, setProgress] = useState(0);
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (startAnimation) {
            const interval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setStartAnimation(false);
                        return 0;
                    }
                    return prev + 5;
                });
            }, 250);
            return () => clearInterval(interval);
        }
    }, [startAnimation]);

    const runAnimation = () => {
        setProgress(0);
        setStartAnimation(true);
    };

    return (
        <Button5
            label="Buy now"
            icon={<IcBaselinePayments />}
            progress={progress}
            onClick={() => runAnimation()}
        />
    );
}