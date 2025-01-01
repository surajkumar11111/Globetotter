const express = require('express');
const router = express.Router();
const WrapAsync = require("../utils/WrapAsync.js");
const {isLoggedIn} = require("../middleware.js");
const {isOwner} = require("../middleware.js");
const {validateListing} = require("../middleware.js");

const listingController  = require("../controllers/listings.js")
const multer = require('multer');
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});



router.route("/")
  .get(WrapAsync(listingController.index))//Index Route
  .post(
    isLoggedIn, 
    upload.single('listing[image]'), 
    WrapAsync(listingController.createListing));// Create Route

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Search Route 
router.get("/search", WrapAsync(listingController.searchListings));

// Category Filtering Route
router.get("/category/:categoryName", WrapAsync(listingController.filterByCategory));

router.route("/:id")
.get(WrapAsync(listingController.showListing))//Show Route
.put(isLoggedIn, 
  isOwner,
  upload.single('listing[image]'), 
  validateListing, 
  WrapAsync(listingController.updateListing))//Update Route
.delete(isLoggedIn, isOwner, WrapAsync (listingController.destroyListing))//Delete Route

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, WrapAsync(listingController.renderEditForm));




module.exports = router;