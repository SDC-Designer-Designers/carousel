const {Client} = require('pg')
const path = require('path')
const connectString = 'postgressql://ariakesh:shawdy123@localhost:5432/ariakesh'
const db = new Client({
    connectionString:connectString
});
execute()
async function execute(){
 
    try{
        await db.connect()
        console.log(`connected succesfully to ${connectString}`)
        await db.query(`DROP TABLE IF EXISTS listings`)
            .then((res) => console.log('listings table dropped'))
            .catch((err) => console.log(err,'error dropping table listings'))
        await db.query('CREATE TABLE listings ( listingID INT,images varchar[],rooms INT,occupancy INT,reviews INT,ratings INT,price INT,similars integer[]);')
            .then((res) => console.log('listings table created'))
            .catch((err) => console.log(err,'error creating table'))
        await db.query(`CREATE UNIQUE INDEX ids ON listings (listingID);`)
        .then((res) => console.log('created unique index on column listingID'))
        .catch((err) => console.log(err))
            await db.query(`COPY listings from '${path.resolve('../carousel/10M.csv')}' `)
            .then((res) => console.log('succesfully inserted records'))
            .catch((err) => console.log(err, "error"))
    }
    catch (ex) {
        console.log(`someting wong ${ex}`)
    }
    finally {
        await db.query(`SELECT * FROM listings ORDER BY listingID DESC LIMIT 1`)
            .then((res) => console.log('total rows inserted =',res.rows[0].listingid))
            .catch((err) => console.log(err))
        await db.end()
            console.log('client disconnected successfully') 
    }
}
module.exports = db