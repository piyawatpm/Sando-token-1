import React from 'react'

const Overall = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10 px-10">
      <h1 className="text-3xl font-bold text-white ml-10"> Overall</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 ml-10 mr-10 mt-5 text-black">
        <div className="lg:w-full md:w-90 h-64 ">
          <div
            className="lg:w-full md:w-90 h-60 overflow-auto rounded-t-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${'./images/staking/overall-1.png'})`,
            }}
          >
            <div className="pt-2 text-ellipsis overflow-hidden">
              <div className="flex mt-10 ml-5">
                <h1 className="text-2xl text-white font-bold">$0.88</h1>
                <p className="text-xs text-[#41FA00] mt-2 ml-2">+0.25%</p>
              </div>
              <p className="text-xs text-white ml-5">Today price</p>
            </div>
            <div className="mt-10 mb-5 mr-5">
              <a
                href="/buy"
                className="mt-10 float-right bg-[#FFB700] hover:bg-[#fb8700] text-black text-sm font-bold py-2 px-10 rounded-full ml-5"
              >
                Buy now
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-full md:w-90 h-64 ">
          <div
            className="lg:w-full md:w-90 h-60 overflow-auto rounded-t-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${'./images/staking/overall-2.png'})`,
            }}
          >
            <div className="pt-2 text-ellipsis overflow-hidden">
              <div className="flex mt-10 ml-5 text-white">
                <h1 className="text-2xl  font-bold">$0.00 </h1>
                <p className="uppercase text-xs font-bold mt-2 ml-2">Sando</p>
              </div>
              <p className="text-xs text-white ml-5">Your Staked</p>
            </div>
            <div className="mt-10 mb-5 mr-5">
              <a
                href="/"
                className="mt-10 float-right bg-[#FF0090] hover:bg-[#CC0073] text-white text-sm font-bold py-2 px-10 rounded-full ml-5"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-full md:w-90 h-64 ">
          <div
            className="lg:w-full md:w-90 h-60 overflow-auto rounded-t-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${'./images/staking/overall-3.png'})`,
            }}
          >
            <div className="pt-2 text-ellipsis overflow-hidden">
              <div className="flex mt-10 ml-5 text-white">
                <h1 className="text-2xl  font-bold">$0.00 </h1>
                <p className="uppercase text-xs font-bold mt-2 ml-2">Sando</p>
              </div>
              <p className="text-xs text-white ml-5">Claimed Reward</p>
            </div>
            <div className="mt-10 mb-5 mr-5">
              <a
                href="/"
                className="mt-10 float-right bg-[#FF0090] hover:bg-[#CC0073] text-white text-sm font-bold py-2 px-10 rounded-full ml-5"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overall
