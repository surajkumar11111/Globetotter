const Review = require("../models/review");
const Listing = require("../models/listing");


module.exports.createReview = async(req, res) =>{
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;//author is var, and logged in user will author
    console.log(newReview); 
    listing.reviews.push(newReview);//pushed in review array

    await newReview.save();
    await listing.save();
    //console.log("new review saved");
    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);  
}

module.exports.destroyReview = async (req, res) => {
    let {id, reviewId} =req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});//$pull
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Review Deleted!");
    res.redirect(`/listings/${id}`);
}