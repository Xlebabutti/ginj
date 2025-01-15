'use client';

import { usePathname } from 'next/navigation';
import { Route } from './route.interface';
import { useSidebar } from './vm/use-sidebar';

import { Hint } from '@/shared/ui/custom/hint';
import { Button } from '@/shared/ui/button';

import Link from 'next/link';

import { cn } from '@/shared/lib/css';

interface SidebarItemProps {
    route: Route;
}

export function NavItem({ route }: SidebarItemProps) {
    const pathname = usePathname();
    const { isCollapsed } = useSidebar();

    const isActive = pathname === route.href;

    return isCollapsed ? (
        <Hint label={route.label} side="right" asChild>
            <Button
                className={cn(
                    'h-11 w-full justify-center',
                    isActive && 'bg-accent',
                )}
                variant="ghost"
                asChild
            >
                <Link href={route.href}>
                    <route.icon className="mr-0 size-5" />
                </Link>
            </Button>
        </Hint>
    ) : (
        <Button
            className={cn('h-11 w-full justify-start', isActive && 'bg-accent')}
            variant="ghost"
            asChild
        >
            <Link href={route.href} className="flex items-start gap-x-4">
                <route.icon className="mr-0 size-5" />
                {route.label}
            </Link>
        </Button>
    );
}
