
export default function FilterButtons(){
    return(
        <>
          <div className="flex justify-between rounded-xl mb-8">
             <button className='mr-2 btn border-2 border-green-600 font-semibold text-lg bg-green-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-green-600'>All</button>
             <button className='mr-2 btn border-2 border-green-600  font-semibold text-lg bg-green-600 text-white p-2 w-full rounded-xl hover:bg-white hover:text-green-600'>Completed</button>
             <button className='btn border-2 border-green-600 font-semibold text-lg bg-green-600 text-white p-2 w-96 rounded-xl hover:bg-white hover:text-green-600'>InComplete</button>
          </div>
        </>
    )
}
