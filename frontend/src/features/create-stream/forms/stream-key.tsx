import { Eye, EyeOff } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';
import { CopyButton } from '@/shared/ui/custom/copy-button';
import { CardContainer } from '@/shared/ui/custom/card-container';

interface StreamKeyProps {
    value: string | null;
}

export function StreamKey({ value }: StreamKeyProps) {
    const t = useTranslations('dashboard.keys.key');

    const [isShow, setIsShow] = useState(false);

    const Icon = isShow ? Eye : EyeOff;

    return (
        <CardContainer
            heading={t('heading')}
            isRightContentFull
            rightContent={
                <div className="flex w-full items-center gap-x-4">
                    <Input
                        placeholder={t('heading')}
                        value={value ?? ''}
                        type={isShow ? 'text' : 'password'}
                        disabled
                    />
                    <CopyButton value={value} />
                    <Button
                        variant="ghost"
                        size="lg"
                        onClick={() => setIsShow(!isShow)}
                    >
                        <Icon className="size-5" />
                    </Button>
                </div>
            }
        />
    );
}
