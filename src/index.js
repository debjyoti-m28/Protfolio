const express = require('express');
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const connetToMongoDB = require("./config/database");

const startServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    connetToMongoDB();

    app.listen(PORT, ()=> {
       console.log(`Server is running on ${PORT}`);
    });
}

startServer();