import react from 'react'

const Activity = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10 px-20">
      <h1 className="text-3xl font-bold text-white"> Your Activity</h1>

      {/* 
      <div className="flex flex-col justify-center items-center">
        <div className="container">
          <table className="min-w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5 mb-40">
            <thead className="text-white">
              <tr className="bg-pink-600 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-center">Date</th>
                <th className="p-3 text-center">Event</th>
                <th className="p-3 text-center">Price</th>
              </tr>
            </thead>
            <tbody className="flex-1 sm:flex-none">
            <tr className=" flex flex-no wrap sm:table-row mb-2 sm:mb-0 text-white text-center bg-black ">
                <td className=" col-span-full  border-black border hover:bg-gray-800 p-3 ">
                  <a
                    href="/"
                    className="mt-10  bg-[#FF0090] hover:bg-[#CC0073] text-white text-center text-sm font-bold py-2 px-10 rounded-full"
                  >
                    Connect Wallet
                  </a>
                </td>
                <td className=" col-span-full  border-black border hover:bg-gray-800 p-3 "></td>

                <td className=" col-span-full  border-black border hover:bg-gray-800 p-3 "></td>
              </tr>
        </tbody>
          </table>
        </div>
      </div>
 */}

      <div className="grid grid-cols-3 gap-4 bg-[#ff0090] text-white text-center font-bold mt-10 rounded-[20px] mb-20">
        <div className="mt-5">Date</div>
        <div className="mt-5">Event</div>
        <div className="mt-5">Price</div>
        <div className="col-span-3 bg-[#0F0F0F] text-center h-50 py-20">
          <a
            href="/wallets"
            className="mt-10  bg-[#FF0090] hover:bg-[#CC0073] text-white text-center text-sm font-bold py-2 px-10 rounded-full"
          >
            Connect Wallet
          </a>
        </div>
      </div>
    </div>
  )
}

export default Activity
