import React from "react";

const staking = (): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full container mb-10">
        <div className="flex flex-col   justify-center items-center ml-10">
          <div className="relative  bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center ml-20">
              <div className="md:shrink-0 ml-20 w-2/3">
                <div className="text-[#FF0090] py-10 ml-10">
                  <div className="ml-10 mt-5">
                    <h1 className="font-extrabold text-4xl text-transparent textgradient  mb-5">
                      HOW TO STAKE YOUR SANDO ?
                    </h1>
                    <p className=" font-medium text-2xl">
                      Earn rewards while securing SANDO
                    </p>
                    <p className="font-light text-xl text-white mt-2 text-justify">
                      Staking is a public good for the SANDO ecosystem. Any
                      user with any amount of SANDO can help secure the
                     network and earn rewards in the process.
                    </p>
                  </div>
                </div>

                <div className=" py-5 ml-20">
                  <h1 className="uppercase text-transparent textgradient text-3xl font-black">
                    SANDO Staking
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    <li>
                      Stake and earn rewards with any amount of SANDO by joining
                      forces with others
                    </li>
                    <li>
                      Skip the hard part and entrust validator operation to a
                      third-party
                    </li>
                    <li>Hold liquidity SANDO tokens in your own wallet</li>
                  </p>
                </div>

                <div className="py-5 ml-20">
                  <h1 className="text-transparent textgradient text-3xl font-black">
                    What is Staking?
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    Staking is the act of locking up SANDO Token to give you the
                    right to participate in block proposals on the network.
                    Anyone who holds even a small amount of SANDO Token can
                    consider staking.
                  </p>
                </div>

                <div className="text-[#0ECF50] py-5 ml-20">
                  <h1 className="text-2xl font-medium">
                    What is Liquidity?
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    Liquidity refers to the efficiency or ease with which an
                    asset or security can be converted into ready cash without
                    affecting its market price. The most liquid asset of all is
                    cash itself.
                  </p>

                  <p className=" font-light text-xl text-white text-justify mt-5">
                    Liquidity refers to the ease with which an asset or
                    security, can be converted into ready cash without affecting
                    its market price.
                    <li>
                      Cash is the most liquid of assets, while tangible items
                      are less liquid. The two main types of liquidity include
                      market liquidity and accounting liquidity.
                    </li>
                    <li>
                      Current, quick and cash ratios are most commonly used to
                      measure liquidity.
                    </li>
                  </p>
                </div>

                <div className="text-[#0ECF50] py-5 ml-20">
                  <h1 className="text-2xl font-medium">
                    What is Market Price?
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    The market price is the current price at which an asset or
                    service can be bought or sold. The market price of an asset
                    or service is determined by the forces of supply and demand.
                    The price at which quantity supplied equals quantity
                    demanded is the market price.
                  </p>
                </div>
              </div>

              <div className="md:shrink-0 mb-20">
                <div className="flex float-right w-full md:w-full mb-20 ml-10">
                  <img
                    src="/images/learnmore/staking.svg"
                    alt=" staking image"
                    className=" w-3/5 mb-20"
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
export default staking;
