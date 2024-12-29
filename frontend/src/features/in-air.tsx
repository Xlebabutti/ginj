import { Button } from '@/shared/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/shared/ui/dialog';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

export function InAir() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">В ЭФИРЕ!</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="uppercase">
                        Связаться с нами
                    </DialogTitle>
                    <DialogDescription>
                        Мы готовы помочь вам создать нечто удивительное!
                        Пожалуйста, заполните форму ниже, чтобы мы могли
                        связаться с вами.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="companyName" className="text-right">
                            Ваше имя
                        </Label>
                        <Input
                            id="companyName"
                            className="col-span-3"
                            placeholder="Илон Маск"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="contactEmail" className="text-right">
                            Контакты для связи
                        </Label>
                        <Input
                            id="contactEmail"
                            className="col-span-3"
                            placeholder="ginj.help@yandex.ru"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" variant="destructive">
                        Начать стрим!
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
