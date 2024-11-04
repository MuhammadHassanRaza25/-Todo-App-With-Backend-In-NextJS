import Link from "next/link";

export default function Header(){
    return(
    <>
       <h1 className='header flex justify-between items-center p-3.5 py-3 px-7 bg-slate-800 border-b-2 border-cyan-400 text-3xl font-semibold w-full'><span className="text-white">Todo <span className='text-cyan-400'>App</span></span> 
           <span className="flex gap-4">
             <Link href={'https://github.com/MuhammadHassanRaza25'} target="_blank"><button className='btn text-lg font-semibold bg-white text-black w-24 rounded-md p-1 hover:bg-cyan-400 hover:text-white'>Github</button></Link>
             <Link href={'https://www.linkedin.com/in/muhammad-hassan-raza-aab5402b7/'} target="_blank"><button className='btn text-lg font-semibold bg-white text-blue-500 w-24 rounded-md p-1 hover:bg-cyan-400 hover:text-white'>Linkedin</button></Link>
           </span>
       </h1>
    </>
    )
}