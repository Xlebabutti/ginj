import {
    BarChart,
    Bell,
    HelpCircle,
    Home,
    Link,
    Plus,
    Radio,
    Settings,
    Store,
    Users2,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

import type { Route } from './route.interface';
import { NavItem } from './nav-item';

export function NavUser() {
    const t = useTranslations('sidebar.navUser');

    const routes: Route[] = [
        {
            label: t('home'),
            href: '/',
            icon: Home,
        },
        {
            label: t('streams'),
            href: '/streams',
            icon: Radio,
        },
        {
            label: t('createStream'),
            href: '/create-stream',
            icon: Plus,
        },
        {
            label: t('library'),
            href: '/library',
            icon: Store,
        },
        {
            label: t('chat'),
            href: '/chat',
            icon: Users2,
        },
        {
            label: t('analytics'),
            href: '/analytics',
            icon: BarChart,
        },
        {
            label: t('integrations'),
            href: '/integrations',
            icon: Link,
        },
        {
            label: t('support'),
            href: '/support',
            icon: HelpCircle,
        },
        {
            label: t('notifications'),
            href: '/notifications',
            icon: Bell,
        },
        {
            label: t('settings'),
            href: '/settings',
            icon: Settings,
        },
    ];

    return (
        <div className="space-y-2 px-2 pt-4 lg:pt-0">
            {routes.map((route, index) => (
                <NavItem key={index} route={route} />
            ))}
        </div>
    );
}
