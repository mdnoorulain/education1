import React, { useState } from "react"
import { LinkData } from "../assets/data/data"
import { NavLink } from "react-router-dom"
import { MdSchool } from "react-icons/md";

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className='bg-white py-4 text-black sticky z-50 shadow-md top-0 left-0 w-full'>
        <div className='container flex justify-between items-center'>
          <div className='flex items-center bg-slate-50 rounded-md gap-1 font-bold'>
            <MdSchool /><span className=" text-blue-600  ">A.F</span>
            <span className=" text-blue-950 ">Academy</span>
            
          </div>
          <nav className={open ? "mobile-view" : "desktop-view"}>
            <ul className='flex items-center gap-6'>
              {LinkData.map((link) => (
                <li key={link.id} onClick={() => setOpen(null)}>
                  <NavLink className={({ isActive }) => (isActive ? "text-primary text-sm" : "text-[15px]")} to={link.url}>
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
        </div>
      </header>
    </>
  )
}
