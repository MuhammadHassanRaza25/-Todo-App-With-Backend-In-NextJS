import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export default function TodoList({todo}){
    return(
        <>
        <div className="listBox mt-5 flex justify-between items-center px-4 py-2 bg-gray-100 rounded-xl">
           <h1 className="todo font-semibold text-xl flex-1 text-start text-black">{todo}</h1>
           
            <span className="flex items-center">
              <button className="btn border-2 border-green-600 text-2xl font-semibold bg-green-600 text-white rounded-lg p-1.5 mr-3 px-3 hover:bg-white hover:text-green-600"><FaEdit /></button>
              <button className="btn border-2 border-green-600 text-2xl bg-green-600 text-white rounded-lg p-1.5 px-3 hover:bg-white hover:text-green-600"><AiFillDelete /></button>
            </span>
        </div>
        </>
    )
}