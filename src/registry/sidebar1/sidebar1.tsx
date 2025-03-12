'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Palette, Settings, BarChart, WalletIcon } from 'lucide-react';

interface SidebarContextValue {
    selectedItemKey: string;
    onItemSelected: (key: string) => void;
};

const SidebarContext = React.createContext<SidebarContextValue | undefined>(undefined);
function useSidebarContext() {
    const context = React.useContext(SidebarContext);
    if (!context) {
      throw new Error('Sidebar components must be used within a Sidebar provider');
    }
    return context;
};

const AvatarDemo = () => {
    return (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
};

export function Sidebar1() {
    const [selectedItemKey, setSelectedItemKey] = React.useState('charts');
    
    const contextValue = React.useMemo(() => ({
        selectedItemKey,
        onItemSelected: (key: string) => setSelectedItemKey(key)
    }), [selectedItemKey]);

    return (
        <SidebarContext.Provider
            value={contextValue}
        >
            <nav
                className="w-18 h-screen fixed flex flex-col items-center bg-background border-r py-8 px-4"
            >
                <div className="h-full flex flex-col justify-between gap-8">
                    <SidebarHeader>
                        <SidebarItem itemKey={"profile"} showActiveState={false} tooltip={"Profile"}>
                            <AvatarDemo />
                        </SidebarItem>
                        <SidebarItem itemKey={"themes"} showActiveState={true} tooltip={"Themes"}>
                            <Palette />
                        </SidebarItem>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarItem itemKey={"charts"} showActiveState={true} tooltip={"Charts"}>
                            <BarChart />
                        </SidebarItem>
                        <SidebarItem itemKey={"payment"} showActiveState={true} tooltip={"Payment"}>
                            <WalletIcon />
                        </SidebarItem>
                    </SidebarContent>
                    <SidebarFooter>
                        <SidebarItem itemKey={"settings"} showActiveState={true} tooltip={"Settings"}>
                            <Settings />
                        </SidebarItem>
                    </SidebarFooter>
                </div>
            </nav>
        </SidebarContext.Provider>
    );
};

Sidebar1.displayName = "Sidebar1";

type SidebarHeaderProps = React.ComponentProps<"div">;

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            id="sidebar-header"
            className={cn("flex flex-col gap-4 after:border-b after:border-b-border", className)}
            {...props}
        >
            {children}
        </div>
    )
);
SidebarHeader.displayName = "SidebarHeader";

type SidebarContentProps = React.ComponentProps<"div">;

const SidebarContent = React.forwardRef<HTMLDivElement, SidebarContentProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            id="sidebar-content"
            className={cn("flex flex-col flex-1 gap-4", className)}
            {...props}
        >
            {children}
        </div>
    )
);

SidebarContent.displayName = "SidebarContent";

type SidebarFooterProps = React.ComponentProps<"div">;

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
    ({ className, children, ...props }, ref) => (
        <div
            ref={ref}
            id="sidebar-footer"
            className={cn("flex flex-col gap-4 before:border-t before:border-t-border", className)}
            {...props}
        >
            {children}
        </div>
    )
);

SidebarFooter.displayName = "SidebarFooter";

type SidebarItemProps = React.ComponentProps<"div"> & {
    itemKey: string;
    showActiveState?: boolean;
    tooltip?: React.ReactNode;
};

const SidebarItem = React.forwardRef<HTMLDivElement, SidebarItemProps>(
    ({
        itemKey,
        showActiveState = true,
        tooltip,
        className,
        children,
        ...props
    }, ref) => {
        const { selectedItemKey, onItemSelected } = useSidebarContext();
        const isSelected = itemKey === selectedItemKey && showActiveState;

        const content = (
            <div
                ref={ref}
                className={cn("relative cursor-pointer", className)}
                onClick={() => onItemSelected(itemKey)}
                {...props}
            >
                <AnimatePresence>
                    {isSelected && (
                        <motion.div
                            className={cn(
                                "absolute inset-0 rounded-lg",
                                "bg-neutral-800 hover:bg-neutral-900",
                            )}
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
                    {children}
                </motion.div>
            </div>
        );

        if (tooltip) {
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            {content}
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            {tooltip}
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        }

        return content;
    }
);

SidebarItem.displayName = "SidebarItem";