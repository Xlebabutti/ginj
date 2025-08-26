import { AppSidebar } from '@/features/sidebar/app-sidebar';

export default function PlatformLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AppSidebar />
            <main className="flex h-screen w-full flex-1 flex-col gap-4 p-4 pt-0">
                {children}
            </main>
        </>
    );
}
