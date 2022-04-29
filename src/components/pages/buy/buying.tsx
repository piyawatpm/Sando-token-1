import React from "react";

const Buying = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container  mb-20">
      <div className="flex flex-col justify-center items-center">
        <div className="min-h-screen bg-black flex justify-center items-center">
          <div className="py-5 px-5 bg-[#171717] rounded-3xl shadow-xl z-20">
            <div className="text-white text-left">
              <div className="flex">
                <img
                  src="/images/web/sando-token-logo.png"
                  alt="sando logo"
                  className="w-12 h-12"
                />
<<<<<<< HEAD
                <h1 className="text-3xl font-bold mt-2 cursor-poiter ml-2">
                  Buy
                </h1>

                <div className="relative justify-center ml-10 mt-5 px-10 mb-5">

                  <div className="flex justify-center text-xs ml-20">
                    <div className="w-2 h-2 rounded-full bg-[#39db21] mt-1"></div>
                    <p className="ml-1">Network</p>
                  </div>

                  <div className=" dropdown inline-block relative">
                    <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-4 rounded-full inline-flex items-center">
                  <div className="relative dropdown inline-block relative">
                    <button className="bg-gray-300 text-gray-700 font-semibold py-1 px-1 rounded-full inline-flex items-center">

                      <svg
                        className="fill-current h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
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
<<<<<<< HEAD
                          <span className="ml-2 mr-2">Ethereum</span>
                          <img
                            src="/images/ico-eth.png"
=======
                          <span className="mr-2">Ethereum</span>
                          <img
                            src="/images/icons/eth-icon.svg"
>>>>>>> 007ae69358f959ed6a091ae2e58065870d691af4
                            alt="ethereum-icon"
                            className="flex w-8"
                          />
                        </a>
                      </li>
                      <li className="">
                        <a
<<<<<<< HEAD
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
=======
                          className="flex rounded bg-gray-200 hover:bg-gray-400 py-2 px-4  block whitespace-no-wrap"
                          href="#"
                        >
                          <span className="mr-2">Ethereum</span>
                          <img
                            src="/images/icons/eth-icon.svg"
>>>>>>> 007ae69358f959ed6a091ae2e58065870d691af4
                            alt="ethereum-icon"
                            className="flex w-8"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <p className="flex w-80 text-sm mb-8 font-semibold tracking-wide cursor-pointer">
                Powered by Sando Token
              </p>
=======
>>>>>>> 007ae69358f959ed6a091ae2e58065870d691af4
            </div>

            <div className="flex float-right mt-10 mr-12">
              <img src="/images/ico-usd.png" alt="usd-icon" className="w-11" />

              <img
                src="/images/icons/eth-icon.svg"
                alt="ethereum-icon"
                className="w-11 ml-2"
              />
            </div>

            <div className="relative space-y-1 mt-20 py-5 text-white">
              <div>
                <p className="float-right mr-14">USDC</p>
                <p>Total Paid:</p>

                <div className="flex">
                  <input
                    type="text"
                    placeholder=""
                    className="block text-sm py-3 px-3 mt-1 rounded-full w-full border outline-none h-9"
                  />
                  <img
                    src="/images/icons/usdc-icon.svg"
                    alt="usdc icon"
                    className="w-11 ml-2"
                  />
                </div>
              </div>
              <div>
                <img
                  src="/images/icons/transfer-icon.svg"
                  alt="sando logo"
                  className="w-5 float-right mr-16"
                />
                <p className="mt-5">Total Receive:</p>
                <div className="flex">
                  <input
                    type="text"
                    placeholder=""
                    className="block text-sm py-3 px-3 mt-1 rounded-full w-full border outline-none h-9"
                  />
                  <img
                    src="/images/web/sando-token-logo.png"
                    alt="sando logo"
                    className="w-12 ml-2"
                  />
                </div>
              </div>
            </div>
            <div className="text-right mt-5 mb-5">
              <a
                href="/payment"
                className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-10 rounded-full"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buying;
