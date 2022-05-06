import MainLayout from "src/layout/MainLayout";

import Staking from "@/components/pages/learnmore/staking";
import Why from "@/components/pages/learnmore/why";
import Howto from "@/components/pages/learnmore/howto";

function Learnmore(): JSX.Element {
  return (
    <>
      <Staking />
      <Why />
      <Howto />
    </>
  );
}

Learnmore.layoutProps = {
  Layout: MainLayout,
};

export default Learnmore;
