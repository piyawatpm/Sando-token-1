import React from 'react'

const FeatBox = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">
      <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5 mx-10 text-black'>
        <div className="lg:w-full md:w-90 h-72 ">
          <div className="lg:w-full md:w-90 h-44 overflow-auto rounded-t-lg bg-cover bg-center" style={{ backgroundImage: `url(${"./images/collections/coll-item-4.jpg"})` }}>
            <img src="./images/ico-wallet.PNG" width="80" height="80" alt="" className='mt-4 ml-4' />
          </div>
          <div className='w-full rounded-b-lg bg-[#EBEBEB] h-32 px-5 py-2'>
            <h1 className='text-2xl font-bold'>Setup your wallet</h1>
            <p className='text-xs text-ellipsis overflow-hidden'>Connect to your wallet to create your NFT.</p><br />
            <a href="/" className=" bg-[#0078FF] hover:bg-[#006ce6] text-white font-bold py-2 px-10 rounded-full">
              Wallet
            </a>
          </div>
        </div>

        <div className="lg:w-full md:w-90 h-72 ">
          <div className="lg:w-full md:w-90 h-44 overflow-auto rounded-t-lg bg-cover bg-center" style={{ backgroundImage: `url(${"./images/collections/coll-item-2.jpg"})` }}>
            <img src="./images/ico-nft.PNG" width="80" height="80" alt="" className='mt-4 ml-4' />
          </div>
          <div className='w-full rounded-b-lg bg-[#EBEBEB] h-32 px-5 py-2'>
            <h1 className='text-2xl font-bold'>Add your NFTs</h1>
            <p className='text-xs text-ellipsis overflow-hidden'>Add new, tranding and rare artwork to your collection.</p><br />
            <a href="/create" className=" bg-[#0078FF] hover:bg-[#006ce6] text-white font-bold py-2 px-10 rounded-full">
              Create
            </a>
          </div>
        </div>

        <div className="lg:w-full md:w-90 h-72 ">
          <div className="lg:w-full md:w-90 h-44 overflow-auto rounded-t-lg bg-cover bg-center" style={{ backgroundImage: `url(${"./images/collections/coll-item-3.jpg"})` }}>
            <img src="./images/ico-eth.PNG" width="80" height="80" alt="" className='mt-4 ml-4' />
          </div>
          <div className='w-full rounded-b-lg bg-[#EBEBEB] h-32 px-5 py-2'>
            <h1 className='text-2xl font-bold'>Sell your NFTs</h1>
            <p className='text-xs text-ellipsis overflow-hidden'>Easily buy and sell your NFTs in the largest marketplace.</p><br />
            <a href="/explore" className=" bg-[#0078FF] hover:bg-[#006ce6] text-white font-bold py-2 px-10 rounded-full">
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatBox
