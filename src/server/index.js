require('dotenv').config()

const myApiKey = process.env.API_KEY;

const path = require('path');
const express = require('express');
const cors = require('cors');
const { response } = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static('dist'));


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})


// Makes the API request on the server side
app.post('/article', async(req, res) => {
    const url = "https://api.meaningcloud.com/sentiment-2.1";
    const response = await fetch(`${url}?key=${myApiKey}&url=${req.body.userInput}&lang=en`);
    try {
        const json = await response.json();
        res.send(json);
      } catch (error) {
        console.log("error", error);
      }
});
