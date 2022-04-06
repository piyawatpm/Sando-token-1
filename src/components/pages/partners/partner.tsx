import React from "react";

const Partner = (): JSX.Element => {
  return (
    <div
      className="relative overflow-hidden mx-auto w-full h-full bg-cover bg-center container py-20 mb-20 px-10"
      style={{ backgroundImage: `url(${"./images/partner/bg-partner.png"})` }}
    >
      <h1 className="uppercase text-3xl font-bold text-[#ff0090] mb-5 text-center py-5">
        Partners
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 ml-20 mr-10 text-black">
        <div className="lg:w-72 md:w-64  ">
          <div className="flex justify-center items-center lg:w-full md:w-90 overflow-auto rounded-t-lg bg-[#171717]">
          <div className="flex flex-col justify-center items-center ">

              <img
                src="./images/partner/sandora.png"
                alt=""
                className="w-44 mt-4"
              />
              <h1 className="uppercase text-2xl text-white text-center font-bold">
                sandora.io
              </h1>
              <p className="text-white text-base text-center mb-10 mt-2">
              NFTs Marketplace Platform <br /> on Solana Chain Network    </p>
            </div>
            <div></div>
          </div>
          <div className="grid grid-cols-3 rounded-b-lg bg-[#BB1CFC] px-5 py-5">
            <div className="col-span-3 overflow-hidden">
              <h1 className="text-2xl text-white text-center font-bold">
                Coming soon
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:w-72 md:w-64">
          <div className="flex justify-center items-center  lg:w-full md:w-90 overflow-hidden rounded-t-lg bg-[#171717]">
          <div className="flex flex-col justify-center items-center ">
            <img
              src="./images/partner/oceansky.png"
              alt=""
              className="w-44 mt-4 "
            />
             <h1 className="uppercase text-2xl text-white text-center font-bold">
                oceansky.io
              </h1>
              <p className="text-white text-base text-center mb-10 mt-2">
              NFTs Merketplce Platform <br />
on Ethereum Chain Network               </p>
            </div>
          </div>
          <div className="grid grid-cols-3 rounded-b-lg bg-[#FB8700] px-5 py-5">
            <div className="col-span-3 overflow-hidden">
              <h1 className="text-2xl text-white text-center font-bold">
                Coming soon
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:w-72 md:w-64">
          <div className="flex flex-col justify-center items-center  lg:w-full md:w-72 overflow-hidden rounded-t-lg bg-[#171717]">
            <div className="flex flex-col justify-center items-center ">
              <img
                src="./images/partner/metasando.png"
                alt=""
                className=" w-44 mt-4 "
              />
              <h1 className="uppercase text-2xl text-white text-center font-bold">
                metasando.io
              </h1>
              <p className="text-white text-base text-center mb-4 mt-2">
                Metaverse Game NFTs <br /> Marketplace Platform on <br /> Cross Chain Bridge
              </p>
            </div>
          </div>
          <div className="grid grid-cols-3 rounded-b-lg bg-[#1ACA29] px-5 py-5">
            <div className="col-span-3 overflow-hidden">
              <h1 className="text-2xl text-white text-center font-bold">
                Coming soon
              </h1>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Partner;