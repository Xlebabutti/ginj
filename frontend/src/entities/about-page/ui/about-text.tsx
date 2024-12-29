// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import Lenis from '@studio-freight/lenis';

const AboutText = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const text = new SplitType('.target');
        const chars = text.chars;

        const lenis = new Lenis({
            lerp: 0.2,
            smooth: true,
        });

        lenis.on('scroll', () => ScrollTrigger.update());

        const scrollFn = (time) => {
            lenis.raf(time);
            requestAnimationFrame(scrollFn);
        };

        requestAnimationFrame(scrollFn);

        chars.forEach((char) =>
            gsap.set(char.parentNode, { perspective: 1000 }),
        );

        gsap.fromTo(
            chars,
            {
                willChange: 'opacity, transform',
                opacity: 0.2,
                z: -800,
            },
            {
                ease: 'back.out(1.2)',
                opacity: 1,
                z: 0,
                stagger: 0.04,
                scrollTrigger: {
                    trigger: '.about-text',
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            },
        );

        return () => {
            text.revert();
            ScrollTrigger.kill();
        };
    }, []);

    return (
        <div>
            <div className="relative flex w-screen flex-col px-8 py-6">
                <h2 className="about-text grid gap-8 text-center text-[8vw] leading-[0.8]">
                    <span className="target uppercase">Организация</span>
                    <span className="target uppercase">трансляций</span>
                    <span className="target mb-[100px] uppercase">
                        на высшем уровне
                    </span>
                </h2>
            </div>
            <div className="relative mb-[350px] flex w-screen flex-col px-8 py-6">
                <p className="m-[auto] my-6 max-w-[660px] text-[1.3rem] leading-normal">
                    Наша компания специализируется на организации и проведении
                    онлайн-трансляций, обеспечивая высокое качество и надежность
                    на каждом этапе. Мы понимаем, что каждая трансляция — это
                    уникальное событие, и мы готовы предложить индивидуальный
                    подход к каждому клиенту.
                </p>
            </div>
        </div>
    );
};

export default AboutText;
