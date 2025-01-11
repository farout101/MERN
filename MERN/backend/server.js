const express = require('express')

const app = express()

app.get('/',(req,res) => {
    return res.json({hello :"Hello world"})
})

app.listen(4000,() => {
    console.log("app is running on local host 4000")
})