// require mongoodse and make connection
const mongoose = require('mongoose');

main().then(result=>{
  console.log(result);
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/homyGo');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//require the data

const initdata = require('./data');
// require model

const listing= require('../models/listing');

// now initialise a function
const initDB=async()=>{
    await listing.deleteMany({});;
    await listing.insertMany(initdata.data);
    console.log("data was initialised");
    
};
// call the function
initDB();
