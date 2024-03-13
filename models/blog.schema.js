const mongoose=require('mongoose')

const blogschema=new mongoose.Schema({
    title: String,
    body: String,
    createdby:String,
    active: String,
    Geolocation: String,
  })
const blog=mongoose.model("blog",blogschema)
module.exports=blog;