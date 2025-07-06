const mongoose = require ('mongoose');
const user_model = require ('./models/user.model');
const address_model = require ('./models/address.model');

/*

I would like to connect with the MongoDB
*/

/*
EVENT DRIVEN
*/

mongoose.connect("mongodb://localhost/mongo_db");

const db = mongoose.connection;

db.once('open',()=>{
  console.log("yaay! connected to the mongodb");

  // Time to Insert some document
  init();
  //dbQueries();
})

db.on('error',()=>{
  console.log("error connecting to the mongodb");

})

//async function dbQueries(){
 // reading or fetchig the data from database
//const user = await user_model.findById("6867cb0b7e3f9ee60df80fda")
//console.log(user);
 
/* 
try{
const users = await user_model.find({name:"priyanshuS"})
console.log(users);
  }catch(err){
    console.log("error fetching the user",err);
  }

  
 // It is used to read only one document from the database that document is first insertion
try{
const users = await user_model.findOne({name:"priyanshu"})
console.log(users);
  }catch(err){
    console.log("error fetching the user",err);
  }*/

    // Read with the help of where clause

    /*
    try{
      const users = await user_model.where("age").gt("20").where('name').equals("priyanshu").limit(2)
      console.log(users)
    }catch(err){
      console.log("error while reading the data from the DB",err)
    }

    */

    /* 
    Update the record
    *

    try{
const user= await user_model.findOne({name:"priyanshu"})
user.hobby = "playing cricket"
user.email = "sfrckjk@gmail"

 const  user_updated = await user.save()
console.log(user_updated);
  }catch(err){
    console.log("error while updating from the DB",err)
  };

  */

  //Deleting the record

  /*
  const userRec = await user_model.deleteOne({name:"priyanshu"})

  console.log(userRec)

  const user = await user_model.find({name:"priyanshu"})

  console.log(user)
  */



//}


async function init(){


  /*
  // Logic to insert the document inside thr DB 

  const user_obj = {
    name:"priyanshu",
    age:25,
    email:"priyanshu@example.com",
    subject:["node.js","Science","English"],
    address:{
      lane1:"lane1",
      lane2:"lane2",
      street:"OMR",
      city:"Bangalore",
      country:"India",
      pincode:568849


    }
  }

  try{
     //Insert inside the User collection 
  
  const user = await user_model.create(user_obj)
  console.log("user created",user);


  }catch(err){
    console.log("error inserting the user", err);
  }

  */

  /*
  * 1. Create/insert an address object
  * 2. Insert the user object with address object id 
  */

  const address ={
      lane1:"lane1",
      lane2:"lane2",
      street:"OMR",
      city:"Bangalore",
      country:"India",
      pincode:568849


  }

  const add_obj = await address_model.create(address)
  const user_obj = {
    name:"priyanshu",
    age:25,
    email:"priyanshu@example.com",
    subject:["node.js","Science","English"],
    address: add_obj._id
  }

  const user = await user_model.create(user_obj)
  console.log(user)
 

}
