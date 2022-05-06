import React from "react";

const Address = (): JSX.Element => {
  return (
    <div
      className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container px-20"
      style={{
        backgroundImage: `url(${"./images/web/bg-world-change-top.png"})`,
      }}
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
          <h1 className="uppercase text-4xl text-transparent textgradient font-black cursor-pointer mt-2 ml-2 mb-2">
            Sando Token Address
          </h1>
        </div>
       

        <table className="table-fixed">
          <tbody>
            <tr>
              <td className="text-white text-lg font-normal">Name </td>
              <td className="text-white text-lg font-normal px-3"> : </td>
              <td className=""> 
              <span className="textgradient-blue text-transparent text-lg font-medium"> SANDO </span>
              </td>
            </tr>
            <tr>
              <td className="text-white text-lg font-normal">Symbol</td>
              <td className="text-white text-lg font-normal px-3"> : </td>

              <td className=""> 
              <span className="textgradient-blue text-transparent text-lg font-medium"> SANDO </span>
              </td>            </tr>
            <tr>
              <td className="text-white text-lg font-normal">Decimal</td>
              <td className="text-white text-lg font-normal px-3"> : </td>

              <td className=""> 
              <span className="textgradient-blue text-transparent text-lg font-medium"> 18 </span>
              </td>            </tr>
            <tr>
              <td className="text-white text-lg font-normal">Token Standard</td>
              <td className="text-white text-lg font-normal px-3"> : </td>

              <td className=""> 
              <span className="textgradient-blue text-transparent text-lg font-medium"> ERC-20 </span>
              </td>
            </tr>
            <tr>
              <td className="text-white text-lg font-normal">Address</td>
              <td className="text-white text-lg font-normal px-3"> : </td>

              <td className="flex textgradient-blue text-lg font-medium  hover:underline"><a href="" className="underline flex">0x98401e4314E069c06078e76D62CA4141621BF414</a> <img src="/images/icons/address-icon.svg" alt="address icon" className="flex w-4 ml-2" /> </td>
            </tr>
          </tbody>
        </table>
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
