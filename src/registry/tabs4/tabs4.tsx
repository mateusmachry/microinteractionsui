"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BoxIcon, HouseIcon, PanelsTopLeftIcon } from "lucide-react";
import { RefObject, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Tabs4() {
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
        <Tabs
            className="items-center"
            defaultValue="tab-1"
            value={activeTab}
            onValueChange={handleTabChange}>
            <TabsList className="h-auto rounded-none border-b bg-transparent p-0 relative">
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
                    className="relative flex-col rounded-none px-4 py-2 text-xs data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors duration-500 delay-200"
                >
                    <HouseIcon className="mb-1.5 opacity-60" size={16} aria-hidden="true" />
                    Overview
                </TabsTrigger>
                <TabsTrigger
                    ref={tab2Ref}
                    value="tab-2"
                    className="relative flex-col rounded-none px-4 py-2 text-xs data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors duration-500 delay-200"
                >
                    <PanelsTopLeftIcon className="mb-1.5 opacity-60" size={16} aria-hidden="true" />
                    Projects
                </TabsTrigger>
                <TabsTrigger
                    ref={tab3Ref}
                    value="tab-3"
                    className="relative flex-col rounded-none px-4 py-2 text-xs data-[state=active]:bg-transparent data-[state=active]:shadow-none transition-colors duration-500 delay-200"
                >
                    <BoxIcon className="mb-1.5 opacity-60" size={16} aria-hidden="true" />
                    Packages
                </TabsTrigger>
            </TabsList>
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