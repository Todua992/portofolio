'use client';
import { GitHubLogoIcon, InstagramLogoIcon, LinkBreak2Icon, LinkNone2Icon, LinkedInLogoIcon, TwitterLogoIcon, VercelLogoIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

import { ModeToggle } from '@/components/page-ui/ModeToggle';
import { HoveredLink, Menu, MenuItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import { Globe, Globe2, Globe2Icon, GlobeIcon, GlobeLock, Link2Icon, LucideGlobe, LucideGlobe2, Shield, ShieldEllipsisIcon, ShieldIcon } from 'lucide-react';
import { FaGlobe } from 'react-icons/fa';

export function Navbar() {
    return (
        <div className="relative flex w-full items-center justify-center">
            <NavbarComponent className="top-2" />
        </div>
    );
}

function NavbarComponent({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn('fixed top-10 inset-x-0 max-w-2xl mx-auto z-50', className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Navigation">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#landing-page">Landing Page</HoveredLink>
                        <HoveredLink href="#experience">Experience</HoveredLink>
                        <HoveredLink href="#skills">Skills</HoveredLink>
                        <HoveredLink href="#projects">Projects</HoveredLink>
                        <HoveredLink href="#aboutme">About Me</HoveredLink>
                        <HoveredLink href="#contact-me">Contact Me</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Social">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/Todua992" rel="noopener noreferrer" target="_blank">
                            <GitHubLogoIcon className="mr-1" /> Github
                        </HoveredLink>
                        <HoveredLink href="https://www.linkedin.com/in/lukagotsiridze/" rel="noopener noreferrer" target="_blank">
                            <LinkedInLogoIcon className="mr-1" /> Linkedin
                        </HoveredLink>
                        <HoveredLink href="https://www.instagram.com/lukako992/" rel="noopener noreferrer" target="_blank">
                            <InstagramLogoIcon className="mr-1" />
                            Instagram
                        </HoveredLink>
                        <HoveredLink href="https://secureid.dk/" rel="noopener noreferrer" target="_blank">
                            <LinkNone2Icon className="mr-1" /> SecureId
                        </HoveredLink>
                    </div>
                </MenuItem>
                <ModeToggle />
            </Menu>
        </div>
    );
}
