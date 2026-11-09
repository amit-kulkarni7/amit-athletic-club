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
      <HeroSection />
      <ClubIntroSection />
      <ProgramsSection />
      <WhyUsSection />
      <MembershipSection />
      <CoachingSection />
      <FinalCtaSection />
    </>
  );
}
