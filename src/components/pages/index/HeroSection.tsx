import React from 'react'

const HeroSection = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false)

  return (

  
    <div className="relative overflow-hidden mx-auto w-full container mb-10"
    
    >
      <div className="flex flex-col   justify-center items-center">
        <div className="relative  bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
          <div
            className="relative overflow-hidden w-full flex py-5 mb-10  bg-cover bg-center md:w-1/2 lg:w-full"
            style={{ backgroundImage: `url(${'./images/web/bg.png'})` }}
          >
            <div className="md:flex justify-center items-center px-10">
              <div className="md:shrink-0 px-10 ml-20">
                <div className="flex py-1 tracking-wide text-sm text-white font-semibold">
                  <h6 className="uppercase text-[#FF0090] font-bold mb-10 ml-10">
                    SANDO Token, The Token for oceansky, sandora and metasando
                  </h6>
                </div>

                <div className="text-white">
                  <h1 className="uppercase text-6xl font-black ml-10 mb-10">
                    SANDO Growth with <br /> the world
                  </h1>

                  <p className=" ml-10 font-light text-xl">
                    The world changes. We change. The future changes.
                  </p>
                </div>

                <div className="flex tracking-wide text-xl text-white font-semibold ml-10 mt-20 mb-20">
                  <button
                    // href="/"
                    className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-lg font-bold py-2 px-5 rounded-full"
                    onClick={() => setShowModal(true)}
                  >
                    Connect Wallet
                  </button>

                  <button
                    // href="/create"

                    className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-full ml-5"
                    onClick={() => setShowModal(true)}
                  >
                    Buy
                  </button>
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
                            href="/metamask"
                            className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-2xl font-bold py-2 px-11 rounded-xl"
                          >
                            <div className="flex">
                              <img
                                src="/images/wallets/metamask.png"
                                className="w-12 "
                                alt="metamask"
                              />
                              <h1 className="ml-3 pt-2">Metamask</h1>
                            </div>
                          </a>
                        </div>
                        <div className="flex items-center justify-center py-5 mb-5">
                          <a
                            href="/metamask"
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
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}

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

</div>




   
  


  )
}

export default HeroSection
