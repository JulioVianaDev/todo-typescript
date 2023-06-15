import React from 'react';
import TodoList from './components/TodoList'
import NewTodo from './components/NewTodo';
function App() {
  const todos = [{id:1,text: "testando o react"}]
  return (
    <div className="App">
      <NewTodo/>
      <TodoList items={todos}/> 
    </div>
  );
}

export default App;
