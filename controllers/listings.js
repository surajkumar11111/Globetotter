const { response } = require("express");
const Listing = require("../models/listing");

const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });


module.exports.index =  async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
}

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.createListing = async(req, res) => {
    let coordinateRes = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,//based on it needed coordinate data
        limit: 1,
    })
    .send();
        
    let url = req.file.path;
    let filename = req.file.filename;

    const newListing = new Listing(req.body.listing);

    newListing.owner = req.user._id;
    newListing.image = {url, filename}

    newListing.geometry = coordinateRes.body.features[0].geometry;

    let savedListing = await newListing.save();
    console.log(savedListing);
    req.flash("success", "New Listing Created!");
    res.redirect("/listings"); 
}

module.exports.showListing = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id)
       .populate({path: "reviews", populate:{path: "author"}})
       .populate("owner");
    if(!listing){
        req.flash("error", "Listing you requested for doest not exist!");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { listing });
}

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you requested for doest not exist!");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url, filename};
        await listing.save();
    }
    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
}

//Delete/Destroy
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
}

//Filtering by Category
module.exports.filterByCategory = async (req, res) => {
    const { categoryName } = req.params;
    const allListings = await Listing.find({ category: categoryName });
  
    if (!allListings || allListings.length === 0) {
      req.flash("error", "No listings found for this category.");
      return res.redirect("/listings");
    }
    res.render("listings/index.ejs", { allListings });
};

//Search Destination
module.exports.searchListings = async (req, res) => {
    const { q } = req.query;
    if (!q) {
        req.flash("error", "Please enter a search term!");
        return res.redirect("/listings");
    }
    const listings = await Listing.find({ location: { $regex: q, $options: "i" } }); 
    res.render("listings/index.ejs", { allListings: listings }); 
};