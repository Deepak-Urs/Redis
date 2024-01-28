const express = require('express')
const axios = require("axios")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/photos", async (req,res) => {
    const albumId = req.query.albumId
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/photos", 
    {
        params: {albumId}
    })
    let result = res.json(data)
    console.log(result)
})

app.get("/photos/:id", async (req,res) => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`)
    res.json(data)
})


console.log('Server 3002 is running...');
app.listen(3002)