const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
require('./src/conf/sync.db');
const moviesControllers = require("./src/route.movie");

//Configuration de express
app.use(express.json());
app.use("/movies", moviesControllers);


app.listen(port, ()=>{
    console.log(`Serveur démarré sur le port ${port}`);
});