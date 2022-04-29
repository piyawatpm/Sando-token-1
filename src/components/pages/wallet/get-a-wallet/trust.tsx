import React from "react";

const Trust = (): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full container">
        <div className="flex flex-col   justify-center items-center ml-10">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 w-2/3">

                <div className="text-[#FF0090] ml-20 mt-10">
                  <div className="flex">
                    <h1 className="text-3xl font-black">Trust Wallet </h1>{" "}
                    <img
                      src="/images/wallet/trust-wallet-icon.svg"
                      className="w-10 ml-2"
                      alt="metamask"
                    />
                  </div>
                  <p className="mt-2 font-light text-xl text-white text-justify">
                  Trust Wallet is a decentralized multi-coin cryptocurrency wallet. Buy crypto, explore DApps, swap assets and more while keeping control of your keys.
                  </p>
                 
                  <p className="mt-5 font-light text-xl text-white text-justify">
                   <li>
                   A decentralized wallet, you hold the keys to your cryptocurrency wallet
                   </li>
                   <li>
                   A user controlled wallet, only the user has control over their funds
                   </li>
                   <li>
                   Has access to DApps unlike centralized wallets
                   </li>
                   <li>
                   Does not keep any personal information
                   </li>
                   <li>
                   Main goal is making crypto more accessible
                   </li>
                  </p>
                  <button className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-full mt-5 mb-10">
                    Learn more
                  </button>
                </div>
              </div>

              <div className="md:shrink-0 mb-10 mt-5">
                <div className="flex float-right w-full md:w-full ml-10">
                  <img
                    src="/images/wallet/trust-wallet.svg"
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
export default Trust;
