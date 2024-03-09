import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

export default function AddTodo() {
  const [text, setText] = useState("");
  // initial the dispatch here
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // update the state here using addTodo action
    // action only receive one parameter, which is payload
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button disabled={text === "" || text.length === 0}>Add todo</button>
    </form>
  );
}
