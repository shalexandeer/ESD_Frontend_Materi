import { useSelector } from "react-redux";
import AddTodo from "./AddTodos";
import { Link } from "react-router-dom";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  // todos comes from the reducer attribute name
  // in configureStore

  return (
    <div>
      <Link to={"/profile"}>
        <p>go to profile -</p>
      </Link>
      <h1>Todos List</h1>
      <ol style={{ textAlign: "start" }}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
            </li>
          ))
        ) : (
          <p>No todos</p>
        )}
      </ol>
      <AddTodo />
    </div>
  );
}
