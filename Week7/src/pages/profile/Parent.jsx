import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../features/cart/cartSlice";
import { removeTodo } from "../../features/todo/todoSlice";

const Profile = () => {
  const todos = useSelector((state) => state.todos);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  return (
    <div>
      <Link to={"/"}>
        <p>- Back to add todos</p>
      </Link>
      <Link to={"/products"}>
        <p>- Back to Products</p>
      </Link>
      <h1>Profile</h1>
      <p>Profile page content</p>
      <p>My Todos</p>
      <ol style={{ textAlign: "start" }}>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id}>
              <span>{todo.title}</span>
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}>
                mark as done
              </button>
            </li>
          ))
        ) : (
          <p>No todos</p>
        )}
      </ol>

      <p>My Cart</p>
      <ol style={{ textAlign: "start" }}>
        {cart.length > 0 ? (
          cart.map((item) => (
            <li key={item.id}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span>{item.title}</span>
                <span>{item.quantity} items</span>
              </div>
              <button
                onClick={() => {
                  dispatch(removeFromCart(item.id));
                }}>
                remove
              </button>
            </li>
          ))
        ) : (
          <p>No Items</p>
        )}
      </ol>
    </div>
  );
};

export default Profile;
