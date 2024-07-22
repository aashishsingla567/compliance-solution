import MaxWidthContainer from "~/components/MaxWidthContainer";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const HeroSection = () => {
  return (
    <MaxWidthContainer
      as="section"
      className="mt-8 flex h-screen min-h-fit flex-1 flex-col items-center justify-between px-6 py-12 md:flex-row "
    >
      {/* <section className="flex flex-col items-center justify-between px-6 py-12 md:flex-row"></section> */}
      <LeftSide />
      <RightSide />
    </MaxWidthContainer>
  );
};

export default HeroSection;
