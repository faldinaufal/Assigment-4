import React, {useState} from 'react'
import axios from 'axios';

const PenambahanObat = () => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState<any>(0)
  const [price, setPrice] = useState<any> (0)

  const addMedicine =  () => {
    axios.post('http://localhost:3001/medicine', {
      name:name, 
      amount:amount,
      price:price
    }).then(() => {
      console.log("Berhasil")
    })

  }

  return (
    <div className='boxContent'>
      <div id='inputBox'>
        <label>Nama Obat:</label>
        <input 
          className='inputObat'
          type="text"
          onChange={(event) => {
            setName(event.target.value)
          }} 
        />
      </div>
      <div id='inputBox'>
        <label>Jumlah Obat:</label>
        <input 
          className='inputJumlahObat'
          type="number"
          onChange={(event) => {
            setAmount(event.target.value)
          }} 
        />
      </div>
      <div id='inputBox'>
        <label>Harga Obat:</label>
        <input
          type="number"
          onChange={(event) => {
            setPrice(event.target.value)
          }} 
        />
      </div>
      <button onClick={addMedicine}>Tambah Obat</button>
    </div>
  )
}

export default PenambahanObat