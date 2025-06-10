import { Button } from "@/components/ui/button";
import { RiTwitterXFill, RiGithubFill } from "@remixicon/react";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex flex-col w-full justify-center items-center gap-6 py-12 px-12 bg-secondary">
            <div className="grid grid-cols-12 gap-x-6 w-full">
                <div className="col-span-6">
                    <div className="flex flex-col items-start gap-2">
                        <div className="flex items-center gap-2">
                            <span className="text-lg font-semibold">MicroInteractions UI</span>
                        </div>
                        <div className="flex flex-row items-center justify-center gap-1.5">
                            <Button asChild className="cursor-pointer rounded-full" variant="outline" aria-label="X" size="icon">
                                <Link
                                    href="https://github.com/mateusmachry/microinteractionsui"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><RiGithubFill className="text-primary" size={16} aria-hidden="true" /></Link>
                            </Button>

                            <Button asChild className="cursor-pointer rounded-full" variant="outline" aria-label="X" size="icon">
                                <Link
                                    href="https://x.com/matmachry"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                ><RiTwitterXFill className="text-primary" size={16} aria-hidden="true" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <h4 className="font-semibold mb-3">Components</h4>
                    <div className="grid space-y-2">
                        <Link
                            href="/tabs"
                        >
                            <span className="text-muted-foreground hover:text-primary text-sm">Tabs</span>
                        </Link>
                        <Link
                            href="/button"
                        >
                            <span className="text-muted-foreground hover:text-primary text-sm">Button</span>
                        </Link>
                        <Link
                            href="/input"
                        >
                            <span className="text-muted-foreground hover:text-primary text-sm">Input</span>
                        </Link>
                        <Link
                            href="/theme-toggle"
                        >
                            <span className="text-muted-foreground hover:text-primary text-sm">Toggle</span>
                        </Link>
                        <Link
                            href="/navbar"
                        >
                            <span className="text-muted-foreground hover:text-primary text-sm">Navbar</span>
                        </Link>
                    </div>
                </div>
                <div className="col-span-3">
                    <h4 className="font-semibold mb-3">Awesome Libraries</h4>
                    <div className="grid space-y-3">
                        <Link
                            href="https://originui.com/"
                            target="_blank"
                        >
                            <span className="text-muted-foreground hover:text-primary text-sm">Origin UI</span>
                        </Link>
                        <Link
                            href="https://magicui.design/"
                            target="_blank"
                        >
                            <span className="text-muted-foreground hover:text-primary text-sm">Magic UI</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}