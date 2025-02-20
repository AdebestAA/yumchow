import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    username:String,
    email:String,
    password:String,
    role:String,
    imageUrl:String
})


const User = mongoose.models.User || mongoose.model("User",userSchema)

export default  User


