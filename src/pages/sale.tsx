import React from 'react'
import MainLayout from 'src/layout/MainLayout'

import Privatesale from "@/components/pages/sale/Privatesale"

function Sale(): JSX.Element {
  return    <div className="max-w-screen-xl	mx-auto">
    <Privatesale/>
  </div>
}
Sale.layoutProps = {
    Layout: MainLayout,
  }

  
export default Sale
