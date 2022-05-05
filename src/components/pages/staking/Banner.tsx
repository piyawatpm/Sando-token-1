import React from "react";

const Banner = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="uppercase text-4xl text-[#FF0090] font-bold py-5 mb-10">
          Staking
        </h1>
        <div className="min-w-full mx-auto bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2 px-20">
          <div
            className="relative overflow-hidden mx-auto w-full container flex py-5 mb-10  bg-cover bg-center md:w-1/2 lg:w-full"
            style={{ backgroundImage: `url(${"./images/staking/banner.png"})` }}
          >
            <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 px-10 ml-10">
                <div className="flex py-1 tracking-wide text-xl font-semibold">
                  <h1 className="text-5xl font-bold text-[#FF0090]  mt-20 my-5 mb-20">
                    SANDO TOKEN
                  </h1>
                </div>

                <div className="flex py-1 tracking-wide text-xl text-white font-semibold mb-20">
                  <div className="text-white">
                    <h6 className=" text-2xl font-light ">
                      Total Amount Staked
                    </h6>
                    <h1 className="text-5xl my-5 mb-10 mt-10">

                      1,734,5482.71 SANDO
                    </h1>
                    <h1 className="text-3xl text-[#41FA00] my-5 mt-10 mb-10">
                      APR 3075.75 %
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
