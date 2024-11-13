"use client"

import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { deleteTodo, updateTodo } from "../actions/todos";

export default function TodoList({todo, isCompleted, id}){
    const [isEdit, setIsEdit] = useState(false)
    const [task, setTask] = useState("")

    // done todo function
    const doneTodo = async ()=>{
       let obj = {todo, id, isCompleted}
       obj.isCompleted = !obj.isCompleted;  //means true hai to false krdo or false hai to true kardo.
       await updateTodo(obj);
    }

    // edit todo function
    const editTodo = async ()=>{
      if(isEdit){
        let obj = {todo, id, isCompleted}
        obj.todo = task;   //hamny input ke onChange se task main value li hai. then todo ko task ki value ke barabar kia hai.
        await updateTodo(obj);
        setIsEdit(false);
        setTask("")
      }
      else{
        setIsEdit(true)
        setTask(todo)  //hamny setTask main todo set kai hai or input ki value main ye dia hai. taky todo input main ajaye or phir user changing karle.
      }
    }

    // delete todo function
    const delTodo = async ()=>{
      let obj = {id}
      await deleteTodo(obj)
    }    

    return(
        <>
        <div 
            key={id} 
            className={`listBox mt-5 flex justify-between items-center px-4 py-2 bg-gray-100 rounded-xl 
            ${isCompleted ? "bg-green-100" : "bg-gray-100"}`}    
        >

          {isEdit
            ?(
            <input className="todoInput font-bold p-1.5 rounded-lg border-2 border-gray-500 w-[35vw] focus:border-green-600 hover:border-green-600 focus:placeholder:text-green-600" 
             placeholder="Edit Todo"
             value={task} onChange={(e)=> setTask(e.target.value)}/>
            )
            :(
            <h1 className="todo font-semibold text-xl flex-1 text-start text-black">{todo}</h1>
            )
          }
           
            <span className="flex items-center">
              <button onClick={doneTodo} className="btn border-2 border-green-600 text-md font-semibold bg-green-600 text-white rounded-lg p-1.5 mr-3 px-3 hover:bg-white hover:text-green-600">
                {isCompleted? <ImCheckmark className="text-2xl" /> : "Mark as Done"}
              </button>
              <button onClick={editTodo} className="btn border-2 border-green-600 text-2xl font-semibold bg-green-600 text-white rounded-lg p-1.5 mr-3 px-3 hover:bg-white hover:text-green-600"><FaEdit /></button>
              <button onClick={delTodo} className="btn border-2 border-green-600 text-2xl bg-green-600 text-white rounded-lg p-1.5 px-3 hover:bg-white hover:text-green-600"><AiFillDelete /></button>
            </span>

        </div>
        </>
    )
}