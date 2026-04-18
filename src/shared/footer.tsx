import { Button } from "@/components/ui/button";
import { RiTwitterXFill, RiGithubFill } from "@remixicon/react";
import Link from "next/link";

const componentLinks = [
    { href: "/tabs", label: "Tabs" },
    { href: "/button", label: "Button" },
    { href: "/input", label: "Input" },
    { href: "/theme-toggle", label: "Toggle" },
    { href: "/stepper", label: "Stepper" },
    { href: "/navbar", label: "Navbar" },
];

const libraryLinks = [
    { href: "https://coss.com/", label: "coss.com" },
    { href: "https://magicui.design/", label: "Magic UI" },
    { href: "https://reactbits.dev/", label: "React Bits" },
    { href: "https://ui.aceternity.com/", label: "Aceternity UI" },
    { href: "https://animate-ui.com/", label: "Animate UI" },
    { href: "https://21st.dev/components", label: "21st Dev" },
];

export function Footer() {
    return (
        <footer className="relative border-t border-border/60 bg-background">
            <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-48 w-[36rem] -translate-x-1/2 rounded-full bg-foreground/[0.04] blur-3xl dark:bg-foreground/[0.07]" />
            <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
                <div className="rounded-[2rem] border border-border/60 bg-secondary/35 p-6 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.45)] backdrop-blur-sm lg:p-8">
                    <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr]">
                        <div className="space-y-6">
                        <div className="space-y-3 font-sans">
                            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground font-semibold">
                                MicroInteractions UI
                            </p>
                            <h2 className="max-w-sm text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                                Component index and source links.
                            </h2>
                            <p className="max-w-md text-sm leading-6 text-muted-foreground">
                                Browse the component sections and the libraries behind them.
                            </p>
                        </div>

                            <div className="flex flex-wrap items-center gap-2">
                                <Button asChild className="size-10 rounded-full border-border/70 bg-background/70 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-background" variant="outline" aria-label="GitHub" size="icon">
                                    <Link
                                        href="https://github.com/mateusmachry/microinteractionsui"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiGithubFill className="text-primary" size={16} aria-hidden="true" />
                                    </Link>
                                </Button>

                                <Button asChild className="size-10 rounded-full border-border/70 bg-background/70 shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-background" variant="outline" aria-label="X" size="icon">
                                    <Link
                                        href="https://x.com/matmachry"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiTwitterXFill className="text-primary" size={16} aria-hidden="true" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="space-y-4 font-sans">
                            <h4 className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Components</h4>
                            <nav aria-label="Component links" className="grid gap-2">
                                {componentLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="group flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-border/70 hover:bg-background/60 hover:text-foreground"
                                    >
                                        <span>{link.label}</span>
                                        <span className="text-xs opacity-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">↗</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        <div className="space-y-4 font-sans">
                            <h4 className="text-xs uppercase tracking-[0.35em] text-muted-foreground">UI Libraries</h4>
                            <nav aria-label="Library links" className="grid gap-2">
                                {libraryLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between rounded-full border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-border/70 hover:bg-background/60 hover:text-foreground"
                                    >
                                        <span>{link.label}</span>
                                        <span className="text-xs opacity-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100">↗</span>
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col gap-2 border-t border-border/60 pt-5 text-xs text-muted-foreground font-sans sm:flex-row sm:items-center sm:justify-between">
                        <p>React, Tailwind, shadcn/ui, Motion.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
