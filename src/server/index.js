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

// Assigns the user input to a variable
let userInput
app.post('/api', (request, response) => { 
    userInput = request.body.url;
})

// Makes the API request on the server side
app.get('/article', async (request, response) => {
    const url = "https://api.meaningcloud.com/sentiment-2.1";
    const api_url = `${url}?key=${myApiKey}&url=${userInput}&lang=en`;  
   
    const fetch_response = await fetch(api_url);
    const json = await fetch_response.json();
    response.json(json)
})

