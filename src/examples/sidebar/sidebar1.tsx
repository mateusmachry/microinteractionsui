"use client";

import { Sidebar1 } from '@/registry/sidebar1/sidebar1';
import { Moon, Settings, BarChart, WalletIcon } from 'lucide-react';
import { AvatarDemo } from "@/examples/avatar-demo";
import { useState } from 'react';

export function Sidebar1Example() {
    const [selectedItem, setSelectedItem] = useState<string>('profile');
    return (
        <Sidebar1
            selectedItemKey={selectedItem}
            headerItems={[
                { key: 'profile', element: <AvatarDemo />, tooltip: 'Profile', showActiveState: false },
                { key: 'theme', element: <Moon onClick={() => setSelectedItem('theme')}/>, tooltip: 'Theme', showActiveState: true }
            ]}
            contentItems={[
                { key: 'charts', element: <BarChart onClick={() => setSelectedItem('charts')}/>, tooltip: 'Charts', showActiveState: true },
                { key: 'payment', element: <WalletIcon onClick={() => setSelectedItem('payment')}/>, tooltip: 'Payment', showActiveState: true }
            ]}
            footerItems={[
                { key: 'settings', element: <Settings onClick={() => setSelectedItem('settings')}/>, tooltip: 'Settings', showActiveState: true }
            ]}
        />
    )
}