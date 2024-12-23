import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from '@/shared/ui/sheet';
import { Button } from '@/shared/ui/button';
import { Menu } from 'lucide-react';

export default function Layout({
    nav,
    logo,
    actions,
}: {
    nav?: React.ReactNode;
    profile?: React.ReactNode;
    logo?: React.ReactNode;
    actions?: React.ReactNode;
}) {
    return (
        <header className="z-100 w-full">
            <div className="flex h-32 items-center justify-between px-9">
                <div className="mr-2 md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left">
                            <SheetHeader className="mb-5 border-b pb-5">
                                {logo}
                            </SheetHeader>
                            {nav}
                        </SheetContent>
                    </Sheet>
                </div>
                <div className="mr-6 hidden md:flex">{logo}</div>
                <div className="flex items-center">
                    <div className="hidden md:flex">{nav}</div>
                </div>
                <div className="flex items-center justify-end">{actions}</div>
            </div>
        </header>
    );
}
