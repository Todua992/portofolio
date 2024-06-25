import Link from 'next/link';
import React from 'react';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiC, SiOcaml, SiPostgresql, SiPython, SiSpringboot, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

import { EvervaultCard, Icon } from '@/components/ui/evervault-card';

export function SkillsSection() {
    return (
        <div className="mx-auto max-w-5xl px-8 pb-8">
            <h1 id="skills" className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl">
                Skills
            </h1>
            <div className={'grid grid-cols-1 gap-6  py-10 md:grid-cols-2 lg:grid-cols-3'}>
                {skills.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.link}
                        className="relative mx-auto flex h-[13rem] w-full max-w-full flex-col items-start border border-black/[0.2] p-4 dark:border-white/[0.2]"
                    >
                        <Icon className="absolute -left-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -left-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -right-3 -top-3 size-6 text-black dark:text-white" />
                        <Icon className="absolute -bottom-3 -right-3 size-6 text-black dark:text-white" />

                        <EvervaultCard text={item.title} icon={item.icon} fromColor={item.fromColor} toColor={item.toColor} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

const skills = [{
    title: 'React.js',
    link: 'https://react.dev/',
    icon: <FaReact />,
    fromColor: 'from-blue-500',
    toColor: 'to-blue-500'
},
{
    title: 'Next.js',
    link: 'https://nextjs.org',
    icon: <TbBrandNextjs />,
    fromColor: 'from-pink-500',
    toColor: 'to-violet-500'
},
{
    title: 'C#',
    link: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
    icon: <TbBrandCSharp />,
    fromColor: 'from-violet-500',
    toColor: 'to-blue-500'
},
{
    title: 'Java',
    link: 'https://www.oracle.com/java/',
    icon: <FaJava />,
    fromColor: 'from-blue-500',
    toColor: 'to-orange-500'
},
{
    title: 'Spring Boot',
    link: 'https://spring.io/projects/spring-boot',
    icon: <SiSpringboot />,
    fromColor: 'from-green-500',
    toColor: 'to-green-500'
},
{
    title: 'Ocaml',
    link: 'https://ocaml.org/',
    icon: <SiOcaml />,
    fromColor: 'from-orange-500',
    toColor: 'to-orange-500'
},
{   
    title: 'Objective-C',
    link: 'https://developer.apple.com/documentation/objectivec',
    icon: <SiC />,
    fromColor: 'from-violet-500',
    toColor: 'to-violet-500'
},
{
    title: 'TypeScript',
    link: 'TypeScript',
    icon: <SiTypescript />,
    fromColor: 'from-blue-500',
    toColor: 'to-blue-500'
},
{
    title: 'Python',
    link: 'https://www.python.org/',
    icon: <SiPython />,
    fromColor: 'from-blue-500',
    toColor: 'to-yellow-500'
}

];
