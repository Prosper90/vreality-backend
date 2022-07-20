require("dotenv").config();
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const path = require("path");




mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Vreality",
   { useNewUrlParser: true, useUnifiedTopology: true})
   .then(() => console.log('connected to DB!'))
    .catch(error => console.log(error));



//for investors collection
const poolprogressSchema = mongoose.Schema({
 pool: {type: Number, required: true},
});


 module.exports = {
   Poolprogress: mongoose.model("Poolprogress", poolprogressSchema),
 }
