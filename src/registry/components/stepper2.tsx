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

export default function Stepper2() {
    const [currentStep, setCurrentStep] = useState<number>(1);

    return (
        <div className="space-y-8 text-center">
            <Stepper value={currentStep}>
                {steps.map(({ step, title, description }) => (
                    <StepperItem
                        key={step}
                        step={step}
                        className="relative flex-1 flex-col!"
                    >
                        <StepperTrigger onClick={() => setCurrentStep(step)} className="flex-col gap-3 rounded">
                            <StepperIndicator />
                            <div className="space-y-0.5 px-2">
                                <StepperTitle>{title}</StepperTitle>
                                <StepperDescription className="max-sm:hidden">
                                    {description}
                                </StepperDescription>
                            </div>
                        </StepperTrigger>
                        {step < steps.length && (
                            <StepperSeparator className="absolute inset-x-0 top-3 left-[calc(50%+0.75rem+0.125rem)] -order-1 m-0 -translate-y-1/2 group-data-[orientation=horizontal]/stepper:w-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=horizontal]/stepper:flex-none" />
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