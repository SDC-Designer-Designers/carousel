// const {Pool,Client} = require('pg')
// const connectString = 'postgressql://ariakesh:shawdy123@localhost:5432/ariakesh'

// const db = new Client({
//     connectionString:connectString
// })

// db.connect()

// db.query('CREATE TABLE listing (listingID SERIAL PRIMARY KEY,images TEXT[],rooms INT,occupancy INT,reviews INT,ratings INT,locashun VARCHAR(300),price INT);', (err,res) => {
//     if(err){
//         console.log(err)
//     }
//     else console.log(res)
//     db.end()
// })