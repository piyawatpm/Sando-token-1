import React from 'react'

function Header(): JSX.Element {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <header
      className="navbar white bg-cover bg-center bg-no-repeat bg-[#0f0f0f]"
    >
      <div className="relative mx-auto container">
        <nav className="flex justify-between text-white ">
          <div className="flex px-5 py-3 xl:px-12 flex w-full items-center ">
          <a className="flex  font-heading" href="/">
              <img src="/images/sando-logo-text.svg" alt="sando logo image" className="w-11/12"/>
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
            <ul className="hidden md:flex  mx-auto font-bold font-heading space-x-12 ml-2">
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
                <a className="hover:text-gray-200 mr-20" href="/buy">
                  Buy
                </a>
              </li>          
            </ul>

            <div className="flex flex-col md:flex-row mt-5 md:mt-0 items-end md:items-center md:justify-end">
              {/*
              <button
                type="submit"
                className="block px-4 text-sm text-white font-medium rounded-md py-2 disabled:bg-none btn-connect"
              >
                Connect Wallet
              </button>
               */}
                <div className="relative mb-5 md:mb-0 md:mr-10 group text-white">
                <a href="/login">Login</a> | <a href="/register">Register</a>
              </div>
              <button
                    // href="/"
                    className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full"
                    type="submit"
                    onClick={() => setShowModal(true)}
                  >
                    Connect Wallet
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
          <a className="xl:hidden flex mr-6 items-center" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500" />
            </span>
          </a>
          <a className="navbar-burger self-center mr-12 xl:hidden" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 hover:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
