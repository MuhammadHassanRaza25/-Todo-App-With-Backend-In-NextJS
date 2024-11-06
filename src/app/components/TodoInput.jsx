
export default function TodoInput(){
    return(
        <>
          <div className="flex justify-center mb-7">
             <input className="todoInput bg-white font-bold p-3 rounded-xl focus:border-green-600 hover:border-green-600 focus:placeholder:text-green-600" 
              type="text" placeholder="Enter Your Todo"/>
             <button className="btn border-2 border-green-600 font-semibold text-2xl bg-green-600 text-white p-2 w-28 rounded-xl ml-2 hover:bg-white hover:text-green-600"> Add</button>
          </div>
        </>
    )
}