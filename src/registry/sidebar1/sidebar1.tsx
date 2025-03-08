'use client';
import React from 'react';
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
} & React.ComponentProps<"nav">

export function Sidebar1({ selectedItemKey, selectBackgroundColor = "bg-blue-600", selectBackgroundColorOnHover = "bg-blue-700", headerItems = [], contentItems = [], footerItems = [], className = "", ...props }: SidebarProps) {
    return (
        <nav {...props} className={cn(className, "w-18 min-h-screen flex flex-col items-center bg-background border-r py-8 px-4")}>
            <div className="h-full flex flex-col justify-between gap-12">
                <div id="sidebar-header" className="flex flex-col gap-6">
                    {headerItems.length > 0 && headerItems.map((headerItem) => (
                        <TooltipProvider key={headerItem.key}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className={cn("flex flex-col justify-center items-center border-transparent", headerItem.key === selectedItemKey && headerItem.showActiveState ? `${selectBackgroundColor} hover:${selectBackgroundColorOnHover} text-white  p-3 rounded-lg` : 'bg-transparent text-[#707070] hover:text-black hover:dark:text-white cursor-pointer')}>
                                        {headerItem.element}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <span>{headerItem.tooltip}</span>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
                <div id="sidebar-content" className="flex flex-col flex-1 gap-6">
                    {contentItems.length > 0 && contentItems.map((contentItem) => (
                        <TooltipProvider key={contentItem.key}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className={cn("flex flex-col justify-center items-center border-transparent", contentItem.key === selectedItemKey && contentItem.showActiveState ? `${selectBackgroundColor} hover:${selectBackgroundColorOnHover} text-white  p-3 rounded-lg` : 'bg-transparent text-[#707070] hover:text-black hover:dark:text-white cursor-pointer')}>
                                        {contentItem.element}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <span>{contentItem.tooltip}</span>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
                <div id="sidebar-footer" className="flex flex-col gap-6">
                    {footerItems.length > 0 && footerItems.map((footerItem) => (
                        <TooltipProvider key={footerItem.key}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div className={cn("flex flex-col justify-center items-center border-transparent", footerItem.key === selectedItemKey && footerItem.showActiveState ? `${selectBackgroundColor} hover:${selectBackgroundColorOnHover} text-white  p-3 rounded-lg` : 'bg-transparent text-[#707070] hover:text-black hover:dark:text-white cursor-pointer')}>
                                        {footerItem.element}
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <span>{footerItem.tooltip}</span>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </div>
        </nav>
    );
};