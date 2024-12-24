'use client';

import { gsap } from 'gsap';
import Link from 'next/link';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function MainNav() {
    const scrollToSection = (id: string) => {
        gsap.to(window, { duration: 1, scrollTo: id });
    };
    return (
        <nav className="text- flex flex-col gap-12 text-xl font-light md:flex-row md:items-center">
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#services"
                onClick={() => scrollToSection('#services')}
            >
                услуги
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#about"
                onClick={() => scrollToSection('#about')}
            >
                о нас
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#pricing"
                onClick={() => scrollToSection('#pricing')}
            >
                тарифы
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#contact"
                onClick={() => scrollToSection('#contact')}
            >
                контакты
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="#faq"
                onClick={() => scrollToSection('#faq')}
            >
                FAQ
            </Link>
        </nav>
    );
}
