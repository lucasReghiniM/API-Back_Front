//chamadas
const cors = require('cors');
const axios = require('axios');
const express = require('express');
const app = express();



app.use(cors());

//rota basica
app.get('/', async(req, res) => {

    try {
        //response
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')

        return res.json(data)

    } catch (error) {
        console.error(error)
    }
    
});

//porta da api
app.listen('4567');

//console: node server.js