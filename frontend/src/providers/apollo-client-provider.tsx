'use client';

import { client } from '@/shared/api/apollo-client';
import { ApolloProvider } from '@apollo/client';
import type { PropsWithChildren } from 'react';

export function ApolloClinetProvider({ children }: PropsWithChildren<unknown>) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
