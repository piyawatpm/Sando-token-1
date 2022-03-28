import React from 'react'
import type { ReactNode } from 'react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

type T = {
  children: ReactNode
}

function MainLayout({ children }: T): JSX.Element {
  return (
    <div className="wraper">
      <Header />
      {children}
      <Footer/>
    </div>
  )
}

export default MainLayout
