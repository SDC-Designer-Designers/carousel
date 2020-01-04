const {Client} = require('pg')
const connectString = 'postgressql://ariakesh:shawdy123@localhost:5432/ariakesh'
const db = new Client({
    connectionString:connectString
});

db.connect()

async function putter ({body},cb) {
    try{
        console.log('connected succesfully attempting put request')
        await db.query(`UPDATE listings SET rooms = 5000 WHERE listingid = 2`)
        .then((result) => cb(null,result))
        .catch((err) => cb(err))
    }

catch(ex) {
    console.log(`something went wrong with the post request ${ex}`)
}

finally {
    // await db.end()
    console.log('client disconnected great success')
}

}

module.exports = putter
