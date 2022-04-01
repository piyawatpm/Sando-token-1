import React from 'react'

function Header(): JSX.Element {
  return (
    <header
      className="navbar white bg-cover bg-center bg-no-repeat bg-[#0f0f0f]"
    >
      <div className="relative mx-auto container">
        <nav className="flex justify-between text-white ">
          <div className="flex px-5 py-6 xl:px-12  w-full items-center ">
          <a className="flex  font-heading" href="/">
              <img src="/images/sando-logo-text.png" alt="sando logo image" className="w-10/12"/>
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
                <a className="hover:text-gray-200 mr-40" href="/buy">
                  Buy
                </a>
              </li>          
             
              <li>
                <a className="hover:text-gray-200" href="/login">
                  Login 
                </a>
             <span className='mx-3'>|</span>
                <a className="hover:text-gray-200 " href="/register">
                   Register
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
              <button
                    // href="/"
                    className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-sm font-bold py-2 px-5 rounded-full"
                    type="submit"
                  >
                    Connect Wallet
                  </button>
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
