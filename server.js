require("dotenv").config();
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const Investors = require("./model-database/investors").Investors;
const Poolprogress = require("./model-database/poolprogress").Poolprogress;




const app = express();



app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())











app.get("/",  function(req, res){
  res.send("welcome");
});





app.get("/poolprogress",  async function(req, res){


 const info = await Poolprogress.find().clone();
  res.send({ number : info[0].pool});

  });




//save investor
app.post("/addinvestor", async function(req, res){
    console.log("called addinvestor");
    //console.log(req.body);
    try{    
      
        //console.log(req.body.address);
        //console.log(req.body.txhash);
        let investor = new Investors({
        address: req.body.address,
        txhash: req.body.txhash,
        });
    
      
       investor.save();
    
  
        res.send(true);
  
  
      } catch {
      res.send(false);
      }
    
    
  
    });



 //save to pool
 app.post("/poolprogress", async function(req, res){
    
    //console.log("called add to pool progress");
    //console.log(req.body.amount);
    const info = await Poolprogress.find().clone();


    try{    
    
      await Poolprogress.updateOne({_id: info[0]._id}, {$inc: { "pool": req.body.amount }} ).clone();
      //console.log(info[0].pool);
    
      res.send(true);
  
  
      } catch {
      res.send(false);
      }

    });
    
  








app.listen(process.env.PORT || 8000,  function(){
  console.log("App is listening on url http://localhost:8000");
});
