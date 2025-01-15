'use client';

import { useSidebar } from '@/features/sidebar/vm/use-sidebar';
import { useMediaQuery } from '@/shared/lib/react/use-media-query';
import { cn } from '@/shared/lib/css';
import { type PropsWithChildren, useEffect } from 'react';

export function AppWraper({ children }: PropsWithChildren<unknown>) {
    const isMobile = useMediaQuery('(max-width: 1024px)');

    const { isCollapsed, open, close } = useSidebar();

    useEffect(() => {
        if (isMobile) {
            if (!isCollapsed) close();
        } else {
            if (isCollapsed) open();
        }
    }, [isMobile]);

    return (
        <main
            className={cn(
                'mt-[75px] flex-1 p-8',
                isCollapsed ? 'ml-16' : 'ml-16 lg:ml-64',
            )}
        >
            {children}
        </main>
    );
}
