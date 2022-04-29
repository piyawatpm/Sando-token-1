import React from 'react'
import MainLayout from 'src/layout/MainLayout'

import Banner from '@/components/pages/staking/Banner'
import Overall from '@/components/pages/staking/Overall'
import Stakings from "@/components/pages/staking/Staking"
import Activity from '@/components/pages/staking/Activity'
function Staking(): JSX.Element {
  return (
    <div>
      <Banner />
      <Overall />
      <Stakings />
      <Activity/>
    </div>
  )
}
Staking.layoutProps = {
  Layout: MainLayout,
}

export default Staking
