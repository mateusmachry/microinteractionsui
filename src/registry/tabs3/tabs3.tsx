"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

export function Tabs3() {
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
                    className="absolute z-10 h-0.5 inset-x-0 bottom-0 bg-primary shadow-none"
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30
                    }}
                    animate={{
                        width: dimensions.width,
                        left: dimensions.left,
                    }}
                />
                <TabsTrigger
                    ref={tab1Ref}
                    value="tab-1"
                    className="relative rounded-none py-2 data-[state=active]:bg-transparent transition-colors duration-500 delay-200"
                >
                    Tab 1
                </TabsTrigger>
                <TabsTrigger
                    ref={tab2Ref}
                    value="tab-2"
                    className="relative rounded-none py-2 data-[state=active]:bg-transparent transition-colors duration-500 delay-200"
                >
                    Tab 2
                </TabsTrigger>
                <TabsTrigger
                    ref={tab3Ref}
                    value="tab-3"
                    className="relative rounded-none py-2 data-[state=active]:bg-transparent transition-colors duration-500 delay-200"
                >
                    Tab 3
                </TabsTrigger>
            </TabsList>
            <TabsContent value="tab-1">
                <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 1</p>
            </TabsContent>
            <TabsContent value="tab-2">
                <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 2</p>
            </TabsContent>
            <TabsContent value="tab-3">
                <p className="text-muted-foreground p-4 text-center text-xs">Content for Tab 3</p>
            </TabsContent>
        </Tabs>
    );
}