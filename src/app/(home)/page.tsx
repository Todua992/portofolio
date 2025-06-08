'use client';

import dynamic from 'next/dynamic';
import { ContactMeForm } from '@/components/page-ui/ContactMe';
// import { ExperienceSection } from '@/components/page-ui/ExperienceSection'; // Static import removed
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectsSection } from '@/components/page-ui/ProjectsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';
import { AboutMeSection } from '@/components/page-ui/AboutMeSection';

export const runtime = "edge";

// Dynamically import ExperienceSection
const ExperienceSection = dynamic(() =>
    import('@/components/page-ui/ExperienceSection').then(mod => mod.ExperienceSection),
    {
        ssr: false,
        loading: () => <p>Loading experience...</p>
    }
);

export default function Home() {
    return (
        <main>
            <LandingPage />
            <ExperienceSection />
            <SkillsSection />
            <ProjectsSection />
            <AboutMeSection />
            <ContactMeForm />
        </main>
    );
}
