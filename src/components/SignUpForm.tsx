"use client"
import { uploadImage } from '@/app/actions/uploadImage'
import React, { useState } from 'react'

const textInputStyles = "border-[1px] mds:h-[40px] h-[35px] focus:outline-primary text-slateGray rounded-md w-full border-slateGray px-2 text-md "
const containerForInput = "my-2"
const SignUpForm = () => {
    const [prev,setPrev] = useState("")
    const [imageFile,setImageFile] = useState<FormData | null | File>(null)
    const [formData,setFormData] = useState({
        username:"",
        email:"",
        password:"",
        image:""
    })
  return (
    <div className=' h-screen flex justify-center flex-col w-full text-sm  mds:items-center'>

<form action="" className='px-6  mds:w-3/5 sm:w-2/5 lg:w-[25%]'>
<h1 className='font-semibold'>create account</h1>
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
<div className={`${containerForInput} flex justify-between items-center`}>
<label htmlFor="image" className=' '>choose an image</label>
<input 
type="file"
id='image'
accept='image/*'
onChange={(e:React.ChangeEvent<HTMLInputElement>) =>{
console.log(e.target?.files?.[0])
const file = e.target?.files?.[0] 
setPrev(URL.createObjectURL(e.target?.files?.[0] as File))
setImageFile(e.target?.files?.[0] as File)


}}
className='hidden'
/>
<figure className='w-[40px] h-[40px] cursor-pointer'>
<img src={prev ? prev : "profile.jpg"} alt="user profile" className='rounded-full object-cover w-full h-full'/>
</figure>
</div>

<div className='my-2'>
    <button type='button' 
//     onClick={async()=>{
//         if (!imageFile) {
//             alert("no image")
//             return
//         }
//         const file = imageFile as File
// const formData = new FormData();
// formData.append("file", file);
// const result = await uploadImage(formData);
// if (result.success) {
//     console.log(result);
// }
// else{
//     console.log(result)
// }
        
//     }
//     }
     className='bg-primary text-background w-full h-[40px] rounded-md'>Submit</button>
</div>
</form>
    </div>
  )
}

export default SignUpForm