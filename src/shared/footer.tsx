import { Button } from "@/components/ui/button";
import { RiTwitterXFill, RiGithubFill } from "@remixicon/react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-2 py-8">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} MicroInteractions UI</p>
            <div className="flex flex-row items-center justify-center gap-2">
                <Link
                    href="https://github.com/microinteractionsui"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="cursor-pointer rounded-full" variant="outline" aria-label="X" size="icon">
                        <RiGithubFill className="text-primary" size={16} aria-hidden="true" />
                    </Button>
                </Link>
                <Link
                    href="https://x.com/codemattic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="cursor-pointer rounded-full" variant="outline" aria-label="X" size="icon">
                        <RiTwitterXFill className="text-primary" size={16} aria-hidden="true" />
                    </Button>
                </Link>
            </div>
        </footer>
    );
}