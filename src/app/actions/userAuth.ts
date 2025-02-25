"use server"

import { connectToDB } from "@/database"
import User from "@/models/signUpModel"
import { signInUserType, signUpReturnType, signUpType } from "@/utils/types"
import bcrypt from "bcryptjs"
import { uploadImage } from "./uploadImage"
import jwt, { JwtPayload }  from "jsonwebtoken"
import { cookies } from "next/headers"


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


export const signInUser = async (formData:signInUserType):Promise<signUpReturnType>=>{
await connectToDB()
        const {email,password} = formData
try {
    // check if user exist in the database
    const checkUserExist = await User.findOne({email})
    if (!checkUserExist) {
        return {
        message:"no user with this email",
        success:false,
        data: null
        }
    }
// compre password 
const comparePassword = await bcrypt.compare(password,checkUserExist.password)

if (!comparePassword) {
    return {
        message:"password incorrect, kindly try again",
        success:false,
        data:null
    }
}

// create token
const createdToken = {
    id:checkUserExist._id,
    username:checkUserExist.username,
    email:checkUserExist.email,

}

const token = jwt.sign(createdToken,"DEFAULT_VALUE",{expiresIn:"1d"})
const getCookies = await cookies()
getCookies.set("token",token,{
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 3600
  })

return {
    message:"account successfully logged in",
    success:true,
    data:JSON.parse(JSON.stringify(checkUserExist))
}

} catch (error) {
    return {
        message:"something went wrong",
        success:false,
        data:null 
     }
}



}


export const fetchAuthUserDetails = async ()=>{
 
    await connectToDB()
    try {
        const getCookies = await cookies()
        const token = getCookies.get("token")?.value || ""
        if (!token) {
            return {
                message:"token doesn't exist",
                success:false,
                data:null
            }
        }
        // decode the token
        const decodedToken = jwt.verify(token,"DEFAULT_VALUE") as JwtPayload
        // check if user still exist in the database
        const checkUserExist = await User.findOne({_id:decodedToken.id})
        if (checkUserExist) {
            return {
                message:"user exist",
                success:true,
                data:JSON.parse(JSON.stringify(checkUserExist))
            }
        }
        else{
            return {
                message:"couldn't get user data",
                success:false,
                data:null
            }
        }




    } catch (error) {
        return {
            message:"cant get user details",
            success:false,
            data:null
        }
    }

}