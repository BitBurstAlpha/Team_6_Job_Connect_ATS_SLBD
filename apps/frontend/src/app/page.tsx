import { Header } from '@/components/shared/header';
import { HeroSection } from '@/components/hero_section/HeroSection';

export default function Home() {
    return (
        <main>
            <div className="max-w-[1920px] mx-auto">
                <Header />

                <HeroSection />
            </div>
        </main>
    );
}
