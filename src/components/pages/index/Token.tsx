import React from 'react'

const Token = (): JSX.Element => {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="relative overflow-hidden mx-auto w-full container">
      {/*  
    <div className="flex flex-col justify-center items-center">
    <img
          src="/images/web/sando-token-logo.png"
          alt="Sando logo"
          className="w-32 md:w-48 lg:w-60 mt-20"
        />

        <h1 className="block border border-none rounded-full py-4 px-12 text-3xl font-bold text-black bg-amber-400 text-center">
          SANDO Token
        </h1>

        <h1 className="text-xl font-bold text-white text-center  mt-10 mb-20">
          Sando tokens are exchange and utility tokens based on ERC-20 within our
          <br /> ecosystem used for crowdfunding to build our company operations and
          platforms
        </h1>
      </div>
      */}
      <div className="flex flex-col justify-center items-center">
        <div className="min-w-full mx-auto bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2 px-10">
          <div
            className="relative overflow-hidden mx-auto container flex py-5 mb-10 w-full bg-cover bg-center h-100 md:w-1/2 lg:w-full"
            style={{ backgroundImage: `url(${'./images/web/bg-token.png'})` }}
          >
            <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 px-10 py-5">
                <div className="flex py-5 tracking-wide text-xl text-white font-semibold px-10">
                  <h1 className="uppercase text-[#FF0090] text-4xl font-black mt-10  ">
                    SANDO Token
                  </h1>
                </div>

                <h1 className="text-xl font-light text-white mb-10 py-5 px-10 text-justify w-[600px]">
                  Sando tokens are exchange and utility
                  tokens based on the ERC-20 standard use for crowdfunding within our 
                  ecosystem to build our company operations and platforms.
                 
                </h1>
                <a
                  href="/details"
                  className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-md font-bold py-2 px-8 rounded-full ml-10"
                >
                  SANDO Details
                </a>
                <div className="mt-8 mb-20">
                <button
                  
                  className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-md font-bold py-2 px-10 rounded-full ml-10"
                  onClick={() => setShowModal(true)}

                >
                  Add SANDO
                </button>


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
                                src="/images/wallets/metamask.svg"
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
                  <div className="backdrop-blur-lg fixed inset-0 z-40"></div>
                </>
              ) : null}

                </div>
              </div>
   {/* 
              <div className="md:shrink-0 ml-20">
                <div className="flex tracking-wide w-full  md:w-full">
               
                <img
                  src=""
                  alt="Sando logo"
                  className="w-32 md:w-48 lg:w-60"
                />
               
                </div>
              </div>
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Token
