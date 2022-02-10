require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')

const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static('public'))

app.get('/', (req, res) => {
   
    console.log('hit')
    rollbar.log('Someone hit the server')


    res.sendFile(path.join(__dirname, '../public/main.html'))
})




const port = process.env.PORT || 5050

app.listen(port, () => console.log(`server running on ${port}`))