import {
    useConnectionState,
    useRemoteParticipant,
    useTracks,
} from '@livekit/components-react';
import { ConnectionState, Track } from 'livekit-client';
import { JSX } from 'react';

import { Skeleton } from '@/shared/ui/skeleton';
import { StreamPlayer } from './palyer';

interface StreamVideoProps {
    channel: { id: '4b149bfe-6150-4fb0-b082-a54b08a95267' };
}

export function StreamVideo({ channel }: StreamVideoProps) {
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant(
        '4b149bfe-6150-4fb0-b082-a54b08a95267',
    );

    const tracks = useTracks([
        Track.Source.Camera,
        Track.Source.Microphone,
    ]).filter((track) => track.participant.identity === channel.id);
    console.log(participant, tracks, connectionState, '**********************');

    let content: JSX.Element;

    if (!participant && connectionState === ConnectionState.Connected) {
        content = <>ofline</>;
    } else {
        content = <StreamPlayer participant={participant} />;
    }

    return (
        <div className="group relative mb-6 aspect-video rounded-lg">
            {content}
        </div>
    );
}

export function StreamVideoSkeleton() {
    return (
        <div className="mb-6 aspect-video">
            <Skeleton className="h-full w-full rounded-lg" />
        </div>
    );
}
