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
//         for(let i = 1000000; i > 0 ; i--){
//             let rooms = randomNum(5) + 1;
//             await db.query(`INSERT INTO listings (images,rooms,price,occupancy,reviews,ratings,similars) values (ARRAY['https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800 + randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))}','https://unsplash.it/500/500?image=${randomNum(800+randomNum(100))}']
//             ,${rooms},${randomNum(200) + 75},${rooms * 2}, ${randomNum(200) + 10},${randomNum(5) + 1.5},ARRAY[${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)},${randomNum(1000)}])`)
//       
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

module.exports = db