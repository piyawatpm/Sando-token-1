import React from "react";

const Staking = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10 px-20">
<<<<<<< HEAD
  
      <h1 className="uppercase text-3xl font-bold text-white mb-5">
=======
      <h1 className="uppercase text-3xl font-bold text-[#FF0090] mb-5">
>>>>>>> 37b53202357711306e2e6e0e2eebee4d620e9dd9
        staking
      </h1>

      <div
        className="relative overflow-hidden mx-auto w-full container mb-10  bg-cover bg-center rounded-3xl md:w-1/2 lg:w-full"
        style={{
          backgroundImage: `url(${"./images/staking/staking.png"})`,
        }}
      >
        <div className="flex flex-col content-center justify-center items-center p-10">
          <div className=" space-x-3  py-3 bg-[#292051] rounded-full mb-5 w-96 text-center">
            <a
              href=""
              className="cursor-pointer bg-[#707070] hover:bg-[#565656] text-white text-xl font-bold py-2 px-14 rounded-3xl shadow-md shadow-gray-800"
            >
              Stake
            </a>

            <a
              href=""
              className=" cursor-pointer bg-[#ffb700] hover:bg-[#fb8700] text-black text-xl font-bold py-2 px-14 rounded-3xl shadow-md shadow-gray-800"
            >
              Unstake
            </a>
          </div>
<<<<<<< HEAD
        
         
          <div className="text-center mt-5 mb-5">
          <h2 className="text-base text-white font-semibold">
            1 Sando token = 0.0009usd
          </h2>
          <img
            src="/images/web/sando-token-logo.png"
            alt="sando logo"
            className="flex absolute  py-1 px-1 w-10 "
          />
   
          <input
            className="text-black  rounded-3xl py-3 pl-10 pr-5  placeholder:text-slate-400 shadow-sm focus:outline-none text-xs w-96"
            type="text"
            name="sando"
          />
           
         </div>
        
          <div className="text-center mt-10">
            <a
              href="/comingsoon"
              className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-xl font-bold py-2 px-10  rounded-full"
            >
              Staking Now
            </a>
          </div>
       
        </div>
      </div>

=======

          <div className="relative space-y-1 mt-5 mb-5 text-white px-10">
            <h2 className="uppercase text-lg text-white font-medium">
              1 Sando token = 0.0009 usd
            </h2>
            <div className="flex">
              <input
                type="text"
                placeholder=""
                className="block text-sm py-4 px-3 mt-2 rounded-full w-96 border outline-none h-10"
              />
              <img
                src="/images/web/sando-token-logo.png"
                alt="sando logo"
                className="absolute w-10 float-right py-2 right-12"
              />
            </div>
          </div>

          <a
            href="/learnmore"
            className="mt-5 w-96 inline-block text-center px-6 py-2 bg-[#FF0090] hover:bg-[#cc0274] text-white text-xl font-bold font-bold leading-normal rounded-full shadow-md hover:shadow-lg focus:bg-[#cc0274] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#cc0274] active:shadow-lg transition duration-150 ease-in-out"
          >
            Learn More
          </a>

          <a className="mt-5 w-96 inline-block text-center px-6 py-2 bg-[#ffb700] hover:bg-[#fb8700] text-black text-xl font-bold font-bold leading-normal rounded-full shadow-md hover:shadow-lg focus:bg-[#fb8700] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#fb8700] active:shadow-lg transition duration-150 ease-in-out">
            Staking Now
          </a>
        </div>
      </div>
>>>>>>> 37b53202357711306e2e6e0e2eebee4d620e9dd9
    </div>
  );
};

export default Staking;
