const mongoose=require("mongoose")
require("dotenv").config()

const connection=async()=>{
    await mongoose.connect("mongodb+srv://radhimiyani218:task@cluster0.z831cjw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("db connect");
}
module.exports=connection