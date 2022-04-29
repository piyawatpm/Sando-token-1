import React from 'react'

const PaymentMethod = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container mb-10">
    <div className="flex flex-col justify-center items-center">
      <div className="min-h-screen bg-black flex justify-center items-center">
        <div className="py-5 px-5 bg-[#171717] rounded-2xl shadow-xl z-20">
          <div className="text-white text-left">
            <div className="flex">
              <img
                src="/images/web/sando-token-logo.png"
                alt="sando logo"
                className="w-12 h-12"
              />
              <div>
                <h1 className="text-4xl font-bold  cursor-poiter ml-2">
                  Buying
                </h1>
                <p className="flex w-80 text-sm mb-8 font-light ml-2">
                  Power by Sando Token
                </p>
              </div>
              <div className="relative justify-center ml-10 mt-5  mb-5">
                <div className="flex justify-center text-xs ml-20">
                  <div className="w-2 h-2 rounded-full bg-[#39db21] mt-1"></div>
                  <p className="ml-1">Network</p>
                </div>
                <div className="relative dropdown inline-block relative">
                  <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-1 rounded-full inline-flex items-center">
                    <svg
                      className="fill-current h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                    <span className="ml-1 mr-2">Ethereum</span>
                    <img
                      src="/images/icons/eth-icon.svg"
                      alt="ethereum-icon"
                      className="w-8"
                    />
                  </button>
                  <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 ml-3">
                    <li className="">
                      <a
                        className="flex rounded bg-gray-200 hover:bg-gray-400 py-2 px-4  block whitespace-no-wrap"
                        href="#"
                      >
                        <span className="mr-2">Ethereum</span>
                        <img
                          src="/images/icons/eth-icon.svg"
                          alt="ethereum-icon"
                          className="flex w-8"
                        />
                      </a>
                    </li>
                    <li className="">
                      <a
                        className="flex rounded bg-gray-200 hover:bg-gray-400 py-2 px-4  block whitespace-no-wrap"
                        href="#"
                      >
                        <span className="mr-2">Ethereum</span>
                        <img
                          src="/images/icons/eth-icon.svg"
                          alt="ethereum-icon"
                          className="flex w-8"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
          </div>
          <h3 className="text-xl text-white font-bold ml-8">Payment</h3>
          <p className="text-white ml-8 font-light">Please select your payment method</p>

          <div className="flex justify-center items-center mt-10">
            <a
              href="/visa"
              className="bg-[#ffffff] hover:bg-[#c4c4c4] text-black text-sm font-bold py-3 px-12 rounded-xl"
            >
              <div className="flex">
                <img src="/images/wallets/visa-logo.svg" className="w-12 mt-2" alt="visa-logo"/>
                <img src="/images/wallets/visa.svg" className="w-20 ml-5 mt-2" alt="visa"/>
              </div>
            </a>
            <a
              href="/paypal"
              className="bg-[#ffffff] hover:bg-[#c4c4c4] text-black text-3xl font-bold py-2 px-10 rounded-xl ml-5"
            >
                <img src="/images/wallets/paypal.svg" className="" alt="paypal"/>

            </a>
          </div>

          <div className="flex justify-center items-center text-left mt-5">
            <a
              href="/metamaskPayment"
              className="bg-[#ffffff] hover:bg-[#c4c4c4] text-black text-sm font-bold py-2 px-14 rounded-xl"
            >
              <div className="flex">
                <img src="/images/wallets/metamask.svg" className="w-10 " alt="metamask"/>
                <h1 className="ml-3">
                  METAMASK <br /> <p className="font-light">Wallet</p>
                </h1>
              </div>
            </a>
            <a
              href="/p2p"
              className="bg-[#ffffff] hover:bg-[#c4c4c4] text-black text-4xl font-bold py-2 px-20 rounded-xl ml-5"
            >
              P2P
            </a>
          </div>


          <div className="text-left mt-20 ml-8">
            <a
              href="/buy"
              className="bg-[#c4c4c4] hover:bg-[#626262] text-black text-lg font-bold py-2 px-10 rounded-full"
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

export default PaymentMethod
