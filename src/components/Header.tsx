import React, { useState, useEffect, useRef } from "react";
import SideBar from "./Sidebar";

function Header(): JSX.Element {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 navbar white bg-cover bg-center bg-no-repeat bg-[#0f0f0f] ">
      <div className="relative mx-auto container">
        <nav className="flex justify-between text-white">
          <div className="flex px-5 py-3 xl:px-12 w-full items-center md:w-screen sm:w-screen lg:w-screen">
            <a className="flex  font-heading" href="/">
              <img
                src="/images/sando-logo-text.svg"
                alt="sando logo image"
                className="w-11/12"
              />
            </a>

            {/*  Search component
            <div className="flex ml-20">
              <input
                className=" placeholder:italic placeholder:text-slate-400 placeholder:pl-3 block bg-white w-64  rounded-full py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm "
                placeholder="Search item here..."
                type="text"
                name="item"
              />
            </div>

             */}
            <ul className="sr-only xl:not-sr-only 2xl:not-sr-only hidden md:flex  mx-auto font-bold font-heading space-x-5">
              <li>
                <a className="hover:text-gray-200" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200" href="/sale">
                  Tokensale
                </a>
              </li>

              <li>
                <a className="hover:text-gray-200" href="/staking">
                  Staking
                </a>
              </li>

              <li>
                <a className="hover:text-gray-200" href="/buy">
                  Buy
                </a>
              </li>
              <li>
                <a className="hover:text-gray-200 mr-5" href="/whitepaper">
                  Whitepaper
                </a>
              </li>
            </ul>

            <div className=" dropdown inline-block relative z-10">
              <button className=" text-white font-semibold py-1 px-1  inline-flex items-center">
                <span className="mr-1">English</span>
                <svg
                  className="fill-current h-5 w-5 mr-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-white pt-1 font-bold bg-zinc-800 rounded-lg mt-1">
                <li className="">
                  <a
                    className="flex rounded hover:text-gray-300 py-2 px-4  block whitespace-no-wrap ml-2"
                    href="#"
                  >
                    <span className="mr-2">Thai</span>
                  </a>
                </li>
                <li className="">
                  <a
                    className="flex rounded  hover:text-gray-300 py-2 px-4  block whitespace-no-wrap ml-2"
                    href="#"
                  >
                    <span className="mr-2">Turkish</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row mt-5 md:mt-0 items-end md:items-center md:justify-end">
              {/*
              <button
                type="submit"
                className="block px-4 text-sm text-white font-medium rounded-md py-2 disabled:bg-none btn-connect"
              >
                Connect Wallet
              </button>
               */}
              <div className="flex sr-only  xl:not-sr-only 2xl:not-sr-only ">
                <div className="relative top-2.5 mb-5 sm:mb-0 sm:mr-5 group text-white font-bold ">
                  <a href="/login">Login</a> | <a href="/register">Register</a>
                </div>
                <button
                  // href="/"
                  className=" bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-3 px-5 rounded-full"
                  type="submit"
                  onClick={() => setShowModal(true)}
                >
                  Connect Wallet
                </button>
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
                            className="mt-2 mb-5 w-48 inline-block text-center px-6 py-1 bg-[#FF0090] hover:bg-[#cc0274] text-white text-xl font-bold font-bold leading-normal rounded-full shadow-md hover:shadow-lg focus:bg-[#cc0274] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#cc0274] active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Learn More
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
          <div className="float-right xl:hidden">
            <SideBar className=" text-white xl:hidden" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
