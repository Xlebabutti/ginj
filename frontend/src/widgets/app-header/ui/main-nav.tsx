import Link from 'next/link';

export default function MainNav() {
    return (
        <nav className="text- flex flex-col gap-12 text-xl font-light md:flex-row md:items-center">
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="/about"
            >
                услуги
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="/about"
            >
                о нас
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="/pricing"
            >
                тарифы
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="/contact"
            >
                контакты
            </Link>
            <Link
                className="text-white hover:underline hover:decoration-white/75 hover:decoration-[2px] hover:underline-offset-8"
                href="/faq"
            >
                FAQ
            </Link>
        </nav>
    );
}
