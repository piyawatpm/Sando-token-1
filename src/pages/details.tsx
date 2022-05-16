import MainLayout from "src/layout/MainLayout";

import Address from "@/components/pages/details/address";
import What from "@/components/pages/details/what";
import Howto from "@/components/pages/details/howto"
import Unique from "@/components/pages/details/unique";
function Details(): JSX.Element {
  return (
    <>
      <div
        className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container mt-20"
        style={{ backgroundImage: `url(${"./images/web/bg-wallet.png"})` }}
      >
        <Address />
        <What />
        <Howto/>
        <Unique />
      </div>
    </>
  );
}

Details.layoutProps = {
  Layout: MainLayout,
};

export default Details;
