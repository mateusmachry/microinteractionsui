import { cn } from "@/lib/utils";

type CategoryPageHeaderProps = {
    title: string;
    className?: string;
}

export function CategoryPageHeader({ title, className }: CategoryPageHeaderProps) {
    return (
        <div className={cn("my-12 text-center", className)}>
            <h1 className="font-heading text-foreground mb-3 text-4xl/[1.1] font-bold tracking-tight md:text-5xl/[1.1]">
                {title}
            </h1>
        </div>
    );
}