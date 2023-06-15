import React,{useRef} from "react";

const NewTodo: React.FC = ()=>{
  const inputRefText = useRef<HTMLInputElement>(null);
 
  
  const todoSubmitHandler=(event: React.FormEvent)=>{
    event.preventDefault();
    const enteredText = inputRefText.current!.value;
    console.log(enteredText)
  }
  return<>
    <form onSubmit={todoSubmitHandler}>
      <label htmlFor="text">Texto</label>
      <input type="text" name="text" id="text" ref={inputRefText} />
      <button type="submit">Enviar</button>
    </form>
  </>
}

export default NewTodo