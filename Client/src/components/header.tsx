import React from "react";
import img1 from "../assets/images/logo.png"

const headerComponent:React.FC = () => {
  return (
    <header id="headerBar">
      <div className="content">
        <img src={img1}/>
        <h1>Klinik Medika</h1>
      </div>
    </header>
  )
}

export default headerComponent;