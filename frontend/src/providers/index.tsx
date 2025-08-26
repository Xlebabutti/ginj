'use client';

import React from 'react';
import { ComposeChildren } from '@/shared/lib/react/compose-children';
import { ApolloClinetProvider } from './apollo-client-provider';
import { ToastProvider } from './toast-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
            <ApolloClinetProvider>
                <ToastProvider />
                {children}
            </ApolloClinetProvider>
        </ComposeChildren>
    );
}
