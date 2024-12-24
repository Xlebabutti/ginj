import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import './globals.css';
import ParticlesBackground from '@/widgets/app-particles/app-particles';
import { AppHeader } from '@/widgets/app-header/app-header';

const geistSans = Comfortaa({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'GINJ',
    description: 'Трансляции совершенно нового качества',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={`${geistSans.className} dark antialiased`}>
                <ParticlesBackground>
                    <AppHeader />
                    {children}
                </ParticlesBackground>
            </body>
        </html>
    );
}
