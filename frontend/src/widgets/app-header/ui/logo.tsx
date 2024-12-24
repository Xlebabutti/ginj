'use client';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Link from 'next/link';

gsap.registerPlugin(ScrollToPlugin);

export default function Logo() {
    const scrollToSection = (id: string) => {
        gsap.to(window, { duration: 1, scrollTo: id });
    };
    return (
        <Link className="" href="/" onClick={() => scrollToSection('#home')}>
            GINJ LOGO
        </Link>
    );
}
