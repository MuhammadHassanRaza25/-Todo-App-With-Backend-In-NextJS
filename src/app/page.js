import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

// export default async function Home() {
//   let res = await fetch(`${process.env.BASE_URL}api/todos`,{cache: "no-cache"})
//   res = await res.json()
  
//   // 'http://localhost:3000/api/todos'
  
  
//   return (
//   <>
//     <Header/>
    
//     <div className="box bg-white">  
//       <TodoInput/>

//       {
//         res.data.map((data)=>{ 
//             return(
//               <TodoList 
//                key={data.id}
//                id={data.id}
//                todo={data.todo}
//                isCompleted={data.isCompleted}
//              />  
//             )     
//         })
//       }
//     </div>
    
//   </>
//   );
// }

export default async function Home() {
  let res = await fetch(`${process.env.BASE_URL}api/todos`, { cache: "no-cache" });
  const text = await res.text();  // Use text() to see the raw response
  console.log(text);  // Log the raw response to check its contents
  
  try {
    res = JSON.parse(text);  // Try parsing manually if the response seems like JSON
  } catch (error) {
    console.error("Error parsing response:", error);
  }

  return (
    <>
      <Header />
      <div className="box bg-white">
        <TodoInput />
        {res.data?.map((data) => (
          <TodoList
            key={data.id}
            id={data.id}
            todo={data.todo}
            isCompleted={data.isCompleted}
          />
        ))}
      </div>
    </>
  );
}

