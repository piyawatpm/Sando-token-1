import React from "react";

const Adding = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container px-20" 
    style={{ backgroundImage: `url(${'./images/sando-details/bg-details.png'})` }}
    >
      <div className="flex flex-col justify-center items-center">
      <img src="/images/sando-logo.svg" alt="sando logo image" className="w-52 mt-20 mb-10"/>

            <div className="text-white py-10 px-10 bg-[#171717] rounded-2xl shadow-xl z-20">
              <div className="flex">
                {/* 
                  <img
                    src="/images/sando-logo.svg"
                    alt="sando logo"
                    className="w-12 h-12"
                  />
                  */}
                  <h1 className="uppercase text-4xl font-black cursor-pointer mt-2 ml-2 mb-2 px-10">
                    Sando Token Address
                  </h1>
                 
              </div>
              <div className="w-full my-5 flex justify-center items-center">
              <hr className="text-white w-full" />
            
            </div>
              <div className="flex">
                  <h3 className="text-[#c4c4c4] text-lg font-normal">
                  Name    
                  </h3>
                  <p className="ml-7 text-white text-lg font-extrabold">
                  : SANDO
                  </p>
                </div>
                <div className="flex">
                  <h3 className="text-[#c4c4c4] text-xl font-normal">Symbol</h3>
                  <p className="ml-2 text-white text-lg font-extrabold">
                  : SANDO
                  </p>
                </div>
                <div className="flex">
                  <h3 className="text-[#c4c4c4] text-lg font-normal">
                  Decimal
                  </h3>
                  <p className="ml-2 text-white text-lg font-medium"> : 18</p>
                </div>
                <div className="flex">
                  <h3 className="text-[#c4c4c4] text-lg font-normal">
                  Address 
                  </h3>
                  <p className="ml-2 text-white text-lg font-medium">: 0x98401e4314E069c06078e76D62CA4141621BF414</p>
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
