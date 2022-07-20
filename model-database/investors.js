require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require("path");




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Vreality",
   { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log('connected to DB!'))
    .catch(error => console.log(error));



  



//for users collection
const investorsSchema = mongoose.Schema({
 dateandtime : {type: Date, default: Date.now},
 address: {type: String, required: true},
 txhash: {type: String, required: true},
});


 module.exports = {
   Investors: mongoose.model("Investors", investorsSchema),
 }
