require('dotenv').config()


const textapi = new meaningcloud({   
    application_key: process.env.API_KEY
  });

const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!')
})



