"use client"
import React, { useState } from 'react'

const textInputStyles = "border-[1px] mds:h-[40px] h-[35px] focus:outline-primary text-slateGray rounded-md w-full border-slateGray px-2 text-md"
const containerForInput = "my-2"
const SignInForm = () => {
    const [formData,setFormData] = useState({
        email:"",
        password:"",
    })
  return (
    <div className=' h-screen flex justify-center flex-col w-full text-sm mds:items-center'>

<form action="" className='px-6  mds:w-3/5 sm:w-2/5 lg:w-[25%]'>
<h1 className='font-semibold capitalize'>Sign In</h1>

<div className={containerForInput}>
    {/* email */}

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


<div className='pt-4'>
    <button className='bg-primary text-background w-full h-[40px] rounded-md '>SignIn</button>
</div>
</form>
    </div>
  )
}

export default SignInForm