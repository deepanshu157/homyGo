// here only connect with mongoose
const mongoose = require('mongoose');
// mongoose.Schema bahot baar likhna pdega so use ek variable me store kr dete hai
const Schema = mongoose.Schema;
// create schema
const listingSchema  = new Schema({

    title:{
        type:String,
        require
    },
    description:String,
    Image:{
        type:String,
        default:"https://unsplash.com/photos/delicate-arch-stands-proudly-against-the-skyline-rdpsNWwhq8g",
        // image link by unsolash
        set:(v)=>v==""?"https://unsplash.com/photos/delicate-arch-stands-proudly-against-the-skyline-rdpsNWwhq8g":v,
    },
    price:Number,
    location:String,
    country:String,});

    //now create model or collection 
    const Listing = mongoose.model('Listing', listingSchema);
    // now export to app.js
    module.exports = Listing;// model ko export kr denge and app.js me require kr lenge