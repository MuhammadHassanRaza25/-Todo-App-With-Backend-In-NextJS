
export default function TodoInput(){
    return(
        <>
          <div className="flex justify-center mb-7">
             <input className="todoInput bg-slate-700 font-bold p-3 rounded-xl focus:border-cyan-400 hover:border-cyan-400 placeholder:text-gray-300 focus:placeholder:text-cyan-400" 
              type="text" placeholder="Enter Your Todo"/>
             <button className="btn font-semibold text-xl bg-cyan-400 text-white p-2 w-28 rounded-xl ml-2 hover:bg-white hover:text-cyan-400"> Add</button>
          </div>
        </>
    )
}