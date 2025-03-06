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
                        return 100;
                    }
                    return prev + 10;
                });
            }, 250);
            return () => clearInterval(interval);
        }
    }, [startAnimation]);

    const runAnimation = () => {
        setProgress(0);
        setStartAnimation(true);
    };

    const handleComplete = () => {
        setTimeout(() => {
            setProgress(0);
            setStartAnimation(false);
        }, 200);
    };

    return (
        <Button5
            label="Pay with credit card"
            icon={<IcBaselinePayments />}
            progress={progress}
            onClick={() => runAnimation()}
            onComplete={handleComplete}
            completeAnimationDurationMs={2000}
        />
    );
}