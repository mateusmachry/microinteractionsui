"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RefObject, SVGProps, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useScrollPosition from '@react-hook/window-scroll';
import { Button } from "@/components/ui/button";
import { Bell, MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const VercelLogo = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M23 21.648H1L12 2.352z"></path></svg>
    )
};

const SlashForward = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="m7 21l7.9-18H17L9.1 21z"></path></svg>
    )
};

const MobileMenu = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant={"outline"} size={"icon"} className="rounded-full cursor-pointer">
                    <MenuIcon />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 mx-4">
                <div className="w-full h-64 border border-dashed" />
            </PopoverContent>
        </Popover>
    )
};

const useRange = (
    num: number,
    inMin: number,
    inMax: number,
    outMin: number,
    outMax: number,
) => {
    const mappedValue = useMemo(() => {
        const newValue =
            ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
        const largest = Math.max(outMin, outMax);
        const smallest = Math.min(outMin, outMax);
        return Math.min(Math.max(newValue, smallest), largest);
    }, [num]);

    return mappedValue;
};

export default function Navbar2() {
    const [activeTab, setActiveTab] = useState("tab-1");
    const [dimensions, setDimensions] = useState({
        width: 0,
        left: 0,
    });
    const tab1Ref = useRef<HTMLButtonElement>(null);
    const tab2Ref = useRef<HTMLButtonElement>(null);
    const tab3Ref = useRef<HTMLButtonElement>(null);
    const tabRefs: Record<string, RefObject<HTMLButtonElement | null>> = {
        "tab-1": tab1Ref,
        "tab-2": tab2Ref,
        "tab-3": tab3Ref
    };
    const scrollY = useScrollPosition(60);
    const navX = useRange(scrollY, 0, 50, 0, 42);
    const logoScale = useRange(scrollY, 0, 50, 1, 0.8);

    useEffect(() => {
        const updateDimensions = () => {
            const currentTabRef = tabRefs[activeTab].current;
            if (currentTabRef) {
                setDimensions({
                    width: currentTabRef.offsetWidth,
                    left: currentTabRef.offsetLeft,
                });
            }
        };
        updateDimensions();
    }, [activeTab]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <div className="w-screen flex flex-col justify-start items-center bg-neutral-50 dark:bg-neutral-950">
            <header className="flex flex-row justify-between items-start w-full pt-4 pb-0 px-4 bg-neutral-100 dark:bg-neutral-900">
                <div className="flex flex-row justify-start items-center gap-2 pl-8">
                    <VercelLogo width={24} height={24} style={{ transform: `scale(${logoScale})` }} className="fixed top-4 left-4 z-10" />
                    <SlashForward width={24} height={24} className="text-muted-foreground/40" />
                    <span className="font-semibold">Projects</span>
                </div>
                <div className="hidden sm:flex flex-row justify-start items-center gap-3">
                    <Button variant={"outline"} size={"icon"}>
                        <Bell />
                    </Button>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>
                <div className="sm:hidden flex flex-row justify-start items-center gap-3">
                    <MobileMenu />
                </div>
            </header>
            <Tabs
                className="items-center w-full"
                defaultValue="tab-1"
                value={activeTab}
                onValueChange={handleTabChange}>
                <nav className="sticky top-0 w-full overflow-x-hidden border-b bg-neutral-100 dark:bg-neutral-900">
                    <TabsList style={{ transform: `translateX(${navX}px)` }} className="bg-neutral-100 dark:bg-neutral-900 w-full h-auto rounded-none border-none justify-start pt-2 pb-0 px-4">
                        <motion.div
                            className="absolute z-10 h-0.5 inset-x-0 bottom-0 bg-primary"
                            initial={{
                                width: 0,
                                left: 0,
                            }}
                            animate={{
                                width: dimensions.width,
                                left: dimensions.left,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 30
                            }}
                        />
                        <TabsTrigger
                            ref={tab1Ref}
                            value="tab-1"
                            className="relative rounded-none py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors duration-500 delay-200"
                        >
                            Tab1
                        </TabsTrigger>
                        <TabsTrigger
                            ref={tab2Ref}
                            value="tab-2"
                            className="relative rounded-none py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors duration-500 delay-200"
                        >
                            Tab2
                        </TabsTrigger>
                        <TabsTrigger
                            ref={tab3Ref}
                            value="tab-3"
                            className="relative rounded-none py-2 data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors duration-500 delay-200"
                        >
                            Tab3
                        </TabsTrigger>
                    </TabsList>
                </nav>


                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <TabsContent value="tab-1">
                            <div className="flex flex-col justify-center items-center gap-2 p-4 min-h-screen">
                                <span className="text-sm text-gray-800 dark:text-gray-200 text-center">Tab1</span>
                            </div>
                        </TabsContent>
                        <TabsContent value="tab-2">
                            <div className="flex flex-col justify-center items-center gap-2 p-4 min-h-screen">
                                <span className="text-sm text-gray-800 dark:text-gray-200 text-center">Tab2</span>
                            </div>
                        </TabsContent>
                        <TabsContent value="tab-3">
                            <div className="flex flex-col justify-center items-center gap-2 p-4 min-h-screen">
                                <span className="text-sm text-gray-800 dark:text-gray-200 text-center">Tab3</span>
                            </div>
                        </TabsContent>
                    </motion.div>
                </AnimatePresence>
            </Tabs>
        </div>
    );
};