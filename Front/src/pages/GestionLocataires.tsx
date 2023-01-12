import React from 'react'
import RentersList from '../component/lists/RentersList'
import Navbar from '../component/Navbar'

function LocatairesPage() {

  return (
    <>
      <Navbar data={"GESTION LOCATAIRES"}/>
      <RentersList/>
    </> 
  )
  
}

export default LocatairesPage