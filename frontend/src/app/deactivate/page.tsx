import { DeactivateForm } from '@/features/auth/forms/deactivate-form';
import { NO_INDEX_PAGE } from '@/shared/lib/constants/seo.constants';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('auth.deactivate');

    return {
        title: t('heading'),
        ...NO_INDEX_PAGE,
    };
}

export default function DeactivatePage() {
    return <DeactivateForm />;
}
