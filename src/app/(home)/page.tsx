// src/pages/page.tsx
import { ContactMeForm } from '@/components/page-ui/ContactMe';
import { ExperienceSection } from '@/components/page-ui/ExperienceSection';
import { LandingPage } from '@/components/page-ui/LandingPage';
import { ProjectsSection } from '@/components/page-ui/ProjectsSection';
import { SkillsSection } from '@/components/page-ui/SkillsSection';
import { AboutMeSection } from '@/components/page-ui/AboutMeSection';

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
