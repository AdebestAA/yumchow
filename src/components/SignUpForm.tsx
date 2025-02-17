"use client"
import React, { useState } from 'react'

const textInputStyles = "border-[1px] h-[30px] focus:outline-primary rounded-sm w-full border-primary px-2 text-md "
const containerForInput = "my-2"
const SignUpForm = () => {
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
        image:""
    })
  return (
    <div className=' h-screen flex justify-center flex-col w-full text-sm font-extralight sm:items-center'>

<form action="" className='px-6 sm:w-2/5'>
<h1 className='font-bold'>create account</h1>
    {/* username */}
<div className={containerForInput} >

<input 
type="username"
placeholder='username'
className={textInputStyles}
/>
</div>
<div className={containerForInput}>
    {/* email */}
<br />
<input 
type="email"
placeholder='email'
className={textInputStyles}
/>
</div>
    {/* password */}
<div className={containerForInput}>

<br />
<input
placeholder='password' 
type="password"
className={textInputStyles}
/>
</div>
<div className={containerForInput}>
<label htmlFor="image">choose an image</label>
<input 
type="file"
id='image'
className='hidden'
/>
</div>

<div className='my-2'>
    <button className='bg-primary text-background w-full py-[4px] rounded-md'>Submit</button>
</div>
</form>
    </div>
  )
}

export default SignUpForm