import React from "react";

const componentNavigation:React.FC = () => {
  return (
    <div id="navbar">
      <nav>
        <ul>
          <li><a href="/home">Halaman Utama</a></li>
          <li><a href="/penjualan">Penjualan</a></li>
          <li><a href="/gudang">Stok Gudang</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default componentNavigation;