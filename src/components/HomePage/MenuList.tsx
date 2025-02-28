"use client"
import { appDispatch, RootState } from "@/store"
import { closeMenu } from "@/store/slices/homeMenuSlice"
import { menuLinks } from "@/utils/MenuLinks"
import { menuLinktype } from "@/utils/types"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import gsap from "gsap"

 const MenuList = ()=>{
const dispatch = useDispatch<appDispatch>()
const menuListState = useSelector((state:RootState)=>{
    return state.homeMenuSlice
})
const menuListContainer = useRef<HTMLDivElement>(null)

useEffect(()=>{

if (menuListContainer.current) {
    gsap.to(menuListContainer.current,{
        height: menuListState ? menuListContainer.current.scrollHeight : 0,
        duration: 0.5,
        ease: "power2.inOut",
    })
    
}
if (menuListContainer.current) {
   
    console.log(menuListContainer.current.scrollHeight);
}


},[menuListState])

    return <div ref={menuListContainer} className={`bg-primary `}>
        {menuLinks.map((item:menuLinktype,_)=>{
            
            
            return (
                <div className="h-8 " key={item.id}>
    <Link className="capitalize text-white block h-full w-full hover:bg-background hover:text-primary pt-2 pl-2" href={item.path}>{item.name}</Link>
    
   </div>
)

})}

</div>
}

export default MenuList