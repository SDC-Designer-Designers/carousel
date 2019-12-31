const db = require('./newSeed.js')


//   db.connect()
async function poster ({body},cb) {
    try{
        await db.query(`INSERT INTO listings (rooms) values (299)`)
        .then((result) => cb(null,result))
        .catch((err) => cb(err))
    }

catch(ex) {
    console.log(`something went wrong with the post request ${ex}`)
}

finally {
    console.log('client disconnected great success')
}

}

module.exports = poster