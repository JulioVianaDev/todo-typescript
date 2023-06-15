import React from 'react' 

const TodoList: React.FC = ()=>{
  const todos = [{id:1,text: "testando o react"}]
  
  return <ul>
    {todos.map(t=>
      <li>{t.text}</li>
    )}
  </ul>
}