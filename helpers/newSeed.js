const {Client} = require('pg')
const connectString = 'postgressql://postgres@ec2-34-207-230-4.compute-1.amazonaws.com:5432/ariakesh'
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
        .then((res) => console.log('listings destroyed'))
        .catch((err) => console.log(err,'error dropping table listings'))

        db.query('CREATE TABLE listings ( listingID SERIAL PRIMARY KEY,images varchar[],rooms INT,occupancy INT,reviews INT,ratings INT,price INT,similars integer[]);', (err,res) => {
            if(err){
                console.log(err,'error creating table ')
            }
            else console.log("table listings created")

            })
            console.log('connected succesfully')
            let rooms = randomNum(5) + 1;
            await db.query(`COPY listings from '/Users/ariakesh/carousel/infoo.csv' `)
            
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