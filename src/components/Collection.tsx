import React from 'react'

const Collection = (): JSX.Element => {
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">

      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 mx-10 text-black'>

        <div className="w-full h-80 ">
          <img src="./images/collections/coll-1.jpg" alt="" className='w-full h-40 overflow-auto rounded-t-lg bg-cover bg-center' />
          <a href='/' className='grid justify-items-center -mt-8'>
            <img src="./images/author/author-1.jpg" alt="" className='absolute  h-16 w-16 rounded-full border-4 border-white hover:border-2 hover:border-white' />
          </a>
          <div className='rounded-b-lg bg-[#EBEBEB] h-40'>
            <div className='pt-20'>
              <h1 className='text-xl font-bold text-center'>Artist Name</h1>
            </div>

          </div>
        </div>

        <div className="w-full h-80 ">
          <img src="./images/collections/coll-2.jpg" alt="" className='w-full h-40 overflow-auto rounded-t-lg bg-cover bg-center' />
          <a href='/' className='grid justify-items-center -mt-8'>
            <img src="./images/author/author-2.jpg" alt="" className=' absolute  h-16 w-16 rounded-full border-4 border-white hover:border-2 hover:border-white' />
          </a>
          <div className='rounded-b-lg bg-[#EBEBEB] h-40'>
            <div className='pt-20'>
              <h1 className='text-xl font-bold text-center'>Artist Name</h1>
            </div>

          </div>
        </div>
        <div className="w-full h-80 ">
          <img src="./images/collections/coll-3.jpg" alt="" className='w-full h-40 overflow-auto rounded-t-lg bg-cover bg-center' />
          <a href='/' className='grid justify-items-center -mt-8'>
            <img src="./images/author/author-3.jpg" alt="" className=' absolute h-16 w-16 rounded-full border-4 border-white hover:border-2 hover:border-white' />
          </a>
          <div className='rounded-b-lg bg-[#EBEBEB] h-40'>
            <div className='pt-20'>
              <h1 className='text-xl font-bold text-center'>Artist Name</h1>
            </div>

          </div>
        </div>
        <div className="w-full h-80 ">
          <img src="./images/collections/coll-4.jpg" alt="" className='w-full h-40 overflow-auto rounded-t-lg bg-cover bg-center' />
          <a href='/' className='grid justify-items-center -mt-8' >
            <img src="./images/author/author-4.jpg" alt="" className=' absolute  h-16 w-16 rounded-full border-4 border-white hover:border-2 hover:border-white' />
          </a>
          <div className='rounded-b-lg bg-[#EBEBEB] h-40'>
            <div className='pt-20'>
              <h1 className='text-xl font-bold text-center'>Artist Name</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection

