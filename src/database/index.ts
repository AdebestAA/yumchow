import mongoose, { connect } from "mongoose";


export const connectToDB = async ()=>{

    await mongoose.connect(process.env.MONGO_URL as string)
    .then(()=>{
        console.log("database successfully connected");
        
    })
    .catch((e)=>{
    console.log(e);
    console.log("something went wrong");
    })
    }
    
    