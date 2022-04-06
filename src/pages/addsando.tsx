import MainLayout from 'src/layout/MainLayout'

import Adding from "@/components/pages/add/adding"
function AddSando(): JSX.Element {
    return (
      <>
        <Adding/>
      </>
    )
  }
  
  AddSando.layoutProps = {
    Layout: MainLayout,
  }
  
  export default AddSando