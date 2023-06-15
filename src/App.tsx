import React from 'react';
import TodoList from './components/TodoList'
function App() {
  const todos = [{id:1,text: "testando o react"}]
  return (
    <div className="App">
      <TodoList items={todos}/> 
    </div>
  );
}

export default App;
