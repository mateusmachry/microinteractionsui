"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SVGProps, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const tabLabelVariants: Variants = {
    hidden: { width: 0, opacity: 0, x: -10 },
    visible: { width: "auto", opacity: 1, x: 0 },
    exit: { width: 0, opacity: 0, x: -10 }
};

const tabContentVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
};

const UsersIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
    )
};

const ThumbsUpIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
    )
};

const StarIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
    )
};

export function Tabs5() {
    const [activeTab, setActiveTab] = useState("tab-1");

    return (
        <Tabs
            defaultValue="tab-1"
            value={activeTab}
            onValueChange={setActiveTab}
        >
            <TabsList className="mb-3 gap-1 bg-transparent relative">
                <TabsTrigger
                    value="tab-1"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none flex flex-row items-center gap-1.5"
                >
                    <UsersIcon className="opacity-60" width={16} height={16} aria-hidden="true" />
                    <AnimatePresence>
                        {activeTab === "tab-1" && (
                            <motion.span
                                variants={tabLabelVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                Followers
                            </motion.span>
                        )}
                    </AnimatePresence>
                </TabsTrigger>
                <TabsTrigger
                    value="tab-2"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none flex flex-row items-center gap-1.5"
                >
                    <ThumbsUpIcon className="opacity-60" width={16} height={16} aria-hidden="true" />
                    <AnimatePresence>
                        {activeTab === "tab-2" && (
                            <motion.span
                                variants={tabLabelVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                Likes
                            </motion.span>
                        )}
                    </AnimatePresence>
                </TabsTrigger>
                <TabsTrigger
                    value="tab-3"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full data-[state=active]:shadow-none flex flex-row items-center gap-1.5"
                >
                    <StarIcon className="opacity-60" width={16} height={16} aria-hidden="true" />
                    <AnimatePresence>
                        {activeTab === "tab-3" && (
                            <motion.span
                                variants={tabLabelVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.4, ease: "easeOut" }}
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
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                >
                    <TabsContent value="tab-1">
                        <div className="flex justify-center items-center">
                            <span className="text-xs text-gray-600 dark:text-gray-400">Tab1 content</span>
                        </div>
                    </TabsContent>
                    <TabsContent value="tab-2">
                        <div className="flex justify-center items-center">
                            <span className="text-xs text-gray-600 dark:text-gray-400">Tab2 content</span>
                        </div>
                    </TabsContent>
                    <TabsContent value="tab-3">
                        <div className="flex justify-center items-center">
                            <span className="text-xs text-gray-600 dark:text-gray-400">Tab3 content</span>
                        </div>
                    </TabsContent>
                </motion.div>
            </AnimatePresence>
        </Tabs>
    );
}