"use client"
import { imagesForSlide } from '@/utils/SlideImages'
import React, { useEffect, useState } from 'react'

const SlideImages = () => {
    const [translateValue,setTranslateValue]  = useState<number>(0)
    const [completedSlide,setCompletedSlide] = useState<boolean>(false)

    useEffect(()=>{
        
        const intervalId = setInterval(()=>{
            if (completedSlide) {
                setTranslateValue(prev => prev + 1)
                if (translateValue === -1) {
                    setCompletedSlide(false)
                }
                
                console.log("from completed",translateValue);
                return
            }

            setTranslateValue(prev => prev - 1)
            if (translateValue === -1) {
                setCompletedSlide(true)
            }
            console.log("not completed",translateValue);
            
        },5000)
        
return ()=> clearInterval(intervalId)
    },[translateValue])
  return (
    <>
    <div className='flex my-4 w-full h-48 mds:h-64 lg:h-[400px]  overflow-hidden rounded-2xl'>
        {imagesForSlide.map((item,index)=>{
            
            return <figure className='h-full min-w-full transition-[transform] duration-[0.5s] ease-in-out'  key={item.id} style={{transform:`translateX(${translateValue}00%)`}}>
                <img className='w-full h-full object-cover' src={item.src} alt={item.name} />
            </figure>
        })}
    </div>
        <div className=' h-8 w-full flex items-center  justify-center'>{
            imagesForSlide.map((_,index)=>{

                return <div className={`transition-[width] duration-500 ease-in-out h-[10px]  rounded-md mx-2 ${translateValue == index || String(translateValue).includes(String(index))? "bg-slateGray w-[20px]"  :"bg-lightGray w-[10px]"} `} key={index}></div>
            })
            }</div>
        </>
  )
}

export default SlideImages