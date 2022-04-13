import react from 'react'

const Tokenomics = (): JSX.Element => {
  return (
    /*
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">
      <div className="flex flex-col justify-center items-center">
        <div className="min-w-full mx-auto bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2 px-20">
          <div
            className="relative overflow-hidden mx-auto container flex py-5 mb-10 w-full bg-cover bg-center h-100 md:w-1/2 lg:w-full"
            style={{
              backgroundImage: `url(${'./images/web/bg-tokenomic.png'})`,
            }}
          >
            <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 px-10 py-5">
              <div className="tracking-wide text-xl text-white font-semibold mb-10">
                <h1 className="uppercase text-4xl text-[#ff0090] font-bold">
                  The sando Tokenomic
                </h1>
              
                  {/* 
          <dl>
            <div className="bg-black px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-bold text-white">Token Data :</dt>
              <dd className="mt-1 text-xl font-bold text-white sm:mt-0 sm:col-span-2"></dd>
            </div>
            <div className="bg-black px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-bold text-white">Token Ticker :</dt>
              <dd className="mt-1 text-xl font-bold text-pink-600 sm:mt-0 sm:col-span-2">
                SANDO TOKEN
              </dd>
            </div>
            <div className="bg-black px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-bold text-white">Platform :</dt>
              <dd className="mt-1 text-xl font-bold text-white sm:mt-0 sm:col-span-2">
                Oceansky, Sandora and Metasando
              </dd>
            </div>
            <div className="bg-black px-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-xl font-bold text-white">Token Standard :</dt>
              <dd className="mt-1 text-xl font-bold text-white sm:mt-0 sm:col-span-2">
                ERC-20
              </dd>
            </div>
          </dl>
          */
    /*
         
                  <h3 className="text-white text-xl font-bold">Token Data</h3>
                  <div className="flex">
                    <h3 className="text-white text-lg font-bold">
                      Token Ticker :
                    </h3>
                    <p className="ml-2 text-[#ff0090] text-lg font-bold">
                      SANDO TOKEN
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-white text-xl font-bold">Platform :</h3>
                    <p className="ml-2 text-white text-lg font-bold">
                      Oceansky, Sandora and Metasando
                    </p>
                  </div>
                  <div className="flex">
                    <h3 className="text-white text-lg font-bold">
                      Token Standard :
                    </h3>
                    <p className="ml-2 text-white text-lg font-bold">ERC-20</p>
                  </div>
                  <div className="flex">
                    <h3 className="text-white text-lg font-bold">
                      MAX Supply :
                    </h3>
                    <p className="ml-2 text-white text-lg font-bold">
                      100,000,000,000,000 Tokens
                    </p>
                  </div>
                </div>
             

                  <div className="md:flex items-center justify-center mb-10">    
                      <img
                        className="w-1/2 items-center justify-center"
                        src="/images/web/chart.png"
                        alt="Token Chart"
                      />               
                    </div>
                   


{/*
                <div className="min-w-full mx-auto rounded-xl shadow-md overflow-hidden md:min-w-1/2">
                  <div className="md:flex items-center justify-center">
                    <div className="md:shrink-0 px-5">
                      <img
                        className="h-100 min-w-full"
                        src="/images/web/chart.png"
                        alt="Token Chart"
                      />
                    </div>
                    <div className="md:shrink-0 py-10">
                      <div className="flex py-1 tracking-wide text-sm text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#D31876]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Airdrop : 25%
                        </h1>
                      </div>

                      <div className="flex py-1 tracking-wide text-sm text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#FFDA31]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Seed Sale : 5%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#970E53]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Private Sale : 20%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#FEAE00]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Pre-sale (ICO) : 5%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#F27200]"></div>
                        <h1 className="text-lg px-2 text-center">
                          public sale (DEX) : 5%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#982ABD]"></div>
                        <h1 className="text-lg px-2 text-center">
                          public sale (CEX) : 5%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#D357FE]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Marketing : 5%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#E292FE]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Pool Liquidity : 5%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#FF42A1]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Founder : 15%
                        </h1>
                      </div>

                      <div className="flex  py-1 tracking-wide text-xl text-white font-semibold">
                        <div className="w-7 h-7 rounded-full bg-[#FDB823]"></div>
                        <h1 className="text-lg px-2 text-center">
                          Reserve : 10%
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>

 */
    /*
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    */

    <div className="relative overflow-hidden mx-auto w-full container">
      <div className="flex flex-col justify-center items-center">
        <div className="min-w-full mx-auto bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2 px-10">
          <div
            className="relative overflow-hidden mx-auto container flex py-5 mb-10 w-full bg-cover bg-center h-100 md:w-1/2 lg:w-full"
            style={{
              backgroundImage: `url(${'./images/web/bg-tokenomic.png'})`,
            }}
          >
            <div className="justify-center items-center px-10 py-5">
              <div className="">
                <div className="py-5 text-xl text-white font-semibold px-10">
                  <h1 className="uppercase text-[#FF0090] text-4xl font-black mt-10">
                    The Sando Tokenomics
                  </h1>
                </div>

                <h3 className="text-white text-xl font-bold px-10">Token Data</h3>
                <div className="flex px-10">
                  <h3 className="text-white text-lg font-medium">
                    Token Ticker :
                  </h3>
                  <p className="ml-2 text-[#ff0090] text-lg font-black">
                    SANDO TOKEN
                  </p>
                </div>
                <div className="flex px-10">
                  <h3 className="text-white text-xl font-medium">Platform :</h3>
                  <p className="ml-2 text-white text-lg font-medium">
                    Oceansky, Sandora and Metasando
                  </p>
                </div>
                <div className="flex px-10">
                  <h3 className="text-white text-lg font-medium">
                    Token Standard :
                  </h3>
                  <p className="ml-2 text-white text-lg font-medium">ERC-20</p>
                </div>
                <div className="flex px-10">
                  <h3 className="text-white text-lg font-medium">
                    MAX Supply :
                  </h3>
                  <p className="ml-2 text-white text-lg font-medium">
                    100,000,000,000,000 Tokens
                  </p>
                </div>
              </div>

              <img
                className="w-full py-20 px-10"
                src="/images/web/chart.png"
                alt="Token Chart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
