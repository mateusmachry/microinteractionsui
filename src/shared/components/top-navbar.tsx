'use client';
import { ThemeToggle1 } from "@/registry/theme-toggle1/theme-toggle1";
import { LogoIcon } from "@/shared/components/logo";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export function TopNavBar() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isDark = resolvedTheme === "dark";

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="mt-8 bg-neutral-100 dark:bg-neutral-900 border rounded-full mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-8 py-4">
            <div className="flex flex-row items-center gap-6">
                <Link href="/" className="flex items-center gap-2">
                    {mounted && <LogoIcon fillColor={isDark ? '#000000' : '#FFFFFF'} width={32} height={32} />}
                    <span className="text-lg font-semibold">Micro Interactions UI</span>
                </Link>
            </div>
            <div className="flex flex-row items-center gap-3">
                <ThemeToggle1 />
            </div>
        </header>
    );
}