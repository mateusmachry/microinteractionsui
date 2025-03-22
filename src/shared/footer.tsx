import { Button } from "@/components/ui/button";
import { RiTwitterXFill, RiGithubFill } from "@remixicon/react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-2 py-8">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} MicroInteractions UI</p>
            <div className="flex flex-row items-center justify-center gap-2">

                <Button asChild className="cursor-pointer rounded-full" variant="outline" aria-label="X" size="icon">
                    <Link
                        href="https://github.com/mateusmachry/microinteractionsui"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><RiGithubFill className="text-primary" size={16} aria-hidden="true" /></Link>
                </Button>

                <Button asChild className="cursor-pointer rounded-full" variant="outline" aria-label="X" size="icon">
                    <Link
                        href="https://x.com/codemattic"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><RiTwitterXFill className="text-primary" size={16} aria-hidden="true" /></Link>
                </Button>
            </div>
        </footer>
    );
}