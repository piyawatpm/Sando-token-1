import React from 'react'
import MainLayout from 'src/layout/MainLayout'

import MetamaskPayment from "@/components/pages/buy/metamask"
function Metamask(): JSX.Element {
  return <div className="max-w-screen-xl	mx-auto">
    <MetamaskPayment />
  </div>
}
Metamask.layoutProps = {
    Layout: MainLayout,
  }

  
export default Metamask
