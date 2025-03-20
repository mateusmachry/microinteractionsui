"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScriptCopyBtn } from "@/components/magicui/script-copy-btn";
import { CodeBlock } from "@/components/ui/code-block";
import { RegistryItem } from "shadcn/registry";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ViewCodeSheet({ component }: { component: RegistryItem }) {
    const [code, setCode] = useState<string>("");
    const commandsMap = {
        npm: `npx shadcn@latest add https://microinteractionsui.com/r/${component.name}.json`,
        yarn: `npx shadcn@latest add https://microinteractionsui.com/r/${component.name}.json`,
        pnpm: `pnpm dlx shadcn@latest add https://microinteractionsui.com/r/${component.name}.json`,
        bun: `bunx --bun shadcn@latest add https://microinteractionsui.com/r/${component.name}.json`,
    };
    const codeFiles = [
        {
            title: `${component.name}.tsx`,
            code: code,
            language: "typescript",
        },
    ];

    useEffect(() => {
        const handleEmptyCode = () => {
            setCode("");
        };

        const fetchComponentCode = async () => {
            try {
                const response = await fetch(`/r/${component.name}.json`);
                if (!response.ok) {
                    handleEmptyCode();
                    return;
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    handleEmptyCode();
                    return;
                }

                const data = await response.json();
                const codeContent = data.files[0].content;
                setCode(codeContent);
            } catch (error) {
                console.log("Error fetching component code", error);
                handleEmptyCode();
            }
        };

        fetchComponentCode();
    }, [component.name]);

    return (
        <Sheet>
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <SheetTrigger asChild>
                            <Button size={"sm"} variant={"ghost"} className="cursor-pointer">
                                <CodeIcon size={16} />
                            </Button>
                        </SheetTrigger>
                    </TooltipTrigger>
                    <TooltipContent className="dark px-2 py-1 text-xs" showArrow={true}>
                        View code
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <SheetContent className="min-w-xl gap-0">
                <SheetHeader>
                    <SheetTitle className="text-lg">Install component</SheetTitle>
                </SheetHeader>
                <div className="w-full flex flex-col gap-4">
                    <ScriptCopyBtn
                        className="w-full mx-4 min-w-lg py-0 text-sm"
                        showMultiplePackageOptions={true}
                        codeLanguage="shell"
                        lightTheme="vitesse-dark"
                        darkTheme="vitesse-dark"
                        commandMap={commandsMap}
                    />
                    <div className="flex flex-col gap-4 mx-4">
                        <label className="text-foreground font-semibold text-lg">Code</label>
                        <CodeBlock
                            files={codeFiles}
                            defaultTitle={`${component.name}.tsx`}
                            className="max-w-lg min-h-96"
                        />
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}