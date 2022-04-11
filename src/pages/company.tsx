import MainLayout from "src/layout/MainLayout";
function Company(): JSX.Element {
  return (
    <>
      <div className="relative overflow-hidden mx-auto w-full bg-cover bg-center container  mt-20"
       style={{ backgroundImage: `url(${"./images/web/company-bg.png"})` }}
       >
        <div className="flex flex-col   justify-center items-center">
          <div className="relative rounded-xl shadow-md overflow-hidden md:min-w-1/2">
            <div className="md:flex justify-center items-center px-10">
              <div className="md:shrink-0 ml-10 mb-20">
                <div className="flex tracking-wide justify-center items-center w-full  md:w-full">
                <img
                src="./images/partner/sandora.svg"
                alt="sandora"
                className="w-56 mt-4"
              />
             
                </div>
                <h1 className="text-white font-bold text-center">SANDORA PTY LTD</h1>
                <h3 className="text-white text-center">ACN : 658 145 763</h3>
                <div className="flex justify-center items-center">
                <img
                src="./images/sandora-logo.svg"
                alt="sandora-logo"
                className="w-24 mt-4"
              />
               <img
                src="./images/partner/sandora.svg"
                alt="sandora"
                className="w-24 mt-4 "
              />
            <img
                src="./images/partner/oceansky.svg"
                alt="oceansky"
                className="w-24 mt-4 "
              />
               <img
                src="./images/partner/metasando.svg"
                alt="metasando"
                className="w-24 mt-4 "
              />
              
                </div>
              </div>
              <div className="md:shrink-0 px-10 ml-5 py-10 mb-20">
                <div className="flex py-1 tracking-wide text-sm text-white font-semibold">
                  <h1 className="uppercase text-[#FF0090] text-3xl font-black ml-10 mb-10">
                    Company
                  </h1>
                </div>

                <div className="text-white">
                  <h6 className="text-xl font-bold mb-10 ml-10 font-sans">Welcome to Sandora</h6>

                  <p className=" ml-10 font-light text-xl tracking-wide">
                    We are building an ecosystem of products to create a virtual <br />
                    economy as well as creating new experiences to provide new <br />
                    opportunities for growth for both you and your business
                    through <br /> advanced technology that is secure and transparent,
                    and <br /> through a borderless transaction by computers from
                    around the <br /> world that is widely accepted and trusted like
                    blockchain.
                  </p>
                  <p className="mt-10 ml-10 font-light text-xl tracking-wide">
                    All of this is not for the future but for the present that
                    is heading <br /> towards the future and we will grow together.
                  </p>
                </div>

                <div className="flex tracking-wide text-xl text-white font-semibold ml-10 mt-20 mb-20">
            
                  <a
                     href="/partners"

                    className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-lg font-bold py-2 px-10 rounded-xl"
                  >
                    Learn more our partners
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Company.layoutProps = {
  Layout: MainLayout,
};

export default Company;
