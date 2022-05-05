import React from "react";

const Address = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container px-20" 
    style={{ backgroundImage: `url(${'./images/web/bg-world-change-top.png'})` }}
    >
       <div className="text-white py-10 px-10  shadow-xl z-20 mt-20">
             
              <div className="w-full my-5 flex justify-center items-center mt-20">
              <hr className="text-white w-full" />
             
            
            </div>
            <div className="flex">
                {/* 
                  <img
                    src="/images/sando-logo.svg"
                    alt="sando logo"
                    className="w-12 h-12"
                  />
                  */}
                  <h1 className="uppercase text-4xl text-[#FF0090] font-black cursor-pointer mt-2 ml-2 mb-2">
                    Sando Token Address
                  </h1>
                 
              </div>
              <div className="flex">
                  <h3 className="text-white text-lg font-normal">
                  Name    
                  </h3>
                  <p className="ml-7 text-white text-lg font-extrabold">
                  : SANDO
                  </p>
                </div>
                <div className="flex">
                  <h3 className="text-white text-xl font-normal">Symbol</h3>
                  <p className="ml-2 text-white text-lg font-extrabold">
                  : SANDO
                  </p>
                </div>
                <div className="flex">
                  <h3 className="text-white text-lg font-normal">
                  Decimal
                  </h3>
                  <p className="ml-2 text-white text-lg font-medium"> : 18</p>
                </div>
                <div className="flex">
                  <h3 className="text-white text-lg font-normal">
                  Address 
                  </h3>
                  <p className="ml-2 text-white text-lg font-medium">:</p>
                </div>
                </div>
                <div className="text-white px-10 mb-20  shadow-xl z-20">
             
             <div className="w-full flex justify-center items-center">
             <hr className="text-white w-full" />
            
           
           </div>
           </div>
               
      </div>
  
  );
};

export default Address;
