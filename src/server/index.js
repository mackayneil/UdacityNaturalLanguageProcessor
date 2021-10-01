require('dotenv').config()

const myApiKey = process.env.API_KEY;

const path = require('path');
const express = require('express');
const cors = require('cors')
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





app.get('/article', async (request, response) => {
    const url = "https://api.meaningcloud.com/sentiment-2.1",         
          lang = "en";

        const api_url = `${url}?key=${myApiKey}&txt=helloworld&lang=${lang}`;     
    
        const fetch_response = await fetch(api_url);
        const json = await fetch_response.json();
        response.json(json)
    })