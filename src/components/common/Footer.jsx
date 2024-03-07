import React from "react"
import { NavLink } from "react-router-dom"

import { MdSchool } from "react-icons/md";

export const Footer = () => {
  return (
    <>
      
      <footer className=' m-auto bg-[#F3F4F8] py-10  mt-24'>
        <div className='container grid grid-cols-4 gap-5 md:grid-cols-2'>
          <div className='logo'>
          <div className='flex items-center bg-slate-50 rounded-md gap-1 font-bold'>
            <MdSchool /><span className=" text-blue-600  ">A.F</span>
            <span className=" text-blue-950 ">Academy</span>
            
          </div>
           <span className='text-[14px]'>Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson plans to best.</span>
          </div>

          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Company</h4>
            <NavLink to='#' className=' text-[14px] block mb-2 '>
              Contact
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Portfolio
            </NavLink>
            
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Our team
            </NavLink>
            
           
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Platform</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Shop
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Pricing
            </NavLink>
            
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Landing
            </NavLink>
          </li>
          <li>
            <h4 className='text-black text-sm font-semibold mb-5'>Subscribe</h4>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              About us
            </NavLink>
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Contact
            </NavLink>
            
            <NavLink to='#' className=' text-[14px] block mb-2'>
              Services
            </NavLink>
          </li>
        </div>
      </footer>
    </>
  )
}
