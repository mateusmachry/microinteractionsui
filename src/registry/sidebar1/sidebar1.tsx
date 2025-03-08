'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

export type SidebarItem = {
    key: string
    tooltip: string,
    element: React.ReactNode,
    showActiveState: boolean
};

export type SidebarProps = {
    selectedItemKey: string,
    selectBackgroundColor?: string,
    selectBackgroundColorOnHover?: string,
    headerItems?: SidebarItem[],
    contentItems?: SidebarItem[],
    footerItems?: SidebarItem[],
    className?: string,
    onItemClick?: (key: string) => void,
} & React.ComponentProps<"nav">

export function Sidebar1({
    selectedItemKey,
    selectBackgroundColor = "bg-blue-600",
    selectBackgroundColorOnHover = "bg-blue-700",
    headerItems = [],
    contentItems = [],
    footerItems = [],
    className = "",
    onItemClick,
    ...props
}: SidebarProps) {

    const renderSidebarItem = (item: SidebarItem) => {
        const isSelected = item.key === selectedItemKey && item.showActiveState;

        return (
            <TooltipProvider key={item.key}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div
                            className="relative cursor-pointer"
                            onClick={() => onItemClick && onItemClick(item.key)}
                        >
                            <AnimatePresence>
                                {isSelected && (
                                    <motion.div
                                        className={`absolute inset-0 ${selectBackgroundColor} hover:${selectBackgroundColorOnHover} rounded-lg`}
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 100,
                                            damping: 10,
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <motion.div
                                className={cn(
                                    "flex flex-col justify-center items-center px-2 py-3 relative z-10",
                                    isSelected ? "text-white" : "text-[#707070] hover:text-black hover:dark:text-white"
                                )}
                                layout
                            >
                                {item.element}
                            </motion.div>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <span>{item.tooltip}</span>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        );
    };

    return (
        <nav {...props} className={cn(className, "w-18 min-h-screen flex flex-col items-center bg-background border-r py-8 px-4")}>
            <div className="h-full flex flex-col justify-between gap-12">
                <div id="sidebar-header" className="flex flex-col gap-6">
                    {headerItems.length > 0 && headerItems.map(renderSidebarItem)}
                </div>
                <div id="sidebar-content" className="flex flex-col flex-1 gap-6">
                    {contentItems.length > 0 && contentItems.map(renderSidebarItem)}
                </div>
                <div id="sidebar-footer" className="flex flex-col gap-6">
                    {footerItems.length > 0 && footerItems.map(renderSidebarItem)}
                </div>
            </div>
        </nav>
    );
};