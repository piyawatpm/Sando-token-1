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
                  Gas Fee Marketplace
                </h1>

                <p className=" ml-10 font-light text-xl text-white">
                  While we're proud to be the first and largest NFT <br />
                  marketplace, we're even prouder to be the first to <br />
                  provide cross-blockchain support, starting with a <br />
                  gas-free marketplace on the Polygon blockchain.
                </p>
                <p className="ml-10 font-light text-xl text-white mt-10">
                That's right! Buyers no longer have to pay blockchain <br /> fees when making trades on OpenSea, and creators <br /> can fully earn their way into crypto for the first time. 
                </p>
              </div>

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
            </div>

            <div className="md:shrink-0 px-5 ml-10 mt-20">
              {/*
            <div className="flex tracking-wide w-full  md:w-full">
                <img
                  src="/images/sandora-banner.gif"
                  alt=" token image"
                  className=""
                />
                
              </div>

            */}

              <div className="flex tracking-wide w-full animate-bounce mt-20 md:w-full">
                <img
                  src="/images/web/token1.png"
                  alt=" token image"
                  className="p-2 w-1/4 mt-5"
                />
                <img
                  src="/images/web/token2.png"
                  alt=" token image"
                  className="p-10 w-1/4 sm:w-1/3 md:w-1/3"
                />
              </div>
              <div className="flex tracking-wide ml-16">
                <img
                  src="/images/web/token3.png"
                  alt=" token image"
                  className="relative w-1/4 sm:w-1/3 md:w-1/4 px-5 ml-5 animate-bounce animation-delay-400"
                />
              </div>
              <div className="flex tracking-wide ml-2">
                <img
                  src="/images/web/token4.png"
                  alt=" token image"
                  className="w-1/3 md:w-1/2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gasfee;
