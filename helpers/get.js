const db = require('./newSeed.js')


        db.connect()
    //gets all transcation information along with budget information based off the transactions category id
    async function execute ({id},cb) {
        try{
            console.log('connected succesfully attempting get request')
            await db.query(`SELECT * FROM listings WHERE listingid = ${id}`)
            .then((result) => cb(null,result))
            .catch((err) => cb(err))
        }

    catch(ex) {
        console.log(`something went wrong getting listingid ${id}  ${ex}`)
    }
    finally {
        // await db.end()
        console.log('client disconnected great success')
    }

}



module.exports = execute

