'use client';

import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { particlesOptions } from './particles-options';

import { useCallback } from 'react';

const ParticlesBackground = ({ children }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesOptions}
            />
            {children}
        </>
    );
};

export default ParticlesBackground;
