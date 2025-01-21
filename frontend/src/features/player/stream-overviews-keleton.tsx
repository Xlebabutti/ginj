import { StreamVideoSkeleton } from './stream-video';

export function StreamOverviewSkeleton() {
    return (
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-6 lg:grid-cols-7">
            <div className="order-1 col-span-1 flex flex-col lg:col-span-5">
                <StreamVideoSkeleton />
            </div>
        </div>
    );
}
