const db = require('./newSeed.js')

const randomNum = max => {
    return Math.floor(Math.random() * max);
  };
//   db.connect()
async function dexter ({body},cb) {
    try{
        console.log('connected succesfully attempting post request')
        console.log(body)
        await db.query(`INSERT INTO listings (rooms) values (299)`)
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

module.exports = dexter