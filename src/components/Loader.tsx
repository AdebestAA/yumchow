
import React from 'react'

export const Loader = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <figure className=''>
            <img src="gearloader.svg" alt="loading" />
            <p className='italic text-center text-primary'>items loading</p>
        </figure>
    </div>
  )
}

export const ButtonLoader = ()=>{
    return (
        <>
       <figure className='w-full h-full flex items-center justify-center'>
       <img src="buttonloader.svg" alt="buttonloader" className='w-[50px] h-[80%]' />
       </figure>
        </>
    )
}