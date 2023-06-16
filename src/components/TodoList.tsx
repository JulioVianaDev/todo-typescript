import React from 'react' 

interface TodoListProps{
  items: {id:number,text:string}[],
  deleteTodo: (id:number)=>void;
}

const TodoList: React.FC<TodoListProps> = props=>{
  
  return <ul>
    {props.items.map(t=>
      <li key={t.id}>
        <span>{t.text}</span>
        <button onClick={props.deleteTodo.bind(null,t.id)}>Delete</button>
      </li>
    )}
  </ul>
}

export default TodoList