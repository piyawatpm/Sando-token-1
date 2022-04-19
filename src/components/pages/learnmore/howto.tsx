import React from "react";

const howto = (): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full container mb-10">
        <div className="flex flex-col   justify-center items-center px-10">
          <div className="relative  bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center ml-10 px-10">
              <div className="md:shrink-0 w-2/3">
                <div className="text-[#FF0090] py-5">
                  <h1 className=" text-3xl font-black">
                    How to Stake your SANDO?{" "}
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    It all depends on how much you are willing to stake. Please
                    select an amount that is best for you.{" "}
                  </p>
                </div>

                <div className="text-[#0ECF50] py-5">
                  <h1 className=" text-2xl font-black">SANDO Staking </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    SANDO staking on Ethereum is the platinum standard for
                    staking. It provides full participation rewards, improves
                    the decentralization of the network, and never requires
                    trusting anyone else with your funds.{" "}
                  </p>
                </div>

                <div className="text-[#0ECF50] py-5">
                  <h1 className=" text-2xl font-black">Stake SANDO Today ! </h1>

                  <p className=" font-light text-xl text-white text-justify">
                    Staking with a SANDO is as easy as a token swap. No need to
                    worry about hardware setup and node maintenance. This
                    staking allow you to deposit your SANDO which enables node
                    operators to run validators. Rewards are then distributed to
                    contributors minus a fee for node operations.
                  </p>
                </div>
              </div>

              <div className="md:shrink-0 mb-20">
                <div className="flex tracking-wide w-full md:w-full mb-20">
                  <img
                    src="/images/learnmore/how-to-staking.svg"
                    alt=" how to staking image"
                    className="w-2/3 mb-20 ml-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default howto;
