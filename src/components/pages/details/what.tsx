import React from "react";

const What = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container px-10">
      <div className="relative overflow-hidden mx-auto w-full container">
        <div className="flex flex-col   justify-center items-center ml-20">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 w-2/3 ml-20">
                <div className="text-[#FF0090] ml-10">
                  <div className="px-10 ml-5">
                    <h1 className="uppercase font-extrabold text-4xl text-[#FF0090] mb-5 ml-20">
                      What's a SANDO?{" "}
                    </h1>
                  </div>
                </div>

                <div className="text-[#FF0090] ml-20 px-5">
                  <p className="mt-2 font-light text-xl text-white text-justify ml-20">
                    Currency for our digital future. SANDO is digital global
                    money.
                  </p>
                  <p className="mt-2 font-light text-xl text-white text-justify ml-20">
                    It's the currency based on Ethereum (ERC-20).
                  </p>
                  <button className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-full mt-5 mb-10 ml-20">
                    Add SANDO{" "}
                  </button>
                  <a href="" className="ml-5 ">
                    How to add SANDO
                  </a>
                </div>
                <div className="text-[#FF0090] ml-20 px-5">
                  <div className="ml-20 ">
                    <h1 className="uppercase font-extrabold text-4xl text-[#FF0090] mb-5">
                      Where to buy SANDO?{" "}
                    </h1>
                  </div>
                  <p className="ml-20 mt-2 font-light text-xl text-white text-justify">
                    You can buy SANDO Token from our website directly.{" "}
                  </p>
                  <button className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-full mt-5 mb-10 ml-20">
                    Buy Now{" "}
                  </button>
                </div>
              </div>

              <div className="md:shrink-0 mb-10 mt-5">
                <div className="flex float-right w-full md:w-full">
                  <img
                    src="/images/details/erc-20.svg"
                    alt=" erc-20 image"
                    className="w-1/2 ml-5"
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

export default What;
