import React from "react";

const Howto = (): JSX.Element => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="relative overflow-hidden mx-auto w-full container px-5 ">
      <div className="flex flex-col justify-center items-center">
        <div className="min-w-full mx-auto bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2">
          <div
            className="relative overflow-hidden mx-auto container flex py-5 mb-10 w-full bg-cover bg-center h-100 rounded-2xl "
            style={{
              backgroundImage: `url(${"./images/web/bg-howto-staking.svg"})`,
            }}
          >
            <div className="md:flex justify-center items-center break-words pr-5">
              <div className="md:shrink-0 px-10 py-5">
                <div className="flex py-5 tracking-wide text-xl text-white font-semibold">
                  <h1 className="uppercase text-transparent textgradient text-4xl font-black mt-10  ">
                    HOW TO STAKE YOUR SANDO ?
                  </h1>
                </div>
                <h1 className="text-xl font-bold text-[#0ECF50] text-justify w-[600px]">
                  Earn rewards while securing SANDO
                </h1>
                <h1 className="text-xl font-light text-white mb-10 py-5 text-justify w-[600px] break-words pr-5">
                  Staking is a public good for the SANDO ecosystem. Any user
                  with any amount of SANDO can help secure the network and earn
                  rewards in the process.
                </h1>
                <div className="flex">
                  <a
                    href="/learnmore"
                    className="cursor-pointer bg-[#FF0090] hover:bg-[#cc0274] text-white text-xl font-bold py-2 px-10 rounded-3xl shadow-md shadow-gray-800"
                  >
                    Learn more
                  </a>

                  <a
                    href="staking"
                    className="ml-5 cursor-pointer bg-[#ffb700] hover:bg-[#fb8700] text-black text-xl font-bold py-2 px-10 rounded-3xl shadow-md shadow-gray-800"
                  >
                    Stake
                  </a>
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
