require("dotenv").config();
const http = require("http");
const dbModule = require('./config/db');
const {getPort} = require("./config/utilities");
const configServer = require("./config/app-config");

/////////////////////////////////////////////////////////////////////////
const port = getPort();
let server;

/////////////////////////////////////////////////////////////////////////
dbModule.connectToDB();

/////////////////////////////////////////////////////////////////////////
let app = configServer();
app.set("port", port);
server = http.createServer(app);
server.on("listening", onListening);
server.listen(port);


/////////////////////////////////////////////////////////////////////////
function onListening() {
    const addr = server.address();
    const bind = typeof addr === "string" ? `pipe ${addr}` : `${addr.port}`;
    console.log(`[+] Server listening on localhost:${bind}`);
}