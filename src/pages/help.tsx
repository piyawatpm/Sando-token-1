import MainLayout from "src/layout/MainLayout";
function Help(): JSX.Element {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full  container px-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase text-3xl font-black text-[#ff0090] mb-5 text-center py-5">
            Help centre
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-5 ml-20 mr-10 text-black">
            <div className="lg:w-72 md:w-64  ">
              <div className="flex justify-center items-center h-[12rem] lg:w-full md:w-90 overflow-auto rounded-lg bg-[#171717] ">
                <div className="flex flex-col justify-center items-center">
                  <h1 className=" text-2xl text-[#ffb700] text-center font-bold">
                    Add Sando Token
                  </h1>
                  <p className="text-white text-base text-center mt-2 mb-6 mx-2">
                    How to add <br /> SANDO TOKEN <br /> to my wallet
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-72 md:w-64">
              <div className="flex justify-center items-center h-[12rem] lg:w-full md:w-90 overflow-auto rounded-lg bg-[#171717]">
                <div className="justify-center items-center">
                  <h1 className=" text-2xl text-[#ffb700] text-center font-bold">
                    Buying
                  </h1>
                  <p className="text-white text-base text-center mt-2 mx-2">
                    How to buy SANDO TOKEN and convert the exchange rate,
                    Ethereum or USDC into Sando Tokens
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-72 md:w-64">
              <div className="flex justify-center items-center h-[12rem] lg:w-full md:w-90 overflow-auto rounded-lg bg-[#171717]">
                <div className="justify-center items-center py-10">
                  <h1 className=" text-2xl text-[#ffb700] text-center font-bold mb-20">
                    Can’t unstake
                  </h1>
                  <p className="text-white text-base text-center mt-2 mx-2"></p>
                </div>
              </div>
            </div>
          </div>

          <div className="min-h-screen flex justify-center items-center mb-20">
            <div className="py-10 px-10 bg-[#171717] rounded-2xl shadow-xl z-20">
              <div className="text-white">
                <div className="flex justify-center items-center">
                  <img
                    src="/images/web/sando-token-logo.png"
                    alt="sando logo"
                    className="w-12 h-12"
                  />
                  <h1 className="text-4xl font-black text-[#ffb700] mt-2 cursor-poiter ml-2 mb-2 ">
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
    </>
  );
}

Help.layoutProps = {
  Layout: MainLayout,
};

export default Help;
