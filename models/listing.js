const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");


const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
   url: String,
   filename: String,//changes for Upload file
  },
  price: Number,
  location: String,
  country: String,
  reviews:[//review array
    {
      type: Schema.Types.ObjectId,
      ref: "Review"//review Model
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  geometry: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    },
  },
  category: {
    type: String,
    enum: [
      "trendings", "mountains", "arctic", "farms", "deserts", "boats", "castles",
      "rooms", "homes", "beach", "camping", "iconic cities", "luxury", "other"
    ],
    required: true
  },
});


//Handling- Delete Listing(Mongo - MIDDLEWARE)
listingSchema.post("findOneAndDelete", async (listing) => {
  if(listing){
  await Review.deleteMany({_id: { $in: listing.reviews} });
  }
});



const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;