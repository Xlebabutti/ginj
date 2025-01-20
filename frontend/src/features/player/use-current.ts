import { useEffect } from 'react';

import {
    useClearSessionCookieMutation,
    useFindProfileQuery,
} from '@/graphql/generated/output';
import { useAuth } from '@/shared/lib/react/use-auth';

export function useCurrent() {
    const { isAuthenticated, exit } = useAuth();

    const { data, loading, refetch, error } = useFindProfileQuery({
        skip: !isAuthenticated,
    });
    const [clear] = useClearSessionCookieMutation();

    useEffect(() => {
        if (error) {
            if (isAuthenticated) {
                clear();
            }
            exit();
        }
    }, [isAuthenticated, exit, clear]);

    return {
        user: data?.findProfile,
        isLoadingProfile: loading,
        refetch,
    };
}
