import Layout from './ui/layout';
import MainNav from './ui/main-nav';
import Logo from './ui/logo';
import { InAir } from '@/features/in-air';

export function AppHeader() {
    return (
        <>
            <Layout logo={<Logo />} nav={<MainNav />} actions={<InAir />} />
        </>
    );
}
