"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header(){

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
    return(
    <>
   <div className='header flex justify-between items-center p-3.5 py-3 px-7 bg-white border-b-2 text-3xl font-semibold w-full'>
      <span className="text-black">
        Todo <span className='text-green-600'>App</span>
      </span>

      {/* Desktop Links */}
      <span className="hidden md:flex gap-4">
        <Link href="https://github.com/MuhammadHassanRaza25" target="_blank">
          <button className='btn border-2 border-green-600 hover:border-black text-lg font-semibold hover:bg-white hover:text-black w-24 rounded-lg p-0.5 bg-green-600 text-white'>Github</button>
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-hassan-raza-aab5402b7/" target="_blank">
          <button className='btn border-2 border-green-600 hover:border-blue-500 text-lg font-semibold hover:bg-white hover:text-blue-500 w-24 rounded-lg p-0.5 bg-green-600 text-white'>Linkedin</button>
        </Link>
      </span>

      {/* Mobile Toggler Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center space-y-1 w-8 h-8 focus:outline-none"
        onClick={toggleMenu}
      >
        <div className={`w-6 h-1 bg-green-600 transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`} />
        <div className={`w-6 h-1 bg-green-600 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
        <div className={`w-6 h-1 bg-green-600 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile Menu (Hidden by default) */}
      <div className={`absolute top-16 right-0 w-full bg-white border-b-2 py-3.5 text-center transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link href="https://github.com/MuhammadHassanRaza25" target="_blank">
          <button className='btn border-2 border-green-600 hover:border-black mr-5 text-lg font-semibold hover:bg-white hover:text-black w-24 rounded-lg p-1 bg-green-600 text-white'>Github</button>
        </Link>
        <Link href="https://www.linkedin.com/in/muhammad-hassan-raza-aab5402b7/" target="_blank">
          <button className='btn border-2 border-green-600 hover:border-blue-500 text-lg font-semibold hover:bg-white hover:text-blue-500 w-24 rounded-lg p-1 bg-green-600 text-white'>Linkedin</button>
        </Link>
      </div>
    </div>


      {/* <div className='header flex justify-between items-center p-3.5 py-3 px-7 bg-slate-800 border-b-2 border-cyan-400 text-3xl font-semibold w-full'><span className="text-white">Todo <span className='text-cyan-400'>App</span></span> 
           <span className="flex gap-4">
             <Link href={'https://github.com/MuhammadHassanRaza25'} target="_blank"><button className='btn text-lg font-semibold hover:bg-white hover:text-black w-24 rounded-md p-1 bg-cyan-400 text-white'>Github</button></Link>
             <Link href={'https://www.linkedin.com/in/muhammad-hassan-raza-aab5402b7/'} target="_blank"><button className='btn text-lg font-semibold hover:bg-white hover:text-blue-500 w-24 rounded-md p-1 bg-cyan-400 text-white'>Linkedin</button></Link>
           </span>
       </div> */}
    </>
    )
}