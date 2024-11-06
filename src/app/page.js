import FilterButtons from "./components/FilterButtons";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default async function Home() {
  let res = await fetch('http://localhost:3000/api/todos')
  res = await res.json()

  return (
  <>
    <Header/>
    
    <div className="box bg-white">  
      <TodoInput/>

      <FilterButtons/>

      {
        res.data.map((data)=>{
            return(
              <TodoList 
               id={data.id}
               todo={data.todo}
               isComplete={data.isComplete}
             />  
            )     
        })
      }
    </div>
    
  </>
  );
}
