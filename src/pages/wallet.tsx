import React from 'react'
import MainLayout from 'src/layout/MainLayout'

import Key from "@/components/pages/wallet/key"
import Detail from "@/components/pages/wallet/detail"
import Metamask from "@/components/pages/wallet/get-a-wallet/metamask"
import Trust from "@/components/pages/wallet/get-a-wallet/trust"
import Phantom from "@/components/pages/wallet/get-a-wallet/phantom"


function Wallet(): JSX.Element {
    return <>
    <div className="relative overflow-hidden mx-auto w-full  bg-cover bg-center container px-20" 
    style={{ backgroundImage: `url(${'./images/web/bg-wallet.png'})` }}
    >
    <Key/>
    <Detail/>
    <Metamask />
    <Trust/>
    <Phantom/>
    </div>
    </>
}

Wallet.layoutProps = {
    Layout: MainLayout,
}

export default Wallet