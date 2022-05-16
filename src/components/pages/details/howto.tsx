import React from "react";

const Howto = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container px-10">
      <div className="relative overflow-hidden mx-auto w-full container">
      <div className="min-h-screen flex justify-center items-center mb-20">
      <div
            className="relative overflow-hidden mx-auto container flex py-5 mb-10 bg-cover bg-center h-100 w-full rounded-2xl "
            style={{ backgroundImage: `url(${'./images/web/bg-howtoadd.png'})` }}
          >
            <div className="rounded-2xl shadow-xl z-20">
              <div className="text-white">
                <div className="flex justify-center items-center">
                 
                  <h1 className="text-4xl font-extrabold text-4xl text-transparent textgradient mt-2 cursor-poiter ml-2 mb-2 ">
                  How to add  SANDO TOKEN in your                  </h1>
                  <h1 className="Uppercase text-4xl font-black text-transparent textgradient-yellow mt-2 cursor-poiter ml-2 mb-2 ">
                  METAMASK              </h1>

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
                    className="w-1/6 h-1/2 mb-2"
                  />
                  <img
                    src="/images/adding/step-2-txt.png"
                    alt="step-2"
                    className="w-1/6 h-1/2 mb-2"
                  />
                  <img
                    src="/images/adding/step-3-txt.png"
                    alt="step-3"
                    className="w-1/6 h-1/2 mb-2"
                  />
                  <img
                    src="/images/adding/step-4-txt.png"
                    alt="step-4"
                    className="w-1/6 h-1/2 mb-2"
                  />
                  <img
                    src="/images/adding/step-5-txt.png"
                    alt="step-5"
                    className="w-1/6 h-1/2 mb-2"
                  />
                </div>

                <div className="flex justify-center items-center">
                  <img
                    src="/images/adding/step-1.png"
                    alt="step-1"
                    className="w-1/6 h-1/2 "
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
    </div>
  );
};

export default Howto;
