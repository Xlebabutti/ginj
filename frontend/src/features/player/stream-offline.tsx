'use client';

import { WifiOff } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { CSSProperties } from 'react';

import { Card } from '@/shared/ui/card';

export function StreamOffline() {
    const t = useTranslations('stream.video');

    const backgroundStyle: CSSProperties = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <Card
            className="flex h-full flex-col items-center justify-center"
            style={backgroundStyle}
        >
            <WifiOff className="z-10 size-12 text-muted-foreground" />
            <p className="z-10 mt-3 text-lg text-white">
                name chanel {t('offline')}
            </p>
        </Card>
    );
}
