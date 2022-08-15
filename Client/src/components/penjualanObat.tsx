import axios from "axios";
import React, { useEffect, useState } from "react";

const PenjualanObat:React.FC = () => {

  const [medicine, setMedicine] = useState<any[]>([])
  const [supplie, setSupplie] = useState("")

  useEffect(( ) => {
    getMedicine();
  },[])

  const getMedicine = async () => {
    const response = await axios.get('http://localhost:3001/medicine');
    setMedicine(response.data)
  }

  const getSupplie = {
    
  }

  return (
    <div className="inputPenjualan">
      <table className="tablePenjualan">
        <thead>
          <th>Nama Obat</th>
          <th>Stok Tersedia</th>
          <th>Jumlah Obat</th>
          <th>Aksi</th>
        </thead>
        <tbody>
          {medicine && medicine.map((list, index) => (
            <tr>
              <td>
                <select className="SelectBox">
                    <option value={list.namaObat}>{list.namaObat}</option>
                </select>
              </td>
              <td>{list.jumlahObat}</td>
              <td><input type="text" className="inputBox"/></td>
              <td><button>Submit</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default PenjualanObat