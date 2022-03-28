import React from 'react'

const Metamask = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">
      <div className="flex flex-col justify-center items-center">
        <div className="min-h-screen bg-black flex justify-center items-center">
          <div className="py-20 px-20 bg-[#171717] rounded-2xl shadow-xl z-20">
            <div className="flex">
              <div className="flex">
                <img
                  src="/images/web/sando-token-logo.png"
                  alt="sando logo"
                  className="w-12 h-12"
                />
                <h1 className="text-3xl font-bold mt-2 cursor-poiter ml-2 text-white">
                  Buying
                </h1>
              </div>
            </div>
            <div className="relative">
              <p className=" w-80 text-sm font-semibold text-white tracking-wide cursor-pointer">
                Power by Sando Token
              </p>
            </div>

            <div className="flex items-end justify-between float-right">
              <div className="relative justify-center ml-10 px-10 mb-5">
                <div className="flex justify-center text-xs ml-20">
                  <div className="w-2 h-2 rounded-full bg-[#39db21]"></div>
                  <p className="ml-1">Network</p>
                </div>
                <div className="relative dropdown inline-block relative">
                  <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-4 rounded-full inline-flex items-center">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                    </svg>
                    <span className="ml-2 mr-2">Ethereum</span>
                    <img
                      src="/images/ico-eth.png"
                      alt="ethereum-icon"
                      className="w-8"
                    />
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 ml-3">
                    <li className="">
                      <a
                        className="flex rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4  block whitespace-no-wrap"
                        href="#"
                      >
                        <span className="ml-2 mr-2">Ethereum</span>
                        <img
                          src="/images/ico-eth.png"
                          alt="ethereum-icon"
                          className="flex w-8"
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="flex rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4  block whitespace-no-wrap"
                        href="#"
                      >
                        <span className="ml-2 mr-2">Ethereum</span>
                        <img
                          src="/images/ico-eth.png"
                          alt="ethereum-icon"
                          className="flex w-8"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex py-5 mt-8">
              <p className="mt-2 mr-2 text-white font-semibold">
                Pay with Metamask Wallet
              </p>
              <img
                src="/images/wallets/metamask.png"
                className="w-10 items-center justify-center"
              />
            </div>

            <div className="flex">
              <div className="relative justify-center mt-1">
                <div className="flex  text-lg text-white font-semibold">
                  <p className="ml-1">Select Coin</p>
                </div>
                <div className="relative dropdown inline-block relative mb-2">
                  <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-4 rounded-full inline-flex items-center">
                    <img
                      src="/images/ico-usd.png"
                      alt="usd-icon"
                      className="w-8"
                    />
                    <span className="ml-2 mr-2">USDC</span>
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{' '}
                    </svg>
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 ml-3">
                    <li className="">
                      <a
                        className="flex rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-1  block whitespace-no-wrap"
                        href="#"
                      >
                        <span className="ml-2 mr-2">Ethereum</span>
                        <img
                          src="/images/ico-eth.png"
                          alt="ethereum-icon"
                          className="flex w-8"
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="flex rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-1  block whitespace-no-wrap"
                        href="#"
                      >
                        <span className="ml-2 mr-2">Ethereum</span>
                        <img
                          src="/images/ico-eth.png"
                          alt="ethereum-icon"
                          className="flex w-8"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative space-y-1 mt-20 text-white">
              <p>Total Paid:</p>

              <div className="flex">
                <input
                  type="text"
                  placeholder=""
                  className="block text-sm py-3 px-3 mt-2 rounded-lg w-full border outline-none h-9"
                />
                <img src="/images/ico-usd.png" alt="" className="w-11 ml-2" />
              </div>
              <p>Total Receive:</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder=""
                  className="block text-sm py-3 px-3 mt-2 rounded-lg w-full border outline-none h-9"
                />
                <img
                  src="/images/web/sando-token-logo.png"
                  alt="sando logo"
                  className="w-12 ml-2"
                />
              </div>
              <div className="py-5">
                <p>To address</p>
                <input
                  type="text"
                  placeholder=""
                  className="block text-sm py-3 px-3 mt-2 rounded-lg w-full border outline-none h-9"
                />
              </div>
            </div>
            <div className="float-right mt-20">
              <a
                href="/payment"
                className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-10 rounded-full"
              >
                Confirm
              </a>
            </div>
            <div className="text-left mt-20">
              <a
                href="/payment"
                className="bg-[#c4c4c4] hover:bg-[#626262] text-black text-sm font-bold py-2 px-10 rounded-full"
              >
                Back
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Metamask
