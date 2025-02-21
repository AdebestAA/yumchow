"use client"
import { uploadImage } from '@/app/actions/uploadImage'
import { registerUser } from '@/app/actions/userAuth'
import { signUpType } from '@/utils/types'
import React, { useEffect, useState } from 'react'
import Modal from './modals/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { appDispatch } from '@/store'
import { RootState } from '@/store'
import { openModal } from '@/store/slices/modalSlice'
import { ButtonLoader } from './Loader'
import Link from 'next/link'


const textInputStyles = "bg-lightGray border-[1px] mds:h-[40px] h-[35px] focus:outline-primary rounded-md w-full  px-2 text-md "
const containerForInput = "my-2"
const SignUpForm = () => {
    const dispatch = useDispatch<appDispatch>()
    // const modalSlice = useSelector((state:RootState)=>{
    //     return state.modalSlice
    // })
    const [prev,setPrev] = useState("")
    const [loading,setLoading] = useState<boolean>(false)
    const [imageFile,setImageFile] = useState< null | File>(null)
    const [formData,setFormData] = useState<signUpType>({
        username:"",
        email:"",
        password:"",
        role:"user",
        imageUrl:""
    })
    const handleSubmit = async(e:React.SyntheticEvent)=>{
        e.preventDefault()
        if (loading) {
            return
        }
        if (!formData.username || !formData.email || !formData.password) {
            alert ("empty field")
            return
        }
        setLoading(true)

        const regUser = await registerUser(formData)
        if (!regUser.success) {
          dispatch(openModal({message:regUser.message,buttonText:"ok",showModal:true,redirectPage:null}))
          setLoading(false)
        }
        else{
            dispatch(openModal({message:regUser.message,buttonText:"Sign in",showModal:true,redirectPage:"/signin"}))
            setLoading(false)
        }
        // signup without image
            // if (!imageFile) {
            // // alert("no image")
            // const regUser = await registerUser(formData)
            // if (!regUser.success) {
            //   dispatch(openModal({message:regUser.message,buttonText:"ok",showModal:true,redirectPage:null}))
            //   setLoading(false)
            // }
            // else{
            //     dispatch(openModal({message:regUser.message,buttonText:"Sign in",showModal:true,redirectPage:"/signin"}))
            //     setLoading(false)
            // }

            // console.log(regUser);  
            // return
            // }

            // sign up with image

            // const file = imageFile as File
            // const imgFormData = new FormData();
            // imgFormData.append("file", file);
            // const result = await uploadImage(imgFormData);
            // if (result.success) {
            // console.log(result);
            // const cloudImgUrl = result.url as string
            // setFormData({...formData,imageUrl:cloudImgUrl})
            // const regUser = await registerUser(formData)
            // if (!regUser.success) {
            //     dispatch(openModal({message:regUser.message,buttonText:"ok",showModal:true,redirectPage:null}))
            //     setLoading(false)
            //   }
            //   else{
            //     dispatch(openModal({message:regUser.message,buttonText:"Sign in",showModal:true,redirectPage:"/signin"}))
            //     setLoading(false)
            // }

            // }
            // else{
            //     dispatch(openModal({message:"something went wrong with the image",buttonText:"ok",showModal:true,redirectPage:null}))
            //     setLoading(false)
            // }

        //   const regUser = await registerUser(formData)
        //   if (!regUser.success) {
        //     dispatch(openModal(regUser.message))
        //   }
        //   console.log(regUser);  
                }
    
useEffect(()=>{
console.log(formData);

},[formData])





  return (
    <div className=' h-screen flex justify-center flex-col w-full text-sm  mds:items-center'>
        <Modal/>
<form action="" onSubmit={handleSubmit} className='px-6  mds:w-3/5 sm:w-2/5 lg:w-[25%]'>
<h1 className='font-semibold capitalize text-xl text-primary italic text-center'>create account</h1>
    {/* username */}
<div className={containerForInput} >

<input 
type="username"
placeholder='username'
name = "username"
onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,[e.target.name]:e.target.value})}
className={textInputStyles}
/>
</div>
<div className={containerForInput}>
    {/* email */}
<br />
<input 
type="email"
placeholder='email'
name = "email"
onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,[e.target.name]:e.target.value})}
className={textInputStyles}
/>
</div>
    {/* password */}
<div className={containerForInput}>

<br />
<input
placeholder='password' 
type="password"
name = "password"
onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,[e.target.name]:e.target.value})}
className={textInputStyles}
/>
</div>
<div className={`${containerForInput} flex justify-between items-center`}>
<label htmlFor="image" className=' bg-primary text-background py-[3px] px-[5px] rounded-md cursor-pointer'>upload image</label>
<input 
type="file"
id='image'
accept='image/*'
onChange={(e:React.ChangeEvent<HTMLInputElement>) =>{
console.log(e.target?.files?.[0])
const file = e.target?.files?.[0] 
setPrev(URL.createObjectURL(e.target?.files?.[0] as File))
setImageFile(e.target?.files?.[0] as File)
setFormData({...formData,imageUrl:e.target?.files?.[0] as File})


}}
className='hidden'
/>
<figure className='w-[40px] h-[40px] cursor-pointer'>
<img src={prev ? prev : "profile.jpg"} alt="user profile" className='rounded-full object-cover w-full h-full'/>
</figure>
</div>

<div className='my-2'>
    <button type='submit' 
//     onClick={async()=>{
//        
//     }
     className='bg-primary text-background w-full h-[40px] rounded-xl font-bold'>{loading ? <ButtonLoader/>  : "Submit"}</button>
</div>

<div className='my-2'>
    <p className='pl-2'>Already have an account? sign in  <Link className='text-primary ' href={"/signin"}>here</Link></p>
</div>
</form>
    </div>
  )
}

export default SignUpForm