const getMongoClienUrl = () => {
    return process.env.MONGO_CLIENT_URL || 
    "mongodb://localhost:27017/";
}

/////////////////////////////////////////////////////////////////////////
const getDatabaseName = () => {
    return process.env.DATABASE_NAME || "leaver-app"
}


/////////////////////////////////////////////////////////////////////////
const getPort = () => {
    return normalizePort(process.env.PORT || "4000")
}

// Normalize a port into a number, string, or false.
function normalizePort(val) {

    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }

}

/////////////////////////////////////////////////////////////////////////
module.exports = { getMongoClienUrl,  getDatabaseName, getPort}