import React from "react";

const Gasfee = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container mb-10">
      <div className="flex flex-col   justify-center items-center">
        <div className="relative  bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
          <div className="md:flex justify-center items-center px-10">
            <div className="md:shrink-0 px-10 ml-20">
              <div className="text-[#FF0090] py-10">
                <h1 className="uppercase text-4xl font-black ml-10 mb-10 mt-10 ">
                  Gas Fees Token
                </h1>

                <p className=" ml-10 font-light text-xl text-[#FF0090]">
                  Before you purchase SANDO, please understand gas fees
                </p>
                <p className="ml-10 font-light text-xl text-white mt-10">
                If you plan to swap or transfer your SANDO, purchase <br />
                  extra to cover gas fees. Gas frees for transactions <br />
                  are separate from the cost of purchasing SANDO. <br />
                  (MetaMask does not profit from gas fees)
                </p>
              </div>

              {/*  
              <div className="flex tracking-wide text-xl text-white font-semibold ml-10 mt-10 mb-20">
                <button
                  // href="/"
                  className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-lg font-bold py-2 px-5 rounded-full"
                >
                  SANDO Details
                </button>

                <button
                  // href="/create"

                  className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-full ml-5"
                >
                  Buy Now
                </button>
              </div>

*/}
            </div>

            <div className="md:shrink-0 px-10 ml-10 mt-20">
              <div className="flex tracking-wide w-full  md:w-full">
                <img
                  src="/images/web/gas-fees.png"
                  alt=" token image"
                  className="w-96 ml-10 mr-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-[#FF0090] py-5 px-20">
        <h1 className="uppercase text-4xl font-black ml-10 mb-10 mt-10 ">
          What are gas fees?
        </h1>

        <p className=" ml-10 font-light text-xl text-white">
        Gas powers transactions on the Ethereum network. <br /> It’s a fee
          paid in ETH to the crypto miners who <br /> process your transactions.
        </p>
      </div>

      <div className="text-[#FF0090] py-5 px-20">
        <h1 className="uppercase text-4xl font-black ml-10 mb-10 mt-10 ">
          What is a Gwei?
        </h1>

        <p className=" ml-10 font-light text-xl text-white">
          Gwei is a term in the cryptocurrency community for a very small amount
          of the Ethereum <br /> currency and is used to pay fees for
          transactions on the Ethereum network. The Ethereum token <br /> is
          called Ether and is denoted by ETH. One Gwei is the same as
          0.000000001 ETH.
          <br /> If a transaction cost is 0.000000020 ETH, you would say that
          the cost was 20 Gwei.
        </p>
      </div>

      <div className="text-[#FF0090] py-5 px-20">
        <h1 className="uppercase text-4xl font-black ml-10 mb-10 mt-10 ">
          How Gwei Works
        </h1>

        <p className=" ml-10 font-light text-xl text-white">
          Gwei is most commonly used when discussing Ethereum gas, a fee charged
          for transacting <br />
          on the Ethereum network. Depending on the transaction, you may be able
          to pay more
          <br /> Gwei for a faster transaction or less Gwei for a slower
          transaction.
        </p>
      </div>

      <div className="text-[#FF0090] py-5 px-20 mb-20">
        <h1 className="uppercase text-4xl font-black ml-10 mb-10 mt-10 ">
          How much do I need?
        </h1>

        <p className=" ml-10 font-light text-xl text-white">
          Gas fees fluctuate based on network traffic and type of transaction.{" "}
          <br /> A complex transaction like “swapping” may cost 5x-10x more than
          a “send” transaction.
          <br />
          The best wat to estimate gas fees is to try the transaction first and
          see how much gas costs.
        </p>
      </div>
    </div>
  );
};
export default Gasfee;
