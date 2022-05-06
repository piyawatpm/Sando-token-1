import React from "react";

const detail = (): JSX.Element => {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full container mb-10">
        <div className="flex flex-col justify-center items-center ml-10">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center ml-20">
              <div className="md:shrink-0  w-2/3">
                <div className=" ml-20">
                  <h1 className="uppercase  text-transparent textgradient text-3xl font-black">
                    Wallets, Accounts and Addresses
                  </h1>

                  <p className="mt-2 font-light text-xl text-white text-justify">
                    Most wallet products will let you generate a wallet account.
                    So you don't need worry before you download a wallet.
                    <li>
                      A wallet account is an entity that can send transactions
                      and has a balance.
                    </li>
                    <li>
                      A wallet account has an Ethereum address, like an inbox
                      has an email address. You can use this to send funds to an
                      account.
                    </li>
                    <li>
                      A wallet is a product that lets you manage your wallet
                      account. It allows you to view your account balance, send
                      transactions, and more.
                    </li>
                  </p>
                </div>
              </div>

              <div className="md:shrink-0">
                <div className="flex float-right w-full md:w-full mb-20 ml-10">
                  <img
                    src="/images/wallet/wallet-address.svg"
                    alt=" wallet address image"
                    className=" w-3/5 ml-10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default detail;
