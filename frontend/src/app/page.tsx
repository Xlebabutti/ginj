import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export default async function Home() {
    const t = await getTranslations('home');

    return (
        <main>
            {t('title')}
            <Image
                src="/images/winter-bear.svg"
                className="absolute bottom-0 bg-cover"
                alt="Example Image"
                width={960}
                height={896}
            />
        </main>
    );
}
