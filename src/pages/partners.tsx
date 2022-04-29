import MainLayout from 'src/layout/MainLayout'

import Partner from "@/components/pages/partners/partner"

function Partners(): JSX.Element {
    return (
      <>
       <Partner/>
      
      </>
    )
  }
  
  Partners.layoutProps = {
    Layout: MainLayout,
  }
  
  export default Partners