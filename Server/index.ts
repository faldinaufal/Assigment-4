import express from "express"
import mysql from "mysql2"

require("dotenv").config()

const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
})

app.get("/medicine", (req,res) => {
  db.query("SELECT * FROM Obat;", (err,result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
})

app.post("/medicine", (req,res) => {
  const namaObat = req.body.name;
  const jumlahObat = req.body.amount;
  const hargaObat = req.body.price;

  db.query(
    "INSERT INTO Obat (namaObat, jumlahObat, hargaObat) VALUES (?,?,?);",
    [namaObat, jumlahObat, hargaObat],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        res.send(result)
      }
    }
  )
})

app.post("/login",(req,res) =>{
  const username = req.body.username
  const password = req.body.password
  db.query(
    "SELECT * UserData WHERE username = ? AND passowrd = ?;",
    [username,password],
    (err,result) => {
      if (err) {
        return res.send({err:err})
      } 
      if (result) {
        return res.send(result)
      } else {
        return res.send("username atau password tidak ditemukan")
      }
    }
  )
})

app.listen(3001, () => {
  console.log("Server Running on Port 3001")
})