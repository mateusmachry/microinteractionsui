import { cn } from "@/lib/utils";
import React from "react";

export type CategoryPageGridProps = {
    className?: string
    children: React.ReactNode
};

export function CategoryPageGrid({ className, children }: { className?: string, children: React.ReactNode }) {
    return (
        <div className={cn(className, "overflow-hidden my-8")}>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 -m-px *:not-first:-ms-px *:not-first:-mt-px">
                {children}
            </div>
        </div>
    );
}