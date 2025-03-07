"use client";

import { Theme, ThemeToggle1 } from "@/registry/theme-toggle1/theme-toggle1";
import { useTheme } from "next-themes";

export function ThemeToggle1Example() {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <ThemeToggle1 size="lg" initialTheme={resolvedTheme} onChange={(theme: Theme) => { setTheme(theme) }} />
    )
}