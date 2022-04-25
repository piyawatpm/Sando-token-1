import React from 'react';

const Key = (): JSX.Element => {
return<>
  <div className="relative overflow-hidden mx-auto w-full container">
        <div className="flex flex-col   justify-center items-center ml-10">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center ml-20">
              <div className="md:shrink-0 ml-20 w-2/3">
                <div className="text-[#FF0090] ml-10">
                  <div className="ml-10 mt-10">
                    <h1 className="uppercase font-extrabold text-4xl text-[#FF0090] mb-5">
                      Wallet
                    </h1>
                    <p className="uppercase font-medium text-xl text-[#0ECF50]">
                    The key to your digital future                    </p>
                    <p className="font-light text-xl text-white mt-2 text-justify">
                    Wallets give access to your funds and wallet applications. Only you should have access to your wallet.
                    </p>
                  </div>
                </div>

                <div className="text-[#FF0090] py-5 ml-20">
                  <h1 className="uppercase text-3xl font-black">
                  What's a Wallet?                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                  Wallets are applications that let you interact with your crypto account. Think of it like an internet banking app – without the bank. Your wallet lets you read your balance, send transactions and connect to applications.
                   
                  </p>
                  <p className="mt-5 font-light text-xl text-white text-justify">
                  You need a wallet to send funds and manage your SANDO.                   
                  </p>
                  <p className="mt-5 font-light text-xl text-white text-justify">
                  Your wallet is only a tool for managing your SANDO account. That means you can swap wallet providers at any time. Many wallets also let you manage several SANDO accounts from one application.                   
                  </p>

                  <p className="mt-5 font-light text-xl text-white text-justify">
                  That's because wallets don't have custody of your funds, you do. They're just a tool for managing what's really yours.                  </p>
                </div>

         
              </div>

              <div className="md:shrink-0 mb-20">
                <div className="flex float-right w-full md:w-full mb-20 ml-10">
                  <img
                    src="/images/wallet/wallet.svg"
                    alt=" wallet image"
                    className=" w-3/5 mb-20 ml-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</>

}

export default Key;