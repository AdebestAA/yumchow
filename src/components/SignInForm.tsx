"use client"
import { appDispatch, RootState } from '@/store'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './modals/Modal'
import { openModal } from '@/store/slices/modalSlice'
import { signInUser } from '@/app/actions/userAuth'
import { ButtonLoader } from './Loader'

const textInputStyles = "bg-lightGray border-[1px] mds:h-[40px] h-[35px] focus:outline-primary text-slateGray rounded-md w-full px-2 text-md"
const containerForInput = "my-2"
const SignInForm = () => {
 
    const dispatch = useDispatch<appDispatch>()
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })
    const [loading,setLoading] = useState<boolean>(false)


    const handleSubmit = async (e:React.SyntheticEvent)=>{
        e.preventDefault()
        if (!formData.email || !formData.password) {
            dispatch(openModal({
                message:"Field empty",
                buttonText:"ok",
                showModal:true,
                redirectPage:null
            }))
            return
        }
        setLoading(true)
        
        const signIn = await signInUser(formData)
        if (!signIn.success) {
            dispatch(openModal({
                message:signIn.message,
                buttonText:"oK",
                showModal:true,
                redirectPage:null
            }))   
            setLoading(false)
            return
        }
        else{
            dispatch(openModal({
                message:signIn.message,
                buttonText:"Home",
                showModal:true,
                redirectPage:"/"
            }))
            setLoading(false)
return
}


    }
  return (
    <div className=' h-screen flex justify-center flex-col w-full text-sm mds:items-center'>
<Modal/>
<form action="" onSubmit={handleSubmit} className='px-6  mds:w-3/5 sm:w-2/5 lg:w-[25%]'>
<h1 className='font-semibold capitalize text-xl text-primary italic text-center'>Sign In</h1>

<div className={containerForInput}>
    {/* email */}

<input 
onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,[e.target.name]:e.target.value}) }
type="email"
placeholder='email'
name='email'
className={textInputStyles}
/>
</div>
    {/* password */}
<div className={containerForInput}>

<br />
<input
onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFormData({...formData,[e.target.name]:e.target.value}) }
name='password'
placeholder='password' 
type="password"
className={textInputStyles}
/>
</div>


<div className='my-2'>
    <button className='bg-primary text-background w-full h-[40px] rounded-xl font-bold'>{loading ? <ButtonLoader/>  : "Sign in"}</button>
</div>
<div className='my-2'>
    <p className='pl-2'>Dont have an account? sign up  <Link className='text-primary' href={"/signup"}>here</Link></p>
</div>
</form>
    </div>
  )
}

export default SignInForm