'use client';

import { StreamPlayer } from '@/features/player/palyer';
import {
    useConnectionState,
    useRemoteParticipant,
    useTracks,
} from '@livekit/components-react';
import { ConnectionState, Track } from 'livekit-client';
import { JSX } from 'react';

const StreamPage = () => {
    const connectionState = useConnectionState();
    const participant = useRemoteParticipant('1');

    const tracks = useTracks([
        Track.Source.Camera,
        Track.Source.Microphone,
    ]).filter((track) => track.participant.identity === '1');

    let content: JSX.Element;

    if (!participant && connectionState === ConnectionState.Connected) {
        content = <div>asd</div>;
    } else if (!participant || tracks.length === 0) {
        content = <>loading</>;
    } else {
        content = <StreamPlayer participant={participant} />;
    }
    return (
        <div className="group relative mb-6 aspect-video rounded-lg">
            {content}
        </div>
    );
};

export default StreamPage;
