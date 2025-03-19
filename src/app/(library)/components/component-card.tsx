import { cn } from "@/lib/utils";
import { RegistryItem } from "shadcn/registry";
import { ViewCodeSheet } from "@/app/(library)/components/view-code-sheet";
import { OpenInV0Button } from "@/app/(library)/components/open-in-v0";

export function ComponentCard({
    children,
    component,
}: {
    children: React.ReactNode
    component: RegistryItem
}) {
    return (
        <div
            className={cn(
                "relative p-12 sm:p-16 border flex justify-center items-center",
            )}
        >
            {children}
            <div className="absolute bottom-2 right-2 flex flex-row items-center gap-0.5">
                <OpenInV0Button url={`https://microinteractionsui.com/r/${component.name}.json`} />
                <ViewCodeSheet component={component} />
            </div>
        </div>
    );
}