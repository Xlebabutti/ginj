import { Button } from '@/shared/ui/button';
import Layout from './ui/layout';
import MainNav from './ui/main-nav';
import Logo from './ui/logo';

export function AppHeader() {
    return (
        <>
            <Layout
                logo={<Logo />}
                nav={<MainNav />}
                actions={<Button variant="destructive">В ЭФИРЕ!</Button>}
            />
        </>
    );
}
