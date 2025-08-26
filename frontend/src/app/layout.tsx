import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './globals.css';
import ParticlesBackground from '@/widgets/app-particles/app-particles';
import { AppProvider } from '@/providers';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { AppSidebar } from '@/features/sidebar/app-sidebar';
import { AppWraper } from './app-wraper';

const geistSans = Comfortaa({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'GINJ',
    description: 'Трансляции совершенно нового качества',
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const locale = await getLocale();
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={`${geistSans.className} dark antialiased`}>
                <ParticlesBackground>
                    <NextIntlClientProvider messages={messages}>
                        <AppProvider>
                            <div className="flex h-full flex-col">
                                <div className="flex-1">
                                    <AppSidebar />
                                    <AppWraper>{children}</AppWraper>
                                </div>
                            </div>
                        </AppProvider>
                    </NextIntlClientProvider>
                </ParticlesBackground>
            </body>
        </html>
    );
}
