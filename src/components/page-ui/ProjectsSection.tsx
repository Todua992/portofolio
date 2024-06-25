import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Enablment',
        link: '',
        thumbnail: '/projects/enablment.png'
        
    },
    {
        title: 'LBDP',
        link: 'https://secureid.dk/',
        thumbnail: '/projects/lbdp.mp4'
    },
    {
        title: 'Portfolio',
        link: 'https://secureid.dk/',
        thumbnail: '/projects/portofolio.mp4'
    },

    {
        title: 'VR vs PC',
        link: 'https://secureid.dk/',
        thumbnail: '/projects/vrvspc.png'
    },
    {
        title: 'CEO & CO-founder of SecureID ',
        link: 'https://secureid.dk/',
        thumbnail: '/projects/secureid.mp4'
    },
    {
        title: 'Programming Language Numatix',
        link: 'https://secureid.dk/',
        thumbnail: '/projects/numatix.png'
    }
];
