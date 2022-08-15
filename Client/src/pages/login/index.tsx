import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import '../../style/style.scss'
import img1 from "../../assets/images/logo.png"

const HalamanLogin = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const login = () => {
    axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) =>{
      console.log(response)
    })
  }

  return (
    <>
      <div className="login">
        <div className='login-container'>
          <div className='head'>
            <img src={img1}/>
            <h2> Klinik Medika</h2>
          </div>
          <h1>Login</h1>
          <div className='input'>
            <input 
              type="text" 
              placeholder="  Username" 
              onChange={(e)=> {
                setUsername(e.target.value)
              }}
              value={username}
            />
            <input 
              type="password" 
              placeholder="  Password" 
              onChange={(e)=> {
                setPassword(e.target.value)
              }}
              value={password}
            />
          </div>
        <button onClick={login}>Login</button>
        </div>
      </div>  
    </>
  )
}

export default HalamanLogin