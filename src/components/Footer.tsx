import Link from 'next/link'
import React from 'react'

const Footer = (): JSX.Element => {
  return (
    <footer
      className="bg-cover bg-no-repeat bg-[#0f0f0f]"
      // style={{ backgroundImage: `url(${'./images/Footer.svg'})` }}
    

    >
      <div className="relative mx-auto container pb-5">
        <div className="grid grid-rows-2 mx-10 pt-10 pb-5">
          <div className="grid grid-cols-4 gap-2 px-5">
            <div className="col-span-2 ">
              <div className="flex">
              <img src="/images/sando-logo.png" alt="sando logo image" className="w-20 mt-5"/>
              <div>
           
              <img src="/images/sando-token-text.png" alt="sando logo text" className="h-1/4 mt-6 ml-3"/>
             
              <p className="text-white font-normal text-sm ml-3 mt-2">Currency used for our partners platforms : <br /> Oceansky, Sandora and Metasando.</p>
              </div>
              </div>
       
            </div>

            <div className="col-span-2  ml-12">
            <h1 className="mt-5 mb-3 font-bold text-white ml-10 px-10">
                Join the community
              </h1>
            <div className="flex gap-3 ml-10 px-10">
           
                <Link href="https://facebook.com/sandotoken">
                  <a target="_blank">
                    <img
                      className="h-10 w-10 opacity-75 hover:opacity-100"
                      src="/images/social_media/FB.png"
                      alt="facebook"
                    />
                  </a>
                </Link>

                <Link href="https://twitter.com/@Sando_Token" >
                <a target="_blank">
                  <img
                    className="h-10 w-10 opacity-75 hover:opacity-100"
                    src="/images/social_media/Twitter.png"
                    alt="Twitter"
                  />
                </a>
                </Link>
               <Link href="https://instagram.com/Sandotoken">
                <a  target="_blank"> 
                  <img
                    className="h-10 w-10 opacity-75 hover:opacity-100"
                    src="/images/social_media/Instagram.png"
                    alt="Instagram"
                  />
                </a>
                </Link>
                <Link href="https://youtube.com">
                <a target="_blank">
                  <img
                    className="h-10 w-10 opacity-75 hover:opacity-100"
                    src="/images/social_media/Youtube.png"
                    alt="Youtube"
                  />
                </a>
                </Link>
                <Link  href="https://tiktok.com/@sandotoken">
                <a target="_blank">
                  <img
                    className="h-10 w-10 opacity-75 hover:opacity-100"
                    src="/images/social_media/TikTok.png"
                    alt="TikTok"
                  />
                </a>
               </Link>
               <Link href="https://linkedin.com/">
                <a  target="_blank">
                  <img
                    className="h-10 w-10 opacity-75 hover:opacity-100"
                    src="/images/social_media/Linkedin.png"
                    alt="Linkedin"
                  />
                </a>
                </Link>
                <Link href="https://discord.com/channels/955559445843284009/955559446585684020">
                <a target="_blank">
                  <img
                    className="h-10 w-10 opacity-75 hover:opacity-100"
                    src="/images/social_media/Discord.png"
                    alt="Discord"
                  />
                </a>
                </Link>
                <Link href="https://t.me/+hk4UEOF_HGdlNDI1">
                <a target="_blank">
                  <img
                    className="h-10 w-10 opacity-75 hover:opacity-100"
                    src="/images/social_media/Telegram.png"
                    alt="Telegram"
                  />
                </a>
                </Link>
              </div>
              </div>
            {/* 
            <div className="">
              <h1 className="mt-5 mb-3 font-bold text-white">Newsletter</h1>
              <p className="text-sm mb-3 text-white">
                Signup for our newsletter to get the latest news in your inbox.
              </p>
              <label className="relative block flex">
                <input
                  className=" placeholder:italic placeholder:text-slate-400 placeholder:pl-3 block bg-white w-64 rounded-tl-[20px] rounded-bl-[20px] py-2 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Enter your email address"
                  type="text"
                  name="email"
                />
                <div className="relative">
                  <input className=" bg-[#FF0090] hover:bg-[#CC0274] w-16 font-bold py-2 px-10 rounded-tr-[20px] rounded-br-[20px]" />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 fill-white text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </label>
              <p className="text-sm mb-3 text-white">
                Your email is safe with us. We don't spam.
              </p>
            </div>

            */}
          </div>
          <div className="grid grid-cols-4 gap-4 mb-5 px-10 ml-8 mt-2">
            <div className=" text-white ml-10">
              <h5 className="text-[#ff0090] text-base font-bold pb-1">Resources</h5>
              <ul>
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/partners">
                    Partners
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/comingsoon">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/gasfee">
                    Gas Fees Token
                  </a>
                </li>
               
              </ul>
            </div>
            <div className="text-white ml-20">
              <h5 className="text-[#ff0090] text-base font-bold pb-1">Token</h5>
              <ul>
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/">
                    Sando
                  </a>
                </li>
                <li>
                  <a className="font-normaltext-base  hover:text-gray-200" href="/sale">
                    Tokensale
                  </a>
                </li>
                
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/">
                    Buy
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/staking">
                    Staking
                  </a>
                </li>

              </ul>
            </div>
            <div className="text-white ml-20">
              <h5 className="text-[#ff0090] text-base font-bold pb-1">About</h5>
              <ul>
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/">
                    Company
                  </a>
                </li>
                <li>
                  <a className="font-normal text-base hover:text-gray-200" href="/">
                    Contact us
                  </a>
                </li>

              </ul>
            </div>
            <div className="text-white ml-20">
              <h5 className="text-[#ff0090] font-bold text-base pb-1">Support</h5>
              <ul>
                <li>
                  <a className="font-normal hover:text-gray-200 text-base" href="/">
                    Help Center
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        
        <div className="text-white text-sm mx-10 ml-20">
          <span>Copyright &copy; 2022 SANDORA PTY LTD, All rights reserved</span>
        </div>
      
      </div>
   
    </footer>
  )
}
export default Footer
