import { Button } from "@/components/ui/button";
import { RiTwitterXFill } from "@remixicon/react";

export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-2 py-8">
            <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} MicroInteractions UI</p>
            <div className="flex flex-row items-center justify-center gap-2">
                <a
                    href="https://x.com/codemattic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className="cursor-pointer" variant="outline" aria-label="X" size="icon">
                        <RiTwitterXFill className="text-primary" size={16} aria-hidden="true" />
                    </Button>
                </a>
            </div>
        </footer>
    );
}