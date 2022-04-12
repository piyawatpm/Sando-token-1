import React from "react";

const Gasfee = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container mb-10">
      <div className="flex flex-col   justify-center items-center px-10">
        <div className="relative  bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
          <div className="md:flex justify-center items-center ml-20">
            <div className="md:shrink-0 ml-20 w-3/4">
              <div className="text-[#FF0090] py-10 ml-20">
                <h1 className="uppercase text-5xl font-black px-20 ml-20 mb-10 mt-10 ">
                  Gas Fees Token
                </h1>
                <div className="ml-20">
                  <p className="font-extrabold text-xl text-[#FF0090] ml-20">
                    Before you purchase SANDO, please understand gas fees
                  </p>
                  <p className="font-light text-xl text-white mt-5 ml-20 text-justify break-words">
                    If you plan to swap or transfer your SANDO, be sure to
                    purchase enough Ethereum tokens to cover gas fees. This is
                    in addition to the cost of purchasing SANDO tokens.
                    <br />
                    (MetaMask does not profit from gas fees)
                  </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5 ml-20">
                <div className="ml-20">
                  <h1 className="uppercase text-3xl font-black mb-10 mt-10 ml-20">
                    What are gas fees?
                  </h1>

                  <p className="font-light text-xl text-white ml-20 text-justify">
                    Gas powers transactions on the Ethereum network.
                    <br /> It’s a fee paid in ETH to the crypto miners who
                    process your transactions.
                  </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5 ml-20">
                <div className="ml-20">
                  <h1 className="uppercase text-3xl font-black ml-20 mb-10 mt-10 ">
                    What is a Gwei?
                  </h1>

                  <p className="font-light text-xl text-white tracking-wide ml-20 text-justify">
                    Gwei is a term in the cryptocurrency community for a very
                    small amount of Ethereum currency and is used to pay fees on
                    transactions on the Ethereum network. The Ethereum token is
                    called Ether and is denoted by ETH. One Gwei is the same as
                    0.000000001 ETH. For example, a transaction of 0.000000020
                    ETH is equal to 20 Gwei.
                  </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5 ml-20">
                <div className="ml-20">
                  <h1 className="uppercase text-3xl font-black ml-20 mb-10 mt-10 ">
                    How Gwei Works?
                  </h1>

                  <p className=" ml-20 font-light text-xl text-white text-justify">
                    Gwei is most commonly used when discussing Ethereum gas. You
                    can choose to pay a higher Gwei for a faster transaction or
                    less Gwei for a slower transaction.
                  </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5  mb-20 ml-20">
                <div className="ml-20">
                  <h1 className="uppercase text-3xl font-black ml-20 mb-10 mt-10 ">
                    How much do I need?
                  </h1>

                  <p className=" font-light text-xl text-white ml-20 text-justify">
                    Gas fees fluctuate based on network traffic and type of
                    transaction. A complex transaction like “swapping” may cost
                    5-10x more than a “send” transaction. An estimate of gas
                    fees are given while making a transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:shrink-0">
              <div className="flex tracking-wide w-full  md:w-full">
                <img
                  src="/images/gasfees/gasfee.svg"
                  alt=" gasfee image"
                  className="w-3/5 mb-20"
                />
              </div>
              <div className="tracking-wide w-full md:w-full ml-20">
                <img
                  src="/images/gasfees/gasfee-1.svg"
                  alt=" gasfee image"
                  className="w-80 mt-20 ml-10 px-10"
                />
                <div className="flex ml-20 py-10 px-20">
                  <img
                    src="/images/gasfees/gasfee-1.svg"
                    alt=" gasfee image"
                    className="w-80 mt-10 ml-10 px-20 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gasfee;
