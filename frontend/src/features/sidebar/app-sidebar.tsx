'use client';

import { cn } from '@/shared/lib/css';
import { NavUser } from './nav-user';
import { NavHeader } from './nav-header';
import { useSidebar } from './vm/use-sidebar';

export function AppSidebar() {
    const { isCollapsed } = useSidebar();

    return (
        <aside
            className={cn(
                'fixed left-0 z-50 flex h-full flex-col border-r border-border bg-card transition-all duration-100 ease-in-out',
                isCollapsed ? 'w-16' : 'w-64',
            )}
        >
            <NavHeader />
            <NavUser />
        </aside>
    );
}
