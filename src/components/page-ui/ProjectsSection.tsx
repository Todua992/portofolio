import React from 'react';

import { HeroParallax } from '@/components/ui/hero-paralax';

export function ProjectsSection() {
    return <HeroParallax products={products} />;
}

const products = [
    {
        title: 'Enablment',
        link: '',
        thumbnail: '/images/enablment.png'
        
    },
    {
        title: 'LBDP',
        link: 'https://secureid.dk/',
        thumbnail: '/images/lbdp.mp4'
    },
    {
        title: 'Portfolio',
        link: 'https://secureid.dk/',
        thumbnail: '/images/portofolio.mp4'
    },

    {
        title: 'VR vs PC',
        link: 'https://secureid.dk/',
        thumbnail: '/images/vrvspc.png'
    },
    {
        title: 'CEO & CO-founder of SecureID ',
        link: 'https://secureid.dk/',
        thumbnail: '/images/secureid.mp4'
    },
    {
        title: 'Programming Language Numatix',
        link: 'https://secureid.dk/',
        thumbnail: '/images/numatix.png'
    }
];
