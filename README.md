    SDC 
How to Test:
1. npm install 
2. npm start
3. npm run generate(this will generate a csv with 10Million rows)
4. change the connectionString in helpers/dbConfig.js to match the databse credentials on your local machine for postgres.
5. npm run seed (this will seed the database)  --Now that your db has been seeded correctly we can begin stress testing. scripts    have been provided for each route. but first you must change a few scripts go into helpers/data.json right click on the          data.json file and press copy path, now go into packages.json and paste the path over /Users/ariakesh/carousel/helpers/          data.json to your file path.
6. To view the carousel on your browser paste http://localhost:3005/ in the url bar. (please make sure the server is running -      npm start )
7. npm run streesGet
8. npm run stressPost
9.  npm run stressPut
10. npm run stressDelete

