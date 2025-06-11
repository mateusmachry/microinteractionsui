"use client"
import { Button } from "@/components/ui/button";
import {
    Stepper,
    StepperDescription,
    StepperIndicator,
    StepperItem,
    StepperSeparator,
    StepperTitle,
    StepperTrigger,
} from "@/registry/components/stepper"
import { useState } from "react";

const steps = [
    {
        step: 1,
        title: "Step 1",
        description: "This is step 1"
    },
    {
        step: 2,
        title: "Step 2",
        description: "This is step 2"
    },
    {
        step: 3,
        title: "Step 3",
        description: "This is step 3"
    }
];

export default function Stepper1() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <div className="space-y-6">
            <Stepper
                value={currentStep}
                orientation="vertical">
                {steps.map(({ step, title, description }) => (
                    <StepperItem
                        key={step}
                        step={step}
                        className="relative items-start not-last:flex-1"
                    >
                        <StepperTrigger onClick={() => { setCurrentStep(step) }} className="items-start rounded pb-12 last:pb-0">
                            <StepperIndicator />
                            <div className="space-y-0.5 px-2 text-left">
                                <StepperTitle>{title}</StepperTitle>
                                <StepperDescription>{description}</StepperDescription>
                            </div>
                        </StepperTrigger>
                        {step < steps.length && (
                            <StepperSeparator className="absolute inset-y-0 top-[calc(1.5rem+0.125rem)] left-3 -order-1 m-0 -translate-x-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none group-data-[orientation=vertical]/stepper:h-[calc(100%-1.5rem-0.25rem)]" />
                        )}
                    </StepperItem>
                ))}
            </Stepper>
            <div className="flex justify-center space-x-4">
                <Button
                    variant="outline"
                    className="w-32"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    disabled={currentStep === 1}
                >
                    Prev step
                </Button>
                <Button
                    variant="outline"
                    className="w-32"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    disabled={currentStep >= steps.length}
                >
                    Next step
                </Button>
            </div>
        </div>
    )
}