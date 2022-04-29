import React from "react";

const why = (): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full container mb-10">
        <div className="flex flex-col   justify-center items-center ml-10">
          <div className="relative  bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center ml-20 px-10">
              <div className="md:shrink-0 w-2/3">
                <div className="text-[#FF0090] py-5">
                  <h1 className="uppercase text-3xl font-black mb-10 mt-10 ">
                    Why Stake your SANDO?
                  </h1>

                  <p className=" font-light text-xl text-white text-justify">
                    SANDO staking comes with more responsibility, but provides
                    you with maximum control over your funds and staking setup.
                  </p>
                </div>

                <div className="text-[#0ECF50]  py-5">
                  <h1 className="uppercase text-2xl font-medium">Earn rewards </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    Rewards are given for actions that help the network reach
                    consensus. You'll get rewards for running software that
                    properly batches transactions into new blocks and checks the
                    work of other validators because that's what keeps the chain
                    running securely.
                  </p>
                </div>

                <div className="text-[#0ECF50]  py-5">
                  <h1 className="uppercase text-2xl font-medium">Better security </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    The network gets stronger against attacks as more SANDO is
                    staked, as it then requires more SANDO to control a majority
                    of the network. To become a threat, you would need to hold
                    the majority of validators, which means you'd need to
                    control the majority of SANDO in the system–that's a lot!
                  </p>
                </div>

                <div className="text-[#0ECF50]  py-5">
                  <h1 className="uppercase text-2xl font-medium">More sustainable </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    Stakers don't need energy-intensive computers to participate
                    in a proof-of-stake system–just a home computer/laptop or
                    smartphone. This will make SANDO better for the environment.
                  </p>
                </div>
              </div>

              <div className="md:shrink-0 mb-20">
                <div className="flex tracking-wide w-full md:w-full mb-20">
                  <img
                    src="/images/learnmore/why-staking.svg"
                    alt=" why staking image"
                    className="w-2/3 mb-20 ml-20"
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
export default why;
