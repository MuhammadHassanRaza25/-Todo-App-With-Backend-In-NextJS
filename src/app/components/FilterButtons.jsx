
export default function FilterButtons(){
    return(
        <>
          <div className="flex justify-between rounded-xl mb-8">
             <button className='mr-2 btn font-semibold text-lg bg-cyan-400 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-cyan-400'>All</button>
             <button className='mr-2 btn font-semibold text-lg bg-cyan-400 text-white p-2 w-full rounded-xl hover:bg-white hover:text-cyan-400'>Completed</button>
             <button className='btn font-semibold text-lg bg-cyan-400 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-cyan-400'>InComplete</button>
          </div>
        </>
    )
}
