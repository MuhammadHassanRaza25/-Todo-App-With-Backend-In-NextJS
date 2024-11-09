"use client"

import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { updateTodo } from "../actions/todos";

export default function TodoList({todo, isCompleted, id}){
    // const [isEdit, setIsEdit] = useState(false)

    const doneTodo = async ()=>{
       let obj = {todo, id, isCompleted}
       obj.isCompleted = !obj.isCompleted;  //means true hai to false krdo or false hai to true kardo.
       await updateTodo(obj);
    }

    // const editTodo = async ()=>{

    // }

    // const deleteTodo async = ()=>{

    // }

    return(
        <>
        <div 
            key={id} 
            className={`listBox mt-5 flex justify-between items-center px-4 py-2 bg-gray-100 rounded-xl 
            ${isCompleted ? "bg-green-100" : "bg-gray-100"}`}    
        >
           <h1 className="todo font-semibold text-xl flex-1 text-start text-black">{todo}</h1>
           
            <span className="flex items-center">
                {isCompleted
                  ?
                  <button onClick={doneTodo} className="btn border-2 border-green-600 text-2xl font-semibold bg-green-600 text-white rounded-lg p-1.5 mr-3 px-3 hover:bg-white hover:text-green-600"><ImCheckmark /></button>
                  :
                  <button onClick={doneTodo} className="btn border-2 border-green-600 text-md font-semibold bg-green-600 text-white rounded-lg p-1.5 mr-3 px-3 hover:bg-white hover:text-green-600">Mark As Done</button>
                }
              <button className="btn border-2 border-green-600 text-2xl font-semibold bg-green-600 text-white rounded-lg p-1.5 mr-3 px-3 hover:bg-white hover:text-green-600"><FaEdit /></button>
              <button className="btn border-2 border-green-600 text-2xl bg-green-600 text-white rounded-lg p-1.5 px-3 hover:bg-white hover:text-green-600"><AiFillDelete /></button>
            </span>
        </div>
        </>
    )
}