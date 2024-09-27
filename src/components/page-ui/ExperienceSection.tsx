'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';

import { TracingBeam } from '@/components/ui/tracing-beams';

export function ExperienceSection() {
    return (
        <>
            <h1 id="experience" className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                 Experience
            </h1>
            <TracingBeam className="px-6">
                <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
                    {experience.map((item, index) => (
                        <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
                            <h2 className={twMerge('text-xl text-black dark:text-white')}>{item.title}</h2>
                            <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">{item.badge}</span>
                            <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">{item.description}</div>
                        </div>
                    ))}
                </div>
            </TracingBeam>
        </>
    );
}

const experience = [
    {
        title: 'Self Driving Car',
        description: (
            <ul className="list-disc">
                <li>Developed a fully self-driving car simulation using Unity and C#</li>
                <li>
                 Utilized an unconventional approach to visualize the learning process in Unity, highlighting the project&#39;s innovative nature. This experience demonstrated the importance of persistence and creative problem-solving.
                </li>
            </ul>
        ),
        badge: 'Computer Science 2022'
    },
    {
        title: 'Numatix: Programming Language and Compiler Development',
        description: (
            <ul className="list-disc">
                <li>Created Numatix, a high-level programming language designed for numerical computations in web applications. Used the dvantage of WebAssembly to achieve significant performance gains over traditional JavaScript.</li>
                <li>Utilized OCaml, OCamllex, and Menhir to efficiently develop the Numatix compiler.</li>
            </ul>
        ),
        badge: 'AAU University - Jun 2024'
    },
    {
        title: 'Web-Based Time-Tracking Tool for Enablment',
        description: (
            <ul className="list-disc">
                <li>Designed and developed a web-based time-tracking tool for Enablment, a consulting company specializing in software solutions.</li>
                <li>Enhanced project transparency, efficiency, and quality through effective time monitoring and customized, descriptive invoice generation.</li>
                <li>Utilized skills in Microsoft Azure, Spring Framework, UIX, Spring Boot, OOAD, Java, UML, React.js, JavaScript, UX, and CSS.</li>
            </ul>
        ),
        badge: 'AAU University - Dec 2023'
    },

];
