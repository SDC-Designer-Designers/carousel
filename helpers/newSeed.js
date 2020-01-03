const {Client} = require('pg')
const path = require('path')
const connectString = 'postgressql://ariakesh:shawdy123@localhost:5432/ariakesh'
const db = new Client({
    connectionString:connectString
});
const randomNum = max => {
    return Math.floor(Math.random() * max);
  };

execute()
async function execute(){
 
    try{
        await db.connect()
        db.query(`DROP TABLE IF EXISTS listings`)
        .then((res) => console.log('listings table dropped'))
        .catch((err) => console.log(err,'error dropping table listings'))

        db.query('CREATE TABLE listings ( listingID INT,images varchar[],rooms INT,occupancy INT,reviews INT,ratings INT,price INT,similars integer[]);', (err,res) => {
            if(err){
                console.log(err,'error creating table ')
            }
            else console.log("listings table created")

            })
            console.log('connected succesfully')
            await db.query(`COPY listings from '${path.resolve('../carousel/infoo.csv')}' `)
            .then((res) => console.log('succesfully inserted 1st set of records'))
            .catch((err) => console.log(err, "error"))
            await db.query(`COPY listings from '${path.resolve('../carousel/infoo2.csv')}' `)
            .then((res) => console.log('succesfully inserted 2nd set records'))
            .catch((err) => console.log(err, "error"))
            await db.query(`COPY listings from '${path.resolve('../carousel/infoo3.csv')}' `)
            .then((res) => console.log('succesfully inserted 3rd set of records'))
            .catch((err) => console.log(err, "error"))
            await db.query(`COPY listings from '${path.resolve('../carousel/infoo4.csv')}' `)
            .then((res) => console.log('succesfully inserted 4th set of records'))
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