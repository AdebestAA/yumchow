"use client"
import { appDispatch, RootState } from '@/store'
import { closeModal } from '@/store/slices/modalSlice'
import { redirect, useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch<appDispatch>()
  const modalSlice = useSelector((state:RootState)=>{
    return state.modalSlice
  })
const router = useRouter()
  return (
    <>
    {modalSlice.showModal && <div className='fixed w-screen h-screen bg-[#6a696998] flex items-center justify-center '>

        <section className='lg:w-[20%] sm:w-[35%] w-[50%] min-h-[150px] bg-background flex items-center justify-center flex-col rounded-md px-6 py-2'>
            <p className='text-center sm:text-[1rem] text-[0.8rem]'>{modalSlice.message}</p>
            <button className='bg-primary text-background w-full  sm:h-[40px] h-[30px] rounded-md my-4'  onClick={()=> 
          {
            if (modalSlice.redirectPage) {
              router.push(modalSlice.redirectPage)
              dispatch(closeModal())
            }
            dispatch(closeModal())
          }
              }>{modalSlice.buttonText}</button>
        </section>
    </div>}
    </>
  )
}

export default Modal