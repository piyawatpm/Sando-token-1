import { NextSeo } from "next-seo";
import MainLayout from "src/layout/MainLayout";

import Distribution from "@/components/pages/index/Distribution";
import HeroSection from "@/components/pages/index/HeroSection";
import Partners from "@/components/pages/index/Partners";
import Roadmap from "@/components/pages/index/Roadmap";
import Tokenomics from "@/components/pages/index/Tokenomics";
import Token from "@/components/pages/index/Token";
import Howto from "@/components/pages/index/howto";
import Businessplan from "@/components/pages/index/Businessplan";
function Home(): JSX.Element {
  return (
    <>
      <NextSeo title="Token - Sando.io" />

      <HeroSection />
      <Partners />
      <Token />
      <Howto />
      <Tokenomics />
      <Roadmap />
      <Distribution />
      <Businessplan />
    </>
  );
}

Home.layoutProps = {
  Layout: MainLayout,
};

export default Home;
