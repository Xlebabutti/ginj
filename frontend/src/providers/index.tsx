'use client';

import React from 'react';
import { ComposeChildren } from '@/shared/lib/react/compose-children';
import { ApolloClinetProvider } from './apollo-client-provider';

export function AppProvider({ children }: { children: React.ReactNode }) {
    return (
        <ComposeChildren>
            <ApolloClinetProvider>{children}</ApolloClinetProvider>
        </ComposeChildren>
    );
}
