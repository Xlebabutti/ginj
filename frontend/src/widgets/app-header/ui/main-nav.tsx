'use client';

import { gsap } from 'gsap';
import Link from 'next/link';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { SwapText } from '@/features/swap-text';

gsap.registerPlugin(ScrollToPlugin);

export default function MainNav() {
    const scrollToSection = (id: string) => {
        gsap.to(window, { duration: 1, scrollTo: id });
    };
    return (
        <nav className="text- flex flex-col gap-12 text-xl font-light md:flex-row md:items-center">
            <Link href="#services" onClick={() => scrollToSection('#services')}>
                <SwapText>Услуги</SwapText>
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#about"
                onClick={() => scrollToSection('#about')}
            >
                <SwapText>о нас</SwapText>
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#pricing"
                onClick={() => scrollToSection('#pricing')}
            >
                <SwapText>тарифы</SwapText>
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#contact"
                onClick={() => scrollToSection('#contact')}
            >
                <SwapText>контакты</SwapText>
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="/platform"
            >
                <SwapText>Платформа</SwapText>
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#faq"
                onClick={() => scrollToSection('#faq')}
            >
                <SwapText>FAQ</SwapText>
            </Link>
        </nav>
    );
}
