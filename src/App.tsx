import React,{useState} from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo';
function App() {
  const [todos,setTodos] = useState<{id: number,text:string}[]>([])

  const todoAddHandler = (text: string)=>{
    let newObject={
      id: Math.random(),
      text: text
    }
    setTodos([...todos,newObject]) 
  }
  return (
    <div className="App">
      <NewTodo onAddTodo ={todoAddHandler}/>
      <TodoList items={todos}/> 
    </div>
  );
}

export default App;
