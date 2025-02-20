

import React from 'react'

const SuccessSignUpModal = () => {
  return (
    <div className='fixed w-screen h-screen bg-[#6a696998] flex items-center justify-center '>
    
            <section className='lg:w-[20%] sm:w-[35%] w-[50%] min-h-[150px] bg-background flex items-center justify-center flex-col rounded-md px-6 py-2'>
                <p className='text-center sm:text-[1rem] text-[0.8rem]'>Account SuccessFuly Created</p>
                <button className='bg-primary text-background w-full  sm:h-[40px] h-[30px] rounded-md my-4' >Login</button>
            </section>
        </div>
  )
}

export default SuccessSignUpModal