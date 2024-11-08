"use server"

import { revalidatePath } from "next/cache";

export async function addTodo(formData){
  try{
    const todo = formData.get("todo")    //data from input's key: todo.
    console.log("todo==>", todo);

    await fetch('http://localhost:3000/api/todos', {
      method: "POST",
      body: JSON.stringify({todo})    
    })
    
    revalidatePath('/todos');
  }
  catch(err){
    console.log("error==>", err);
  }
}
