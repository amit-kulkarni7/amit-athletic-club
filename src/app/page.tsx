import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ClubIntroSection } from "@/components/sections/ClubIntroSection";
import { CoachingSection } from "@/components/sections/CoachingSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ClubIntroSection />
        <ProgramsSection />
        <WhyUsSection />
        <MembershipSection />
        <CoachingSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
