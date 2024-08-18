const express = require('express')
var app = express();
var Port= 3000
app.get('/',(req, res) => {
    app.send('hello word')
 })
 app.listen(Port,()=>{
    console.log(` its runnig in ${Port} `)
 })