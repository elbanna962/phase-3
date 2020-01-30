const router = require('express').Router();
const {getDB} = require('../config/db');


router.route('/test')
    .get((req, rep) => {
        rep.send("Banna Says Hi!!")
})


router.route('/fetchRequests')
    .get((req, rep) => {
            var _db = getDB();
            var collection = _db.collection('staff');
            collection.find({"status": "Pending"}).toArray( (err, requests) => {
                    if (err) throw err;
                    return rep.send(requests)
            })
    }
)


module.exports = router;