const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("../routes/router");
const cors = require("cors");

/////////////////////////////////////////////////////////////////////////

const configServer = () => {

    const server = express();
    const API_PATH = "/api";

    // cors config
    server.use(cors());
    server.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // parses incoming requests with JSON payloads
    server.use(express.json({limit: "50mb"}))

    // HTTP request logger
    server.use(morgan("dev"));

    // body-parser setup
    server.use(bodyParser.urlencoded({
        limit: "50mb",
        parameterLimit: 1000 * 1000 * 50,
        extended : true
    }))

    server.use(bodyParser.json({limit: "50mb"}));

    // routers usage
    server.use(`${API_PATH}/wf`, router);

    return server;

}

/////////////////////////////////////////////////////////////////////////
module.exports = configServer;