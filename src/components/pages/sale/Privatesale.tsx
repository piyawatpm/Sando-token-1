import React from 'react'

const Privatesale = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-20 px-20">
      <div className="flex flex-col justify-center items-center mb-20">
          <h1 className="uppercase text-4xl text-[#FF0090] font-bold py-5 mb-10">
          token private sale
        </h1>
        <div className="min-w-full mx-auto bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
          <div
            className="relative overflow-hidden mx-auto w-full container flex py-5 mb-10  bg-cover bg-center md:w-1/2 lg:w-full"
            style={{
              backgroundImage: `url(${'./images/privatesale/sando-banner.png'})`,
            }}
          >
              <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 px-5">
                <div className="flex py-1 tracking-wide text-xl font-semibold ml-20">
                  <h1 className="text-4xl font-bold text-[#FF0090]  mt-10 my-5">
                    SANDO Token Price
                  </h1>
                </div>

                <div className="flex py-1 tracking-wide text-xl text-white font-semibold ">
                  <div className=" ml-20 p-10">
                    <ol className="relative border-l border-blue-200 dark:border-blue-700">
                      <li className="mb-10 ml-4">
                        <div className="absolute w-8 h-8 bg-[#FF0090] rounded-full -left-4 border-8 border-blue dark:border-blue-900 dark:bg-pink-700"></div>
                        <h3 className="text-lg font-semibold text-white  ml-2">
                          Seed Round
                        </h3>
                        <p className="mb-4 text-base font-normal text-white ml-2">
                          0.0009 USD
                        </p>
                      </li>
                      <li className="mb-10 ml-4">
                        <div className="absolute w-8 h-8 bg-[#FF0090] rounded-full -left-4 border-8 border-blue dark:border-blue-900 dark:bg-pink-700"></div>
                        <h3 className="text-lg font-semibold text-white ml-2">
                          Private Round
                        </h3>
                        <p className="mb-4 text-base font-normal text-white ml-2">
                          0.0012 USD
                        </p>
                      </li>
                      <li className="mb-10 ml-4">
                        <div className="absolute w-8 h-8 bg-[#FF0090] rounded-full -left-4 border-8 border-blue dark:border-blue-900 dark:bg-pink-700">
                          <div className="absolute w-3 h-3 bg-[#ffffff] rounded-full top-0.5 left-0.5"></div>
                        </div>

                        <h3 className="text-lg font-semibold text-white ml-2">
                          ICO Round
                        </h3>
                        <p className="mb-4 text-base font-normal text-white  ml-2">
                          0.0020 USD
                        </p>
                      </li>
                      <li className="mb-10 ml-4">
                        <div className="absolute w-8 h-8 bg-[#FF0090] rounded-full -left-4 border-8 border-blue dark:border-blue-900 dark:bg-pink-700"></div>
                        <h3 className="text-lg font-semibold text-white ml-2">
                          Public Round
                        </h3>
                        <p className="mb-4 text-base font-normal text-white  ml-2">
                          0.0035 USD
                        </p>
                      </li>
                      <li className="mb-10 ml-4">
                        <div className="absolute w-8 h-8 bg-[#FF0090] rounded-full -left-4 border-8 border-blue dark:border-blue-900 dark:bg-pink-700"></div>
                        <h3 className="text-lg font-semibold text-white ml-2">
                          Market
                        </h3>
                        <p className="mb-4 text-base font-normal text-white ml-2">
                          To the Mars
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <div className="md:shrink-0 mt-20 mr-2 ml-20">
                <div className="flex tracking-wide w-full md:w-full">
                  <img
                    src="/images/privatesale/sando-private-sale.png"
                    alt=" token image"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Privatesale

