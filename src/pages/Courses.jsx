import React from "react"
import { memories } from "../components/assets/data/data"

export const Courses = () => {
  return (
    <>
      <section className=' bg-[#F3F4F8] py-16 '>
        <div className='w-4/5 m-auto'>
          <div className='heading mb-16'>
            <h1 className='text-3xl font-semibold text-black'>
            An image that embodies  <br />the soulful essence of our school
            
            </h1>
            <span className='text-sm mt-2 block'>A picture that captures the heart of the school community .</span>
          </div>
          <div className='grid grid-cols-3 gap-8 md:grid-cols-1'>
            {memories.map((item) => (
              <div className='box rounded-lg shadow-shadow1 bg-white'>
                <div className='images rounded-t-lg relative overflow-hidden h-50 w-ful'>
                  <img src={item.cover} alt='' className='rounded-t-lg object-cover w-full h-full transition ease-in-out delay-150 cursor-pointer hover:scale-125 duration-300' />
                  <div className='categ flex gap-4 absolute top-0 m-3'>
                  </div>
                </div>
                <div className='text p-3'>
                  
                  <h3 className='text-black my-2 font-medium h-5'>{item.title}</h3>
                  
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
