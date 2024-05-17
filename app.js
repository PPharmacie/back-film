const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require('./src/conf/sync.db');

//Configuration de express
app.use(express.json());


app.listen(port, ()=>{
    console.log(`Serveur démarré sur le port ${port}`);
});