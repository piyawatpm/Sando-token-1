import React from 'react'

const Partners = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container pb-5 pt-0 mb-10 sm:w-screen md:w-screen px-5">
      <h1 className="uppercase text-transparent textgradient text-3xl font-black py-10">
        Our Partners
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 text-black">
        <div className="lg:w-full md:w-90 h-64 ">
          <div
            className="lg:w-full md:w-90 h-40 overflow-auto rounded-t-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${'./images/partners/bg-sandora.png'})`,
            }}
          >
            <img
              src="./images/partners/ico-sandora.png"
              width="110"
              height="110"
              alt=""
              className="mt-4 ml-4"
            />
          </div>
          <div className="grid grid-cols-3 rounded-b-lg bg-[#EBEBEB] h-24 px-5">
            <div className="col-span-2 pt-2  overflow-hidden">
              <h1 className="text-xl font-black">SANDORA.IO</h1>
              <p className="text-sm font-semibold">
                NFTs Marketplace Platform <br /> on Solana Chain Network
              </p>
            </div>
            <div className="">
              <a
              //  href="http://sandora.io"
              href="/comingsoon"
                className="mt-10 float-right bg-[#BB1CFC] hover:bg-[#a207df] text-white text-sm font-black py-1 px-6 rounded-full"
              >
                Join
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-full md:w-90 h-64">
          <div
            className="lg:w-full md:w-90 h-40 overflow-hidden rounded-t-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${'./images/partners/bg-oceansky.png'})`,
            }}
          >
            <img
              src="./images/partners/ico-oceansky.png"
              width="110"
              height="110"
              alt=""
              className="mt-4 ml-4"
            />
          </div>
          <div className="grid grid-cols-3 rounded-b-lg bg-[#EBEBEB] h-24 px-5">
            <div className="col-span-2 pt-2 text-ellipsis overflow-hidden">
              <h1 className="text-xl font-black">OCEANSKY.IO</h1>
              <p className="text-sm font-semibold">
                NFTs Marketplace Platform <br /> on Ethereum Chain Network
              </p>
            </div>
            <div className="">
              <a
                //href="http://oceansky.io"
                href="https://oceansky-project.ts.r.appspot.com/"
                target="_blank"
                className="mt-10 float-right bg-[#FB8700] hover:bg-[#c16f03] text-white text-sm font-black py-1 px-6 rounded-full"
              >
                Join
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-full md:w-90 h-64">
          <div
            className="lg:w-full md:w-90 h-40 overflow-hidden rounded-t-lg bg-cover bg-center"
            style={{
              backgroundImage: `url(${'./images/partners/bg-metasando.png'})`,
            }}
          >
            <img
              src="./images/partners/ico-metasando.png"
              width="110"
              height="110"
              alt=""
              className="mt-4 ml-4"
            />
          </div>
          <div className="grid grid-cols-3 rounded-b-lg bg-[#EBEBEB] h-24 px-5">
            <div className="col-span-2 pt-2 text-ellipsis overflow-hidden">
              <h1 className="text-xl font-black">METASANDO.IO</h1>
              <p className="text-sm font-semibold">
                Metaverse Game NFTs  <br />  Marketplace Platform 
              </p>
            </div>
            <div className="">
              <a
               // href="http://metasando.io"
               href="https://meta-sando.ts.r.appspot.com/"
               target="_blank"
                className="mt-10 float-right bg-[#00D512] hover:bg-[#02c012] text-white text-sm font-black py-1 px-6 rounded-full"
              >
                Join
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
