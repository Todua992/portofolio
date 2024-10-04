'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

import canvasDots from './heroCanvas.js';
canvasDots();

const words = [
    {
        text: 'Hey,'
    },
    {
        text: ' My name is'
    },
    {
        text: 'Luka Gotsiridze',
        className: 'text-red-500 dark:text-red-500'
    }
];

const words1 = [
    {
        text: '\u00A0\u00A0\u00A0\u00A0Software Engineer'
    },
    {
        text: 'Student',
        className: 'text-red-500 dark:text-red-500'
    }
];

export function LandingPage() {
    const [isDelayed, setIsDelayed] = useState<boolean>(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsDelayed(true);
        }, 3500); // 2 seconds delay

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    return (
        <div
            id=""
            className="relative flex h-screen w-full flex-col items-center justify-center"
        >
            <div className="canvas absolute inset-0">
                <canvas className="canvas-2 w-full h-full"></canvas>
            </div>  
            <div style={{ display: 'none' }}>
<Image 
  src="/images/portofolio.png" 
  alt="Preview"
  width={500}  // Set appropriate width
  height={300} // Set appropriate height
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optional, use for responsive sizing
/>
</div>            <div className="relative z-10 text-center">
                <TypewriterEffectSmooth words={words} />
                {isDelayed && <TypewriterEffectSmooth words={words1} />}
                <div className="relative z-10 text-center flex-col space-y-4 md:flex-row md:space-x-4">
                    <Link href="https://drive.google.com/file/d/1oG1p4-PWppW2A8y9oNT03f0P1qaf-Ogv/view?usp=sharing" target="_blank">
                        <Button>View CV</Button>
                    </Link>
                    <Link href="#contact-me">
                        <Button variant="secondary">Contact Me</Button>
                    </Link>
                </div>
            </div>
        </div>
    );

}      
