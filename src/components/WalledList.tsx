import React from 'react'

type IWalled = {
  name: string
  image: string
}

function WalledList(): JSX.Element {
  const walleds = [
    {
      name: 'Metamask',
      image: '/images/walleds/metamask.png',
    },
    {
      name: 'Bitski',
      image: '/images/walleds/bitski.png',
    },

    {
      name: 'Fortmatic',
      image: '/images/walleds/fortmatic.png',
    },

    {
      name: 'WalletConnect',
      image: '/images/walleds/walletConnect.png',
    },

    {
      name: 'Coinbase Wallet',
      image: '/images/walleds/coinbasewallet.png',
    },
    {
      name: 'Arkane',
      image: '/images/walleds/arkane.png',
    },
  ] as IWalled[]

  return (
    <div className="grid grid-cols-6 gap-6 mt-10">
      {walleds.map((walled, index) => (
        <div
          className="flex flex-col py-7 items-center bg-walled hover:bg-gray-800 border-walled rounded-2xl gap-5"
          key={`key-walled-${index}`}
        >
          <img src={walled?.image} alt={`walled logo ${walled?.name}`} />
          <span className="text-white font-bold">{walled.name}</span>
        </div>
      ))}
    </div>
  )
}

export default WalledList
