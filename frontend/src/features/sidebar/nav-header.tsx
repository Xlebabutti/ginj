'use client';

import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useSidebar } from './vm/use-sidebar';
import { Hint } from '@/shared/ui/custom/hint';
import { Button } from '@/shared/ui/button';

export function NavHeader() {
    const t = useTranslations('sidebar');

    const { isCollapsed, open, close } = useSidebar();

    const label = isCollapsed ? t('expand') : t('collapse');

    return isCollapsed ? (
        <div className="mb-4 hidden w-full items-center justify-center pt-4 lg:flex">
            <Hint label={label} side="right" asChild>
                <Button onClick={() => open()} variant="ghost" size="icon">
                    <ArrowRightFromLine className="size-4" />
                </Button>
            </Hint>
        </div>
    ) : (
        <div className="mb-2 flex w-full items-center justify-between p-3 pl-4">
            <h2 className="text-lg font-semibold text-foreground">
                {t('navHeader')}
            </h2>
            <Hint label={label} side="right" asChild>
                <Button onClick={() => close()} variant="ghost" size="icon">
                    <ArrowLeftFromLine className="size-4" />
                </Button>
            </Hint>
        </div>
    );
}
