import React from 'react'
import MainLayout from 'src/layout/MainLayout'

function Wallets(): JSX.Element {
  return (
    <div className="relative overflow-hidden mx-auto lg:w-3/4 md:w-full container py-5 pb-24 text-justify">
      <div className="mb-24 mt-10">
        <h1 className="text-center text-5xl text-white">Wallets</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <span className="absolute font-bold float-right py-2 px-3 bg-black text-white rounded-lg text-sm top-5 right-5 opacity-60">
            Most Popular
          </span>
          <img src="./images/wallets/metamask.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">Metamask</h4>
          <p className="text-black">
            Start exploring blockchain applications in seconds. Trusted by over
            1 million users worldwide.
          </p>
        </a>

        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <img src="./images/wallets/bitski.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">Bitski</h4>
          <p className="text-black">
          Bitski connects communities, creators and brands through unique, ownable digital content.
          </p>
        </a>

        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <img src="./images/wallets/fortmatic.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">Fortmatic</h4>
          <p className="text-black">
          Let users access your Ethereum app from anywhere. No more browser extensions.          </p>
        </a>

        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <img src="./images/wallets/walletConnect.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">WalletConnect</h4>
          <p className="text-black">
          Open source protocol for connecting decentralised applications to mobile wallets. </p>
        </a>

        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <img src="./images/wallets/coinbasewallet.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">Coinbase Wallet</h4>
          <p className="text-black">
          The easiest and most secure crypto wallet. ... No Coinbase account required.</p>
        </a>

        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <img src="./images/wallets/arkane.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">Arkane</h4>
          <p className="text-black">
          Make it easy to create blockchain applications with secure wallets solutions.</p>
        </a>

        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <img src="./images/wallets/Authereum.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">Authereum</h4>
          <p className="text-black">
          Your wallet where you want it. Log into your favorite dapps with Authereum.</p>
        </a>

        <a
          href="/"
          className="relative block bg-[#EBEBEB] rounded-lg hover:bg-white hover:-translate-y-1 duration-300 w-full p-10"
        >
          <span className="absolute font-bold float-right py-2 px-3 bg-black text-white rounded-lg text-sm top-5 right-5 opacity-60">
          Most Simple
          </span>
          <img src="./images/wallets/Torus.png" alt="" className="mb-5" />
          <h4 className="font-bold mb-2 text-black">Torus</h4>
          <p className="text-black">
          Open source protocol for connecting decentralised applications to mobile wallets.</p>
        </a>
      </div>
    </div>
  )
}
Wallets.layoutProps = {
  Layout: MainLayout,
}
export default Wallets
