"use server"

import { revalidatePath } from "next/cache";

export async function addTodo(formData){
  try{
    const todo = formData.get("todo")    //data from input's key: todo.
    console.log("todo==>", todo);

    await fetch(`${process.env.BASE_URL}api/todos`, {
      method: "POST",
      body: JSON.stringify({todo})    
    })
    
    revalidatePath('/todos');
  }
  catch(err){
    console.log("error==>", err);
  }
}

export async function updateTodo(obj){
  try{
    await fetch(`${process.env.BASE_URL}api/todos`, {
      method: "PUT",
      body: JSON.stringify(obj)    
    });
    
    revalidatePath('/todos');
  }
  catch(err){
    console.log("error==>", err);
  }
}

export async function deleteTodo(obj){
  try{
    await fetch(`${process.env.BASE_URL}api/todos`, {
      method: "DELETE",
      body: JSON.stringify(obj)    
    });
    
    revalidatePath('/todos');
  }
  catch(err){
    console.log("error==>", err);
  }
}