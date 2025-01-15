import { Home, Radio, Settings } from 'lucide-react';
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
            label: t('stream'),
            href: '/stream',
            icon: Radio,
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
