import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default async function Home() {
  let res = await fetch(`${process.env.BASE_URL}api/todos`,{cache: "no-cache"})
  res = await res.json()
  
  // 'http://localhost:3000/api/todos'
  
  return (
  <>
    <Header/>
    
    <div className="box bg-white">  
      <TodoInput/>

      {
        res.data.map((data)=>{ 
            return(
              <TodoList 
               key={data.id}
               id={data.id}
               todo={data.todo}
               isCompleted={data.isCompleted}
             />  
            )     
        })
      }
    </div>
    
  </>
  );
}
