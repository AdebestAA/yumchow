"use server"

import { connectToDB } from "@/database"
import User from "@/models/signUpModel"
import { signUpReturnType, signUpType } from "@/utils/types"
import bcrypt from "bcryptjs"
import { uploadImage } from "./uploadImage"

export const registerUser = async(formData:signUpType):Promise<signUpReturnType>=>{
await connectToDB()

const {email,username,imageUrl,role,password} = formData

try {
    // check if user already exists
    const userExist =await User.findOne({email})
    if (userExist) {
        return {message:"user with this email already exist" , success:false,data:null}
    }
    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    // IMAGE NOT CHOOSEN
    if (!formData.imageUrl) {
        const createdNewUser = new User({
        username:username,
        email:email,
        imageUrl:null,
        role:role,
        password:hashedPassword
    })
    // save new user to DB
    const savedNewUser = await createdNewUser.save()
    if (savedNewUser) {
        return {
            message:"user successfully created",
            success:true,
            data:JSON.parse(JSON.stringify(savedNewUser))

        }
    }
    else{
        return {
            message:"something went wrong",
            success:false,
            data:null
            
        }
    }
}


// IMAGE CHOOSEN: generate image link from cludinary
    const file = formData.imageUrl as File
    const imgFormData = new FormData();
    imgFormData.append("file", file);
    const result = await uploadImage(imgFormData);
    if (!result.success) {
        return {message:"something went wrong, try sign up without image " , success:false,data:null}
    }



    // create new user
    const createdNewUser = new User({
        username:username,
        email:email,
        imageUrl:result.url,
        role:role,
        password:hashedPassword
    })

    // save new user to DB
    const savedNewUser = await createdNewUser.save()
    if (savedNewUser) {
        return {
            message:"user successfully created",
            success:true,
            data:JSON.parse(JSON.stringify(savedNewUser))

        }
    }
    else{
        return {
            message:"something went wrong",
            success:false,
            data:null

        }
    }


    
} catch (error) {
    console.log(error);
    
    return {message:"something went wrong, please try again",success:false,data:null}
}

}