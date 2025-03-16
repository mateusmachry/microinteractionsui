import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export type ComponentTypeCardProps = {
    icon: React.ReactNode
    label: string
    href: string
    className?: string
} & React.ComponentPropsWithoutRef<"div">;

export function ComponentTypeCard({ icon, label, href, className, ...props }: ComponentTypeCardProps) {
    return (
        <div {...props} className={cn("flex flex-col items-center justify-center gap-4", className)}>
            <Link href={href}>
                <Card className="min-w-80 h-40 flex flex-col items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-900 transition-transform duration-300 hover:scale-98">
                    <CardContent>
                        <div className="p-6">
                            {icon}
                        </div>
                    </CardContent>
                </Card>
            </Link>
            <label className="text-base font-medium">{label}</label>
        </div>
    )
}