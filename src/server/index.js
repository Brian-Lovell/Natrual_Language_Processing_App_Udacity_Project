//Requirments
const dotenv = require('dotenv')
dotenv.config()
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fetch = require('node-fetch')

//API 
const apiURL = 'https://api.meaningcloud.com/sentiment-2.1/'

const formdata = new FormData()
formdata.append("key", process.env.API_KEY)
// formdata.append("txt", "")
formdata.append("lang", "en")

const requestOptions = {
    method: 'POST',
    body: formdata,
    redirect: 'follow'
}

// Start Express
const app = express()
const port = 2076

app.listen(port, function () {
    console.log(`Listening on port ${port}!`)
})

//Parse URL-encoded data with querystring library
app.use(bodyParser.urlencoded({ extended: false }))
//  Parse application/json
app.use(bodyParser.json())

// Enable All CORS Requests
app.use(cors())

//Initialize website
app.use(express.static('dist'))

//Store API respone data

let apiData = {};

// Get Routes
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})



// Post route 
app.post('/analyze', async function (req, res) {
    formText = req.body.url
    formdata.append("txt", formText)
    fetch(apiURL, requestOptions)
  .then(response => ({
    status: response.status, 
    body: response.json()
  }))
  .then(({ status, body }) => console.log(status, body))
  .catch(error => console.log('error', error));
})