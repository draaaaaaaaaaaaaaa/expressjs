require("dotenv").config()
const express = require('express')

const app = express()


// app.get('/',(req, res) =>{
//     res.send('halo saya belajar express');
//  });
 
//  app.listen(port, function() {
//      console.log(`Server berjalan di localhost:${port}...`)
//  })

//external Configuration

app.get('/', (req, res) =>{
    let status = process.env.PORT == 5000 ? "Production" : "Development"
    res.send(`Hello, anda sedang di halaman : ${status } page.`)
})

app.listen(process.env.PORT, function(){
    console.log(`Anda sedang berjalan menggunakan port : ${process.env.PORT}`)
})

