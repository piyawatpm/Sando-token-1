import React from "react";

const Gasfee = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container mb-10">
      <div className="flex flex-col   justify-center items-center px-10">
        <div className="relative  bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
          <div className="md:flex justify-center items-center ml-20">
            <div className="md:shrink-0 ml-20">
              <div className="text-[#FF0090] py-10 ml-20">
                <h1 className="uppercase text-5xl font-black px-20 ml-20 mb-10 mt-10 ">
                  Gas Fees Token
                </h1>
                <div className="ml-20">
                <p className="font-extrabold text-xl text-[#FF0090] ml-20">
                  Before you purchase SANDO, please understand gas fees
                </p>
                <p className="font-light text-xl text-white mt-5 ml-20">
                  If you plan to swap or transfer your SANDO, purchase <br />
                  extra to cover gas fees. Gas frees for transactions <br />
                  are separate from the cost of purchasing SANDO. <br />
                  (MetaMask does not profit from gas fees)
                </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5 ml-20">
              <div className="ml-20">
                <h1 className="uppercase text-3xl font-black mb-10 mt-10 ml-20">
                  What are gas fees?
                </h1>
              
                <p className="font-light text-xl text-white ml-20">
                  Gas powers transactions on the Ethereum network. <br /> It’s a
                  fee paid in ETH to the crypto miners who <br /> process your
                  transactions.
                </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5 ml-20">
                <div className="ml-20">
                <h1 className="uppercase text-3xl font-black ml-20 mb-10 mt-10 ">
                  What is a Gwei?
                </h1>

                <p className="font-light text-xl text-white tracking-wide ml-20">
                  Gwei is a term in the cryptocurrency community for a very
                  small
                  <br /> amount of the Ethereum currency and is used to pay fees
                  <br />
                  for transactions on the Ethereum network. The Ethereum token
                  is <br />
                  called Ether and is denoted by ETH. One Gwei is the same as
                  <br />
                  0.000000001 ETH. If a transaction cost is 0.000000020 ETH,<br />
                  you
                  would say that the cost was 20 Gwei.
                </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5 ml-20">
                <div className="ml-20">
                <h1 className="uppercase text-3xl font-black ml-20 mb-10 mt-10 ">
                  How Gwei Works
                </h1>

                <p className=" ml-20 font-light text-xl text-white">
                  Gwei is most commonly used when discussing Ethereum gas, a fee
                  <br />
                  charged for transacting on the Ethereum network. Depending on
                  <br />
                  the transaction, you may be able to pay more Gwei for a faster
                  <br />
                  transaction or less Gwei for a slower transaction.
                </p>
                </div>
              </div>

              <div className="text-[#FF0090] py-5  mb-20 ml-20">
                <div className="ml-20">

                <h1 className="uppercase text-3xl font-black ml-20 mb-10 mt-10 ">
                  How much do I need?
                </h1>

                <p className=" ml-10 font-light text-xl text-white ml-20">
                  Gas fees fluctuate based on network traffic and type of
                  <br />
                  transaction. A complex transaction like
                  <strong>“swapping” </strong> may cost
                  <br /> 5x-10x more than a <strong>“send”</strong> transaction.
                  The best way to estimate
                  <br /> gas fees is to
                  <strong>try the transaction first</strong> and see how much
                  gas <br /> costs.
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
