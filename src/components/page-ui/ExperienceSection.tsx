'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { LinkPreview } from "@/components/ui/link-preview";
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
      title: (
        <LinkPreview
        isStatic
        imageSrc='/images/selfdriving.jpg'
          className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
        > 
          Self Driving Car
        </LinkPreview>
      ),
      description: (
        <ul className="list-disc">
          <li>Developed a fully self-driving car simulation using Unity and C#.</li>
          <li>
            Utilized an unconventional approach to visualize the learning process
            in Unity, highlighting the project&#39;s innovative nature. This
            experience demonstrated the importance of persistence and creative
            problem-solving.
          </li>
        </ul>
      ),
      badge: 'Computer Science 2022',
    },
    {
        title: (
            <>
              {/* Numatix as a clickable link */}
              <LinkPreview
                url="https://github.com/SW4-GR1/Numatix"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Numatix
              </LinkPreview>
              
              {/* H2 element for the subtitle */}
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                Programming Language and Compiler Development
              </h2>
            </>
          ),
          description: (
            <ul className="list-disc pl-5">
              <li>Created Numatix, a high-level programming language designed for numerical computations in web applications. Used the advantage of WebAssembly to achieve significant performance gains over traditional JavaScript.</li>
              <li>Utilized OCaml, OCamllex, and Menhir to efficiently develop the Numatix compiler.</li>
            </ul>
          ),
          badge: 'AAU University - Jun 2024'
    },
    {
        title: (
          <>
            {/* Title text with "Enablment" as a LinkPreview at the end */}
            Web-Based Time-Tracking Tool for{' '}
            <LinkPreview
              imageSrc="/images/enablment.png"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Enablment
            </LinkPreview>
          </>
        ),
        description: (
          <ul className="list-disc pl-5">
            <li>
              Designed and developed a web-based time-tracking tool for Enablment, a consulting company specializing in software solutions.
            </li>
            <li>
              Enhanced project transparency, efficiency, and quality through effective time monitoring and customized, descriptive invoice generation.
            </li>
            <li>
              Utilized skills in Microsoft Azure, Spring Framework, UIX, Spring Boot, OOAD, Java, UML, React.js, JavaScript, UX, and CSS.
            </li>
          </ul>
        ),
        badge: 'AAU University - Dec 2023',
      }

];
