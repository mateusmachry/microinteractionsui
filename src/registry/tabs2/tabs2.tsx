"use client";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from "lucide-react";
import { RefObject, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Tabs2() {
    const [activeTab, setActiveTab] = useState("tab-1");
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0,
        left: 0,
        top: 0
    });
    const tab1Ref = useRef<HTMLButtonElement>(null);
    const tab2Ref = useRef<HTMLButtonElement>(null);
    const tab3Ref = useRef<HTMLButtonElement>(null);
    const tabRefs: Record<string, RefObject<HTMLButtonElement | null>> = {
        "tab-1": tab1Ref,
        "tab-2": tab2Ref,
        "tab-3": tab3Ref
    };

    useEffect(() => {
        const updateDimensions = () => {
            const currentTabRef = tabRefs[activeTab].current;
            if (currentTabRef) {
                setDimensions({
                    width: currentTabRef.offsetWidth,
                    height: currentTabRef.offsetHeight,
                    left: currentTabRef.offsetLeft,
                    top: currentTabRef.offsetTop
                });
            }
        };
        updateDimensions();
    }, [activeTab]);

    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <Tabs
            defaultValue="tab-1"
            value={activeTab}
            onValueChange={handleTabChange}>
            <ScrollArea>
                <TabsList className="mb-3 relative">
                    <motion.div
                        className="absolute z-0 bg-background rounded-sm"
                        initial={{
                            width: 0,
                            left: 0,
                        }}
                        animate={{
                            width: dimensions.width,
                            height: dimensions.height,
                            left: dimensions.left,
                            top: dimensions.top,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 30
                        }}
                    />
                    <TabsTrigger ref={tab1Ref} value="tab-1" className="z-10 data-[state=active]:bg-transparent transition-colors duration-500 delay-200">
                        <HouseIcon className="-ms-0.5 me-1.5 opacity-60" size={16} aria-hidden="true" />
                        Overview
                    </TabsTrigger>
                    <TabsTrigger ref={tab2Ref} value="tab-2" className="group z-10 data-[state=active]:bg-transparent transition-colors duration-500 delay-200">
                        <PanelsTopLeftIcon className="-ms-0.5 me-1.5 opacity-60" size={16} aria-hidden="true" />
                        Projects
                        <Badge
                            className="bg-primary/15 ms-1.5 min-w-5 px-1 transition-opacity group-data-[state=inactive]:opacity-50"
                            variant="secondary"
                        >
                            3
                        </Badge>
                    </TabsTrigger>
                    <TabsTrigger ref={tab3Ref} value="tab-3" className="group z-10 data-[state=active]:bg-transparent transition-colors duration-500 delay-200">
                        <BoxIcon className="-ms-0.5 me-1.5 opacity-60" size={16} aria-hidden="true" />
                        Packages
                        <Badge className="ms-1.5 transition-opacity group-data-[state=inactive]:opacity-50">
                            New
                        </Badge>
                    </TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                >
                    <TabsContent value="tab-1">
                        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 1</p>
                    </TabsContent>
                    <TabsContent value="tab-2">
                        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 2</p>
                    </TabsContent>
                    <TabsContent value="tab-3">
                        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 3</p>
                    </TabsContent>
                </motion.div>
            </AnimatePresence>
        </Tabs>
    );
}