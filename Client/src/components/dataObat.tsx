import axios from "axios";
import React, { useEffect, useState } from "react";

const DataObat:React.FC = () => {

  const [medicine, setMedicine] = useState<any[]>([])

  useEffect(( ) => {
    getMedicine();
  },[])

  const getMedicine = async () => {
    const response = await axios.get('http://api.tugas.local/medicine');
    setMedicine(response.data)
  }
  return (
    <div className="tableList">
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Jumlah</th>
            <th>Harga</th>
          </tr>
        </thead>
        <tbody>
          {medicine && medicine.map((list, index) => (
            <tr key={list}>
              <td>{index+1}</td>
              <td>{list.namaObat}</td>
              <td>{list.jumlahObat}</td>
              <td>{list.hargaObat}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataObat;