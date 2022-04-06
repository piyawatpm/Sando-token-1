import React from 'react'
import MainLayout from 'src/layout/MainLayout'

function Coming(): JSX.Element {
  return <div className="relative overflow-hidden mx-auto w-full container py-5 mb-10">
  <div className="flex flex-col justify-center items-center py-20">
   
     <img src="/images/sando-logo.png" alt="sando logo image" className="w-48 mt-20 mb-10"/>
    <h1 className="relative text-white text-5xl font-bold mb-20">Coming Soon ...</h1>
  </div>
  </div>
}
Coming.layoutProps = {
  Layout: MainLayout,
}

export default Coming
