import react from 'react'

const Distribution = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-20">
      <div className="flex flex-col justify-center items-center">
      

        <h1 className="py-3 px-12 text-4xl uppercase text-center font-black text-[#ff0090]  mb-10">
          SANDO Token Distribution
        </h1>
      
        <div className="container px-20">
          <table className="min-w-full flex flex-row flex-no-wrap sm:bg-black rounded-xl overflow-hidden sm:shadow-lg my-5">
            <thead className="text-white font-bold">
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090]flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
              <tr className="bg-[#ff0090] flex flex-col flex-no wrap sm:table-row rounded-l-xl sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Supply</th>
                <th className="p-3 text-center">% of Total Supply</th>
                <th className="p-3 text-center">Number of Tokens</th>
                <th className="p-3 text-center">Vesting Period</th>
              </tr>
            </thead>
          
          
              <tbody className="flex-1 sm:flex-none bg-cover bg-center text-center"    
             //</table>  style={{ backgroundImage: `url(${'./images/web/distribution-bg.png'})` }}
             >
         
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white">
                <td className="font-roboto hover:text-gray-400 p-3  ml-20    text-left px-10">
                  Airdrop
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 px-10">
                  25%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 px-20">
                  25,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400  px-10">
                  Fully Unlocked
                </td>
              </tr>

              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white bg-[#530E76] font-roboto">
                <td className="hover:text-gray-400 p-3  text-left px-10 ">
                  Seed Sale
                </td>
                <td className="border-y-zinc-900   hover:text-gray-400 p-3">
                  5%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  5,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                 Locked for 8 Months  <br />from date of purchase
                </td>
              </tr>

              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0   text-white font-roboto">
                <td className="border-y-zinc-900  hover:text-gray-400 p-3  text-left px-10 ">
                  Private Sale 
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  20%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3 ">
                  20,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  Locked for 8 months <br /> from date of purchase
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white   bg-[#440B63] font-roboto">
                <td className="border-y-zinc-900  hover:text-gray-400 p-3  text-left px-10 ">
                  Pre-sale (ICO)
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  5%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3 ">
                  5,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  Locked for 90 days  <br />from date of purchase
                </td>
              </tr>

              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white font-roboto">
                <td className="border-y-zinc-900  hover:text-gray-400 p-3  text-left px-10 ">
                  Public Sale (DEX)
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  5%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3 ">
                  5,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                Fully Unlocked
                </td>
              </tr>

              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white  bg-[#360950] font-roboto">
                <td className="border-y-zinc-900 hover:text-gray-400 p-3  text-left px-10 ">
                  Public Sale (CEX)
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  5%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3 ">
                  5,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                Fully Unlocked
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white font-roboto">
                <td className="border-y-zinc-900  hover:text-gray-400 p-3  text-left px-10 ">
                  Marketing
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  5%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3 ">
                  5,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                Fully Unlocked
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white  bg-[#28063C] font-roboto">
                <td className="border-y-zinc-900  hover:text-gray-400 p-3  text-left px-10 ">
                  Pool Liquidity
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  5%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3 ">
                  5,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                Fully Unlocked
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white font-roboto">
                <td className="border-y-zinc-900  hover:text-gray-400 p-3  text-left px-10 ">
                  Founder
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  15%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  15,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                  Locked for 8 months
                </td>
              </tr>
              <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-white bg-[#190329] font-roboto">
                <td className="border-y-zinc-900  hover:text-gray-400 p-3 text-left px-10 ">
                  Reserve
                </td>
                <td className=" border-y-zinc-900  hover:text-gray-400 p-3">
                  10%
                </td>

                <td className="border-y-zinc-900  hover:text-gray-400 p-3 ">
                  10,000,000,000,000
                </td>
                <td className="border-y-zinc-900  hover:text-gray-400 p-3">
                Fully Unlocked
                </td>
              </tr>
            
 
            </tbody>
           
          </table>
        </div>
        </div>
    </div>
     
     
  )
}

export default Distribution