import React from 'react'
import MainLayout from 'src/layout/MainLayout'

import PaymentMethod from "@/components/pages/buy/payment"
function Payment(): JSX.Element {
  return <div className="max-w-screen-xl	mx-auto">
    <PaymentMethod />
  </div>
}

Payment.layoutProps = {
    Layout: MainLayout,
  }
  
  
export default Payment