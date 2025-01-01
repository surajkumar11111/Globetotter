//code for data inilization logic
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/globetotter";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    //map method
    initData.data = initData.data.map((obj) => ({...obj, owner: "67742e40dfb3ea3c526e4eb2"}));//added owner a property filed
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
  };
  
  initDB();//call