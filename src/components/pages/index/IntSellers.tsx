import React from 'react';


type SellerList = {
  name: string
  price: string
  image: string
}

const IntSellers = (): JSX.Element => {
  const SellerLists = [
    {
      name: 'Seller001',
      price: '0.001 ETH',
      image: '/images/author/author-1.jpg',
    },
    {
      name: 'Seller002',
      price: '0.007 ETH',
      image: '/images/author/author-1.jpg',
    },

    {
      name: 'Seller003',
      price: '0.008 ETH',
      image: '/images/author/author-2.jpg',
    },

    {
      name: 'Seller004',
      price: '0.008 ETH',
      image: '/images/author/author-3.jpg',
    },

    {
      name: 'Seller005',
      price: '0.001 ETH',
      // eslint-disable-next-line sonarjs/no-duplicate-string
      image: '/images/author/author-4.jpg',
    },
    {
      name: 'Seller006',
      price: '0.002 ETH',
      image: '/images/author/author-4.jpg',
    },
    {
      name: 'Seller006',
      price: '0.002 ETH',
      image: '/images/author/author-4.jpg',
    },
    {
      name: 'Seller006',
      price: '0.002 ETH',
      image: '/images/author/author-4.jpg',
    },
    {
      name: 'Seller006',
      price: '0.002 ETH',
      image: '/images/author/author-4.jpg',
    },
    {
      name: 'Seller006',
      price: '0.002 ETH',
      image: '/images/author/author-4.jpg',
    },
    {
      name: 'Seller006',
      price: '0.002 ETH',
      image: '/images/author/author-4.jpg',
    },
    {
      name: 'Seller006',
      price: '0.002 ETH',
      image: '/images/author/author-4.jpg',
    },
  ] as SellerList[]
  return (
    <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10 ">
      <div className='col-span-12 grid lg:grid-cols-4 md:grid-cols-2 gap-5 mb-3 mx-10 '>
        {SellerLists.map((SellerList, index) => (


          // eslint-disable-next-line react/no-array-index-key
          <div className="group flex items-center " key={`key-SellerList-${index}`}>
            <img className='shrink-0 h-12 w-12 rounded-full hover:border-4 hover:border-white' src={SellerList?.image} alt={`SellerList pic ${SellerList?.name}`} />
            <div className="ltr:ml-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute -ml-3 mt-7 h-5 w-5 fill-blue-500" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-bold text-white  pl-3  ">{SellerList.name}</span><br />
              <span className="text-white  pl-3 ">{SellerList.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// eslint-disable-next-line import/no-default-export
export default IntSellers
