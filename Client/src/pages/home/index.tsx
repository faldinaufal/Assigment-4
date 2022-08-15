import React from 'react'
import { ContainerBox, Header, Navigation } from '../../components'

const halamanUtama = () => {
  return (
    <div> 
      <Header/>
      <div id='content'>
        <h1>Data Persediaan Obat Klinik Medika</h1>
        <ContainerBox/>
      </div>
      <Navigation/>
    </div>
  )
}

export default halamanUtama