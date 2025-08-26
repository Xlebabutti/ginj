import Link from 'next/link';
import { PropsWithChildren } from 'react';

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/shared/ui/card';
import { Button } from '@/shared/ui/button';

interface AuthWrapperProps {
    heading: string;
    backButtonLabel?: string;
    backButtonHref?: string;
}

export function AuthWrapper({
    children,
    heading,
    backButtonLabel,
    backButtonHref,
}: PropsWithChildren<AuthWrapperProps>) {
    return (
        <div className="flex h-[calc(100vh-130px)] items-center justify-center">
            <Card className="w-[450px]">
                <CardHeader className="flex-row items-center justify-center gap-x-4">
                    <CardTitle>{heading}</CardTitle>
                </CardHeader>
                <CardContent>{children}</CardContent>
                <CardFooter className="-mt-2">
                    {backButtonLabel && backButtonHref && (
                        <Link href={backButtonHref} className="w-full">
                            <Button variant="ghost" className="w-full">
                                {backButtonLabel}
                            </Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
}
