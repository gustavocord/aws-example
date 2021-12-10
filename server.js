const express = require('Express')

const app =express()

app.get('/',(req,res)=> res.send("server found"))

app.listen(3000)
console.log("corriendo en puerto 3000")
