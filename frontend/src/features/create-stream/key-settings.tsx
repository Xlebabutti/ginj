'use client';

import { InstructionModal } from './Instruction';
import { CreateIngressForm } from './forms/create-Ingress-form';
import { StreamKey } from './forms/stream-key';
import { useCurrent } from '../player/use-current';
import { StreamURL } from './forms/stream-url';
import { ToggleCardSkeleton } from '@/shared/ui/custom/ToggleCard';

export function KeysSettings() {
    const { user, isLoadingProfile } = useCurrent();

    return (
        <div className="lg:px-10">
            <div className="block items-center justify-between space-y-3 lg:flex lg:space-y-0">
                <div className="flex items-center gap-x-4">
                    <InstructionModal />
                    <CreateIngressForm />
                </div>
            </div>
            <div className="mt-5 space-y-6">
                {isLoadingProfile ? (
                    Array.from({ length: 2 }).map((_, index) => (
                        <ToggleCardSkeleton key={index} />
                    ))
                ) : (
                    <>
                        <StreamURL value={user?.stream.serverUrl!} />
                        <StreamKey value={user?.stream.streamKey!} />
                    </>
                )}
            </div>
        </div>
    );
}
