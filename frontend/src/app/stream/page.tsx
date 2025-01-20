'use client';

import { StreamVideo } from '@/features/player/stream-video';
import { useStreamToken } from '@/features/player/use-stream-token';
import { LiveKitRoom } from '@livekit/components-react';

const StreamPage = () => {
    const { token, name, identity } = useStreamToken(
        '4b149bfe-6150-4fb0-b082-a54b08a95267',
    );
    console.log(token, name, identity);
    console.log(token, name, identity);
    if (!token || !name || !identity) {
        return <>Net tokena</>;
    }
    return (
        <LiveKitRoom
            video={true}
            audio={true}
            token={token}
            serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_WS_URL}
            className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 lg:grid-cols-7"
        >
            <div className="order-1 col-span-1 flex flex-col lg:col-span-5">
                <StreamVideo
                    channel={{
                        id: '4b149bfe-6150-4fb0-b082-a54b08a95267',
                    }}
                />
            </div>
        </LiveKitRoom>
    );
};

export default StreamPage;
