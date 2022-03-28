import React from 'react'

const PaymentMethod = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">
      <div className="flex flex-col justify-center items-center">
        <div className="min-h-screen bg-black flex justify-center items-center">
          <div className="py-20 px-20 bg-[#171717] rounded-2xl shadow-xl z-20">
            <div className="text-white text-left">
              <div className="flex">
                <img
                  src="/images/web/sando-token-logo.png"
                  alt="sando logo"
                  className="w-12 h-12"
                />
                <h1 className="text-3xl font-bold mb-4 cursor-poiter ml-2">
                  Buying
                </h1>
              </div>
              <p className="w-80 text-sm mb-8 font-semibold tracking-wide cursor-pointer">
                Power by Sando Token
              </p>
            </div>
            <h3 className="text-xl text-white font-bold">Payment</h3>
            <p>Please select your payment method</p>

            <div className="flex text-left mt-10">
              <a
                href="/visa"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-sm font-bold py-2 px-10 rounded-xl"
              >
                <div className="flex">
                  <img src="/images/wallets/visa-logo.png" className="w-10 mt-2" />
                  <img src="/images/wallets/visa.png" className="w-20 ml-4 mt-2" />
                </div>
              </a>
              <a
                href="/paypal"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-3xl font-bold py-2 px-8 rounded-xl ml-5"
              >
                  <img src="/images/wallets/paypal.png" className="" />

              </a>
            </div>

            <div className="flex text-left mt-5">
              <a
                href="/metamaskPayment"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-sm font-bold py-2 px-10 rounded-xl"
              >
                <div className="flex">
                  <img src="/images/wallets/metamask.png" className="w-10 " />
                  <h1 className="ml-3">
                    METAMASK <br /> <p className="font-light">Wallet</p>
                  </h1>
                </div>
              </a>
              <a
                href="/p2p"
                className="bg-[#f0f0f0] hover:bg-[#c4c4c4] text-black text-3xl font-bold py-2 px-20 rounded-xl ml-5"
              >
                P2P
              </a>
            </div>


            <div className="text-left mt-20">
              <a
                href="/buy"
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

export default PaymentMethod
