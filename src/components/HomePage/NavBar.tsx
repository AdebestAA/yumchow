"use client"
import { FaBars } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { menuLinks } from "@/utils/MenuLinks";
import { menuLinktype } from "@/utils/types";

const linkClass = " transition duration-300 hover:bg-primary hover:rounded-md hover:border-primary px-2 hover:text-background"

const NavBar = () => {
    const [openModal,setOpenModal] = useState<boolean>(false)

useEffect(()=>{
console.log(openModal)

},[openModal])

  return (
    <nav className="flex justify-between text-[0.7rem] sm:text-[0.8rem] pt-2" >
  
        <figure className=" w-[100px] max-w-1/5 h-full">
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
  <Link href={"/signup"} className="hover bg-primary text-background border-primary rounded-md border-[1px] px-4 py-[4px] hover:text-primary hover:bg-background hover:border-primary hover:rounded-md  ">Register</Link>
</section>
        <button onClick={()=> setOpenModal(!openModal)} className="sm:hidden inline h-[25px] w-[25px] flex cursor-pointer justify-center items-center bg-primary rounded-[5px] transition duration-300"> <FaBars className="text-white  text-[1rem]" /></button>

<div className={`fixed pt-8 w-[30%] right-0  h-screen bg-primary top-0 transition-transform duration-[1s] ease-in-out ${openModal ? "translate-x-0" :"translate-x-[500%]"} `}>
       <SlideMenu/>
<button  onClick={()=> setOpenModal(false)}>cancel</button>
</div>
    </nav>
  )
}

const SlideMenu = ()=>{


    return <>
        {menuLinks.map((item:menuLinktype,_)=>{
            
            
            return (
                <div className="h-8 border-b-[1px]   border-background" key={item.id}>
    <Link className="text-white block h-full w-full hover:bg-background hover:text-primary pt-2 pl-2" href={item.path}>{item.name}</Link>
   </div>
)

})}
</>
}



export default NavBar