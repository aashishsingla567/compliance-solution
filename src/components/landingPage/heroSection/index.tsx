import MaxWidthContainer from "~/components/MaxWidthContainer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const HeroSection = () => {
  return (
    <MaxWidthContainer className="flex h-screen items-center justify-center">
      <LeftSide />
      <RightSide />
    </MaxWidthContainer>
  );
};

export default HeroSection;
