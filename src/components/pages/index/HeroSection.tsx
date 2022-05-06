import React from "react";

const HeroSection = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="relative overflow-hidden mx-auto w-full  mb-10 ">
      <div className=" flex-col justify-center items-center">
        <div className="bg-black rounded-xl shadow-md overflow-hidden w-full">
          <div
            className=" overflow-hidden w-full py-5 mb-10  bg-cover bg-center "
            style={{ backgroundImage: `url(${"./images/web/bg.png"})` }}
          >
            <div className="flex  justify-center items-center mx-auto container 2xl:py-40 xl:py-40 lg:py-40 md:py-20">
              <div className="md:shrink-0 px-10">
                <div className=" py-1 tracking-wide text-sm sm:text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl text-white font-semibold">
                  <h6 className="uppercase font-bold mb-5">
                    SANDO Token, The Token for oceansky, sandora and metasando
                  </h6>
                </div>

                <div className="text-white ">
                  <h1 className="uppercase text-transparent textgradient text-4xl  sm:text-4xl 2xl:text-6xl xl:text-6xl lg:text-6xl md:xl:text-6xl font-black mb-5 ">
                    SANDO Growth with <br /> the world
                  </h1>

                  <p className=" font-light text-sm sm:text-sm md:text-xl lg:text-xl xl:text-xl 2xl:text-xl mb-8 lg:w-1/2">
                    The world changes. We change. The future changes.
                  </p>
                </div>

                <div className="sr-only sm:not-sr-only md:not-sr-only lg:not-sr-only  flex tracking-wide text-xl text-white font-semibold mt-8">
                 <div>

                 <button
                    className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-lg font-bold py-2 px-5 rounded-full"
                    onClick={() => setShowModal(true)}
                  >
                    Connect Wallet
                  </button>

                  <button
                    className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-full ml-5"
                    onClick={() => setShowModal(true)}
                  >
                    Buy
                  </button>
                 </div>
                 
                  

                  <div className=" relative -mt-40 right-0">
                    <img src="/images/web/tokens.png" alt="" className="w-full h-60"/>
                  </div>
                </div>

                <div className="my-40 relative sm:hidden md:hidden lg:hidden tracking-wide text-xl text-white font-semibold">
                 <div className="relative">
                 <button
                    className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-lg font-bold py-2 px-7 rounded-full"
                    onClick={() => setShowModal(true)}
                  >
                    Connect Wallet
                  </button>
                  <br />
                  <button
                    className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-20 rounded-full mt-5"
                    onClick={() => setShowModal(true)}
                  >
                    Buy
                  </button>
                 </div>
                  

                  <div className="absolute -mt-20 top-0 right-0 sm:ml-10 md:ml-10 lg:ml-10 ">
                    <img src="/images/web/tokens.png" alt="" className="h-full w-full"/>
                  </div>
                </div>
              </div>

              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}

                      <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-[#171717] py-2 px-10 outline-none focus:outline-none">
                        {/*header*/}

                        <button
                          className="p-1 ml-auto bg-red border-0 text-red float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-gray-500  h-6 w-6 text-3xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                        <div className="flex px-10 py-5">
                          <h3 className="text-xl font-semibold text-white text-center ml-8 ">
                            Connect your wallet
                          </h3>
                        </div>

                        {/*body*/}

                        <div className="flex items-center justify-center mt-5 px-10">
                          <a
                            href="/"
                            className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl"
                          >
                            <div className="flex">
                              <img
                                src="/images/wallets/metamask.svg"
                                className="w-12 "
                                alt="metamask"
                              />
                              <h1 className="ml-3 pt-2">Metamask</h1>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center justify-center mt-5">
                          <a
                            href="/"
                            className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-5 rounded-xl"
                          >
                            <div className="flex">
                              <img
                                src="/images/wallets/walletconnect.png"
                                className="w-12 "
                                alt="wallet-connect"
                              />
                              <h1 className="ml-2 pt-2">WalletConnect</h1>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center justify-center mt-5 px-10">
                          <a
                            href="/"
                            className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-9 rounded-xl"
                          >
                            <div className="flex">
                              <img
                                src="/images/wallet/trust-wallet-icon.svg"
                                className="w-11 "
                                alt="trust wallet icon"
                              />
                              <h1 className="ml-3 pt-2">Trust Wallet</h1>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center justify-center mt-5 mb-5 px-10">
                          <a
                            href="/"
                            className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-12 rounded-xl"
                          >
                            <div className="flex">
                              <img
                                src="/images/wallet/phantom-icon.svg"
                                className="w-12 "
                                alt="phantom icon"
                              />
                              <h1 className="ml-5 pt-2">Phantom</h1>
                            </div>
                          </a>
                        </div>
                        <p className="flex items-center justify-center">
                          What’s a Wallet?
                        </p>
                        <div className="flex items-center justify-center px-10">
                          <a
                            href="/wallet"
                            className="mt-2 mb-5 w-48 inline-block text-center px-6 py-1 bg-[#FF0090] hover:bg-[#cc0274] text-white text-xl  ffont-boldont-bold leading-normal rounded-full shadow-md hover:shadow-lg focus:bg-[#cc0274] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#cc0274] active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="backdrop-blur-lg fixed inset-0 z-40 "></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
