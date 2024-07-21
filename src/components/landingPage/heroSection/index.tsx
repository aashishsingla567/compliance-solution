import MaxWidthContainer from "~/components/MaxWidthContainer";
import LandingSection from "./LandingSection";

const HeroSection = () => {
  return (
    <MaxWidthContainer className="flex h-screen items-center justify-center">
      <LandingSection />
    </MaxWidthContainer>
  );
};

export default HeroSection;
