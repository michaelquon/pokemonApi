const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/pokemonApi/dist' ));
const path = require('path');
const port = 8000;


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});