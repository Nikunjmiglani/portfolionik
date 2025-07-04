import React from 'react'
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black'>
        <div className='ml-20 cursor-pointer opacity-80 hover:scale-110 transition-transform duration-200 '>
            <img src="/Nlogo.png" width={45} className=' mb-3 mt-3 border border-white rounded-full ' alt="" />
        </div>
         
       <div className='text-white'>
        <ul className='flex justify-between font-light items-center gap-3 opacity-70 '>
            <li className='cursor-pointer hover:scale-110 transition-transform duration-200 opacity-65 '>Linkedin</li>/
            <li className='cursor-pointer hover:scale-110 transition-transform duration-200 opacity-65 '>Github</li>/
            <li className='cursor-pointer hover:scale-110 transition-transform opacity-65 duration-200'>X</li>
            
            <Mail className='w-4 ml-4 mr-25 cursor-pointer hover:scale-110 transition-transform duration-200'/>
        </ul>

       </div>

       
          
    </nav>
    
    

  )
}

export default Navbar
