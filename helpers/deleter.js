const db = require('./newSeed.js')

const randomNum = max => {
    return Math.floor(Math.random() * max);
  };

async function deleter ({body},cb) {
    try{
        console.log('connected succesfully attempting delete request')
        await db.query(`DELETE FROM listings WHERE listingid = ${randomNum(10000)}`)
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

module.exports = deleter