import HeroSection from "~/components/landingPage/heroSection";
import LinkedinReviews from "~/components/landingPage/linkedin";
import PreLogin from "~/components/layout/layouts/PreLogin";
// import Link from "next/link";

export default function Home() {
  return (
    <PreLogin>
      <HeroSection />
      <LinkedinReviews />
    </PreLogin>
  );
}
