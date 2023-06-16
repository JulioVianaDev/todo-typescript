import React,{useRef,useEffect} from "react";

type newTodoProps ={
  onAddTodo: (todoText: string)=>void;
}

const NewTodo: React.FC<newTodoProps> = (props)=>{
  useEffect(()=>{

  },[])
  const inputRefText = useRef<HTMLInputElement>(null);
 
  
  const todoSubmitHandler=(event: React.FormEvent)=>{
    event.preventDefault();
    const enteredText = inputRefText.current!.value;
    props.onAddTodo(enteredText)
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