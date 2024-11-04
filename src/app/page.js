import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default function Home() {
  return (
  <>
    <Header/>
    
    <div className="box bg-slate-700">
      <TodoInput/>
      <TodoList/>
    </div>
    
  </>
  );
}
