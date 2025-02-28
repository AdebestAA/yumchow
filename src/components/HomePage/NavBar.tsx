"use client"
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { appDispatch, RootState } from "@/store";
import { closeMenu, openMenu } from "@/store/slices/homeMenuSlice";
import { IoClose } from "react-icons/io5";

const linkClass = " transition duration-300 hover:bg-primary hover:rounded-md hover:border-primary px-2 hover:text-background"

const NavBar = () => {
  const dispatch = useDispatch<appDispatch>()
  const menuListState = useSelector((state:RootState)=>{
    return state.homeMenuSlice
})

  
    


  return (
    <nav className=" flex justify-between text-[0.7rem] sm:text-[0.8rem] py-2" >
  
        <figure className="rounded-md border-[1px] border-primary w-[100px] max-w-1/5 h-full">
        <img src="yumChow.png" className="object-cover"/>
        </figure>
<section className="hidden sm:flex justify-between xl:w-[25%] lg:w-[30%] md:w-[35%] w-[40%] items-center">
  <Link href={"/"} className={linkClass} >Home</Link>
  <Link href={"/"} className={linkClass}>Menu</Link>
  <Link href={"/"} className={linkClass}>About</Link>
  <Link href={"/"} className={linkClass}>Contact us</Link>
</section>

<section className="hidden sm:flex justify-between items-center w-[28%] lg:w-[20%] xl:w-[18%] 2xl:w-[15%]  ">
<button><IoCartOutline  className="text-[1.2rem] hover:text-primary transition durtaion-200"/></button>
  <Link href={"/signin"} className="border-primary border-[1px] rounded-md text-primary px-[4px] py-[2px] hover:bg-primary hover:text-background">Login</Link>
  <Link href={"/signup"} className="hover bg-primary text-background border-primary rounded-md border-[1px] px-4 py-[4px] hover:text-primary hover:bg-background   ">Register</Link>
</section>
        <button onClick={()=> {
          if (menuListState) {
            dispatch(closeMenu())
          }
          else{
            dispatch(openMenu())
          }
        }} className="scale-up-and-down sm:hidden inline h-[30px] w-[30px] flex cursor-pointer justify-center items-center bg-primary rounded-[5px] transition duration-300 hover:border-secondary hover:border-2">
          {menuListState? <IoClose className="text-white  text-[1.4rem] scale-up-and-down" /> : <FaBars className="text-white  text-[1rem] scale-up-and-down" />  } 
          </button>
    </nav>
  )
}




export default NavBar