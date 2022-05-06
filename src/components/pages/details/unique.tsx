import React from "react";

const unique = (): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full container mb-10">
        <div className="flex flex-col   justify-center items-center px-10">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center ml-10 px-10">
              <div className="md:shrink-0 w-2/3 mb-10">
                <div className="py-5 ml-20">
                  <h1 className="uppercase text-transparent textgradient text-3xl font-black">
                    What's unique about SANDO?
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    There are many cryptocurrencies and lots of other tokens on
                    market, but there are some things that only SANDO can do.
                    “Uses for SANDO grow every day”
                    <li className="mt-3">
                      Stream SANDO – pay someone or receive funds in real time
                    </li>
                    <li>
                      Staking SANDO - Earn interest SANDO Token on our website
                    </li>
                  </p>
                  <p className="mt-3 font-light text-xl text-white text-justify">
                    SANDO Token is a cryptocurrency. It is an exchange and
                    utility token based on the ERC-20 Standard and also a scarce
                    digital money that it can use on platforms : Oceansky,
                    Sandora and Metasando.
                  </p>
                </div>

                <div className="text-[#0ECF50] py-5 ml-20">
                  <h1 className="uppercase text-2xl font-medium">
                    It's really yours
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    SANDO lets you be your own bank. You can control your own
                    funds with your wallet as proof of ownership – no third
                    parties necessary.
                  </p>
                </div>

                <div className="text-[#0ECF50] py-5 ml-20">
                  <h1 className="uppercase text-2xl font-medium">
                    Secured by cryptography
                  </h1>

                  <p className=" font-light text-xl text-white text-justify">
                    Internet money may be new but it's secured by proven
                    cryptography. This protects your wallet, your SANDO, and
                    your transactions.
                  </p>
                </div>

                <div className="text-[#0ECF50] py-5 ml-20">
                  <h1 className="uppercase text-2xl font-medium">
                    Peer-to-peer payments
                  </h1>

                  <p className=" font-light text-xl text-white text-justify">
                    You can send your SANDO without any intermediary service
                    like a bank. It's like handing cash over in-person, but you
                    can do it securely with anyone, anywhere, anytime.{" "}
                  </p>
                </div>
                <div className="text-[#0ECF50] py-5 ml-20">
                  <h1 className="uppercase text-2xl font-medium">
                    No centralized control
                  </h1>

                  <p className=" font-light text-xl text-white text-justify">
                    SANDO is decentralized and global. There's no company or
                    bank that can decide to print more SANDO, or change the
                    terms of use.{" "}
                  </p>
                </div>
                <div className="text-[#0ECF50] py-5 ml-20">
                  <h1 className="uppercase text-2xl font-medium">
                    Open to anyone
                  </h1>

                  <p className=" font-light text-xl text-white text-justify">
                    You only need an internet connection and a wallet to accept
                    SANDO. You don't need access to a bank account to accept
                    payments.{" "}
                  </p>
                </div>
                <div className="text-[#0ECF50] py-5 ml-20 mb-10">
                  <h1 className="uppercase text-2xl font-medium">
                    Available in flexible amounts
                  </h1>

                  <p className=" font-light text-xl text-white text-justify">
                    You can buy SANDO min $50 at a time{" "}
                  </p>
                </div>
                <a
                  className="bg-[#41FA00] hover:bg-[#0ECF50] text-black text-lg font-bold py-2 px-10 rounded-full mt-10 mb-10 ml-20"
                  href="/"
                >
                  Back to homepage
                </a>
              </div>

              <div className="md:shrink-0 mb-20 px-5 pb-20">
                <div className="flex tracking-wide w-full md:w-full mb-20">
                  <img
                    src="/images/details/tree.svg"
                    alt=" how to staking image"
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
export default unique;
