import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export default function TodoList(){
    return(
        <>
        <div className="listBox mt-5 flex justify-between items-center px-4 py-2 bg-slate-800 border-2 border-gray-300 rounded-xl">
           <h1 className="todo font-semibold text-xl flex-1 text-start text-white">tyhtytrytry</h1>
           
            <span className="flex items-center">
              <button className="btn text-2xl font-semibold bg-cyan-400 text-white rounded-lg p-1.5 mr-3 px-3 hover:bg-white hover:text-cyan-400"><FaEdit /></button>
              <button className="btn text-2xl bg-cyan-400 text-white rounded-lg p-1.5 px-3 hover:bg-white hover:text-cyan-400"><AiFillDelete /></button>
            </span>
        </div>
        </>
    )
}