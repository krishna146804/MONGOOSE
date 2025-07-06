const mongoose = require('mongoose')
const user_model = require('./models/user.model');
const address_model = require('./models/address.model');


/**
 * I would like to connect with the MongoDB
 * 
 * Event Driven
 */
mongoose.connect("mongodb://localhost/mongo_db");
const db = mongoose.connection;

db.once("open", ()=>{
    console.log("Yaay ! Connected to MongoDB")

    //Time to insert some documents
    init()
    //dbQueries()
})

db.on("error", ()=>{
    console.log("Error while connecting to DB")
})

async function dbQueries(){
   //Readind/Fetching  the data from MongoDB
   //const user  = await user_model.findById("65d44302c339fa95ff2e44ed")
   //console.log( user)
  /**try{
   const users = await user_model.find({name : "Vishwa"})
   console.log(users)
  }catch(err){
    console.log("Error while reading from the DB ",err)
  }

  try{
    const users = await user_model.findOne({name : "Vishwaa"})
    console.log(users)
   }catch(err){
     console.log("Error while reading from the DB ",err)
   } 

   //Read with the help of where clause
   try{
      const users = await user_model.where("age").gt("31").where("name").equals("Vishwa").limit(3)
      console.log(users)
   }catch(err){
    console.log("Error while reading the data from the DB", err)
   } **/

   /**
    * Update the record
    *

   try{
    const user = await user_model.findOne({name : "Vishwa"})

    user.hobby = "Playing Cricket"
    user.email = "sfeteteterge@gmail.com"

    const user_updated = await user.save()
    console.log(user_updated)
   }catch(err){
     console.log("Error while updating the data in DB ",err)
   }  */

   /**
    * Deleting the documents
    */

   const userRec = await user_model.deleteOne({name : "Vishwa"})
   console.log(userRec)
   const users = await user_model.find({name:"Vishwa"})
   console.log(users)


}

async function init(){

  /**
   // Logic to insert the document inside the DB
   const user_obj = {
    name : "Vishwa",
    age : 19,
    email : "vish123xyz@gmail.com",
    subjects : ["Node.js", "English", "Computer"],
    address : {
      lane1 : "lane1",
      lane2 : "lane2",
      street : "OMR",
      city : "Bangalore",
      country : "India",
      pincode : 560049
    }
   }
   try{
     //Inserted inside the Users collection
     const user = await user_model.create(user_obj)
     console.log("User created ", user)
   }catch(err){
    console.log("Error while inserting ", err)
   }

   **/

   /**
    * 1. Create/insert an address object
    * 2. Insert the user object with address object id
    */
    const address = {
      lane1 : "lane1",
      lane2 : "lane2",
      street : "OMR",
      city : "Bangalore",
      country : "India",
      pincode : 560049
    }
    const add_obj = await address_model.create(address)
    const user_obj = {
      name : "Vishwa",
      age : 19,
      email : "vish123xyz@gmail.com",
      subjects : ["Node.js", "English", "Computer"],
      address : add_obj._id
    }
    const user = await user_model.create(user_obj)
    console.log(user)

}
