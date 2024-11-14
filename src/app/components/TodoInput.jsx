"use client"

import { useRef } from "react";
import { addTodo } from "../actions/todos";

export default function TodoInput(){
   const formRef = useRef(null)

    return(
        <>
          <form 
            ref={formRef} 
            action={async (formData)=> {
            addTodo(formData)
            formRef.current?.reset();
            }} 
            className="flex justify-center mb-7"
          >
             <input className="todoInput w-[50vw] bg-white font-bold p-3 rounded-xl focus:border-green-600 hover:border-green-600 focus:placeholder:text-green-600" 
               type="text" name="todo" placeholder="Enter Your Todo"/>
             <button type="submit" 
               className="btn border-2 border-green-600 font-semibold text-2xl bg-green-600 text-white p-2 w-28 rounded-xl ml-2 hover:bg-white hover:text-green-600"
               value={'Add Todo'}>Add</button>
           </form>

          {/*Summary: hamny actions ke folder main todos.js main server action banaya hai or function name: addTodos rakha hai or form ke action main wohi function name dia hai or addTodo() wale function main formData dia hai phir form ko reset kia hai. input main jo name ki key hai us se addTodo wale function ke andar data mil raha hai.*/}
        </>
    )
}