import React from 'react'
import MainLayout from 'src/layout/MainLayout'

import Buying from "@/components/pages/buy/buying"
function Buy(): JSX.Element {
  return <div className="max-w-screen-xl	mx-auto">
    <Buying />
  </div>
}
Buy.layoutProps = {
    Layout: MainLayout,
  }

  
export default Buy
