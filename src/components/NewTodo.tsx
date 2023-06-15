import React from "react";

const NewTodo: React.FC = ()=>{
  const todoSubmitHandler=(event: React.FormEvent)=>{
    event.preventDefault();
  }
  return<>
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="text">Texto</label>
      <input type="text" name="text" id="text" />
      <button type="submit">Enviar</button>
    </form>
  </>
}

export default NewTodo