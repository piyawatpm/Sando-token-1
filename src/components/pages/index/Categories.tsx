import React from 'react'

const Categories = (): JSX.Element => {
  return (

    <div className="relative overflow-hidden mx-auto w-full container flex py-5 mb-10 ">
      <div className='grid grid-rows-2 ml-10 mr-10'>
        <div className='grid lg:grid-cols-8 md:grid-cols-2 gap-6 mb-5'>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FF9100] hover:bg-[#e68300] rounded-lg '>
            <img className=' px-6 pt-3' src="./images/categories/Art.PNG" alt="Art" />
            <span className='flex justify-center text-white '>Art</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#A000FF] hover:bg-[#9000e6] rounded-lg '>
            <img className=' px-6 pt-3' src="./images/categories/cards.PNG" alt="Cards" />
            <span className='flex justify-center text-white '>Cards</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#00BBFF] hover:bg-[#00a8e6] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/games.PNG" alt="Games" />
            <span className='flex justify-center text-white '>Games</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#00AD3E] hover:bg-[#009435] rounded-lg '>
            <img className=' px-6 pt-3' src="./images/categories/sports.PNG" alt="Sports" />
            <span className='flex justify-center text-white '>Sports</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FFCC09] hover:bg-[#efbd00] rounded-lg '>
            <img className=' px-6 pt-3' src="./images/categories/memes.PNG" alt="Memes" />
            <span className='flex justify-center text-white '>Memes</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FF0013] hover:bg-[#e60011] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/fashion.PNG" alt="Fashion" />
            <span className='flex justify-center text-white '>Fashion</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#0045FF] hover:bg-[#003ee6] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/ticketing.PNG" alt="Ticketing" />
            <span className='flex justify-center text-white '>Ticketing</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FF0C76] hover:bg-[#f20069] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/music.PNG" alt="Music" />
            <span className='flex justify-center text-white'>Music</span>
          </a>
        </div>
        <div className='grid lg:grid-cols-8 md:grid-cols-2 gap-6 mb-5'>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#00AD3E] hover:bg-[#009435] rounded-lg'>
            <img className='px-6 pt-3' src="./images/categories/virtual-worlds.PNG" alt="virtual-world" />
            <span className='flex justify-center text-white'>Virtual World</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FF0013] hover:bg-[#e60011] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/domain-name.PNG" alt="Domain Name" />
            <span className='flex justify-center text-white'>Domain Name</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#0045FF] hover:bg-[#003ee6] rounded-lg'>
            <img className='px-6 pt-3' src="./images/categories/collectibles.PNG" alt="Collectibles" />
            <span className='flex justify-center text-white '>Collectibles</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FF0C76] hover:bg-[#f20069] rounded-lg'>
            <img className='px-6 pt-3' src="./images/categories/metaverse.PNG" alt="Metaverse" />
            <span className='flex justify-center text-white '>Metaverse</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#00BBFF] hover:bg-[#00a8e6] rounded-lg'>
            <img className='px-6 pt-3' src="./images/categories/Ai Arts.PNG" alt="Ai Arts" />
            <span className='flex justify-center text-white '>Ai Arts</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FFCC09] hover:bg-[#efbd00] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/Photography.PNG" alt="Photography" />
            <span className='flex justify-center text-white '>Photography</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#A000FF] hover:bg-[#9000e6] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/tiktok.PNG" alt="Tik Tok" />
            <span className='flex justify-center text-white '>Tik Tok</span>
          </a>
          <a href='/' className='lg:h-32 lg:w-32 md:h:40 md:w-40 bg-[#FF9100] hover:bg-[#e68300] rounded-lg'>
            <img className=' px-6 pt-3' src="./images/categories/Hologram.PNG" alt="Hologram" />
            <span className='flex justify-center text-white '>Hologram</span>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Categories
