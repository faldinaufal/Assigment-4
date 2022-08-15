import React from 'react'
import { Header, Navigation, PenambahanObat } from '../../components'

const Gudang= () => {
  return (
    <div>
      <Header/>
      <div id='content'>
        <h1>Penambahan Stok Obat</h1>
        <PenambahanObat/>
      </div>
      <Navigation/>
    </div>
  )
}

export default Gudang