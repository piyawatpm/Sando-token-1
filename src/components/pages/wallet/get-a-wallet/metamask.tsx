import React from "react";

const Metamask = (): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full container">
        <div className="flex flex-col   justify-center items-center ml-10">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 w-2/3">
                <div className="ml-10">
                  <div className="ml-10">
                    <h1 className="uppercase font-extrabold text-4xl text-[#0ECF50] mb-5">
                      GET A WALLET
                    </h1>
                  </div>
                </div>

                <div className=" ml-20">
                  <div className="flex">
                    <h1 className="text-3xl font-black text-transparent textgradient">Metamask </h1>
                    <img
                      src="/images/wallets/metamask.svg"
                      className="w-10 ml-2"
                      alt="metamask"
                    />
                  </div>
                  <p className="mt-2 font-light text-xl text-white text-justify">
                    A crypto wallet & gateway to blockchain appsStart exploring
                    blockchain applications in seconds. Trusted by over 21
                    million users worldwide.
                  </p>
                  <p className="font-medium text-xl text-[#0ECF50] mt-5">
                    Buy, Store, Send and Swap Tokens{" "}
                  </p>
                  <p className="mt-2 font-light text-xl text-white text-justify">
                    Available as a browser extension and as a mobile app,
                    MetaMask equips you with a key vault, secure login, token
                    wallet, and token exchange—everything you need to manage
                    your digital assets.{" "}
                  </p>
                  <button className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-full mt-5 mb-10">
                    Learn more
                  </button>
                </div>
              </div>

              <div className="md:shrink-0 mb-10 mt-5">
                <div className="flex float-right w-full md:w-full ml-10">
                  <img
                    src="/images/wallet/metamask.svg"
                    alt=" metamask image"
                    className=" w-3/5 ml-20 "
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
export default Metamask;
