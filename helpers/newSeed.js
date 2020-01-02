const {Client} = require('pg')
const connectString = 'postgressql://ariakesh:shawdy123@localhost:5432/ariakesh'
const db = new Client({
    connectionString:connectString
});
const randomNum = max => {
    return Math.floor(Math.random() * max);
  };
 
// execute()
// async function execute(){

//     try{
//         await db.connect()
//         console.log('connected succesfully')
//         for(let i = 100; i > 0 ; i--){
//             let rooms = randomNum(5) + 1;
//             await db.query(`INSERT INTO listings (images,rooms,price,occupancy,reviews,ratings,similars) values (ARRAY['https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))}']
//             ,${rooms},${randomNum(200) + 75},${rooms * 2}, ${randomNum(200) + 10},${randomNum(5) + 1.5},ARRAY[${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)}])`)
      
//             .then((res) => console.log(i))
//             .catch((err) => console.log(err, "error"))
//         }
//     }
//     catch (ex) {
//         console.log(`someting wong ${ex}`)
//     }
//     finally {
//         await db.end()
//         console.log('client disconnected successfully') 
//     }
// }
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
            await db.query(`COPY listings from '/Users/ariakesh/carousel/helpers/infoo.csv' `)
            
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