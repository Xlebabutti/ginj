import { Button } from '@/shared/ui/button';
import { Hint } from '@/shared/ui/custom/hint';
import { Slider } from '@radix-ui/react-slider';
import { Volume1, Volume2, VolumeX } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface VolumeControlProps {
    onToggle: () => void;
    onChange: (value: number) => void;
    value: number;
}

export function VolumeControl({
    onToggle,
    onChange,
    value,
}: VolumeControlProps) {
    const t = useTranslations('stream.video.player');

    const isMuted = value === 0;
    const isAboveHalf = value > 50;

    let Icon = Volume1;

    if (isMuted) {
        Icon = VolumeX;
    } else if (isAboveHalf) {
        Icon = Volume2;
    }

    function handleChange(value: number[]) {
        onChange(value[0]);
    }

    return (
        <div className="flex items-center gap-2">
            <Hint label={t('volume')} asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onToggle}
                    className="text-white hover:bg-white/10"
                >
                    <Icon className="size-6" />
                </Button>
            </Hint>
            <Slider
                className="w-32 cursor-pointer"
                onValueChange={handleChange}
                value={[value]}
                max={100}
                step={1}
            />
        </div>
    );
}
