import { useTranslations } from 'next-intl';

import { Input } from '@/shared/ui/input';
import { CopyButton } from '@/shared/ui/custom/copy-button';
import { CardContainer } from '@/shared/ui/custom/card-container';

interface StreamURLProps {
    value: string | null;
}

export function StreamURL({ value }: StreamURLProps) {
    const t = useTranslations('dashboard.keys.url');

    return (
        <CardContainer
            heading={t('heading')}
            isRightContentFull
            rightContent={
                <div className="flex w-full items-center gap-x-4">
                    <Input
                        placeholder={t('heading')}
                        value={value ?? ''}
                        disabled
                    />
                    <CopyButton value={value} />
                </div>
            }
        />
    );
}
