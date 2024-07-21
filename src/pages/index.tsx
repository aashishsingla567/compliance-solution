import Head from "next/head";
import HeroSection from "~/components/landingPage/heroSection";
import PreLogin from "~/components/layout/layouts/PreLogin";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta
          name="description"
          content="Get a comprehensive solution for all your compliance needs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PreLogin>
        <HeroSection />
      </PreLogin>
    </>
  );
}
