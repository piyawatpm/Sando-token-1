import React from "react";

const Adding = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container px-20" 
    style={{ backgroundImage: `url(${'./images/sando-details/bg-details.png'})` }}
    >
      <div className="flex flex-col justify-center items-center">
      <img src="/images/sando-logo.svg" alt="sando logo image" className="w-48 mt-20 mb-10"/>

            <div className="py-10 px-20 bg-[#171717] rounded-2xl shadow-xl z-20">
              <div className="text-white text-left">
                <div className="flex">
                  <img
                    src="/images/sando-logo.svg"
                    alt="sando logo"
                    className="w-12 h-12"
                  />
                  <h1 className="uppercase text-4xl font-black cursor-pointer mt-2 ml-2 mb-2">
                    Sando Token Address
                  </h1>
                </div>
                <p className="flex text-base font-normal text-[#c4c4c4]">
                  Name
                  <h1 className="uppercase text-white text-base ml-5 font-extrabold">
                    : sando
                  </h1>
                </p>
                <p className="flex text-base font-normal text-[#c4c4c4] mt-1">
                  Symbol
                  <h1 className="uppercase text-white ml-2 font-extrabold	">
                    : sando
                  </h1>
                </p>
                <p className="flex text-base  font-normal text-[#c4c4c4] mt-1">
                  Decimal
                  <h1 className="uppercase text-white ml-1 font-medium">
                    : 18
                  </h1>
                </p>
                <p className="flex text-base  font-normal text-[#c4c4c4] mt-1">
                  Address :
                  <a href="" className="ml-1 font-medium text-[#ff0090]">
                    0xa8aB6A7fc3F3be783A212baE3aa8a866c99028e6
                  </a>
                </p>
              </div>
            </div>
       

          <div className="min-h-screen flex justify-center items-center mb-20">
            <div className="py-10 px-10 bg-[#171717] rounded-2xl shadow-xl z-20">
              <div className="text-white">
                <div className="flex justify-center items-center">
                  <img
                    src="/images/sando-logo.svg"
                    alt="sando logo"
                    className="w-12 h-12"
                  />
                  <h1 className="text-4xl font-black mt-2 cursor-poiter ml-2 mb-2 ">
                    Add SANDO token in your METAMASK
                  </h1>
                  <img
                    src="/images/wallets/metamask.svg"
                    alt="metamask logo"
                    className="w-12 h-12 ml-2"
                  />
                </div>
                <div className="flex justify-center items-center mt-10">
                  <img
                    src="/images/adding/step-1-txt.png"
                    alt="step-1"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-2-txt.png"
                    alt="step-2"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-3-txt.png"
                    alt="step-3"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-4-txt.png"
                    alt="step-4"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-5-txt.png"
                    alt="step-5"
                    className="w-1/6 h-1/2"
                  />
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src="/images/adding/step-1.png"
                    alt="step-1"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-2.png"
                    alt="step-2"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-3.png"
                    alt="step-3"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-4.png"
                    alt="step-4"
                    className="w-1/6 h-1/2"
                  />
                  <img
                    src="/images/adding/step-5.png"
                    alt="step-5"
                    className="w-1/6 h-1/2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Adding;
