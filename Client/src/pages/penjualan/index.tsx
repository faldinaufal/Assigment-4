import React from 'react'
import { Header, Navigation, PenjualanObat } from '../../components'

const halamanPenjualan = () => {
  return (
    <div>
      <Header/>
      <div id='content'>
        <h1>Input Penjualan</h1>
        <PenjualanObat/>
      </div>
      <Navigation/>
    </div>
  )
}

export default halamanPenjualan 