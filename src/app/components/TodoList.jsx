import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

export default function TodoList(){
    return(
        <>
        <div className="listBox mt-5 flex justify-between items-center px-4 py-2 bg-slate-700 border-2 border-gray-200 rounded-xl">
           <h1 className="todo font-semibold text-xl flex-1 text-start text-white">tyhtytrytry</h1>
           
            <span>
              <button className="btn text-2xl font-semibold bg-green-400 text-white rounded-lg p-1.5 mr-2 px-3 hover:bg-white hover:text-green-400"><GiCheckMark /></button>
              <button className="btn text-2xl font-semibold bg-cyan-400 text-white rounded-lg p-1.5 mr-2 px-3 hover:bg-white hover:text-cyan-400"><FaEdit /></button>
              <button className="btn text-2xl bg-red-500 text-white rounded-lg p-1.5 px-3 hover:bg-white hover:text-red-400"><AiFillDelete /></button>
            </span>
        </div>
        </>
    )
}