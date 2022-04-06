import MainLayout from "src/layout/MainLayout";

import GasfeeMarketplace from '@/components/pages/gasfee/gasfee';
function Gasfee(): JSX.Element {
    return (
        <>
            <GasfeeMarketplace/>
        </>
    )
}

Gasfee.layoutProps = {
    Layout: MainLayout,
}

export default Gasfee;