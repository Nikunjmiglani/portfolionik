import React from 'react'
import { Mail } from "lucide-react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-black'>
        <div className='ml-20 cursor-pointer opacity-80 hover:scale-110 transition-transform duration-200 '>
           <Link href="/"> <img src="/Nlogo.png" width={45} className=' mb-3 mt-3 border border-white rounded-full ' alt="" /></Link>
        </div>
         
       <div className='text-white'>
        <ul className='flex justify-between font-light items-center gap-3 mr-20  opacity-70 '>
           <a href="https://www.linkedin.com/in/nikunjmiglani/" target='/'> <li className='cursor-pointer hover:scale-110 transition-transform duration-200 opacity-65 '>Linkedin</li></a>/
            <a href="https://github.com/Nikunjmiglani" target='blank'><li className='cursor-pointer hover:scale-110 transition-transform duration-200 opacity-65 '>Github</li></a>/
            <a href="https://x.com/NikunjMiglani28"><li className='cursor-pointer hover:scale-110 transition-transform opacity-65 duration-200'>X</li></a>
            
           
        </ul>

       </div>

       
          
    </nav>
    
    

  )
}

export default Navbar
