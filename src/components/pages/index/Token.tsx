import react from 'react'

const Token = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">
      {/*  
    <div className="flex flex-col justify-center items-center">
    <img
          src="/images/web/sando-token-logo.png"
          alt="Sando logo"
          className="w-32 md:w-48 lg:w-60 mt-20"
        />

        <h1 className="block border border-none rounded-full py-4 px-12 text-3xl font-bold text-black bg-amber-400 text-center">
          SANDO Token
        </h1>

        <h1 className="text-xl font-bold text-white text-center  mt-10 mb-20">
          Sando tokens are exchange and utility tokens based on ERC-20 within our
          <br /> ecosystem used for crowdfunding to build our company operations and
          platforms
        </h1>
      </div>
      */}
      <div className="flex flex-col justify-center items-center">
        <div className="min-w-full mx-auto bg-black rounded-xl shadow-md overflow-hidden md:min-w-1/2 px-10">
          <div
            className="relative overflow-hidden mx-auto container flex py-5 mb-10 w-full bg-cover bg-center h-100 md:w-1/2 lg:w-full"
            style={{ backgroundImage: `url(${'./images/web/bg-token.png'})` }}
          >
            <div className="md:flex justify-center items-center">
              <div className="md:shrink-0 px-10 py-5">
                <div className="flex py-5 tracking-wide text-xl text-white font-semibold px-10">
                  <h1 className="uppercase text-[#FF0090] text-4xl font-black mt-10  ">
                    SANDO Token
                  </h1>
                </div>

                <h1 className="text-xl font-light text-white mb-10 py-5 px-10">
                  Sando tokens are exchange and utility
                  tokens  <br /> based on the ERC-20 standard use for crowdfunding <br /> within our 
                  ecosystem to build our company <br /> operations and platforms.
                 
                </h1>
                <a
                  href="/sando-details"
                  className="bg-[#FF0090] hover:bg-[#cc0274] text-white text-md font-bold py-2 px-8 rounded-full ml-10"
                >
                  SANDO Detail
                </a>
                <div className="mt-8 mb-20">
                <a
                  href="/add-sando"
                  className="bg-[#ffb700] hover:bg-[#fb8700] text-black text-md font-bold py-2 px-10 rounded-full ml-10"
                >
                  Add SANDO
                </a>
                </div>
              </div>
   {/* 
              <div className="md:shrink-0 ml-20">
                <div className="flex tracking-wide w-full  md:w-full">
               
                <img
                  src=""
                  alt="Sando logo"
                  className="w-32 md:w-48 lg:w-60"
                />
               
                </div>
              </div>
               */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Token
