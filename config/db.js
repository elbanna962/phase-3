const {MongoClient} = require ('mongodb');
const {getMongoClienUrl, getDatabaseName} = require('./utilities');

/////////////////////////////////////////////////////////////////////////
var _db;
var mongoClientUrl = getMongoClienUrl();
var dbName = getDatabaseName();

/////////////////////////////////////////////////////////////////////////
//  @Method         connectToDB
//  @Description    connects a server to a MongoDB Client
const connectToDB = function(callback) {

    try {
        MongoClient.connect(mongoClientUrl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, (err, client) => {

                // failed to connect to mongodb server
                if(err){
                    console.log("[-] Failed to connect to Mongo Server.");
                    console.log("[Error Details]", err)
                }

                // successfully connected to mongodb server
                console.log("[+] Successfully Connected to MongoDB Client.");

                // connect to the desired database
                _db = client.db(dbName);
                console.log(`[+] Database Connected to: ${_db.namespace}`);
                
                //return _db;
            }
        )
    } catch(e){
        console.log("[Error Details], e")
        return callback(e);
    }
}


//  @Method         getDB
//  @Description    returns a Mongo Database Instance
const getDB = function(){
    return _db;
}

/////////////////////////////////////////////////////////////////////////
module.exports = {connectToDB, getDB};