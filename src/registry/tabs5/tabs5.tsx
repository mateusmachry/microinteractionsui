"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BoxIcon, HouseIcon, PanelsTopLeftIcon, Star } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Tabs5() {
    const [activeTab, setActiveTab] = useState("tab-1");
    const handleTabChange = (value: string) => {
        setActiveTab(value);
    };

    return (
        <Tabs
            defaultValue="tab-1"
            value={activeTab}
            onValueChange={handleTabChange}>
            <TabsList className="mb-3 gap-1 bg-transparent relative">
                <TabsTrigger
                    value="tab-1"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none flex flex-row items-center gap-1.5"
                >
                    <HouseIcon className="opacity-60" size={16} aria-hidden="true" />
                    <AnimatePresence>
                        {activeTab === "tab-1" && (
                            <motion.span
                                initial={{ width: 0, opacity: 0, x: -10 }}
                                animate={{ width: "auto", opacity: 1, x: 0 }}
                                exit={{ width: 0, opacity: 0, x: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                Overview
                            </motion.span>
                        )}
                    </AnimatePresence>
                </TabsTrigger>
                <TabsTrigger
                    value="tab-2"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none flex flex-row items-center gap-1.5"
                >
                    <PanelsTopLeftIcon className="opacity-60" size={16} aria-hidden="true" />
                    <AnimatePresence>
                        {activeTab === "tab-2" && (
                            <motion.span
                                initial={{ width: 0, opacity: 0, x: -10 }}
                                animate={{ width: "auto", opacity: 1, x: 0 }}
                                exit={{ width: 0, opacity: 0, x: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                Projects
                            </motion.span>
                        )}
                    </AnimatePresence>
                </TabsTrigger>
                <TabsTrigger
                    value="tab-3"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none flex flex-row items-center gap-1.5"
                >
                    <BoxIcon className="opacity-60" size={16} aria-hidden="true" />
                    <AnimatePresence>
                        {activeTab === "tab-3" && (
                            <motion.span
                                initial={{ width: 0, opacity: 0, x: -10 }}
                                animate={{ width: "auto", opacity: 1, x: 0 }}
                                exit={{ width: 0, opacity: 0, x: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                Packages
                            </motion.span>
                        )}
                    </AnimatePresence>
                </TabsTrigger>
                <TabsTrigger
                    value="tab-4"
                    className="relative data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none flex flex-row items-center gap-1.5"
                >
                    <Star size={16} aria-hidden="true" />
                    <AnimatePresence>
                        {activeTab === "tab-4" && (
                            <motion.span
                                initial={{ width: 0, opacity: 0, x: -10 }}
                                animate={{ width: "auto", opacity: 1, x: 0 }}
                                exit={{ width: 0, opacity: 0, x: -10 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                                Favorites
                            </motion.span>
                        )}
                    </AnimatePresence>
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
                    <TabsContent value="tab-4">
                        <p className="text-muted-foreground p-4 pt-1 text-center text-xs">Content for Tab 4</p>
                    </TabsContent>
                </motion.div>
            </AnimatePresence>
        </Tabs>
    );
};